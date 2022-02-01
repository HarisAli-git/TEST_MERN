import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FilterBar from './filterbar';
import NewProduct from './NewProduct'
import ViewProduct from './ViewProduct'
import NewCategory from './NewCategory';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<FilterBar></FilterBar>} />
          <Route path="/create" element={<NewProduct />} />
          <Route path="/:id" element={<ViewProduct/>}/>
          <Route path="/createCat" element={<NewCategory/>}/>
          {/* </Route>
          <Route path="/article/:id">
            <ViewArticle />
          </Route>
          <Route path="*">
            <Error />
          </Route> */}
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
