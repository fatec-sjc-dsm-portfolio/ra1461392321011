import imageVendas from '../../../public/images/vendas.jpeg';
import API2 from '../../../public/images/api-2.gif';
import Barbearia from '../../../public/images/barbearia.jpeg';
import API1 from '../../../public/images/pixels.gif';
import API3 from '../../../public/images/api-3.gif';
import API5 from '../../../public/images/api-5.gif';
import API4 from '../../../public/images/api-4.gif';
import { Project } from '../interfaces/projetosInterface';

export const projects: Project[] = [
  {
    title: 'API 5° Semestre',
    image: API5.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: "No segundo semestre de 2025 colaborei em um projeto cujo objetivo foi o desenvolvimento de um sistema mobile para gestão e controle de estoque de almoxarifado e farmácia, em parceria com o Exército de Caçapava.",
    contribution: 'Fiquei responsável por desenvolver a maioria dos componentes e telas da aplicação mobile utilizando Flutter. Também colaborei com a integração do frontend com o backend utilizando APIs RESTful. Durante o desenvolvimento, enfrentei desafios relacionados à otimização do desempenho da aplicação e à implementação de funcionalidades específicas solicitadas pelo cliente. Trabalhei em estreita colaboração com a equipe de backend para garantir que as funcionalidades fossem implementadas de acordo com os requisitos do projeto. Além disso, participei de reuniões regulares com o cliente para apresentar o progresso e receber feedbacks.',
    hardskills: 'Flutter, Node, React, HTML, CSS, TypeScript, PostgreSQL, Git, Firebase',
    softskills: "As soft skills mais trabalhadas foram comunicação, adaptação e proatividade. Com a entrada de novos integrantes ao time foi necessário redistribuir tarefas e integrar essas pessoas ao ritmo já estabelecido, exigindo comunicação clara e liderança. O desenvolvimento com Flutter como nova tecnologia demandou proatividade e aprendizado rápido. As reuniões com o cliente (Exército de Caçapava) fortaleceram minha habilidade de comunicação profissional e apresentação de resultados. A principal dificuldade foi balancear a integração dos novos membros com a entrega das funcionalidades planejadas.",
    technologies: ['Flutter', 'Node', 'React', 'HTML', 'CSS', 'TypeScript', 'PostgreSQL', 'Git', 'Firebase'],
    link: 'https://github.com/Sync-FATEC/API-2025.2-5SEM'
  },
  {
    title: 'API 4° Semestre',
    image: API4.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: "No primeiro semestre de 2025 colaborei em um projeto cujo objetivo foi o desenvolvimento de uma aplicação web para monitoramento de dados com dashboard de estação meteorológica, em parceria com a fundação FAPG localizada no PIT (Parque de Inovação Tecnológica) em São José dos Campos. A aplicação coleta dados de sensores IoT utilizando o protocolo MQTT e armazena essas informações em um banco de dados. O dashboard apresenta gráficos e estatísticas em tempo real, permitindo monitorar as condições climáticas de forma eficiente.",
    contribution: 'Contribuí com o desenvolvimento da coleta de dados da estação para envio via MQTT ao backend. Também colaborei com a criação do dashboard utilizando React, implementando gráficos interativos para exibir os dados coletados. Durante o desenvolvimento, enfrentei desafios relacionados à integração do protocolo MQTT com o backend e à otimização do desempenho do dashboard para lidar com grandes volumes de dados em tempo real. Trabalhei em estreita colaboração com a equipe de backend e participei de reuniões regulares com o cliente para apresentar o progresso e receber feedbacks.',
    hardskills: 'TypeScript, Node, React, HTML, CSS, Python, PostgreSQL, Git, MongoDB, MQTT',
    softskills: "As soft skills mais trabalhadas foram comunicação técnica e trabalho em equipe. A integração com o protocolo MQTT exigiu colaboração precisa e constante com a equipe de backend, desenvolvendo minha habilidade de comunicação técnica. As reuniões regulares com o cliente da FAPG foram fundamentais para aprimorar minha capacidade de apresentar resultados e receber feedbacks de forma construtiva. O desafio de lidar com grandes volumes de dados em tempo real exigiu proatividade e organização para identificar gargalos e propor soluções de otimização.",
    technologies: ['TypeScript', 'Node', 'React', 'PostgreSQL', 'MongoDB', 'HTML', 'CSS', 'Git', 'Python', "MQTT"],
    link: 'https://github.com/Sync-FATEC/API-2025.1-4SEM'
  },
  {
    title: 'API 3° Semestre',
    image: API3.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: "No segundo semestre de 2024 colaborei em um projeto cujo objetivo foi o desenvolvimento de um Portal de Transparência em parceria com a fundação FAPG localizada no PIT (Parque de Inovação Tecnológica) em São José dos Campos. Um dos requisitos era realizar uma aplicação intuitiva e acessível ao usuário comum para visualização de projetos, e também à parte administrativa, com foco na gestão de projetos, coordenadores, empresas, bolsistas e bolsas. Também é possível gerar relatórios e um documento do projeto a partir do dashboard.",
    contribution: 'Neste projeto tive uma experiência muito enriquecedora. Formei grupo com pessoas de outros grupos para aprimorar comunicação e trabalho em equipe. Nas primeiras sprints nossa equipe ganhou ritmo até receber 3 novos integrantes, elevando o grupo de 6 para 9 pessoas. Após essa integração, o maior desafio foi adaptar o ritmo e replanejar as tarefas para corresponder às expectativas de um grupo maior. No desenvolvimento, colaborei com o envio de e-mail ao administrador quando um projeto estiver próximo do vencimento, refatoração de código, documentação do produto e comunicação entre a equipe.',
    hardskills: 'Java, Spring Boot, React, HTML, CSS, Python, MySQL, Git',
    softskills: "As soft skills mais trabalhadas foram comunicação, trabalho em equipe, adaptação e proatividade. Com a entrada de 3 novos integrantes tivemos que explicar o projeto, redistribuir tarefas e adaptar o ritmo de desenvolvimento. A comunicação foi peça fundamental para que todos estivessem alinhados ao andamento das atividades. A principal dificuldade foi a adaptação do planejamento original, feito para 6 pessoas, à nova realidade de um grupo maior com diferentes expectativas de entrega.",
    technologies: ['Spring Boot', 'Java', 'React', 'MySQL', 'Python', 'HTML', 'CSS', 'Git'],
    link: 'https://github.com/Sync-FATEC/API-2024.2-3SEM'
  },
  {
    title: 'API 2° Semestre',
    image: API2.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'No primeiro semestre de 2024 colaborei em um projeto cujo objetivo foi desenvolver uma aplicação web para facilitar a gestão de solicitações de suporte técnico. O tema escolhido foi uma empresa de móveis. O sistema recebia chamados de clientes com dúvidas, problemas ou insatisfações e atribuía a um técnico com horário específico para resolvê-los. O cliente podia avaliar o técnico após o atendimento. O administrador tinha acesso completo e podia gerar relatórios a partir do dashboard.',
    contribution: 'Neste semestre formei um novo grupo em busca de integrantes com bom conhecimento técnico. O maior desafio foi a comunicação entre os membros divididos em dois polos, o que prejudicou o alinhamento sobre andamento das atividades, dúvidas e prazos. Aprendi que a comunicação é peça vital para qualquer time. Colaborei com o desenvolvimento backend da aplicação, implementando funcionalidades como criação de Problema, validação de horário do técnico e refatoração de código.',
    hardskills: 'React, Prisma, Node.js, TypeScript, MySQL, HTML, CSS, Git',
    softskills: 'Neste projeto atuei como Desenvolvedor com o objetivo de aprimorar autonomia, comunicação e proatividade, juntando-me a um grupo novo. Porém, a comunicação não foi um ponto forte neste semestre devido à divisão geográfica do grupo. Aprendi que a comunicação eficaz é insubstituível em qualquer projeto e que escolher bem os integrantes e manter canais de comunicação claros é tão importante quanto o conhecimento técnico.',
    technologies: ['React', 'Prisma', 'Node.js', 'TypeScript', 'MySQL', 'HTML', 'CSS', 'Git'],
    link: 'https://github.com/TeamHiveAPI/API-2023.2'
  },
  {
    title: 'API 1° Semestre',
    image: API1.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'No segundo semestre de 2023 participei do meu primeiro projeto pela FATEC Jessen Vidal. O objetivo foi criar uma plataforma de auxílio para mães de crianças com Insuficiência Renal Crônica, com funcionalidade de blogs onde as mães podiam compartilhar experiências e acessar informações sobre a doença. O administrador podia gerenciar posts, usuários e comentários, além de gerar relatórios.',
    contribution: 'Formei grupo com amigos e pessoas com interesse em aprender. Ao longo do projeto enfrentamos a saída de uma integrante que trancou a faculdade e a desmotivação de outros membros, o que gerou grande responsabilidade para mim e para outros integrantes comprometidos. Colaborei com o desenvolvimento backend da aplicação, implementando funcionalidades como troca de senha, validação de usuário, criação de conta e criação de postagem no blog.',
    hardskills: 'Python, Flask, JavaScript, HTML, CSS, MySQL, Git',
    softskills: 'Atuei como Scrum Master na minha primeira experiência em trabalho em equipe na faculdade, com pessoas que não conhecia. Aprendi sobre comunicação, organização de tarefas e gestão de pessoas. O maior aprendizado foi perceber o quanto a motivação e a determinação de cada integrante impactam o resultado do projeto, e o quão mais produtivo é trabalhar com pessoas ágeis e com o mesmo nível de comprometimento.',
    technologies: ['Python', 'JavaScript', 'Flask', 'HTML', 'CSS', 'MySQL', 'Git'],
    link: 'https://github.com/Kaue-Francisco/Pixels'
  },
  {
    title: 'Barbearia Companhia do Bigode',
    image: Barbearia.src,
    category: 'Pessoal',
    details: 'Este projeto está sendo desenvolvido para uma barbearia real chamada Companhia do Bigode, localizada no bairro Parque Industrial de São José dos Campos. O objetivo é criar um sistema de gerenciamento de clientes, serviços e agendamentos. O sistema terá uma área de administração para visualização, adição, edição e exclusão de clientes, serviços e agendamentos, além de uma área do usuário para agendamento online.',
    contribution: '',
    softskills: '',
    hardskills: '',
    technologies: ['React', 'TypeScript', 'Prisma', 'Node.js', 'MySQL'],
    link: 'https://github.com/Kaue-Francisco/Barbearia'
  },
  {
    title: 'Tracking com DeepSort',
    image: 'https://github.com/Kaue-Francisco/Deepsort_Yolov5/raw/main/media/example.gif',
    category: 'Pessoal',
    details: "Projeto de rastreamento de objetos utilizando Deep SORT com detecção via modelo YOLOv5 (COCO). O código detecta e rastreia carros em tempo real a partir de vídeos, demonstrando aplicação prática de Visão Computacional.",
    contribution: '',
    hardskills: '',
    softskills: "",
    technologies: ['Python', 'JupyterNotebook', 'OpenCV', 'YOLOv5'],
    link: 'https://github.com/Kaue-Francisco/Deepsort_Yolov5.git'
  },
  {
    title: 'Climate Check',
    image: 'https://github.com/Kaue-Francisco/ClimateCheck/raw/main/static/demonstracao/home.png',
    category: 'Pessoal',
    details: 'Este projeto tem valor sentimental pois foi uma das primeiras aplicações que desenvolvi, aos 16 anos. Foi meu primeiro contato com serviços backend, API RESTful e frontend. O objetivo era permitir que o usuário visualizasse as condições climáticas atuais de qualquer cidade.',
    contribution: '',
    softskills: '',
    hardskills: '',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'WeatherAPI'],
    link: 'https://github.com/Kaue-Francisco/ClimateCheck'
  },
  {
    title: 'Projeto Final Desenvolvimento Web',
    image: imageVendas.src,
    category: 'FATEC Prof. Jessen Vidal',
    details: 'Projeto Final da disciplina de Desenvolvimento Web na FATEC. Sistema de gerenciamento de vendas de um mercado, permitindo ao administrador adicionar, editar, excluir e visualizar produtos, vendas e clientes.',
    contribution: '',
    softskills: '',
    hardskills: '',
    technologies: ['React', 'Prisma', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    link: 'https://github.com/Kaue-Francisco/Desenvolvimento-Web-2/tree/main/projeto_final',
  },
];
