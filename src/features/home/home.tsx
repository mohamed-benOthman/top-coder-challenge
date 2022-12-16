import React from 'react';
import LoginSection from 'src/components/LoginSection/LoginSection';
import './home.scss';
import { BgLogin, AboutImage } from 'src/assets';
import DetailsCard from 'src/components/DetailsCard/DetailsCard';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="login-home">
        <LoginSection img={BgLogin} />
      </div>
      <div>
        <DetailsCard
          title={t('home:about')}
          description={t('home:about-description')}
          img={AboutImage}
        />
        <DetailsCard
          title={t('home:about')}
          description={t('home:about-description')}
          img={AboutImage}
          reverse={true}
          backgroundColor="#fff"
        />
        <DetailsCard
          title={t('home:about')}
          description={t('home:about-description')}
          img={AboutImage}
          backgroundColor="#fff"
        />
        <DetailsCard
          title={t('home:about')}
          description={t('home:about-description')}
          img={AboutImage}
          reverse={true}
          backgroundColor="#fff"
        />
      </div>
    </>
  );
};

export default Home;
