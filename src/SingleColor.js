import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
  let colorValue = [];

  colorValue = [...rgb];
  console.log(colorValue);

  return (
    <>
      <article
        className="color false"
        style={{ backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` }}
      >
        <p className="percent-value">100%</p>
        <p className="color-value">#ffffff</p>
      </article>
    </>
  );
};

export default SingleColor;
