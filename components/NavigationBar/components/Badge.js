// @flow
import React from 'react';
import classNames from 'classnames';

import styles from './Badge.module.scss';
import Icon from '../../Icon';
import monogram from 'cultureamp-style-guide/icons/ca-monogram.svg';
import spinner from 'cultureamp-style-guide/icons/spinner.svg';

type BadgeProps = {|
  loading: boolean,
|};

export function ProductionBadge(props: BadgeProps) {
  return (
    <div className={styles.badge}>
      <span>
        {props.loading ? (
          <Icon icon={spinner} title="loading…" />
        ) : (
          <Icon icon={monogram} title="Culture Amp" />
        )}
      </span>
    </div>
  );
}

export function StagingBadge(props: BadgeProps) {
  return (
    <MonogramBadge
      envClass={styles.staging}
      monogram="staging"
      loading={props.loading}
    />
  );
}

export function TestBadge(props: BadgeProps) {
  return (
    <MonogramBadge
      envClass={styles.test}
      monogram="test"
      loading={props.loading}
    />
  );
}

export function LocalBadge(props: BadgeProps) {
  return (
    <MonogramBadge
      envClass={styles.local}
      monogram="local"
      loading={props.loading}
    />
  );
}

export function namedBadge(environment: string) {
  return (props: BadgeProps) => (
    <MonogramBadge
      envClass={styles.named}
      monogram={environment}
      loading={props.loading}
    />
  );
}

type MonogramBadgeProps = {|
  ...BadgeProps,
  envClass: string,
  monogram: string,
|};

function MonogramBadge(props: MonogramBadgeProps) {
  return (
    <div
      className={classNames(styles.badge, props.envClass)}
      title={props.monogram}
    >
      <span aria-live="polite">
        {props.loading ? (
          <Icon icon={spinner} title="loading…" />
        ) : (
          <span aria-hidden>{props.monogram.substr(0, 2)}</span>
        )}
      </span>
    </div>
  );
}
