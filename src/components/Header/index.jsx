import React from 'react';

import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src='https://cdn.shopify.com/s/files/1/0567/9169/5421/files/Group_1863_246x.png?v=1650346870'
            alt='logo'
          />
        </div>
        <nav className={styles.nav}>
          <NavLink to='index'>Home</NavLink>
          <NavLink to='detail/1'>Detail</NavLink>
          <NavLink to='login'>Login</NavLink>
          <NavLink to='register'>Register</NavLink>
          <NavLink to='carts'>Carts</NavLink>
          <NavLink to='profile'>Profile</NavLink>
        </nav>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
};

export default Header;
