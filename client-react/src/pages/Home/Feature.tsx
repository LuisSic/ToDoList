import React from 'react';

interface FeatureProps {
  title: string;
  text: string;
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Feature = ({ title, text, Svg }: FeatureProps) => {
  return (
    <>
      <div className="feature">
        <Svg className="feature__icon" />
        <h4 className="heading-4">{title}</h4>
        <p className="feature__text">{text}</p>
      </div>
    </>
  );
};

export default Feature;
