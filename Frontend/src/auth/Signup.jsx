// src/auth/Signup.jsx
import React, { useState,useRef  } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import axios from '../api/axios';
import { Toast } from 'primereact/toast';
import { useNavigate,Link  } from 'react-router-dom';

export default function Signup() {
    const [user, setUser] = useState({  email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const validate = () => {
        const newErrors = {};
        if (!user.email.trim()) newErrors.email = 'Email is required';
        if (!user.password.trim()) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const toast = useRef(null);

  const handleSignup = async () => {
    if (!validate()) return;
    try {
      await axios.post('/auth/register', user);
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Registration successful!', life: 3000 });
      setTimeout(() => navigate('/login'), 3100); // navigate after toast disappears
    } catch (err) {
      console.error(err);
       toast.current.show({ 
        severity: 'error', 
        summary: 'Registration Failed', 
        detail: err?.response?.data?.message || 'Email may already exist', 
        life: 3000 
      });
    }
  };

  return (
    <>
    <Toast ref={toast} />
    <div className="flex justify-content-center align-items-center min-h-screen bg-gray-100 px-3">
      <Card title="Register" className="w-full md:w-30rem p-4 shadow-3">
        <div className="p-fluid">
          <div className="field mb-4">
            <span className="p-float-label">
              <InputText
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className={errors.email ? 'p-invalid' : ''}
              />
              <label htmlFor="email">Email</label>
            </span>
            {errors.email && <small className="p-error">{errors.email}</small>}
          </div>

          <div className="field mb-4">
            <span className="p-float-label">
              <Password
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                toggleMask
                feedback={false}
                className={errors.password ? 'p-invalid' : ''}
              />
              <label htmlFor="password">Password</label>
            </span>
            {errors.password && <small className="p-error">{errors.password}</small>}
          </div>

          <Button label="Sign Up" icon="pi pi-user-plus" onClick={handleSignup} className="w-full mb-3" />

          <div className="text-center">
            <span>Already have an account? </span>
            <Link to="/login" className="text-primary font-bold">Login</Link>
          </div>
        </div>
      </Card>
    </div>
    </>
  );
}
