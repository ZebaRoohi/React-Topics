
import './App.css';
import Axios from './components/AxiosApiCall/Axios';
import JsonPlaceAxios from './components/AxiosApiCall/JsonPlaceAxios';
import FetchMethod from './components/Fetchapicall/FetchMethod';
import GetPostDelete from './components/Fetchapicall/GetPostDelete';
import JSONfetch from './components/Fetchapicall/JSonplaceholder';

function App() {
  return (
    <div className="App">
    {/* <FetchMethod /> */}
    {/* <JSONfetch />
    <GetPostDelete /> */}

    {/* <Axios />
    <GetPostDelete /> */}
    <JsonPlaceAxios />
    </div>
  );
}

export default App;
