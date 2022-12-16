import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from 'src/assets';
import Button from '../shared/Button/Button';
import './header.scss';
const Header: React.FC = () => {
const { t } = useTranslation();
  return (
    <nav className="header">
      <img src={Logo} alt="logo" />
      <div className="d-flex gap-4">
        <Button title={t('buttons:login')} type="white" />
        <Button title={t('buttons:start')} type="primary" />
      </div>
    </nav>
  );
};

export default Header;
