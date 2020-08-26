import React from 'react';
import { Grid } from './components/Grid';
import { ReducerExample } from './ReducerExample';
import { Counter } from './components/Counter';

const App: React.FC = () => {
  return <div>
    <Grid text="hello" person={ {firstName: 'bob', lastName: 'deen' }} />

    <br/>
    <br/>
    <br/>

    <ReducerExample />

    <Counter>
      {({ count, setCount }) => (
        <div>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
    </Counter>
  </div>;
};

export default App;
 