import Library from "./components/Assignment/Library";
import ConditionRender from "./components/ConditionRendering/ConditionRender";
import DefaulDest from "./components/Destructing/DefaulDest";
import ParentDest from "./components/Destructing/ParentDest";
import PropsDestructure from "./components/Destructing/PropsDestructure";
import Destructure from "./components/Destructure";
import Greeting from "./components/Greeting";
import Logged from "./components/Logged";
import ParentComponent from "./components/ParentComponent";
import DefaultPropTypes from "./components/propTypes/DefaultPropTypes";
import Proptypes from "./components/propTypes/Proptypes";

import './App.css';
function App() {
  const data={
    name:'John',
    age:23
  }
  const persdata={
    name:'Sam'
  }
  return (
    <div className="App">
    
        {/* <Greeting name='John' age={23} />
        <Logged isLoggedin='true' isLoggedout='false'/>
       <ParentComponent />
        <Destructure /> */}      
{/* props destructure */}
        <PropsDestructure {...data} />
        <ParentDest />
        <DefaulDest {...persdata} />
        <Proptypes name='John' age={23} email='john@test.com' />
        <DefaultPropTypes />
        <ConditionRender isLoggedIn={true} />
        <Library />
    </div>
  );
}

export default App;
