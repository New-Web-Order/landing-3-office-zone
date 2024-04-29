
// import { useTheme } from 'next-themes'
// import { useEffect, useState } from 'react'


// const ThemeToggle = () => {
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)
//   useEffect(() => { setMounted(true); console.log("fuck", theme) }, [])

//   return (
//     <div>
//       <select defaultValue={theme} onChange={e => { setTheme(e.target.value), console.log(e.target.value, "") }} >
//         {/* <select defaultValue={theme} onChange={e=>setTheme} data-test-id="theme-selector"> */}
//         <option value="system">System</option>
//         {mounted && (
//           <>
//             <option value="dark">Dark</option>
//             <option value="light">Light</option>
//           </>
//         )}
//       </select>
//     </div>
//   )
// }

// export default ThemeToggle;








import dynamic from 'next/dynamic'

import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { PiDesktopDuotone, PiMoonDuotone, PiSunDuotone } from 'react-icons/pi';
import { useTheme } from 'next-themes';

const themeIcons = {
  light: <PiSunDuotone className='h-5 w-5 text-fg-text-contrast' />,
  dark: <PiMoonDuotone className='h-5 w-5 text-fg-text-contrast' />,
  system: <PiDesktopDuotone className='h-5 w-5 text-fg-text-contrast' />
};


export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
const [mounted, setMounted] = useState(false)
useEffect(() => { setMounted(true); console.log("fuck", theme) }, [])

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

  return (
    
      <div className='flex h-fit w-fit flex-col justify-center'>
              <Select defaultValue={theme} onValueChange={setTheme}>
                <SelectTrigger className='!w-[8.25rem]'>
                  <div className='flex items-center justify-between gap-2'>
                    {themeIcons[theme as keyof typeof themeIcons]}
                    <SelectValue>
                      {(theme?.charAt(0)?.toUpperCase() || '') +
                        (theme?.slice(1) || '')}
                    </SelectValue>
                  </div>
                </SelectTrigger>
                <SelectContent className='w-[8.25rem]'>
                  {Object.entries(themeIcons).map(([value, icon]) => (
                    <SelectItem value={value} key={value}>
                      <div className='flex items-center gap-1'>
                        {icon}
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
      </div>

    
  );
};
export default ThemeToggle;


