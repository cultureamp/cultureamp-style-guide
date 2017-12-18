import React from 'react';
import Color from 'color';
import classNames from 'classnames';
import wcag from 'wcag-contrast-verifier/lib/wcag';
import ColorBlockKebab from './_ColorBlockKebab.js';
import ContrastIcon from './_ContrastIcon.js';
import styles from './ColorCard.module.scss';
import Palette from './_Palette.js';

function addTint(color, percentage) {
  return color.mix(Color('#ffffff'), percentage / 100);
}

function addShade(color, percentage) {
  return color.mix(Color('#000000'), percentage / 100);
}

function shouldUseWhiteText(color) {
  const whiteContrast = wcag.getContrastRatio(color.hex(), '#ffffff'),
    blackContrast = wcag.getContrastRatio(color.hex(), Palette.ink.hex());
  return whiteContrast > blackContrast;
}

const ColorBlock = ({ colorName, amount, showContrast }) => {
  let isHalfBlock = false,
    label = '100%',
    sassVar = `$ca-palette-${colorName.toLowerCase()}`,
    bgColor = Palette[colorName.toLowerCase()];

  if (amount != 0) {
    const absAmount = Math.abs(amount);
    if (amount > 0) {
      bgColor = addTint(bgColor, absAmount);
      sassVar = `add-tint(${sassVar}, ${absAmount}%)`;
      label = `+${absAmount}% White`;
    } else {
      bgColor = addShade(bgColor, absAmount);
      sassVar = `add-shade(${sassVar}, ${absAmount}%)`;
      label = `+${absAmount}% Black`;
    }
    isHalfBlock = true;
  }

  let shouldUseWhite = shouldUseWhiteText(bgColor);

  const classes = classNames(
      styles['colorBlock'],
      isHalfBlock && styles['colorBlockHalf'],
      shouldUseWhite && styles['whiteText']
    ),
    name = `${colorName} ${label}`;
  const icons = showContrast ? (
    [
      <ContrastIcon color={bgColor} name={name} text="White" size={12} />,
      <ContrastIcon color={bgColor} name={name} text="White" size={18} />,
      <ContrastIcon color={bgColor} name={name} text="Ink" size={12} />,
      <ContrastIcon color={bgColor} name={name} text="Ink" size={18} />,
    ]
  ) : (
    <ColorBlockKebab bgColor={bgColor} sassVar={sassVar} />
  );

  return (
    <div
      key={bgColor.rgb().string()}
      className={classes}
      style={{ background: bgColor.rgb().string() }}
    >
      <span className={styles.colorBlockLabel}>{label}</span>
      {icons}
    </div>
  );
};

export default ColorBlock;
