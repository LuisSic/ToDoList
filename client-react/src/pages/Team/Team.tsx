import React from 'react';
import Header from '../../components/Header/Header';
import Geo from '../../img/geo.jpeg';
import Renne from '../../img/renne.jpg';
import Luis from '../../img/luis.jpg';
import jose from '../../img/jose.jpg';
import Carpio from '../../img/carpio.jpg';
import Ricardo from '../../img/ricardo.jpg';
import Footer from '../../components/Footer/Footer';
import CardProfile from './CardProfile';

const teamMembers = [
  {
    mainTitle: 'Geovanny Lopez',
    subTitle: 'Co-Founder and CEO',
    photo: Geo,
    linkProfile: 'https://www.linkedin.com/in/geovanny-lopez/',
    alt: 'Geo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error, quis perferendis cum corrupti necessitatibus esse autem magnam provident unde nemo nihil repellendus quod aut porro velvero. Dolores, similique.',
  },
  {
    mainTitle: 'Luis Sic',
    subTitle: 'Co-Founder and CTO',
    photo: Luis,
    linkProfile:
      'https://www.linkedin.com/in/luis-antonio-sic-canil-868181116/',
    alt: 'Luis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium, totam, ad reprehenderit eveniet error nihil, odio placeat ducimus aspernatur quos assumenda eos cupiditate ullam iusto sint. Doloremque, aspernatur quo.',
  },
  {
    mainTitle: 'Maria Reneé',
    subTitle: 'Full-Stack Engineering',
    photo: Renne,
    linkProfile:
      'https://www.linkedin.com/in/maria-rene%C3%A9-palma-07855416a/',
    alt: 'Maria Renee',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error, quis perferendis cum corrupti necessitatibus esse autem magnam provident unde nemo nihil repellendus quod aut porro velvero. Dolores, similique.',
  },
  {
    mainTitle: 'Ricardo Hernandez',
    subTitle: 'Full-Stack Engineering',
    photo: Ricardo,
    linkProfile:
      'https://www.linkedin.com/in/ricardo-hernandez-ramirez-124824103/',
    alt: 'Ricardo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error, quis perferendis cum corrupti necessitatibus esse autem magnam provident unde nemo nihil repellendus quod aut porro velvero. Dolores, similique.',
  },
  {
    mainTitle: 'Jose Sic',
    subTitle: 'Quality Assurance Engineering',
    photo: jose,
    linkProfile:
      'https://www.linkedin.com/in/jos%C3%A9-manuel-sic-canil-860b1b158/',
    alt: 'Jose',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error, quis perferendis cum corrupti necessitatibus esse autem magnam provident unde nemo nihil repellendus quod aut porro velvero. Dolores, similique.',
  },
  {
    mainTitle: 'Julio Carpio',
    subTitle: 'Quality Assurance Engineering',
    photo: Carpio,
    linkProfile: 'https://www.linkedin.com/in/julio-carpio-89ba40a4/',
    alt: 'Carpio',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error, quis perferendis cum corrupti necessitatibus esse autem magnam provident unde nemo nihil repellendus quod aut porro velvero. Dolores, similique.',
  },
];
const Team = () => {
  const render = teamMembers.map((teamMember, index) => {
    return (
      <div className={`team__group group--${index}`} key={index}>
        <CardProfile
          mainTitle={teamMember.mainTitle}
          subTitle={teamMember.subTitle}
          description={teamMember.description}
          photo={teamMember.photo}
          linkProfile={teamMember.linkProfile}
          alt={teamMember.alt}
        />
      </div>
    );
  });
  return (
    <>
      <Header />
      <div className="team">{render}</div>
      <Footer />
    </>
  );
};

export default Team;
