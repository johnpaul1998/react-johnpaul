import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { Counter } from './components/Counter';
// import CounterFour from './components/CounterFour';
// import CounterThree from './components/CounterThree';
// import CounterTwo from './components/CounterTwo';
// import DataFetching from './components/DataFetching';
// import UseEffectMouse from './components/UseEffectMouse';
// import UseEffectMouseContainer from './components/UseEffectMouseContainer';
// import UseEffectOne from './components/UseEffectOne';

export const FirstNameContext = React.createContext();
export const LastNameContext = React.createContext();
function App() {
 

  return (
    <div className="App">
      {/* useState hook */}
      <h1>useState Hook</h1>
      <FirstNameContext.Provider value='john paul'>
        <LastNameContext.Provider value="araquel">
          <Counter/>
          {/* <CounterTwo/>
          <CounterThree/>
          <CounterFour/> */}
          <br/>
          <hr/>
          {/* useEffect Hook */}
          <h1>useEffect Hook</h1>
          {/* <UseEffectOne/>
          <UseEffectMouse/>
          <UseEffectMouseContainer/> */}
          {/* <UseEffectInterval/>  */}
          {/* Data fetching */}
          {/* <DataFetching/> */}
          <br/>
          <hr/>
          {/* Context */}
          <h1>Context</h1>
          <ComponentC />
        </LastNameContext.Provider>
      </FirstNameContext.Provider>
    </div>
  );
}

export default App;
