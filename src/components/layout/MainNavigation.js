// import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css";
import { NavLink } from 'react-router-dom';

export default function MainNavigation({ setPage }) {
  return (
    <header className={classes.header} data-test="navigation-header">
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
