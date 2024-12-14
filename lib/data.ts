import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

// import project

import dimensi from '@/public/images/project/dimensi.webp';
import exporttani from  '@/public/images/project/exporttani.webp';
import sikaya from '@/public/images/project/sikaya.webp';
import lmscheva from '@/public/images/project/lmscheva.webp';
import bookshelf from '@/public/images/project/bookshelf.webp';
import minangrancak from '@/public/images/project/minangrancak.webp';
import ExpoloreEpic from '@/public/images/project/ExploreEpic.png';
import Sipantai from '@/public/images/project/sipantai.jpg'
import foodcycle from '@/public/images/project/foodcycle.png'
import mijelin from '@/public/images/project/mijelin.png'



import Image from 'next/image';

//import skills
import python from '@/public/images/techstack/python.webp';
import figma from '@/public/images/techstack/figma.webp';
import git from '@/public/images/techstack/git.webp';
import github from '@/public/images/techstack/github.webp';
import react from '@/public/images/techstack/react.webp';
import vscode from '@/public/images/techstack/vscode.webp';
import tensorflow from '@/public/images/techstack/tensorflow.webp';
import tensorflowjs from '@/public/images/techstack/tensorflowjs.webp';
import keras from '@/public/images/techstack/keras.webp';
import javascript from '@/public/images/techstack/javascript.webp';
import tailwindcss from '@/public/images/techstack/tailwindcss.webp';
import npm from '@/public/images/techstack/npm.webp';
import vercel from '@/public/images/techstack/vercel.webp';
import laravel from '@/public/images/techstack/laravel.png';

// import sertifikat
import web from '@/public/images/sertifikat/web.webp';
import js from '@/public/images/sertifikat/javascript.webp';
import frontend from '@/public/images/sertifikat/frontend.webp';
import itsupport from '@/public/images/sertifikat/ITSupport.webp';
import kelulusandicoding from '@/public/images/sertifikat/dicodingkelulusan.webp';
import fundamental from '@/public/images/sertifikat/fundamental.webp';

//import models
import modeldicoding from '@/public/images/models/klasifikasidicoding.webp';
import modelorbit from '@/public/images/models/klasifikasiorbit.webp';
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'PT. Adhikari Inovasi Indonesia ',
    location: 'Bandung, Indonesia (onsite)',
    description: 'As a Fullstack Developer with expertise in CodeIgniter and Laravel, I specialize in building dynamic and scalable web applications. strong background in backend and frontend development ..',
    icon: React.createElement(LuGraduationCap),
    date: 'Agust 2023 - Present',
  },
  {
    title: 'Research STAS RG Telkom University',
    location: 'Bandung, Indonesia (onsite)',
    description: 'I learn as a Machine Fullstack and fullstack Developer with PHP Mysql,  in...',
    icon: React.createElement(LuGraduationCap),
    date: 'Oktober 2023 - Present',
  },

  {
    title: 'PT Exportatani Indonesia',
    location: 'Bogor, Indonesia (Remote)',
    description: 'I learn make website for bussines company ...',
    icon: React.createElement(CgWorkAlt),
    date: 'Juli 2022 - Januari 2024',
  },
  


  
 
] as const;

