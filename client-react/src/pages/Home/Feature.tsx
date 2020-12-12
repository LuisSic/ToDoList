import React from 'react';

interface FeatureProps {
  title: string;
  text: string;
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const Feature = ({ title, text, svg }: FeatureProps) => {
  return (
    <>
      <div className="feature">
        {svg}
        <h4 className="heading-4">{title}</h4>
        <p className="feature__text">{text}</p>
      </div>
    </>
  );
};

export default Feature;
