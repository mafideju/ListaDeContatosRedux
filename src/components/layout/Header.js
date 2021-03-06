import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {'MAFFEE Contatos'}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" /> Adicionar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'my app'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
