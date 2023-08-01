import kenzie_food from '../assets/kenzie_food.png';
import kenzie_hub from '../assets/kenzie_hub.png';
import myburger from '../assets/myburger.jpg';
import Nu from '../assets/Nu.png';
import Bicos from '../assets/bicos.png';
import Burguer from '../assets/burguer.jpg';
import Hanoi from '../assets/hanoi.jpg';

export const mainProjects = [
  {
    title: 'Nu Kenzie',
    img: Nu,
    description:
      'Aplicação React-Js para gerenciamento de gastos, cadastrando entradas e saídas, e calculando o saldo total. App onde foi praticado o conceito de componetização, States, prop-drilling ,etc. ',
    urlRepo:
      'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-estevaolibardi',
    urlProject: 'https://nu-kenzie-gamma-eight.vercel.app/',
    tech: ['react-icons,', 'css'],
  },
  {
    title: 'Kenzie Burguer',
    img: Burguer,
    description:
      'Aplicação React-Js consumindo uma Api para listagem de produtos, e simulação de carrinho de compras. App onde foi praticado uma request para uma Api, states, funções etc. ',
    urlRepo:
      'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-estevaolibardi',
    urlProject:
      'https://react-entrega-s1-hamburgueria-da-kenzie-estevaol-estevaolibardi.vercel.app/',
    tech: ['axios,', 'css'],
  },
  {
    title: 'Kenzie Hub',
    img: kenzie_hub,
    description:
      'Aplicação em React Js, consumindo uma api para realizar algumas funcionalidades da aplicação, como cadastro do usuário e de tecnologias aprendidas, bem como deleção e atualização do seu status. App onde foi praticado requests para  uma api, estilização com styled-components etc. ',
    urlRepo:
      'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-estevaolibardi',
    urlProject:
      'https://react-entrega-s2-kenzie-hub-estevaoli-git-4c808f-estevaolibardi.vercel.app/',
    tech: [
      'styled-components,',
      'react-router-dom,',
      'axios,',
      'react-hook-form,',
      'styled-c,',
      'yup.',
    ],
  },
  {
    title: 'My Burger',
    img: myburger,
    description:
      'Aplicação React-Js  listando produtos e simulando carrinho de compras. App onde foi praticado context-api para o carrinho de compras, componetização, funções, tipagens e estilização dinâmica através do styled-components. ',
    urlRepo: 'https://github.com/estevaolibardi/myburger',
    urlProject: 'https://myburger-beige.vercel.app/',
    tech: [
      'styled-c,',
      'react-router-dom,',
      'axios,',
      'typescript,',
      'context-api,',
      'react-hook-form,',
      'zod.',
    ],
  },
  {
    title: 'Bicos Services',
    img: Bicos,
    description:
      'Aplicação em React Js, que permite clientes solicitarem pequenos serviços do dia-a-dia, e usuários registrados como prestadores de serviços, terem a opção de se candidatar para os serviços disponíveis. O cliente pode ver quem concorreu ao serviço, e aceitar o prestador ou não.',
    urlRepo: 'https://github.com/leonardomarchioro/projetocapstone_bico.com',
    urlProject: 'https://bico.vercel.app/',
    tech: [
      'styled-components,',
      'react-router-dom,',
      'yup,',
      'react-hook-form,',
      'context-api.',
    ],
  },

  {
    title: 'Hanoi Tower',
    img: Hanoi,
    description:
      'Desenvolvimento do jogo Torre de Hanoi em Vanilla Js, com níveis de dificuldade.',
    urlRepo:
      'https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-torre-de-hanoi-sprint-1a-estevaolibardi',
    urlProject:
      'https://kenzie-academy-brasil-developers.github.io/m2-entrega-torre-de-hanoi-sprint-1a-estevaolibardi/',
    tech: [],
  },
  {
    title: 'Kenzie Food',
    img: kenzie_food,
    description:
      'Projeto e-commerce em Html, Css e Javascript. Foi consumido uma api para receber os produtos. Features: adicionar card ao  carrinho, calcular valor total dos itens no carrinho, botão de filtragem de produtos, campo de busca de produtos de acordo com o nome.',
    urlRepo:
      'https://github.com/estevaolibardi/api-kenziefood-m2-estevaolibardi',
    urlProject:
      'https://estevaolibardi.github.io/api-kenziefood-m2-estevaolibardi/',
    tech: [],
  },
];
