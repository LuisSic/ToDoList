import React from 'react';
import { ReactComponent as LogoLinkInd } from '../../img/logo-linkedin.svg';
interface CardProfileProps {
  mainTitle: string;
  subTitle: string;
  description: string;
  photo: string;
  linkProfile: string;
  alt: string;
}
const CardProfile = ({
  mainTitle,
  subTitle,
  description,
  photo,
  linkProfile,
  alt,
}: CardProfileProps) => {
  return (
    <>
      <h2 className="heading-2">{mainTitle}</h2>
      <h4 className="heading-4">{subTitle}</h4>
      <div className="group__images">
        <img src={photo} alt={alt} onClick={() => window.open(linkProfile)} />
        <LogoLinkInd
          className="group__svg"
          onClick={() => window.open(linkProfile)}
        />
      </div>

      <p>{description}</p>
    </>
  );
};

export default CardProfile;
