import React, { useState,useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';


const themes = [
  // Material Design (md)
  { label: 'MD Light Indigo', value: 'md-light-indigo' },
  { label: 'MD Light Deep Purple', value: 'md-light-deeppurple' },
  { label: 'MD Dark Indigo', value: 'md-dark-indigo' },
  { label: 'MD Dark Deep Purple', value: 'md-dark-deeppurple' },

  // Material Design Compact (mdc)
  { label: 'MDC Light Indigo', value: 'mdc-light-indigo' },
  { label: 'MDC Light Deep Purple', value: 'mdc-light-deeppurple' },
  { label: 'MDC Dark Indigo', value: 'mdc-dark-indigo' },
  { label: 'MDC Dark Deep Purple', value: 'mdc-dark-deeppurple' },

  // Tailwind & Fluent
  { label: 'Tailwind Light', value: 'tailwind-light' },
  { label: 'Fluent Light', value: 'fluent-light' },

  // Lara Light Themes
  { label: 'Lara Light Blue', value: 'lara-light-blue' },
  { label: 'Lara Light Indigo', value: 'lara-light-indigo' },
  { label: 'Lara Light Purple', value: 'lara-light-purple' },
  { label: 'Lara Light Teal', value: 'lara-light-teal' },

  // Lara Dark Themes
  { label: 'Lara Dark Blue', value: 'lara-dark-blue' },
  { label: 'Lara Dark Indigo', value: 'lara-dark-indigo' },
  { label: 'Lara Dark Purple', value: 'lara-dark-purple' },
  { label: 'Lara Dark Teal', value: 'lara-dark-teal' },

  // Soho
  { label: 'Soho Light', value: 'soho-light' },
  { label: 'Soho Dark', value: 'soho-dark' },

  // Viva
  { label: 'Viva Light', value: 'viva-light' },
  { label: 'Viva Dark', value: 'viva-dark' },

  // Other unique themes
  { label: 'Mira', value: 'mira' },
  { label: 'Nano', value: 'nano' },

  // Saga Themes (Light)
  { label: 'Saga Blue', value: 'saga-blue' },
  { label: 'Saga Green', value: 'saga-green' },
  { label: 'Saga Orange', value: 'saga-orange' },
  { label: 'Saga Purple', value: 'saga-purple' },

  // Vela Themes (Dark)
  { label: 'Vela Blue', value: 'vela-blue' },
  { label: 'Vela Green', value: 'vela-green' },
  { label: 'Vela Orange', value: 'vela-orange' },
  { label: 'Vela Purple', value: 'vela-purple' },

  // Arya Themes (Dark)
  { label: 'Arya Blue', value: 'arya-blue' },
  { label: 'Arya Green', value: 'arya-green' },
  { label: 'Arya Orange', value: 'arya-orange' },
  { label: 'Arya Purple', value: 'arya-purple' },
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
