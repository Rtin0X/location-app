import React from 'react';

// import image
import Image from '../assets/img/house-banner.png';

//  import components
import Search from '../components/Search';

const Banner = () => {
  return ( 
  
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-center text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'><span className='text-violet-800'>Louez</span> la maison <br /> de vos rêves</h1>
        <p className='max-w-[480px] mb-8'>Découvrez le luxe de louer la maison de vos rêves. Des escapades romantiques aux vacances en famille, notre sélection exclusive propose des résidences exceptionnelles pour des moments inoubliables. Louez bien plus qu'une maison, créez des souvenirs extraordinaires dès maintenant.</p>
      </div>
      {/* image */}
      <div className='hidden flex-1 lg:flex lg:justify-start lg:items-start'>
        <img src={Image} alt="" />
      </div>
    </div>
    <Search />
  </section>

  );
};

export default Banner;
