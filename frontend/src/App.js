import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import ViewOrder from './components/ViewBook';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes >
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addbook" element={<AddBook/>}/>
        <Route exact path="/editbook/:id" element={<EditBook/>}/>
        <Route exact path="/viewbook/:id" element={<ViewOrder/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;