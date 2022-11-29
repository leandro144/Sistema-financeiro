import * as C from './App.styles'
import { Routes, Route } from 'react-router-dom';
import { Fragment } from "react";
import Main from './pages/Main';
import Navbar from './components/Navbar/Navbar';
import Form from './pages/Form/Form';

const App = () => { 

  return (

        <C.Container>
            <Navbar />   
                <Fragment>
                  <Routes>
                  <Route path='/' element={<Form />}/>
                  <Route path='/main' element={<Main />}/>
                  </Routes>
                </Fragment>    
          </C.Container>
     
  );
}

export default App;