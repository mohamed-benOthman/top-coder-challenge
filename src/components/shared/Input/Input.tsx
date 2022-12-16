import React, { FC } from 'react';
import './Input.scss';

interface Props {
  type: string;
  placeholder?: any;
}

const Input: FC<Props> = ({ type = 'text', placeholder }) => {
  return <input className="custom-input" type={type} placeholder={placeholder} />;
};

export default Input;
