// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'Maison',
    name: 'Maison 1',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House1,
    imageLg: House1Lg,
    country: 'Etat-Unis',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 m²',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'Maison',
    name: 'Maison 2',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 m²',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'Maison',
    name: 'Maison 3',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House3,
    imageLg: House3Lg,
    country: 'Etat-Unis',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 m²',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'Maison',
    name: 'Maison 4',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 m²',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'Maison',
    name: 'Maison 5',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House5,
    imageLg: House5Lg,
    country: 'Etat-Unis',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 m²',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'Maison',
    name: 'Maison 6',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 m²',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Appartement',
    name: 'Appartement 1',
    description:
      "Offrez-vous le confort et l'élégance en louant notre appartement exceptionnel. Avec des espaces soigneusement aménagés, des commodités modernes et une localisation idéale, cet appartement est la clé d'une expérience de vie incomparable. Que vous cherchiez un refuge urbain ou un havre de paix, notre location vous offre l'opportunité de créer un chez-vous temporaire, où le style et le bien-être se rencontrent. Découvrez une nouvelle dimension de la vie quotidienne en louant cet appartement unique.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 m²',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Appartement',
    name: 'Appartement 2',
    description:
      "Offrez-vous le confort et l'élégance en louant notre appartement exceptionnel. Avec des espaces soigneusement aménagés, des commodités modernes et une localisation idéale, cet appartement est la clé d'une expérience de vie incomparable. Que vous cherchiez un refuge urbain ou un havre de paix, notre location vous offre l'opportunité de créer un chez-vous temporaire, où le style et le bien-être se rencontrent. Découvrez une nouvelle dimension de la vie quotidienne en louant cet appartement unique.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Etat-Unis',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 m²',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Appartement',
    name: 'Appartement 3',
    description:
      "Offrez-vous le confort et l'élégance en louant notre appartement exceptionnel. Avec des espaces soigneusement aménagés, des commodités modernes et une localisation idéale, cet appartement est la clé d'une expérience de vie incomparable. Que vous cherchiez un refuge urbain ou un havre de paix, notre location vous offre l'opportunité de créer un chez-vous temporaire, où le style et le bien-être se rencontrent. Découvrez une nouvelle dimension de la vie quotidienne en louant cet appartement unique.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Etat-Unis',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 m²',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'Maison',
    name: 'Maison 7',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 m²',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'Maison',
    name: 'Maison 8',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 m²',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'Maison',
    name: 'Maison 9',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House9,
    imageLg: House9Lg,
    country: 'Etat-Unis',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 m²',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'Maison',
    name: 'Maison 10',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 m²',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'Maison',
    name: 'Maison 11',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House11,
    imageLg: House11Lg,
    country: 'Etat-Unis',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 m²',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'Maison',
    name: 'Maison 12',
    description:
      "Découvrez le charme inégalé de notre maison à louer. Avec ses espaces généreux, ses finitions élégantes et son ambiance chaleureuse, cette résidence est l'endroit idéal pour des moments inoubliables. Louez cette maison, créez des souvenirs exceptionnels et vivez une expérience résidentielle unique.",
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 m²',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Appartement',
    name: 'Appartement 16',
    description:
      "Offrez-vous le confort et l'élégance en louant notre appartement exceptionnel. Avec des espaces soigneusement aménagés, des commodités modernes et une localisation idéale, cet appartement est la clé d'une expérience de vie incomparable. Que vous cherchiez un refuge urbain ou un havre de paix, notre location vous offre l'opportunité de créer un chez-vous temporaire, où le style et le bien-être se rencontrent. Découvrez une nouvelle dimension de la vie quotidienne en louant cet appartement unique.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 m²',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Appartement',
    name: 'Appartement 17',
    description:
      "Offrez-vous le confort et l'élégance en louant notre appartement exceptionnel. Avec des espaces soigneusement aménagés, des commodités modernes et une localisation idéale, cet appartement est la clé d'une expérience de vie incomparable. Que vous cherchiez un refuge urbain ou un havre de paix, notre location vous offre l'opportunité de créer un chez-vous temporaire, où le style et le bien-être se rencontrent. Découvrez une nouvelle dimension de la vie quotidienne en louant cet appartement unique.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Etat-Unis',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 m²',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Appartement',
    name: 'Appartement 18',
    description:
      "Offrez-vous le confort et l'élégance en louant notre appartement exceptionnel. Avec des espaces soigneusement aménagés, des commodités modernes et une localisation idéale, cet appartement est la clé d'une expérience de vie incomparable. Que vous cherchiez un refuge urbain ou un havre de paix, notre location vous offre l'opportunité de créer un chez-vous temporaire, où le style et le bien-être se rencontrent. Découvrez une nouvelle dimension de la vie quotidienne en louant cet appartement unique.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 m²',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
