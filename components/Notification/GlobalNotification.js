// @flow
import * as React from 'react';
import GenericNotification from './GenericNotification';

type Props = {|
  type: 'affirmative' | 'informative' | 'warning' | 'negative',
  children: React.Node,
  onHide?: () => void,
|};

const GlobalNotification = (props: Props) => (
  <GenericNotification style="global" persistent={false} {...props} />
);

export default GlobalNotification;
