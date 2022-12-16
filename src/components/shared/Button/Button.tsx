import React from 'react';
import './Button.scss';

interface Props {
  title: string;
  type: string;
}

const Button: React.FC<Props> = ({ title, type }) => {
  return <div className={`d-flex align-items-center align-items-center ${type}`}>{title}</div>;
};

export default Button;
