import React from 'react';
import { css } from '@emotion/css';

const useCustomStyles = (styles, theme) => {
  const evaluatedStyles = typeof styles === 'function' ? styles(theme) : styles;

  const generated = {};
  for (const key in evaluatedStyles) {
    generated[key] = css(evaluatedStyles[key]);
  }

  return generated;
};

export default useCustomStyles;
