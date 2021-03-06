import React from 'react';
import Button from '../../components/Button/Button';
import { ReactComponent as Settings } from '../../img/features/settings-outline.svg';
import { ReactComponent as Bug } from '../../img/support/bug-outline.svg';
import { ReactComponent as Question } from '../../img/support/question.svg';
import { ReactComponent as Card } from '../../img/support/card-outline.svg';
import { ReactComponent as Rocket } from '../../img/support/rocket-outline.svg';
import { ReactComponent as Bulb } from '../../img/support/bulb-outline.svg';
import { ReactComponent as Plane } from '../../img/support/paper-plane-outline.svg';

const topicList = [
  {
    text: 'Common Issues',
    svgImage: <Settings className="topic__icon" />,
  },
  {
    text: 'Bug Report',
    svgImage: <Bug className="topic__icon" />,
  },
  {
    text: 'Purchasing',
    svgImage: <Card className="topic__icon" />,
  },
  {
    text: 'Using ToDoList',
    svgImage: <Plane className="topic__icon" />,
  },
  {
    text: 'Feature Request',
    svgImage: <Bulb className="topic__icon" />,
  },
  {
    text: 'Getting Started',
    svgImage: <Rocket className="topic__icon" />,
  },
];

export const Support = () => {
  const render = topicList.map((topic, index) => {
    return (
      <div className="topic" key={index}>
        {topic.svgImage}
        <h4 className="heading-4">{topic.text}</h4>
        <div className="topic__line"></div>
      </div>
    );
  });

  return (
    <>
      <div className="support">
        <div className="support__main">
          <div className="support__main--text">
            <h1 className="heading-1">Still Lost?</h1>
            <h1 className="heading-1 heading-1-sub">We're here for you</h1>
            <Button
              className="btn primary--btn"
              text="Contact Us"
              callback={() => console.log('click')}
            />
          </div>
          <Question className="support__main--img" />
        </div>
        <div className="support__sub">
          <h2 className="heading-2">Help Center</h2>
          <div className="support__sub-line"></div>
          <h3 className="heading-3">What Can We Help You With?</h3>
        </div>
      </div>
      <div className="topics">{render}</div>
    </>
  );
};
