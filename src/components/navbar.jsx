import { React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Modal from './contactModal';
import { MdComputer } from 'react-icons/md';
import { IoMdDownload } from 'react-icons/io';

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const [openModal, setOpenModal] = useState(false);

  const downloadResume = () => {
    fetch('eatmorevegetabl.github.io/public/resume.3.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume.3.pdf';
        alink.click();
      });
    });
  };

  return (
    <nav className='bg-teal-500 p-6 lg:flex lg:justify-between'>
      <div className='flex items-center justify-between flex-wrap'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <Link to='/' className='flex'>
            <MdComputer className='fill-current mr-2 text-3xl' />
            <span className='font-semibold text-xl tracking-tight'>
              Moisés Valerin
            </span>
          </Link>
        </div>
        <div className='block lg:hidden'>
          <button
            className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
            onClick={() => {
              setExpandNavbar((prev) => !prev);
            }}
          >
            <svg
              className='fill-current h-5 w-5'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
      </div>
      <div className={`lg:block ${expandNavbar ? 'block' : 'hidden'}`}>
        <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-lg lg:flex-grow'>
            <Link
              to='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
            >
              Home
            </Link>
            <HashLink
              smooth
              to='/#skills'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
            >
              Skills
            </HashLink>
            <Link
              to='/projects'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
            >
              Projects
            </Link>
            <Link
              to='/experience'
              className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
            >
              Experience
            </Link>
          </div>
          <div>
            <button
              className='inline-flex items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-4'
              onClick={downloadResume}
            >
              Resumé
              <IoMdDownload className='text-lg ml-2' />
            </button>
            <button
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Contact Me
            </button>
            {openModal && <Modal closeModal={setOpenModal} />}
          </div>
        </div>
      </div>
    </nav>
  );
}
