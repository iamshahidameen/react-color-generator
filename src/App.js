import React, { useEffect, useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('#000');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setIsError(true);
      console.log(error, 'unable');
    }
  }

  useEffect(() => {
    let colors = new Values(color).all(10);
    setList(colors);
  }, []);
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={color}
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
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
