// src/layout/HeaderNav.jsx
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Header({ toggleSidebar }) {
  const navigate = useNavigate();
 const { logout } = useAuth();
  const start = (
    <Button
      icon="pi pi-bars"
      className="p-button-text p-3"
      onClick={toggleSidebar}
      aria-label="Toggle Sidebar"
    />
  );

  const end = (
    <div className="flex align-items-center gap-2 pr-3">
      <Button
        label="Profile"
        icon="pi pi-user"
        className="p-button-text"
        onClick={() => navigate('/profile')}
      />
      <Button
        label="Theme"
        icon="pi pi-cog"
        className="p-button-text"
        onClick={() => console.log('Theme Settings')}
      />
      <Button
        label="Logout"
        icon="pi pi-sign-out"
        className="p-button-text"
        onClick={() => {
          logout()
          navigate('/login');
        }}
      />
    </div>
  );

  return (
    <div className="sticky top-0 z-5 w-full bg-surface-border border-bottom-1 surface-border">
      <Menubar start={start} end={end} className="border-none shadow-none" />
    </div>
  );
}
