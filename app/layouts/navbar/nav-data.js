import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Tableau',
    url: `${config.tableau}`,
    icon: 'tableau',
  },
  {
    label: 'Linkedin',
    url: `https://linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  }
];
