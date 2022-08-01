import React, { useState, useEffect } from 'react';
//import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  //  by joining array into string for rgb color
  const bgColor = rgb.join(',');

  // RGB to Hex Color conversion through StackOverflow function method
  // const hex = rgbToHex(...rgb);

  function colorCopy() {
    setAlert(true);
    navigator.clipboard.writeText(hexColor);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearImmediate(timeOut);
  }, [alert]);
  return (
    <>
      <article
        className={`color ${index > 10 ? 'color-light' : 'color-value'}`}
        //  My method for inline color
        // style={{ backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` }}

        //  Alternate Method for inline-color
        style={{ backgroundColor: `rgb(${bgColor})` }}
      >
        <p className="percent-value">{weight}%</p>

        <p className="color-value">{hexColor}</p>
        <p> {alert ? `Copied to clipboard` : ''}</p>
        <button className="btn" onClick={colorCopy}>
          Copy
        </button>
      </article>
    </>
  );
};

export default SingleColor;
