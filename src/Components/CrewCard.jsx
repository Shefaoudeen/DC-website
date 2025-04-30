import React from 'react'

const CrewCard = ({ member }) => {
    return (
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden mx-2 min-w-[300px] md:min-w-[400px]">
        <div className="w-1/2">
          <img 
            src={member.picture} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
          <p className="text-gray-600 mt-1">{member.designation}</p>
        </div>
      </div>
    );
  };

  
export default CrewCard
