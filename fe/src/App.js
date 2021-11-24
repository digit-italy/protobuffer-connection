import React, { useEffect, useState } from 'react';
import * as Schema from './humans_pb'

function App() {
  const [data, setData] = useState([])

  const getData = () => {
    fetch("http://localhost:3002").then(value => value.arrayBuffer()).then(
      (buffer) => {
        const Humans = Schema.Humans
        const data = Humans.toObject(false, Humans.deserializeBinary(buffer))
        console.log('deserialized Object', data)
        setData(data.humansList)
      }
    ).catch((e) => console.log(e))
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <h2>Human List</h2>
      <button onClick={() => { getData() }}> Refresh</button>
      {
        data.map((human) => (
          <p>
            <div>Name: {human.name}</div>
            <div>Age: {human.age}</div>
          </p>
        ))
      }
    </div>
  );
}

export default App;