export const projectsData = [
  {
    title: 'Mijelin ',
    description:
'This is a pickup application for collecting used cooking oil for village communities. I made this project in fullstack with react js and Laravel technology',
    tags: ['React Js', 'Tailwind', 'Javascript'],
    imageUrl: mijelin,
    url: 'https://mijelin.netlify.app/',
    githubUrl: '',
  },
  {
    title: 'Food cycle ',
    description:
      'This is a web project to rescycle food waste in Indonesia. The application is made with responsive desktop and mobile pages. Developed with React JS (Front-End)',
    tags: ['React Js', 'Tailwind', 'Javascript'],
    imageUrl: foodcycle,
    url: 'https://foodcyle.netlify.app/',
    githubUrl: '',
  },
  {
    title: 'Food cycle ',
    description:
      'This is a web project to rescycle food waste in Indonesia. The application is made with responsive desktop and mobile pages. Developed with React JS (Front-End)',
    tags: ['React Js', 'Tailwind', 'Javascript'],
    imageUrl: foodcycle,
    url: 'https://foodcyle.netlify.app/',
    githubUrl: '',
  },
  {
    title: 'Explore Epic',
    description:
      'This is a web design project to take part in a web Design competition held on the theme of cultural history Indonesia. The website is created with HTML, CSS, JS and Responsive design',
    tags: ['HTML', 'css', 'Javascript,jQuery'],
    imageUrl: ExpoloreEpic,
    url: 'https://culture-epic.netlify.app/',
    githubUrl: '',
  },
  {
    title: 'Sipantai',
    description:
      'This is a website name "SIPANTAI" used for regional tourism and pawnshops for the people of the Pesisir Selatan Country. The application is made with responsive desktop and mobile pages. Developed with Laravel (Backend), React JS (Fornt-End)',
    tags: ['React', 'Laravel', 'REST API'],
    imageUrl: Sipantai,
    url: 'https://sipantai.netlify.app/',
    githubUrl: '',
  },
 
  {
    title: 'Minang Rancak',
    description:
      'This is a web design project to take part in a web design competition held on the theme of cultural history. The website is created with HTML, CSS, JS and responsive design',
    tags: ['HTML', 'css', 'Javascript'],
    imageUrl: minangrancak,
    url: 'https://aldi-rakis.github.io/Web-Design-Competition2024-MinangRancak/',
    githubUrl: '',
  },
  {
    title: 'Autodimension',
    description:
      'This website is the result of a Lecturer Research project at STAS RG Telkom Univeristy, used to monitor many items that have been measured in terms of item dimensions. As well as contracting many packages that have been sent or are already being processed.',
    tags: ['HTML', 'Boostrab', 'Javascript', 'PHP'],
    imageUrl: dimensi,
    url: 'https://autodimensi.000webhostapp.com/',
    githubUrl: '',
  },
  {
    title: 'Exporttani web',
    description:
      'This website is for a product export landing page for an exporter company. The website aims to find customers to purchase products from this company. Devepoment with React js, SCSS, and Tailwind CSS .',
    tags: ['React Js', 'Tailwind'],
    imageUrl: exporttani,
    url: 'https://exporttani.netlify.app/',
    githubUrl: '',
  },
  {
    title: 'sikaya Website ',
    description:
      'As a final submission for the "Becoming a Web Developer " class, this website is constructed using HTML,  CSS, and javascript. It effectively harnesses APIs provided by Dicoding Indonesia, showcasing the skills acquired throughout the course.',
    tags: ['html','Css','Js'],
    imageUrl: sikaya,
    url: 'https://sikaya.netlify.app/',
    githubUrl: '',
  },
  {
    title: 'My LMS Chevalier SAS',
    description:
   'This website was created to fulfill the needs of the Study Group assignments from the Chevalier SAS Lab, Faculty of Applied Sciences, Telkom University. I am developing Front-end website for LMS Chevalier. Develop with React js, Tailwind CSS',
    tags: ['PWA', 'Eslint', 'JavaScript'],
    imageUrl: lmscheva,
    url: 'https://lmscheva.netlify.app/',
    githubUrl: '',
  },
  {
    title: 'Bookshelf App',
    description:
      'As a final submission for the "Becoming a Front-End Developer " class, this website is constructed using HTML, CSS, and javascript. It effectively harnesses APIs provided by Dicoding Indonesia, showcasing the skills acquired throughout the course. learn to Manuplation DOM with Javascript',
    tags: ['Vite', 'Tensorflow JS', 'Tailwind'],
    imageUrl: bookshelf,
    url: 'https://bookshelf-book-dicoding.netlify.app/',
    githubUrl: '',
  },
  
] as const;

export const certificatesData = [
  {
    title: 'Belajar Dasar Pemrograman Web',
    description: 'Successfully completed the final project make a website with layout semantic html, and learn about HTML, CSS, Layout Responsive',
    tags: ['Dicoding', 'HTML', 'CSS', 'responsive'],
    imageUrl: web,
    url: 'https://www.dicoding.com/certificates/6RPNVDR65Z2M',
    githubUrl: '',
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    description: 'Successfully learn about javascript Fundamental, Functional Programming, Object-Oriented Programming , Data Structure, NPM',
    tags: ['Dicoding', 'Javascript', 'OOP', 'NPM'],
    imageUrl: js,
    url: 'https://www.dicoding.com/certificates/QLZ9R63NEP5D',
    githubUrl: '',
  },
  {
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    description: 'Successfully completed the final project , which is a make a website with manipulation DOM (Bookshelf APP) ',
    tags: ['Dicoding', 'Redux', 'React', 'Expert'],
    imageUrl: frontend,
    url: 'https://www.dicoding.com/certificates/1RXY10Q3QPVM',
    githubUrl: '',
  },
  {
    title: 'Google Coursera It Support',
    description: ' Get a Google Professional IT Support Certificate has completed five materials developed by Google, whichincludes direct practice-based assessments  ',
    tags: ['Dicoding', 'Redux', 'React', 'Expert'],
    imageUrl: itsupport, 
    url: 'https://coursera.org/verify/professional-cert/7YGUW7YKUTYQ',
    githubUrl: '',
  },
  
] as const;

export const modelsData = [
  {
    title: 'Submission Dicoding ',
    description: 'Successfully trained a dataset of images with 6 classes, achieving an accuracy of 95%, and a validation accuracy of 85%.',
    tags: ['Machine', 'Transfer', 'Learning'],
    imageUrl: modeldicoding,
    url: '',
    githubUrl: '',
  },
  {
    title: 'Model Image Classification 12 Classes',
    description: 'Successfully trained a dataset with 12 classes using the MobileNetV2 architecture and converted it into a TensorFlow.js model with an accuracy of 97%.',
    tags: ['Orbit', 'Model', 'Final', 'Project'],
    imageUrl: modelorbit,
    url: '',
    githubUrl: '',
  },
] as const;

