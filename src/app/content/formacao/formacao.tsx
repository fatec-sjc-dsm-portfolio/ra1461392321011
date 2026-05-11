import React from 'react';
import LetterPullup from '../../components/animation/letterPullpup/letterPullpup';

const formacoes = [
  {
    instituicao: 'FATEC Prof. Jessen Vidal',
    curso: 'Tecnologia em Desenvolvimento de Software Multiplataforma (DSM)',
    periodo: '2023 – Atualmente',
    semestre: '6° Semestre',
    descricao:
      'Curso superior de tecnologia com foco no desenvolvimento de sistemas web, mobile e desktop. Durante o curso, participei de 5 ciclos de Aprendizagem por Projetos Integrados (API), desenvolvendo soluções reais em parceria com empresas parceiras da FATEC.',
  },
  {
    instituicao: 'ETEC Ilza Nascimento Pintus',
    curso: 'Técnico em Desenvolvimento de Sistemas',
    periodo: 'Concluído',
    semestre: 'São José dos Campos',
    descricao:
      'Curso técnico com foco em lógica de programação, desenvolvimento de sistemas e banco de dados. Base que impulsionou minha entrada no mercado de tecnologia e na graduação em DSM.',
  },
];

export default function Formacao() {
  return (
    <section id="formacao" className="mb-12 px-6 sm:px-12 lg:px-24">
      <div style={{ userSelect: 'none' }}>
        <LetterPullup words="Formação" delay={0.08} />
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {formacoes.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 transform transition duration-300 hover:shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl text-gray-800 font-bold">{item.instituicao}</h3>
              <span className="text-sm text-purple-600 font-semibold mt-1 sm:mt-0">{item.periodo}</span>
            </div>
            <p className="text-gray-700 font-medium mb-1">{item.curso}</p>
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded mb-3">
              {item.semestre}
            </span>
            <p className="text-gray-600 text-sm">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
