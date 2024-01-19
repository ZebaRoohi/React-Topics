
import './App.css';
import Filter from './components/ArrayMethods/Filter';
import Find from './components/ArrayMethods/Find';
import Map from './components/ArrayMethods/Map';
import Reduce from './components/ArrayMethods/Reduce';
import LogicalAnd from './components/ConditionOperators/LogicalAnd';
import AgeCheck from './components/ConditionOperators/Ternary';
import Button from './components/DOM/Button';
import Form from './components/DOM/Form';
import FilterExample from './components/FilterExample';
import Greetings from './components/Greetings';
import ImageList from './components/LocalImages/ImageList';
import LoopExamples from './components/LoopExamples';
import Arthimatic from './components/Operators/Arthimatic';
import ComparasionOperator from './components/Operators/Comparasion';
import Logical from './components/Operators/Logical';
import ToUpperCase from './components/Strings/ToUpperCase';
import WhileLoop from './components/WhileLoop';
function App() {
  const images=[
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
  ]
  return (
    <div className="App">
      <h1>My first Program</h1>
      <Greetings />
      <FilterExample />
      <LoopExamples />
      <WhileLoop />
      <Arthimatic />
      <ComparasionOperator />
      <Logical />
      <AgeCheck />
      <Map />
      <Filter />
      <Reduce />
      <Find />
      <ToUpperCase />
      <Button />
      <Form />
      <LogicalAnd />
      <ImageList img={images} />
    </div>
  );
}

export default App;
