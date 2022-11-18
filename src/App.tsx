import * as C from './App.styles'
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';

const App = () => { 

  return (

        <C.Container>
            <Navbar />
                <C.Body>
                  <Routes>
                  <Route path='/' element={<Form />}/>
                  <Route path='/main' element={<Main />}/>
                  </Routes>
              </C.Body>
          </C.Container>
     
  );
}

export default App;