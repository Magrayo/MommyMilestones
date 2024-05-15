import React, { useState } from 'react';

const people = [
    {
        name: 'Dr. Patrick Hughes',
        role: 'Neonatologist',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661756453437-0dc2df3b3a19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        xUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Dr. Rachel Thompson',
        role: 'Pediatrician',
        imageUrl: 'https://images.unsplash.com/photo-1673865641073-4479f93a7776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        xUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Emily Hernandez',
        role: 'Maternity Nurse',
        imageUrl: 'https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        xUrl: '#',
        linkedinUrl: '#',
      },
  {
    name: 'Emma Dorsey',
    role: 'Lactation Consultant',
    imageUrl:
      'https://images.unsplash.com/photo-1622475440551-6c9564685ea9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Leslie Alexander',
    role: 'Genetic Counselor',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Leonard Krasner',
    role: 'Eye Specialist',
    imageUrl:
      'https://images.unsplash.com/photo-1666887360676-433fc13f0752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    xUrl: '#',
    linkedinUrl: '#',
  },
];

const Doctors = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex(prevIndex => (prevIndex + 3) % people.length);
  };

  const prevSlide = () => {
    setStartIndex(prevIndex => (prevIndex - 3 + people.length) % people.length);
  };

  return (
    
 
    <div className="relative mt-[50px] h-[650px] bg-grey">
    <h1 className=" font-semibold absolute top-[53px] left-0 right-0 text-center font-News text-[48px] leading-[58px] text-black ">Are you looking for</h1>
    <h3 className=" absolute top-[148px] left-0 right-0 transform -translate-y-1/2 text-center text-[38px] font-News font-light leading-[58px]">Pregnancy Specialist?</h3>

    <div className="flex items-center justify-center mt-[90px] h-[650px]">
      <button onClick={prevSlide} className="p-4 mt-[124px] bg-gray-300 rounded-full mr-4">&lt;</button>
      <div className="flex overflow-hidden mt-[120px]">
        {people.slice(startIndex, startIndex + 3).map((person, index) => (
          <div key={index} className="w-[290px] h-64 bg-white rounded-xl shadow-md overflow-hidden m-2 transition-transform hover:scale-105">
            <img src={person.imageUrl} alt="" className="w-full h-2/3 object-cover"/>
            <p className="text-center py-4">{person.name}</p>
            <p className="text-center">{person.role}</p>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="p-4 mt-[124px] bg-gray-300 rounded-full ml-4">&gt;</button>
    </div>
    </div>
  );
};

export default Doctors;
