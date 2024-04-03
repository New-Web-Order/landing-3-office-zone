import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
}

const Input = ({ className, ...rest }: Props) => {
  const rootClassName = cn(
    'flex w-full lg:w-72 h-10 flex-col justify-center items-center h-14 px-3.5 rounded-md bg-bg-1000 text-neutral-800 placeholder:text-[#9CA3AF] tracking-[0.00469rem] outline-none focus:ring-0 focus:outline-none focus:border-[#9CA3AF]',
    className
  );




  return (
    <label>
      <input
        className={rootClassName}
        autoComplete='off'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
        {...rest}
      />
    </label>
  );
};

export default Input;
