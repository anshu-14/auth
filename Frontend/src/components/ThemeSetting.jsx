import React, { useState,useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';

const themes = [
  { label: 'Lara Light Indigo', value: 'lara-light-indigo' },
  { label: 'Lara Dark Indigo', value: 'lara-dark-indigo' },
  { label: 'Arya Blue (Dark)', value: 'arya-blue' },
  { label: 'Saga Blue (Light)', value: 'saga-blue' },
  { label: 'Vela Blue (Dark)', value: 'vela-blue' },
];

export default function ThemeSetting() {
   const [selectedTheme, setSelectedTheme] = useState('');

  useEffect(() => {
    const currentHref = document.getElementById('theme-link')?.getAttribute('href');
    if (currentHref) {
      const match = themes.find(theme => currentHref.includes(theme.value));
      if (match) setSelectedTheme(match.value);
    }
  }, []);

  const handleThemeChange = (e) => {
    const newTheme = e.value;
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      themeLink.href = `https://unpkg.com/primereact/resources/themes/${newTheme}/theme.css`;
      setSelectedTheme(newTheme);
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-3 text-xl font-semibold">Theme Settings</h2>
      <Dropdown
        value={selectedTheme}
        options={themes}
        onChange={handleThemeChange}
        placeholder="Select a Theme"
        className="w-full md:w-20rem"
      />
    </div>
  );
}
