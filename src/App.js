import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link,Routes } from 'react-router-dom';
function App() {
  const [signupFormData, setSignupFormData] = useState({
    // Define initial form data
    username: '',
    password: ''
  });
  const handleSignupFormChange = (fieldName, value) => {
    setSignupFormData(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };
  return (
    <div className="App">
      <Router>
      <Routes>
      
      <Route path="/" element={<Login formData={signupFormData}/>} />
          <Route path="/signup" element={<Signup formData={signupFormData} onFormChange={handleSignupFormChange} />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;