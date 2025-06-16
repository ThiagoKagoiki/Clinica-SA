import './App.css'
import { PrivateRoute } from './componentes/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { Admin } from './pages/Admin';
import { Cadastro } from './pages/Cadastro';
import { Cliente } from './pages/Cliente';
import { Login } from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';   

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/cliente' element={
              <PrivateRoute>

                <Cliente/>

              </PrivateRoute>
            }/>

            <Route path='/admin' element={
              <PrivateRoute>

                <Admin/>

              </PrivateRoute>
            }/>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
