import { Switch } from '@headlessui/react';
import React, { useEffect, useState } from 'react'

const ButtonSwitch = () => {

  const [enabled, setEnabled] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative z-50">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={handleThemeSwitch}
        className={`${
          enabled ? 'bg-slate-900' : 'bg-gray-400'
        } relative inline-flex h-6 w-12 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }  h-4 w-4 transform rounded-full bg-white transition justify-center`}
        ></span>
      </Switch>
    </div>
  );
}

export default ButtonSwitch;
