
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { SearchPage } from './pages/searchPage';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>

      {/* home page (google search page) */}
      {/* search page (the result page) */}

    </div>
  );
}

// ServiceWorker.unregister();

export default App;
