import { exCrew } from '../Data/team';
import React, { useRef, useState, useEffect } from 'react';
import CrewCard from './CrewCard';

const ExCrew = () => {

  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0); 
  const initializedRef = useRef(false);
  
  const extendedItems = [...exCrew, ...exCrew, ...exCrew];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;


    const singleListWidth = carousel.scrollWidth/3;
    let animationId;
    
    const animate = () => {
      if (!isHovered) {
        positionRef.current += 1;
        
        if (positionRef.current >= singleListWidth * 2 ) {
          
          positionRef.current = singleListWidth;
          carousel.scrollLeft = positionRef.current;

        }else{
          carousel.scrollLeft = positionRef.current;
        }
        
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    if(!initializedRef.current){
      positionRef.current = singleListWidth;
      carousel.scrollLeft = positionRef.current;
      initializedRef.current = true;
    }
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered]);

  return (
    <div className="bg-[#ff1f25] select-none w-full flex flex-col justify-center items-center pt-20 pb-20 z-20 relative max-w-screen">
      <h2 className="text-4xl font-bold text-white mb-10">DC 24' Crew</h2>
      
      <div
        className="w-full max-w-6xl px-4 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#ff1f25] to-transparent z-10"></div>
        
        <div
          ref={carouselRef}
          className="flex overflow-hidden gap-4 py-4"
        >
          {extendedItems.map((member) => (
            <CrewCard member={member} />
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#ff1f25] to-transparent z-"></div>
      </div>
    </div>
  );
};

export default ExCrew;