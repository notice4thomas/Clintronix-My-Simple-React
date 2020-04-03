import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/**
 * @render react
 * @name Header component
 * @description A cool looking navigation header adapted for mobile apps
 * @example
 * <Header
 *  title="Hi"
 *  links={[
 *    { href: "#", name: "Home" },
 *    { href: "#", name: "This project" },
 *    { href: "#", name: "About" }
 *  ]}
 *  showMenu={true}
 *  onClick={() => console.log('Handle the button click!')}
 * />
 */
const Header = ({ title, links, showMenu, onClick, renderLink, styles }) => (
  <React.Fragment>
    <header className="pl-header">
      <h3>{title}</h3>
      <a
        className={`pl-nav-button ${showMenu ? "active" : ""}`}
        onClick={onClick}
      />
    </header>
    <div className={`pl-menu ${showMenu ? "open" : ""}`}>
      <ul>
        {links.map(link => (
          <li key={`${link.name}${link.href}`} onClick={onClick}>
            {renderLink(link)}
          </li>
        ))}
      </ul>
    </div>
  </React.Fragment>
);

Header.defaultProps = {
  renderLink: link => <a href={link.href}>{link.name}</a>
};

Header.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  showMenu: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  renderLink: PropTypes.func
};

export default Header;
