import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <section id="header">
      <nav>
        <h1>React template with routes</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/one">Pagina uno</NavLink>
        <NavLink to="/two">Pagina dos</NavLink>
        <NavLink to="/ssd">Pagina fail</NavLink>
      </nav>
    </section>
  );
}
export default Header;
