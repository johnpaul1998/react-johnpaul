import './App.css';
import { Counter } from './components/Counter';
import CounterFour from './components/CounterFour';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import DataFetching from './components/DataFetching';
import UseEffectMouse from './components/UseEffectMouse';
import UseEffectMouseContainer from './components/UseEffectMouseContainer';
import UseEffectOne from './components/UseEffectOne';

function App() {
  return (
    <div className="App">
      {/* useState hook */}
      <h1>useState Hook</h1>
      <Counter/>
      <CounterTwo/>
      <CounterThree/>
      <CounterFour/>
      <br/>
      <hr/>
      {/* useEffect Hook */}
      <h1>useEffect Hook</h1>
      <UseEffectOne/>
      <UseEffectMouse/>
      <UseEffectMouseContainer/>
      {/* <UseEffectInterval/>  */}
      {/* Data fetching */}
      <DataFetching/>
    </div>
  );
}

export default App;
