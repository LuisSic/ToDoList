import React from 'react';
import Button from '../../components/Button/Button';
import Feature from './Feature';
import { ReactComponent as Add } from '../../img/features/add-outline.svg';
import { ReactComponent as Alert } from '../../img/features/alert-circle-outline.svg';
import { ReactComponent as Chatbox } from '../../img/features/chatbox-outline.svg';
import { ReactComponent as Checkmark } from '../../img/features/checkmark-circle-outline.svg';
import { ReactComponent as Flag } from '../../img/features/flag-outline.svg';
import { ReactComponent as Heart } from '../../img/features/heart-outline.svg';
import { ReactComponent as List } from '../../img/features/list-outline.svg';
import { ReactComponent as Notifications } from '../../img/features/notifications-outline.svg';
import { ReactComponent as Person } from '../../img/features/person-add-outline.svg';
import { ReactComponent as Refresh } from '../../img/features/refresh-outline.svg';
import { ReactComponent as Settings } from '../../img/features/settings-outline.svg';
import { ReactComponent as Chart } from '../../img/features/stats-chart-outline.svg';
import { ReactComponent as Photo1 } from '../../img/features/photo-2.svg';
import { ReactComponent as Photo2 } from '../../img/features/photo-1.svg';
import { ReactComponent as Linkedin } from '../../img/features/linkedin.svg';
import { ReactComponent as Microsoft } from '../../img/features/microsoft.svg';
import { ReactComponent as Tesla } from '../../img/features/coca-cola.svg';
import { ReactComponent as Xbox } from '../../img/features/xbox-2.svg';
import { ReactComponent as Facebook } from '../../img/features/facebook-1.svg';
import { ReactComponent as Netflix } from '../../img/features/netflix-2015-logo.svg';
import { ReactComponent as Youtube } from '../../img/features/youtube.svg';
import { ReactComponent as Sendgrid } from '../../img/features/sendgrid-2.svg';

export const Home = () => {
  return (
    <>
      <div className="slogan">
        <div className="slogan__text">
          <h1 className="heading-1">
            <span className="heading-1--main">Organize it all with To Do</span>
          </h1>
          <h2 className="heading-2">The all-in-one-to-do</h2>
          <Button
            className="btn slogan-btn"
            text="Get Started"
            callback={() => console.log('click')}
          />
        </div>
        <Photo2 className="slogan__photo--2" />
      </div>
      <section className="features">
        <div className="features__header">
          <Photo1 className="features__header--img" />
          <h1 className="heading-1 features__header--center">
            Features that people love
          </h1>
        </div>
        <div className="feature__header">
          <h3 className="heading-3">
            Start each day feeling calm and in control
          </h3>
        </div>
        <Feature
          Svg={Add}
          title="Quick Add"
          text="lets you capture and organize tasks in seconds."
        />
        <Feature
          Svg={Refresh}
          title="Recurring due dates"
          text="help you remember deadlines and build habits."
        />
        <Feature
          Svg={Alert}
          title="Task View"
          text="gives you the complete picture of any task."
        />

        <div className="feature__header">
          <h3 className="heading-3">Focus your energy on the right things</h3>
        </div>
        <Feature
          Svg={Heart}
          title="Favorites"
          text="keep key projects, labels, or filters top of mind."
        />
        <Feature
          Svg={List}
          title="Sections & subtasks"
          text="ensure that your projects stay neatly organized."
        />
        <Feature
          Svg={Flag}
          title="Priorities"
          text="highlight the day’s most important tasks."
        />
        <div className="feature__header">
          <h3 className="heading-3">Share the workload</h3>
        </div>

        <Feature
          Svg={Person}
          title="Delegate tasks"
          text="to project collaborators and free up your mental space."
        />
        <Feature
          Svg={Notifications}
          title="Notifications"
          text="let you know when people post comments, complete tasks, and more."
        />
        <Feature
          Svg={Chatbox}
          title="Task & project comments"
          text="make essential information accessible to everyone."
        />

        <div className="feature__header">
          <h3 className="heading-3">See tangible progress</h3>
        </div>
        <Feature
          Svg={Settings}
          title="Todoist Karma"
          text="awards you points for completing tasks and maintaining your streaks."
        />
        <Feature
          Svg={Chart}
          title="Productivity visualizations"
          text="display your daily & monthly progress in color-coded graphs."
        />
        <Feature
          Svg={Checkmark}
          title="Completed tasks"
          text="help you keep track of all that you’ve accomplished in any given
          project."
        />
      </section>
      <section className="customers">
        <p className="customers__description">
          <span className="customers__description--main">
            ToDo has helped millions of people complete
          </span>
          <span className="customers__description--sub">
            over 1.5 billion tasks in 150+ million projects.
          </span>
        </p>

        <Linkedin className="customers__item--1 customers__img" />
        <Microsoft className="customers__item--2 customers__img" />
        <Xbox className="customers__item--3 customers__img" />
        <Netflix className="customers__item--4 customers__img" />

        <Tesla className="customers__item--5 customers__img" />

        <Facebook className="customers__item--6 customers__img" />
        <Youtube className="customers__item--7 customers__img" />

        <Sendgrid className="customers__item--8 customers__img" />
      </section>
    </>
  );
};
