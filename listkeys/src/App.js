
import './App.css';
import BasicList from './components/BasicList';
import NestedList from './components/NestedList';
import NestedNestedList from './components/NestedNestedList';
import ObjectList from './components/ObjectList';
import TableBootstrap from './components/ReactTables/TableBootstrap';
import TableReact from './components/ReactTables/TableReact';

function App() {
  return (
    <div className="App">
      <BasicList />
      <ObjectList />
      <NestedList />
      <TableReact />
      <TableBootstrap />
      <NestedNestedList />
    </div>
  );
}

export default App;
