import React from 'react';
import ProjectItem from '../components/projectItem';
import { ProjectList } from '../helpers/projectList';

import '../styles/projects.css';

export default function Projects() {
  return (
    <div className='projects w-full h-auto flex justify-center items-center flex-col'>
      <h1 className='text-center mt-6 text-6xl leading-snug text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-teal-800 font-Arimo'>
        Personal Projects
      </h1>
      <div className='projectList w-auto flex-1 grid lg:grid-cols-3 place-items-center font-Arimo'>
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}
