import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import intel from '../../img/intel.png';
import at from '../../img/at-t-4.png';
import apple from '../../img/apple-black.png';
import google from '../../img/google-1-1.png';
import nike from '../../img/nike-3.png';
import puma from '../../img/puma-logo.png';
import { ReactComponent as Add } from '../../img/add-outline.svg';

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-foto">
        <h1 className="heading-1">Organize it all with To Do</h1>
        <h2 className="heading-2">The all-in-one-to-do</h2>
      </div>
      <section className="customers">
        <div className="customers__container">
          <p className="customers__description">
            <span className="customers__description--main">
              ToDo has helped millions of people complete
            </span>
            <span className="customers__description--sub">
              over 1.5 billion tasks in 150+ million projects.
            </span>
          </p>
          <div className="customers__list">
            <img src={intel} alt="Intel" className="customers--img-1" />
            <img src={at} alt="At" />
            <img src={google} alt="Google" />
            <img src={apple} alt="Apple" />
            <img src={nike} alt="Nike" />
            <img src={puma} alt="Puma" />
          </div>
        </div>
      </section>
      <section className="features">
        <div className="features__header">
          <h1 className="heading-1">From overwhelmed to on top of it</h1>
          <p className="features__header--text">
            Todoist gives you the confidence that everything’s organized and
            accounted for, so you can make progress on the things that are
            important to you.
          </p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sequi repudiandae accusamus rem quod temporibus doloribus, tenetur
          </p>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            lets you capture and organize tasks in seconds
          </p>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            dicta nemo tempore quibusdam provident autem repellendus, esse quas
            possimus illum vel quos? At voluptates sapiente quam provident quo
            distinctio qui.
          </p>
        </div>
        <div className="feature__header">
          <h3 className="heading-3">Focus your energy on the right things</h3>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            lets you capture and organize tasks in seconds
          </p>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            lets you capture and organize tasks in seconds
          </p>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            lets you capture and organize tasks in seconds
          </p>
        </div>
        <div className="feature__header">
          <h3 className="heading-3">Share the workload</h3>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            lets you capture and organize tasks in seconds
          </p>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            lets you capture and organize tasks in seconds
          </p>
        </div>
        <div className="feature">
          <Add className="feature__icon" />
          <h4 className="heading-4">Quick Add</h4>
          <p className="feature__text">
            lets you capture and organize tasks in seconds
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
