import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/projectList';
import { BsGithub } from 'react-icons/bs';
import { TbExternalLink } from 'react-icons/tb';

export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project w-full flex content-center items-center flex-col'>
      <h1 className='mt-12 mb-6 text-4xl font-Arimo'> {project.name} </h1>
      <p className='text-3xl mb-3 font-Arimo'>
        Skills: <span className='text-sky-500'>{project.skills}</span>
      </p>
      <a href={project.link} target='_blank' rel='noopener noreferrer'>
        <div className='flex mx-auto font-Arimo hover:text-teal-500'>
          <p className='text-3xl mb-3'>Live Link</p>
          <TbExternalLink />
        </div>
      </a>
      <img
        className='rounded-xl w-9/12'
        src={project.image}
        alt={'project screenshot'}
      />
      <div className='text-6xl m-3'>
        <a
          href={project.github}
          target='_blank'
          rel='noopener noreferrer'
          className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-500 mr-4 cursor-pointer'
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
}
