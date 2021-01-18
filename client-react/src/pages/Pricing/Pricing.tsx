import React from 'react';
import Button from '../../components/Button/Button';
import { ReactComponent as Teams } from '../../img/pricing/undraw_miro_qvwm.svg';
import { ReactComponent as Checkmark } from '../../img/features/checkmark-circle-outline.svg';
import { ReactComponent as Update } from '../../img/pricing/undraw_update_uxn2.svg';
import { ReactComponent as Free } from '../../img/pricing/undraw_order_confirmed_aaw7.svg';

export const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="pricing__head">
          <h1 className="heading-1">Find the plan that’s right for you</h1>
        </div>
        <div className="pricing__body">
          <div className="plan plan--1">
            <Free className="plan__svg" />
            <h3 className="heading-3">Free</h3>
            <p>For Starters</p>
            <h1 className="heading-1">$0</h1>
            <Button
              className="btn plan--btn"
              text="Get Stated"
              callback={() => console.log('click')}
            />

            <div className="plan__features">
              <h3 className="heading-3">Top Feature</h3>
              <ul className="plan__list">
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Up to 80 projects
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Up to 5 people per project
                </li>
              </ul>
            </div>
          </div>
          <div className="plan plan--2">
            <Update className="plan__svg" />
            <h3 className="heading-3">Premium</h3>
            <p>For Pros</p>
            <h1 className="heading-1">$3</h1>
            <Button
              className="btn plan--btn"
              text="Upgrade Now"
              callback={() => console.log('click')}
            />

            <div className="plan__features">
              <h3 className="heading-3">Top Feature</h3>
              <ul className="plan__list">
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Up to 300 projects
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Up to 25 people per project
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Reminders
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Comments & file uploads
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Labels & filters
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Productivity trends
                </li>
              </ul>
            </div>
          </div>
          <div className="plan plan--3">
            <Teams className="plan__svg" />
            <h3 className="heading-3">Business</h3>
            <p>For Teams</p>
            <h1 className="heading-1">$5</h1>
            <Button
              className="btn plan--btn"
              text="Try For Free"
              callback={() => console.log('click')}
            />

            <div className="plan__features">
              <h3 className="heading-3">Top Feature</h3>
              <ul className="plan__list">
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  500 projects per user
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  50 people per project
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Team inbox
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Admin & member roles
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Team billing
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Priority support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
