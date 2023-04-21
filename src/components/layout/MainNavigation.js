import { useState, useEffect } from 'react';
import classes from "./MainNavigation.module.css";
import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  const [showNav, setShowNav] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
        setShowNav(false)
    }else{
        setShowNav(true)
    }

    setPrevScrollPos(currentScrollPos)
}

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    })


  return (
    <header className={`${classes.header} ${showNav ? classes.navShow : classes.navHide}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              All Meetups
            </NavLink>
          </li>

          <li>
            <NavLink to="/newpage">
              Add New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">
              My Favorites
              <span className={classes.badge}>{0}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
