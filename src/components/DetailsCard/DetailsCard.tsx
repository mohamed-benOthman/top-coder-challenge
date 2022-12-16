import React from 'react';
import './DetailsCard.scss';
interface Props {
  title: string;
  description: string;
  img: string;
  reverse?: boolean;
  backgroundColor?: string;
}

const DetailsCard: React.FC<Props> = ({
  title,
  description,
  img,
  reverse = false,
  backgroundColor,
}) => {
  return (
    <div
      className="px-2 py-3 details-card"
      style={{ backgroundColor: backgroundColor && backgroundColor }}
    >
      <div className={`d-flex p-5 ${reverse && 'flex-row-reverse'} `}>
        <div className={`col-6 px-4 ${reverse ? ' align-items-start' : 'align-items-end'}`}>
          <div
            className={`d-flex mx-3  ${!reverse ? 'justify-content-end' : 'justify-content-start'}`}
          >
            <img src={img} alt="about" />
          </div>
        </div>
        <div className={`col-6 px-4 ${!reverse ? ' align-items-start' : 'align-items-end'}`}>
          <div
            className={`d-flex mx-3  ${reverse ? 'justify-content-end' : 'justify-content-start'}`}
          >
            <div>
              <h3 className="title">{title}</h3>
              <p className="description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
