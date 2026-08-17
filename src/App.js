import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import CustomerPage from './Customer';
import Login from './Login';
import ProtectedRoute from './protected-route';
import Counter from './counter';
import AsyncCounter from './async-counter';
import BearAndSlothCounter from './time-increment';

function App() {
  return (
    <div className="App">
      {/* <div style={{ margin: 200 }}>
        <Counter />
        <br />
        <AsyncCounter />
        <br />
        <BearAndSlothCounter />
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/customer" element={<CustomerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
