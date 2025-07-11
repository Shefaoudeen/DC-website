import React, { useState, useEffect } from 'react';

const FloatGeometry = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
     
      <div 
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-500 transform rotate-12 transition-all duration-1000 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.5}px) rotate(${12 + scrollY * 0.1}deg)`,
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-red-400 transform translate-x-2 translate-y-2 -z-10"></div>
      </div>

      
      <div 
        className="absolute top-1/3 left-1/6 w-24 h-24 bg-blue-500 rounded-full opacity-80 animate-pulse"
        style={{
          transform: `translateY(${scrollY * 0.3}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)`
        }}
      ></div>

      <div 
        className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-yellow-400 rounded-full opacity-60"
        style={{
          transform: `translateY(${scrollY * -0.2}px) translateX(${Math.cos(scrollY * 0.008) * 30}px)`
        }}
      ></div>

      
      <div 
        className="absolute top-1/2 left-[8%] w-20 h-20 bg-red-500 opacity-70"
        style={{
          transform: `translateY(${scrollY * 0.4}px) rotate(${45 + scrollY * 0.05}deg)`
        }}
      ></div>

      <div 
        className="absolute bottom-1/3 right-1/6 w-12 h-12 bg-blue-600 opacity-80"
        style={{
          transform: `translateY(${scrollY * -0.3}px) rotate(${12 + scrollY * 0.08}deg)`
        }}
      ></div>

     
      <div 
        className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-b from-yellow-400 to-transparent origin-top"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.6}px) rotate(${scrollY * 0.1}deg)`
        }}
      ></div>
    </div>
  );
};

export default FloatGeometry;