export const skillsData = [
  {
    id: 0,
    name: 'Python',
    type: 'Programming Language',
    imageUrl: python,
    url: 'https://www.python.org/',
  },
  {
    id: 0,
    name: 'Laravel',
    type: 'Backend Framework',
    imageUrl: laravel,
    url: 'https://laravel.com/',
  },
  {
    id: 1,
    name: 'TensorFlow',
    type: 'Machine Learning Library',
    imageUrl: tensorflow,
    url: 'https://www.tensorflow.org/',
  },
  {
    id: 2,
    name: 'TensorFlow.js',
    type: 'Machine Learning Library',
    imageUrl: tensorflowjs,
    url: 'https://www.tensorflow.org/js',
  },
  {
    id: 3,
    name: 'Keras',
    type: 'Deep Learning Library',
    imageUrl: keras,
    url: 'https://keras.io/',
  },
  {
    id: 4,
    name: 'JavaScript',
    type: 'Programming Language',
    imageUrl: javascript,
    url: 'https://www.javascript.com/',
  },
  {
    id: 5,
    name: 'React',
    type: 'Front-End Library',
    imageUrl: react,
    url: 'https://reactjs.org/',
  },
  {
    id: 6,
    name: 'Tailwind CSS',
    type: 'CSS Framework',
    imageUrl: tailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    id: 7,
    name: 'NPM',
    type: 'Package Manager',
    imageUrl: npm,
    url: 'https://www.npmjs.com/',
  },
  {
    id: 8,
    name: 'Git',
    type: 'Version Control',
    imageUrl: git,
    url: 'https://git-scm.com/',
  },
  {
    id: 9,
    name: 'GitHub',
    type: 'Version Control Hosting',
    imageUrl: github,
    url: 'https://github.com',
  },
  {
    id: 10,
    name: 'Vercel',
    type: 'Cloud Platform',
    imageUrl: vercel,
    url: 'https://vercel.com/',
  },
 

  {
    id: 13,
    name: 'Visual Studio Code',
    type: 'IDE',
    imageUrl: vscode,
    url: 'https://code.visualstudio.com/',
  },
  {
    id: 14,
    name: 'Figma',
    type: 'Design Tool',
    imageUrl: figma,
    url: 'https://www.figma.com/',
  },
] as const;

const ID = {
  CONTACT_ME: 'Hubungi saya',
  SKILLS_ME: 'Skill',
  ABOUT_ME: 'Tentang Saya',
  ABOUT_ME_DESC:
   'Sebagai seorang Junior Frontend Developer dan Software Engineer dengan pengalaman lebih dari 1 tahun, saya memiliki keahlian dalam beberapa teknologi modern, termasuk React.js, Next.js, Vite.js, Tailwind, dan Laravel API. Saya juga memiliki pengalaman dalam pembuatan website dan perangkat lunak, baik di bagian frontend maupun backend.Saya sangat antusias dalam mengembangkan antarmuka yang ramah pengguna dan intuitif untuk meningkatkan pengalaman pengguna. Selain itu, saya memiliki pengalaman dalam mengerjakan proyek-proyek terkait pengembangan perangkat lunak. Saya selalu bersemangat untuk mempelajari teknologi baru.Saat ini, saya sedang mencari peluang magang atau pekerjaan penuh waktu sebagai Frontend Developer, Web Developer, atau posisi lain yang berkaitan dengan pengembangan perangkat lunak.',
  MY_PROJECT: 'Proyek dan Sertifikat Saya',
  MY_EXPERIENCE: 'Pengalaman Saya',
  SEND: 'Kirim Email',
};
const EN = {
  CONTACT_ME: 'Contact me here',
  SKILLS_ME: 'My Skill',
  ABOUT_ME: 'About me',
  ABOUT_ME_DESC:
   'As a Junior Frontend Developer and Software Engineer with over 1 year of experience, I possess expertise in several modern technologies, including React.js, Next.js, Vite.js, Tailwind, and Laravel API. I also have experience in developing websites and software applications, both on the frontend and backend.I am passionate about creating user-friendly and intuitive interfaces to enhance user experience. Additionally, I have hands-on experience working on software development projects. I am always eager to learn new technologies.Currently, I am seeking internship or full-time opportunities as a Frontend Developer, Web Developer, or any other position related to software development.',
  MY_PROJECT: 'My Projects and Certificates',
  MY_EXPERIENCE: 'My Experience',
  SEND: 'Send Email',
};

export const TYPHOGRAPHY = {
  ID: { ...ID },
  EN: { ...EN },
};
