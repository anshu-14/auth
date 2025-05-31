// src/layout/MainLayout.jsx
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import SideBar from "./SideBar";
import Header from "./Header";
import MainContent from './MainContent';
import { Button } from "primereact/button";
import { useState } from "react";

export default function MainLayout() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/home"),
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      command: () => navigate("/profile"),
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      items: [
        {
          label: "Preferences",
          icon: "pi pi-sliders-h",
          command: () => navigate("/settings/preferences"),
        },
        {
          label: "About",
          icon: "pi pi-info-circle",
          command: () => navigate("/settings/about"),
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen">

      <SideBar visible={visible} menuItems={menuItems} />
       <div className="flex-1 transition-all duration-300 ease-in-out">
        <Header toggleSidebar={() => setVisible(!visible)} />
            <MainContent />
       </div>

      
    </div>
  );
}
