import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);

      console.log(colors);
    } catch (error) {
      setIsError(true);
      console.log(error, 'unable');
    }
  }
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            className={`${isError ? 'error' : null}`}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(255, 255, 255)' }}
        >
          <p className="percent-value">100%</p>
          <p className="color-value">#ffffff</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(254, 238, 233)' }}
        >
          <p className="percent-value">90%</p>
          <p className="color-value">#feeee9</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(252, 220, 211)' }}
        >
          <p className="percent-value">80%</p>
          <p className="color-value">#fcdcd3</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(251, 203, 190)' }}
        >
          <p className="percent-value">70%</p>
          <p className="color-value">#fbcbbe</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(249, 185, 168)' }}
        >
          <p className="percent-value">60%</p>
          <p className="color-value">#f9b9a8</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(248, 168, 146)' }}
        >
          <p className="percent-value">50%</p>
          <p className="color-value">#f8a892</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(247, 150, 124)' }}
        >
          <p className="percent-value">40%</p>
          <p className="color-value">#f7967c</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(245, 133, 102)' }}
        >
          <p className="percent-value">30%</p>
          <p className="color-value">#f58566</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(244, 115, 81)' }}
        >
          <p className="percent-value">20%</p>
          <p className="color-value">#f47351</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(242, 98, 59)' }}
        >
          <p className="percent-value">10%</p>
          <p className="color-value">#f2623b</p>
        </article>
        <article
          className="color false"
          style={{ backgroundColor: 'rgb(241, 80, 37)' }}
        >
          <p className="percent-value">0%</p>
          <p className="color-value">#f15025</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(217, 72, 33)' }}
        >
          <p className="percent-value">10%</p>
          <p className="color-value">#d94821</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(193, 64, 30)' }}
        >
          <p className="percent-value">20%</p>
          <p className="color-value">#c1401e</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(169, 56, 26)' }}
        >
          <p className="percent-value">30%</p>
          <p className="color-value">#a9381a</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(145, 48, 22)' }}
        >
          <p className="percent-value">40%</p>
          <p className="color-value">#913016</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(121, 40, 19)' }}
        >
          <p className="percent-value">50%</p>
          <p className="color-value">#792813</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(96, 32, 15)' }}
        >
          <p className="percent-value">60%</p>
          <p className="color-value">#60200f</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(72, 24, 11)' }}
        >
          <p className="percent-value">70%</p>
          <p className="color-value">#48180b</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(48, 16, 7)' }}
        >
          <p className="percent-value">80%</p>
          <p className="color-value">#301007</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(24, 8, 4)' }}
        >
          <p className="percent-value">90%</p>
          <p className="color-value">#180804</p>
        </article>
        <article
          className="color color-light"
          style={{ backgroundColor: 'rgb(0, 0, 0)' }}
        >
          <p className="percent-value">100%</p>
          <p className="color-value">#000000</p>
        </article>
      </section>
    </>
  );
}

export default App;
