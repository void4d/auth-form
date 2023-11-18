import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import FormContainer from '../Form/FormContainer';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/signin"
          element={
            <FormContainer>
              <Login />
            </FormContainer>
          }
        />
        <Route
          path="/signup"
          element={
            <FormContainer>
              <Register />
            </FormContainer>
          }
        />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
}

export default App;
