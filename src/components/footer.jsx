import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer bg-gray-900 text-white'>
      <div className='socialMedia md:flex md:justify-between md:items-center sm:px-12 px-4 bg-teal-500 py-7'>
        <span className='font-semibold text-xl tracking-tight'>
          Moisés Valerin &copy; 2023 eatmorevegetabl.github.io/moival
        </span>
        <div>
          <span className='inline-flex items-center text-2xl'>
            <a
              href='https://www.linkedin.com/in/moises-valerin-876ba6242/'
              target='_blank'
              rel='noopener noreferrer'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer'
            >
              <FaLinkedinIn />
            </a>
            <a
              href='https://github.com/eatmorevegetabl'
              target='_blank'
              rel='noopener noreferrer'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer'
            >
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
