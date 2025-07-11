import React, { useState, useEffect } from 'react';
import { Download, BookOpen, EyeIcon } from 'lucide-react';
import Arrow from '../Components/Arrow.jsx';
import Guide1 from '../assets/Guide1.jpg'
import FloatGeometry from '../Components/FloatGeometry.jsx';
import Social from '../Components/Social.jsx';

const PlacementGuide = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Placement Guide.";

  useEffect(() => {
    setIsVisible(true);

    let index = 0;
  const interval = setInterval(() => {
    setTypedText(fullText.slice(0, index + 1));
    index++;

    if (index === fullText.length) {
      clearInterval(interval);
      setIsTypingComplete(true);
    }
  }, 150);

  return () => clearInterval(interval);


  }, []);

  const guides = [
    {
      id: 1,
      title: "Placement Guide 2024 Edition",
      description: "Based on the 2020–2024 batch placement statistics at Puducherry Technological University, this guide serves as a foundational resource for campus placement preparation.",
      highlights: [
        "Comprehensive CS/IT-ECE industry focus",
        "Real batch statistics from 2020-2024",
        "Foundational placement preparation",
        "Led by CSE'24 batch initiatives"
      ],
      downloadLink: "https://drive.google.com/file/d/17HR8bu2dPu4SZGTrZSp-o--KKTyP-yZ2/view",
      bgColor: "bg-red-500",
      hoverColor: "group-hover:text-red-600 transition-colors",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Placement Guide 2025 Edition",
      description: "Complete placement preparation guide featuring industry insights, company profiles, and strategic preparation methods for the 2025 placement season.",
      highlights: [
        "Updated for 2025 placement season",
        "Industry-specific preparation strategies",
        "Company-wise preparation guides",
        "Expert-curated content by DC25 team"
      ],
      downloadLink: "https://drive.google.com/file/d/1rb03Ze5jAfyoVRW2r0WjUt2YQmseLQ--/view",
      bgColor: "bg-blue-600",
      hoverColor: "group-hover:text-blue-600 transition-colors",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
        <Social />
      <div className="relative min-h-screen bg-white overflow-hidden">
        
        <FloatGeometry />
        
        <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-yellow-400 rounded-full transform translate-x-1/2 -translate-y-1/2 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-80 lg:h-80 bg-red-500 transform -translate-x-1/2 translate-y-1/2 opacity-80" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        
        <div className="relative z-10 container mx-auto px-4 pt-16 lg:pt-32 pb-16 min-h-screen flex flex-col justify-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-8 lg:mb-12 leading-none">
            {typedText}
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </h1>

            
            <div className='absolute left-6 ml-2 mb-2 hover:translate-y-5 duration-200 transition-all ease-linear'>
              <a href="#guides" className="inline-block">
                <Arrow color="bg-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-12 lg:mb-16 text-gray-900 text-center">
            Our Guides.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {guides.map((guide, index) => (
              <div
                key={guide.id}
                className={`transform transition-all duration-500 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="bg-white text-gray-900 rounded-2xl lg:rounded-3xl p-6 lg:p-8 hover:transform hover:scale-105 transition-all duration-300 group h-full relative overflow-hidden border-2 border-gray-200 hover:border-yellow-400">

                  <div className={`absolute top-0 right-0 w-20 h-20 lg:w-24 lg:h-24 ${guide.bgColor} transform rotate-45 translate-x-10 lg:translate-x-12 -translate-y-10 lg:-translate-y-12`}></div>
                  
                  <div className={`inline-flex items-center gap-2 ${guide.bgColor} text-white p-3 lg:p-4 rounded-xl lg:rounded-2xl mb-4 lg:mb-6 transition-all duration-300`}>
                    {guide.icon}
                    <span className="font-bold text-base lg:text-lg">Guide {guide.id}</span>
                  </div>
                  
                  <h3 className={`text-2xl lg:text-3xl font-black mb-3 lg:mb-4 ${guide.hoverColor}`}>
                    {guide.title}
                  </h3>
                  
                  <p className="text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed text-gray-700">
                    {guide.description}
                  </p>
                  
                  <div className="mb-6 lg:mb-8">
                    <h4 className={`text-lg lg:text-xl font-bold mb-3 lg:mb-4 ${guide.hoverColor}`}>Key Highlights:</h4>
                    <ul className="space-y-2 lg:space-y-3">
                      {guide.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 lg:mt-3 flex-shrink-0"></div>
                          <span className="text-sm lg:text-base text-gray-700 ">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-3 lg:gap-4">
                    <a 
                      href={guide.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-3 ${guide.bgColor} text-white px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <EyeIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                      View Guide
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="container mx-auto px-4" id="guides">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900">
                Behind the Initiative
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                The PTU-DC Impact initiative represents a collaborative effort by passionate students who recognized the need for comprehensive placement preparation resources. Drawing from real batch statistics and industry insights, these guides serve as foundational resources for future engineering graduates.
              </p>
              <div className="bg-blue-600 text-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 lg:w-16 lg:h-16 bg-yellow-400 transform rotate-45 translate-x-6 lg:translate-x-8 -translate-y-6 lg:-translate-y-8"></div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">Mission Statement</h3>
                <p className="text-base lg:text-lg leading-relaxed">
                  "To empower students with data-driven placement preparation strategies and create a legacy of knowledge sharing that shapes the university's identity through dynamic design initiatives."
                </p>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-1 gap-4 lg:gap-6">
                <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 relative overflow-hidden">
                  <img src={Guide1} alt="Preview not available" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 lg:mb-8 text-gray-900">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 max-w-3xl mx-auto">
            Download both guides and start your placement preparation with confidence. More branches and specialized guides coming soon!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <a 
              href="https://drive.google.com/uc?export=download&id=17HR8bu2dPu4SZGTrZSp-o--KKTyP-yZ2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-red-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-red-500 hover:text-black w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="whitespace-nowrap">Download PTU-DC 2024 Guide</span>
            </a>
            <a 
              href="https://drive.google.com/uc?export=download&id=1rb03Ze5jAfyoVRW2r0WjUt2YQmseLQ--"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-600 hover:text-black w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="whitespace-nowrap">Download PTU-DC 2025 Guide</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementGuide;