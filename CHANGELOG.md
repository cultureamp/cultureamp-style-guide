# Release History: cultureamp-style-guide

## 9.0.2

* 👍 Add notification icon.

## 9.0.1

* 👍 Use relative styles imports in Layout component.

## 9.0.0

* 💔 Further refine page layout styles.

## 8.0.0

* 💔 Refine page layout styles to support legacy sticky footers and independent sidebar scrolling.

## 7.1.0

* ✨ Introduce Layout page layout styles module.

## 7.0.0

* 💔 Renamed type style mixins to make them more autocomplete-friendly:

  * `@include ca-type-title;`
  * `@include ca-type-display;`
  * `@include ca-type-heading;`
  * `@include ca-type-lede;`
  * `@include ca-type-body;`
  * `@include ca-type-control-action;`
  * `@include ca-type-small;`
  * `@include ca-type-labels-and-legends;`

## 6.0.0

* ✨ New type style mixins. These set font-sizes, line-heights and transforms
  required for text to correctly sit on a baseline grid. Usage:

  * `@include ca-title-type;`
  * `@include ca-display-type;`
  * `@include ca-heading-type;`
  * `@include ca-lede-type;`
  * `@include ca-body-type;`
  * `@include ca-control-action-type;`
  * `@include ca-small-type;`
  * `@include ca-labels-and-legends-type;`

  There are also variations for Ideal Sans.

* 💔 Previous sass variables for type styles have been removed. Please use the
  new mixins instead.

## 5.1.7

* 👍 Add `colorScheme` prop to NavigationBar, allowing you to choose
  'cultureamp' (default) or 'kaizen'.
* 👍 Add new SASS variables specific to Ideal Sans.

## 5.1.6

* 👍 Add process manager icon.

## 5.1.5

* 🐛 Fix flaky positioning of tooltip arrows in Firefox.

## 5.1.4

* 👍 Add `automationId` prop to `NavigationBar.Menu`.
* 🐛 Fix clicks being ignored while a `NavigationBar.Menu` is open.

## 5.1.3

* ✨ Add `interactiveIconWrapper` that will apply icon opacities to icons that
  sit inside buttons and other interactive elements. Usage:

      .myButton {
        composes: interactiveIconWrapper from 'cultureamp-style-guide/components/Icon/Icon.module.scss';
      }

## 5.1.2

* 👍 Add tasks icon.

## 5.1.1

* 🐛 Fix compilation issue when multiple postcss-loaders exist.

## 5.1.0

* ✨ Add NavigationBar component.

## 5.0.2

* 👍 Add text analytics icon.

## 5.0.1

* 👍 Add lock icon, re-export exclamation-white icon.

## 5.0.0

* 💔 Renamed CSS modules to use `*.module.scss` naming convention for
  compatibility with Gatsby.
* ✨ Add `styles/layers.scss` with some z-index definitions.
* ✨ Add `styles/border.scss` with variables for border-color, border-radius,
  box-shadow.
* Improvements and changes to `styles/type.scss`
  * ✨ Add `$ca-grid` variable and derive some values from it.
  * ✨ Added `$ca-weight-*` variables (extra-light, light, book, medium,
    semibold) to match Sketch styles.
  * 👍 Change font variables to use Ideal Sans by default, if available.
  * 🐛 Add fallback fonts for when webfonts fail to display.
* Improvements and changes to `styles/color.scss`
  * ✨ Add color variables for `$ca-palette-stone`, `$ca-palette-positive-delta`
    and `$ca-palette-negative-delta`.
* ✨ Began work on styleguide website using Gatsby rather than Jekyll.

### 4.2.0

* ✨ Add animated loading spinner icon.

### 4.1.5

* 🐛 Fix issue where white-filled icon variants weren't showing correctly in IE.

### 4.1.4

* 👍 Rename user icons so that they're more consistent with other icons.

### 4.1.3

* 👍 Change `elmSvgAssetLoader` to use a regular expression rather than Babel,
  as the transformation is quite simple and a regular expression is
  significantly more performant on large Elm code bases.

### 4.1.2

* 🐛 Import dist version of svg-baker-runtime/browser-sprite to fix runtime
  errors.

### 4.1.1

* 👍 Hide SVG spritesheet from accessibility tools.

### 4.1.0

* ✨ Create block_layout modifier for icon styles.

### 4.0.2

* 👍 Add more icons.

### 4.0.1

* 👍 Add more icons.

### 4.0.0

* 💔 Move all icons into a single directory.
* 👍 Introdce both hollowed and filled version of icons.

### 3.2.1 and earlier

* ✨ Ancient history.
