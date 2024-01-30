//Hoc App...
/*import './App.css';
import ButtonClick from './components/ButtonClick';
import HoverButton from './components/HoverButton';

function App() {
  return (
    <div className="App">
  <ButtonClick />
  <HoverButton />
    </div>
  );
}

export default App;*/

//Lazy loading App..
import React,{lazy,Suspense} from 'react'

 const Home=lazy(()=>import('./components/lazyloading/Home'))
const About=lazy(()=>import('./components/lazyloading/About'))

const App = () => {
  return (
    <div>
      <h3>Example of Lazy loading</h3>
      <Suspense fallback={
        <div>Please wait...Home page is loading</div>
      }>
      <Home />
      </Suspense>
      <Suspense fallback={
        <div>Please wait...About page is loading</div>
      }>
      <About />
      </Suspense>
    </div>
  )
}

export default App
