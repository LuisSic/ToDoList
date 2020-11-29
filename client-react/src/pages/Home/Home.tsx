import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <>
      <Header />
      <div className="main-foto">
        <h1 className="heading-1">Organize it all with To Do</h1>
        <h2 className="heading-2">The all-in-one-to-do</h2>
      </div>
      <section className="customers">Customers</section>
      <section className="features">Feautures</section>
      <Footer />
    </>
  );
};

export default Home;
