port module Notification.Demo exposing (Model, Msg(..), NotificationStates, decodeGlobalNotification, decodeInlineNotification, decodeToastNotification, init, main, notificationDecoders, onHide, renderView, subscriptions, typeDecoder, update, view)

import Browser
import Demo exposing (..)
import Dict exposing (Dict)
import Html exposing (Html)
import Json.Decode as Json
import Json.Encode
import Notification.Notification as Notification exposing (..)



-- DEMO APP


port onHide : () -> Cmd msg


type alias Model =
    { node : Json.Value
    , notificationStates : NotificationStates
    }


type Msg
    = SetNotificationState String NotificationState


type alias NotificationStates =
    Dict String NotificationState


main : Program Json.Encode.Value Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : Json.Encode.Value -> ( Model, Cmd Msg )
init flags =
    let
        -- Because our notifications are read through flags, we don't know which notifications will exist at compile time.
        -- In order to correctly initialise our state management for all notifications, we do an initial pass of the JSX tree.
        -- The second value in the resulting Tuple is a List of messages we can use to initialise our state for each notification.
        initialModel : Model
        initialModel =
            { node = flags
            , notificationStates = Dict.empty
            }

        decoders =
            notificationDecoders initialModel.notificationStates

        updateFn =
            \msg model -> update msg model |> Tuple.first
    in
    ( initModelFromJsx flags decoders initialModel updateFn
    , Cmd.none
    )


view : Model -> Html Msg
view model =
    let
        decoders =
            notificationDecoders model.notificationStates
    in
    viewJsxNodes model.node decoders


update : Msg -> Model -> ( Model, Cmd Msg )
update (SetNotificationState automationId state) model =
    ( { model | notificationStates = Dict.insert automationId state model.notificationStates }
    , case notificationStage state of
        Hidden ->
            onHide ()

        _ ->
            Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions model =
    let
        allNotifications : List ( NotificationState, NotificationState -> Msg )
        allNotifications =
            Dict.toList model.notificationStates
                |> List.map (\( automationId, state ) -> ( state, SetNotificationState automationId ))
    in
    Notification.subscriptions allNotifications



-- DECODERS


notificationDecoders : NotificationStates -> ComponentDecoders Msg
notificationDecoders notificationStates =
    [ ( "InlineNotification", decodeInlineNotification notificationStates )
    , ( "ToastNotification", decodeToastNotification notificationStates )
    , ( "GlobalNotification", decodeGlobalNotification notificationStates )
    ]


decodeInlineNotification : NotificationStates -> JsxDecoderWithInitMessages Msg
decodeInlineNotification notificationStates =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok inline
                    -- variant arguments
                    |> decodeField "title" Json.string (|>) props
                    |> decodeField "children" htmlJsxChildren (|>) props
                    |> decodeField "persistent" Json.bool (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    -- view
                    |> renderView props notificationStates
            )


decodeToastNotification : NotificationStates -> JsxDecoderWithInitMessages Msg
decodeToastNotification notificationStates =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok toast
                    -- variant arguments
                    |> decodeField "title" Json.string (|>) props
                    |> decodeField "children" htmlJsxChildren (|>) props
                    -- Note: changing the next line to "decodeOptionalField" crashes elm-make. TODO: submit a bug report.
                    |> decodeField "hideCloseIcon" Json.bool (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    -- view
                    |> renderView props notificationStates
            )


decodeGlobalNotification : NotificationStates -> JsxDecoderWithInitMessages Msg
decodeGlobalNotification notificationStates =
    Json.field "props" Json.value
        |> Json.andThen
            (\props ->
                Ok global
                    -- variant arguments
                    |> decodeField "children" htmlJsxChildren (|>) props
                    -- modifiers
                    |> decodeField "type" typeDecoder notificationType props
                    |> decodeOptionalField "automationId" Json.string automationId props
                    -- view
                    |> renderView props notificationStates
            )


typeDecoder : Json.Decoder NotificationType
typeDecoder =
    stringEnum
        "not a valid notification type"
        [ ( "affirmative", Affirmative )
        , ( "informative", Informative )
        , ( "cautionary", Cautionary )
        , ( "negative", Negative )
        ]


renderView : Json.Value -> NotificationStates -> Result String (Config Msg) -> JsxDecoderWithInitMessages Msg
renderView props notificationStates configResult =
    let
        initialState : NotificationState
        initialState =
            case Json.decodeValue (Json.field "autohide" Json.bool) props of
                Ok True ->
                    Autohide Appearing

                _ ->
                    Manual Appearing

        stateAndConfig : Result String ( Config Msg, NotificationState, NotificationStateSetter Msg )
        stateAndConfig =
            Result.map
                (\config ->
                    let
                        automationId =
                            Maybe.withDefault "unknown-notification-id" (Notification.getAutomationId config)
                    in
                    ( config
                    , Maybe.withDefault initialState <| Dict.get automationId notificationStates
                    , SetNotificationState automationId
                    )
                )
                configResult

        jsxDecoder : Result String ( Config Msg, NotificationState, NotificationStateSetter Msg ) -> JsxDecoderWithInitMessages Msg
        jsxDecoder result =
            case result of
                Ok ( config, currentState, notificationStateSetter ) ->
                    let
                        renderedView =
                            Notification.view config currentState notificationStateSetter

                        initialMessages =
                            -- On the first pass of our JSX we trigger a message so that the notification state is set to Appearing in our model.
                            case Notification.getAutomationId config of
                                Just automationId ->
                                    [ SetNotificationState automationId initialState ]

                                Nothing ->
                                    []
                    in
                    Json.succeed
                        ( [ renderedView ], initialMessages )

                Err msg ->
                    Json.fail msg
    in
    stateAndConfig
        |> jsxDecoder
