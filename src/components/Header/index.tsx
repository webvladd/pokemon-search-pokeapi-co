import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Link to={'/'} title='Home'>
        <img src='/pokemon-logo.svg' alt='Logo' />
      </Link>
    </header>
  );
};

export default Header;
