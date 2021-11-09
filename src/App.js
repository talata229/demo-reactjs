import './App.css';
import faker from 'faker';
import { useEffect, useState } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import { height } from 'dom-helpers';
function App() {
  const [people, setPeople] = useState([]);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setPeople(
      [...Array(10000).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          bio: faker.lorem.lines(Math.random() * 100),
        };
      })
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{time.toISOString()}</h1>
      <div>
        <AutoSizer style={{ width: '100%', height: '100vh' }}>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={50}
              rowCount={people.length}
              rowRenderer={({ key, index, style, parent }) => {
                const person = people[index];
                return (
                  <div key={key} style={style}>
                    <h2>{person.name}</h2>
                  </div>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>

      {/* <ul>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
