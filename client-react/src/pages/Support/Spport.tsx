import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { ReactComponent as Settings } from '../../img/settings-outline.svg';
import { ReactComponent as Bug } from '../../img/bug-outline.svg';
import { ReactComponent as Question } from '../../img/question.svg';
import { ReactComponent as Card } from '../../img/card-outline.svg';
import { ReactComponent as Rocket } from '../../img/rocket-outline.svg';
import { ReactComponent as Bulb } from '../../img/bulb-outline.svg';
import { ReactComponent as Plane } from '../../img/paper-plane-outline.svg';
const Support = () => {
  return (
    <>
      <Header />
      <div className="support">
        <div className="support__main">
          <div className="support__main--text">
            <h1 className="heading-1">Still Lost?</h1>
            <h1 className="heading-1">We're here for you</h1>
            <Button
              className="btn slogan-btn"
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
      <div className="topics">
        <div className="topic">
          <Settings className="topic__icon" />
          <h4 className="heading-4">Common Issues</h4>
          <div className="topic__line"></div>
        </div>
        <div className="topic">
          <Bug className="topic__icon" />
          <h4 className="heading-4">Bug Report</h4>
          <div className="topic__line"></div>
        </div>
        <div className="topic">
          <Card className="topic__icon" />
          <h4 className="heading-4">Purchasing</h4>
          <div className="topic__line"></div>
        </div>
        <div className="topic">
          <Plane className="topic__icon" />
          <h4 className="heading-4">Using ToDoList</h4>
          <div className="topic__line"></div>
        </div>
        <div className="topic">
          <Bulb className="topic__icon" />
          <h4 className="heading-4">Feature Request</h4>
          <div className="topic__line"></div>
        </div>
        <div className="topic">
          <Rocket className="topic__icon" />
          <h4 className="heading-4">Getting Started</h4>
          <div className="topic__line"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
