import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilterBar from './layouts/filterbar';
import NewProduct from './components/NewProduct'
import ViewProduct from './components/ViewProduct'
import NewCategory from './components/NewCategory';
import Categories from './components/Categories';
import Error from './components/Error'

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
          {/* <Route path="/:cid" element={<ViewCategory/>}/> */}
          <Route path="/createCat" element={<NewCategory/>}/>
          <Route path="/categories" element={<Categories/>} />
          <Route path="*" element={<Error />} />
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
