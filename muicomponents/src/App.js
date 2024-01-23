
import './App.css';
import RadioButtonsGroup from './components/Radio';
import BasicSelect from './components/Select';
import SwitchLabels from './components/Switch';
import TypographyComponent from './components/Typography';

function App() {
  return (
    <div className="App">
      <TypographyComponent />
      <SwitchLabels />
      <RadioButtonsGroup />
      <BasicSelect />
    </div>
  );
}

export default App;
