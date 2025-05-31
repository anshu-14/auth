import React from 'react'
import { Outlet } from 'react-router-dom';

export default function MainContent() {
  return (
      <main className="p-4">
      <Outlet />
    </main>
  )
}
