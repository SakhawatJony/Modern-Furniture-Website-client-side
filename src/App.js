import logo from './logo.svg';
import './App.css';
import Navegation from './Pages/Shared/Navegation/Navegation';
import Home from './Pages/Home/Home/Home';
import {  Routes,Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Furnitures from './Pages/Home/Furnitures/Furnitures'
import About from './Pages/Home/About/About'
import Login from './Pages/Login/Login'
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
  <Navegation></Navegation>
  <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="furniture" element={<Furnitures></Furnitures>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="register" element={<Register></Register>}></Route>
      {/* <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/addItem" element={ <AddService></AddService> }></Route>
      <Route path="/manageInventories" element={ <ManageInventories></ManageInventories>}></Route>
      <Route path="/myItem" element={ <MyItem></MyItem> }></Route>
      <Route path="/service/:serviceId" element={
        <RequireAuth>
        <ServiceDetails></ServiceDetails>
      </RequireAuth>
      
      }></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route> */}
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
