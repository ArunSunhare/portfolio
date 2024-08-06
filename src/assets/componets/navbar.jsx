import React from 'react';
function navbar() {
  return (
    <>
    <div className='nav'>
 
    <div className='  text-yellow-50 justify-content: center bg-white/10     flex h-16 items-center justify-between'>
      <a className='  mt-0 ml-64 font-semibold text-lg cursor-pointer '> Arun Ahirwar</a>
      <ul className='flex space-x-4  justify-center m-4 pl-6rem cursor-pointer'>
        <li>Service</li>
        <li>Projects</li>
        <li>About me</li>
        <li>Contact</li>
      </ul>
      <a className='m-1 mr-64 cursor-pointer'>Work Request  </a>
  </div>
  <div className=''> 
    <img    className='max-w-96 m-auto 	' src="/developer.png  " alt="" />
  </div>
  <div><h6 className='text-7xl text-slate-50 font-bold	mt-36 m-auto ml-60'>React / Front-End Developer</h6></div>
   </div>
   
    </>
  );
};

export default navbar




