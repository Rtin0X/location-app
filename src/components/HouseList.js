import React, { useContext } from 'react';

// import context
import { HouseContext } from './HouseContext';

// import components
import House from './House';

// import link
import { Link } from 'react-router-dom';

// import icons
import { ImSpinner2 } from 'react-icons/im';


const HouseList = () => {

  const {houses, loading} = useContext(HouseContext);

  // if loading
  if (loading) {
    return (<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />)
  }

  if (houses.length < 1) {
    return <div className='text-center text-3xl text-gray-40 mt-48'>Désolé, aucun résultat n'a été trouvé </div>
  }

  return ( 
  
    <section className='mb-20 w-full'>
      <div className="container mx-auto w-full">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 lg:py-6'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default HouseList;
