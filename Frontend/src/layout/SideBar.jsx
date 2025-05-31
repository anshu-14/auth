import React from 'react'
import { PanelMenu } from 'primereact/panelmenu';

export default function SideBar({ visible, menuItems }) {
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        visible ? 'w-64' : 'w-0'
      } flex-shrink-0 overflow-hidden`}
      style={{
        backgroundColor: visible ? 'var(--surface-ground)' : 'transparent',
        borderRight: visible ? '1px solid var(--surface-border)' : 'none',
        boxShadow: visible ? '2px 0 4px var(--surface-overlay)' : 'none',
        minHeight: '100vh',
      }}
    >
      <div className="w-64">
        {visible && (
          <>
            <h2
              className="m-0 p-3 font-semibold text-lg"
              style={{
                borderBottom: '1px solid var(--surface-border)',
                color: 'var(--text-color)',
              }}
            >
              My App
            </h2>
            <PanelMenu model={menuItems} className="w-full sidebar-menu" />
          </>
        )}
      </div>
    </div>
  )
}
