"use client";

import React, { useState } from 'react';
import LetterPullup from '../../components/animation/letterPullpup/letterPullpup';
import { ModalProps } from '@/data/interfaces/projetosInterface';
import { Project } from '@/data/interfaces/projetosInterface';
import { projects } from '@/data/projetos/projetosData';
import { FaGithub } from 'react-icons/fa';

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOutsideClick}>
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
        <button className="text-gray-500 absolute top-4 right-4 text-lg font-bold" onClick={onClose}>✕</button>
        <div style={{ height: '480px', overflowY: 'auto' }}>
          <h3 className="text-2xl text-gray-800 font-bold mb-2">{project.title}</h3>
          <p className="text-purple-600 text-sm font-semibold mb-4">{project.category}</p>
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />

          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Tecnologias</p>
          <p className="text-gray-600 mb-4">{project.technologies.join(', ')}</p>

          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Sobre o Projeto</p>
          <p className="text-gray-600 mb-4">{project.details}</p>

          {project.contribution && (
            <>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Contribuição Pessoal</p>
              <p className="text-gray-600 mb-4">{project.contribution}</p>
            </>
          )}

          {project.hardskills && (
            <>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Hard Skills</p>
              <p className="text-gray-600 mb-4">{project.hardskills}</p>
            </>
          )}

          {project.softskills && (
            <>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Soft Skills</p>
              <p className="text-gray-600 mb-4">{project.softskills}</p>
            </>
          )}

          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-purple-500 transition-colors">
            <FaGithub className="h-6 w-6" />
            <span className="text-sm">Ver repositório no GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projetos: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const apiProjects = projects.filter(p => p.category === 'FATEC Prof. Jessen Vidal' && p.title.startsWith('API'));
  const otherProjects = projects.filter(p => !(p.category === 'FATEC Prof. Jessen Vidal' && p.title.startsWith('API')));

  return (
    <section id="projetos" className="mb-12 px-6 sm:px-12 lg:px-24">
      <div style={{ userSelect: 'none' }}><LetterPullup words="Principais Projetos" delay={0.08} /></div>

      <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-widest mt-8 mb-4">Aprendizagem por Projetos Integrados (API)</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apiProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden transform transition duration-500 hover:shadow-lg hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} width={600} height={400} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-gray-800 font-bold mb-1">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-widest mt-10 mb-4">Outros Projetos</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden transform transition duration-500 hover:shadow-lg hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} width={600} height={400} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-gray-800 font-bold mb-1">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Projetos;
