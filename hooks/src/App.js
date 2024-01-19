
import { createContext } from 'react';
import './App.css';
import CounterCallback from './components/useCallback/Counter';
import Document from './components/useCallback/Document';
import ParentComponent from './components/useCallback/ParentComponent';
import String from './components/useCallback/String';
import ChildC from './components/useContext/ChildC';
import DarkMode from './components/useCustom/DarkMode';
// import ArrayWithInput from './components/arrays/ArrayWithInput';
// import ArraysWithnumber from './components/arrays/ArraysWithnumber';
// import FilterNumbers from './components/arrays/FilterNumbers';
// import RemoveItem from './components/arrays/RemoveItem';
// import Authentication from './components/boolean/Authentication';
// import Toggle from './components/boolean/Toggle';
// import Counter from './components/number/Counter';
// import RandomNumber from './components/number/RandomNumber';
// import Undefined from './components/number/Undefined';
// import ObjectUpdate from './components/objects/ObjectUpdate';
// import ObjectwithBoolean from './components/objects/ObjectwithBoolean';
// import CharacterCount from './components/strings/CharacterCount';
// import String from './components/strings/String';
// import StringInput from './components/strings/StringInput';
import WithoutDependency from './components/useEffect/WithoutDependency';
import FetchUpdateData from './components/useEffect/componentdidUpdate/FetchUpdateData';
import NumberBoolean from './components/useEffect/componentdidUpdate/NumberBoolean';
import UpdatePage from './components/useEffect/componentdidUpdate/UpdatePage';
import FetchData from './components/useEffect/componentdidmount/FetchData';
import Numbers from './components/useEffect/componentdidmount/Numbers';
import ObjectBoolean from './components/useEffect/componentdidmount/ObjectBoolean';
import ComponontMount from './components/useEffect/componnetwillmount/ComponontMount';
import FactorialCalculator from './components/useMemo/Factorial';
import SquareNumber from './components/useMemo/SquareNumber';
import WithMemo from './components/useMemo/WithMemo';
import WithoutuseMemo from './components/useMemo/WithoutuseMemo';
import AddRemoveItems from './components/useReducer/AddRemoveItems';
import CounterApp from './components/useReducer/Counter';
import TodoList from './components/useReducer/TodoList';
import ComplexReducer from './components/useReducer/complexReducer';
import Counter from './components/useRef/Counter';
import Form from './components/useRef/Form';
import StoringValues from './components/useRef/StoringValues';
import UseRefBasics from './components/useRef/UseRef';

const data=createContext();
const data1=createContext();
function App() {
  const name='John'
  const age=23
  return (
    <div className="App">
     {/* <Counter />
     <RandomNumber />
     <Undefined /> */}
    {/* <String />
    <StringInput />
    <CharacterCount /> */}
    {/* <Authentication />
    <Toggle /> */}
{/* <ArraysWithnumber />
    <ArrayWithInput />
    <FilterNumbers />
    <RemoveItem /> */}
    {/* <ObjectUpdate />
    <ObjectwithBoolean /> */}
{/* 
    <WithoutDependency /> */}
    {/* <Numbers />
    <ObjectBoolean />
    <FetchData />
    <NumberBoolean />
    <UpdatePage /> */}
    {/* <FetchUpdateData /> */}
    {/* <ComponontMount /> */}

    {/* <Counter />
    <Form />
    <StoringValues />
    <UseRefBasics />
    <ParentComponent /> */}

  {/* <CounterCallback />
  <String /> */}

  {/* <WithoutuseMemo /> 
  <WithMemo />
 <SquareNumber />
 <FactorialCalculator /> */}

 {/* <CounterApp />
 <ComplexReducer />
 <AddRemoveItems />
 <TodoList /> */}

 {/* <Document /> */}
 {/* <DarkMode /> */}

<data.Provider value={name}>
  <data1.Provider value={age}>
  <ChildC />
  </data1.Provider>
</data.Provider>

    </div>
  );
}

export default App;
export{data,data1};
