import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../assets/__b1.png';
import bannerImg2 from '../../assets/__b2.png';
import bannerImg3 from '../../assets/__b3.png';

const Banner = () => {
    return (
        
            
            <Carousel autoPlay={true} infiniteLoop={true} className=''>
                <div>
                    <img src={bannerImg1} alt="Banner 1" className='' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={bannerImg2} alt="Banner 2" className='' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>   
                <div>
                    <img src={bannerImg3} alt="Banner 3" className='' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        
    );
};

export default Banner;
