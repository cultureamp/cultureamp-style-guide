import React from 'react';
import wcag from 'wcag-contrast-verifier/lib/wcag';
import classNames from 'classnames';
import Icon from 'cultureamp-style-guide/components/Icon/Icon.js';
import successWhite from 'cultureamp-style-guide/icons/success.svg';
import Palette from './_Palette.js';
import styles from './ColorCard.module.scss';

function contrastIsLevelAA(background, foreground, fontSize) {
  return wcag.verifyContrastRatio(background.hex(), foreground.hex(), fontSize)
    .WCAG_AA;
}

function prepareAccessibilityHeaderIcon(style, size, colorHex) {
  return {
    bgColor: style == 'light' && colorHex,
    className: classNames({
      [styles.tile]: true,
      [styles.small]: size === 'small',
      [styles.large]: size === 'large',
      [styles.whiteText]: style === 'light',
    }),
    title:
      (style == 'light' ? 'White text ' : 'Ink text ') +
      (size == 'large' ? '18pt (24px) or larger' : 'smaller than 18pt (24px)'),
  };
}

export function renderContrastHeaderIcons(colorHex) {
  const iconCombinations = [
    prepareAccessibilityHeaderIcon('light', 'small', colorHex),
    prepareAccessibilityHeaderIcon('light', 'large', colorHex),
    prepareAccessibilityHeaderIcon('dark', 'small', colorHex),
    prepareAccessibilityHeaderIcon('dark', 'large', colorHex),
  ];
  return iconCombinations.map((icon, i) => (
    <div key={i}>
      <span
        className={icon.className}
        style={{ background: icon.bgColor }}
        title={icon.title}
      >
        A
      </span>
    </div>
  ));
}

const ContrastIcon = ({ color, colorName, text, size }) => {
  const textColor = Palette[text.toLowerCase()],
    isValid = contrastIsLevelAA(color, textColor, size),
    title = `${text} text on '${name}' with a font size of at least ${
      size
    }pt is level AA contrast.`;
  return (
    <div
      className={styles.accessibilityIcon}
      style={{ color: textColor.rgb() }}
    >
      {isValid && <Icon icon={successWhite} role="img" title={title} />}
    </div>
  );
};

export default ContrastIcon;
