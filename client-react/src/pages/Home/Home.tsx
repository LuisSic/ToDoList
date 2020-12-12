import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ReactComponent as Add } from '../../img/add-outline.svg';
import { ReactComponent as Alert } from '../../img/alert-circle-outline.svg';
import { ReactComponent as Chatbox } from '../../img/chatbox-outline.svg';
import { ReactComponent as Checkmark } from '../../img/checkmark-circle-outline.svg';
import { ReactComponent as Flag } from '../../img/flag-outline.svg';
import { ReactComponent as Heart } from '../../img/heart-outline.svg';
import { ReactComponent as List } from '../../img/list-outline.svg';
import { ReactComponent as Notifications } from '../../img/notifications-outline.svg';
import { ReactComponent as Person } from '../../img/person-add-outline.svg';
import { ReactComponent as Refresh } from '../../img/refresh-outline.svg';
import { ReactComponent as Settings } from '../../img/settings-outline.svg';
import { ReactComponent as Chart } from '../../img/stats-chart-outline.svg';
import { ReactComponent as Photo1 } from '../../img/photo-1.svg';
import { ReactComponent as Photo2 } from '../../img/photo-2.svg';
import { ReactComponent as Linkedin } from '../../img/linkedin.svg';
import { ReactComponent as Microsoft } from '../../img/microsoft.svg';
import { ReactComponent as Tesla } from '../../img/tesla-9.svg';
import { ReactComponent as Xbox } from '../../img/xbox-2.svg';
import { ReactComponent as Facebook } from '../../img/facebook-1.svg';
import { ReactComponent as Stripe } from '../../img/stripe-3.svg';
import { ReactComponent as Youtube } from '../../img/youtube.svg';
import { ReactComponent as Sendgrid } from '../../img/sendgrid-2.svg';

const Home = () => {
  return (
    <>
      <Header />
      <div className="slogan">
        <Photo2 className="slogan__photo--2" />
        <div className="slogan__text">
          <h1 className="heading-1">
            <span className="heading-1--main">Organize it all</span>
            <span className="heading-1--sub">with To Do</span>
          </h1>
          <h2 className="heading-2">The all-in-one-to-do</h2>
        </div>
      </div>
      <section className="features">
        <div className="features__header">
          <h2 className="heading-2 features__header--center">
            Features that people love
          </h2>
          <Photo1 className="features__header--img" />
        </div>
        <div className="feature__header">
          <h3 className="heading-3">
            Start each day feeling calm and in control
          </h3>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            lets you capture and organize tasks in seconds
          </p>
        </div>
        <div className="feature">
          <Refresh className="feature__icon" />
          <h4 className="heading-4">Recurring due dates</h4>
          <p className="feature__text">
            help you remember deadlines and build habits.
          </p>
        </div>
        <div className="feature">
          <Alert className="feature__icon" />
          <h4 className="heading-4">Task View</h4>
          <p className="feature__text">
            gives you the complete picture of any task.
          </p>
        </div>
        <div className="feature__header">
          <h3 className="heading-3">Focus your energy on the right things</h3>
        </div>
        <div className="feature">
          <Heart className="feature__icon" />
          <h4 className="heading-4">Favorites</h4>
          <p className="feature__text">
            keep key projects, labels, or filters top of mind.
          </p>
        </div>
        <div className="feature">
          <List className="feature__icon" />
          <h4 className="heading-4">Sections & subtasks</h4>
          <p className="feature__text">
            ensure that your projects stay neatly organized.
          </p>
        </div>
        <div className="feature">
          <Flag className="feature__icon" />
          <h4 className="heading-4">Priorities</h4>
          <p className="feature__text">
            highlight the day’s most important tasks.
          </p>
        </div>
        <div className="feature__header">
          <h3 className="heading-3">Share the workload</h3>
        </div>
        <div className="feature">
          <Person className="feature__icon" />
          <h4 className="heading-4">Delegate tasks</h4>
          <p className="feature__text">
            to project collaborators and free up your mental space.
          </p>
        </div>
        <div className="feature">
          <Notifications className="feature__icon" />
          <h4 className="heading-4">Notifications</h4>
          <p className="feature__text">
            let you know when people post comments, complete tasks, and more.
          </p>
        </div>
        <div className="feature">
          <Chatbox className="feature__icon" />
          <h4 className="heading-4">Task & project comments</h4>
          <p className="feature__text">
            make essential information accessible to everyone.
          </p>
        </div>
        <div className="feature__header">
          <h3 className="heading-3">See tangible progress</h3>
        </div>
        <div className="feature">
          <Settings className="feature__icon" />
          <h4 className="heading-4">Todoist Karma</h4>
          <p className="feature__text">
            awards you points for completing tasks and maintaining your streaks.
          </p>
        </div>
        <div className="feature">
          <Chart className="feature__icon" />
          <h4 className="heading-4">Productivity visualizations</h4>
          <p className="feature__text">
            display your daily & monthly progress in color-coded graphs.
          </p>
        </div>
        <div className="feature">
          <Checkmark className="feature__icon" />
          <h4 className="heading-4">Completed tasks</h4>
          <p className="feature__text">
            help you keep track of all that you’ve accomplished in any given
            project.
          </p>
        </div>
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
        <Stripe className="customers__item--4 customers__img" />

        <Tesla className="customers__item--5 customers__img" />

        <Facebook className="customers__item--6 customers__img" />
        <Youtube className="customers__item--7 customers__img" />

        <Sendgrid className="customers__item--8 customers__img" />
      </section>

      <Footer />
    </>
  );
};

export default Home;
