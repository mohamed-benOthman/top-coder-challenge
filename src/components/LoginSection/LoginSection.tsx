import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../shared/Button/Button';
import Input from '../shared/Input/Input';
import './LoginSection.scss';

interface Props {
  img: string;
}

const LoginSection: React.FC<Props> = ({ img }) => {
  const { t } = useTranslation();

  return (
    <div className="login-container">
      <img src={img} alt="bg image" className="background-image" />
      <div className="overlay d-flex justify-content-center align-items-center"></div>
      <div className="form-container d-flex justify-content-center pt-5">
        <div>
          <div className="title">
            <h3>{t('login:assessment')}</h3>
            <h3>{t('login:monitoring')}</h3>
          </div>
          <div className="d-flex flex-column align-items-center mt-3">
            <div className="px-2 subtitle-container my-1 d-flex align-items-center">
              <h5>{t('login:companiesInfo')}</h5>
            </div>
            <div className="px-2 subtitle-container my-1 d-flex align-items-center">
              <h5>{t('login:firstService')}</h5>
            </div>
            <div className="d-flex mt-2">
              <div className="input-login mx-1">
                <Input type={'email'} placeholder={t('login:email-adress')} />
              </div>
              <div className="mx-1">
                <Button type={'success'} title={t('buttons:start-now')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
