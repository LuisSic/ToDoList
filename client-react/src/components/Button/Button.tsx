import React from 'react';

interface Props {
  text: string;
  callback: () => void;
  className: string;
}
const Button = ({ text, callback, className }: Props) => {
  return (
    <button className={className} onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
