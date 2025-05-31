// src/auth/Signup.jsx
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import axios from '../api/axios';
import { useNavigate,Link  } from 'react-router-dom';

export default function Signup() {
  const [user, setUser] = useState({  email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post('/auth/register', user);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-content-center align-items-center min-h-screen bg-gray-100 px-3">
      <Card title="Register" className="w-full md:w-30rem p-4 shadow-3">
        <div className="p-fluid">
          <div className="field mb-4">
            <span className="p-float-label">
              <InputText
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label htmlFor="email">Email</label>
            </span>
          </div>

          <div className="field mb-4">
            <span className="p-float-label">
              <Password
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                toggleMask
                feedback={false}
              />
              <label htmlFor="password">Password</label>
            </span>
          </div>

          <Button label="Sign Up" icon="pi pi-user-plus" onClick={handleSignup} className="w-full mb-3" />

          <div className="text-center">
            <span>Already have an account? </span>
            <Link to="/login" className="text-primary font-bold">Login</Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
