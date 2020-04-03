"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var Header = function Header(_ref) {
  var title = _ref.title,
      links = _ref.links,
      showMenu = _ref.showMenu,
      onClick = _ref.onClick,
      renderLink = _ref.renderLink,
      styles = _ref.styles;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      "header",
      { className: "pl-header" },
      _react2.default.createElement(
        "h3",
        null,
        title
      ),
      _react2.default.createElement("a", {
        className: "pl-nav-button " + (showMenu ? "active" : ""),
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      "div",
      { className: "pl-menu " + (showMenu ? "open" : "") },
      _react2.default.createElement(
        "ul",
        null,
        links.map(function (link) {
          return _react2.default.createElement(
            "li",
            { key: "" + link.name + link.href, onClick: onClick },
            renderLink(link)
          );
        })
      )
    )
  );
};

Header.defaultProps = {
  renderLink: function renderLink(link) {
    return _react2.default.createElement(
      "a",
      { href: link.href },
      link.name
    );
  }
};

Header.propTypes = {
  title: _propTypes2.default.string,
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    href: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired
  })).isRequired,
  showMenu: _propTypes2.default.bool.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  renderLink: _propTypes2.default.func
};

exports.default = Header;

//# sourceMappingURL=index.js.map