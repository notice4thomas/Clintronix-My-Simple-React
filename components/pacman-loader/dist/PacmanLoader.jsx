'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      0% {transform: rotate(0deg)} \n      50% {transform: rotate(-44deg)}\n    '], ['\n      0% {transform: rotate(0deg)} \n      50% {transform: rotate(-44deg)}\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      0% {transform: rotate(0deg)} \n      50% {transform: rotate(44deg)}\n    '], ['\n      0% {transform: rotate(0deg)} \n      50% {transform: rotate(44deg)}\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n          75% {opacity: 0.7}\n          100% {transform: translate(', ', ', ')}\n        '], ['\n          75% {opacity: 0.7}\n          100% {transform: translate(', ', ', ')}\n        ']),
    _templateObject4 = _taggedTemplateLiteral(['{\n            width: ', ';\n            height: ', ';\n            background-color: ', ';\n            margin: ', ';\n            border-radius: 100%;\n            transform: translate(0, ', ');\n            position: absolute;\n            top: ', 'px;\n            left: ', ';\n            animation: ', ' 1s ', 's infinite linear;\n            animation-fill-mode: both;\n        }'], ['{\n            width: ', ';\n            height: ', ';\n            background-color: ', ';\n            margin: ', ';\n            border-radius: 100%;\n            transform: translate(0, ', ');\n            position: absolute;\n            top: ', 'px;\n            left: ', ';\n            animation: ', ' 1s ', 's infinite linear;\n            animation-fill-mode: both;\n        }']),
    _templateObject5 = _taggedTemplateLiteral(['{\n            width: 0;\n            height: 0;\n            border-right: ', ';\n            border-top: ', ';\n            border-left: ', ';\n            border-bottom: ', ';\n            border-radius: ', ';\n            position: absolute;\n            animation: ', ' 0.8s infinite ease-in-out;\n            animation-fill-mode: both;\n        }'], ['{\n            width: 0;\n            height: 0;\n            border-right: ', ';\n            border-top: ', ';\n            border-left: ', ';\n            border-bottom: ', ';\n            border-radius: ', ';\n            position: absolute;\n            animation: ', ' 0.8s infinite ease-in-out;\n            animation-fill-mode: both;\n        }']),
    _templateObject6 = _taggedTemplateLiteral(['{\n            position: relative;\n            font-size: 0;\n            height: ', ';\n            width: ', ';\n        }'], ['{\n            position: relative;\n            font-size: 0;\n            height: ', ';\n            width: ', ';\n        }']),
    _templateObject7 = _taggedTemplateLiteral(['', ';', ''], ['', ';', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('@emotion/core');

var _onlyUpdateForKeys = require('recompose/onlyUpdateForKeys');

var _onlyUpdateForKeys2 = _interopRequireDefault(_onlyUpdateForKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /** @jsx jsx */


// This returns an animation
var pacman = [(0, _core.keyframes)(_templateObject), (0, _core.keyframes)(_templateObject2)];

var Loader = function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Loader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.ball = function () {
      var _this$props = _this.props,
          size = _this$props.size,
          sizeUnit = _this$props.sizeUnit;


      return (0, _core.keyframes)(_templateObject3, '' + -4 * size + sizeUnit, '' + -size / 4 + sizeUnit);
    }, _this.ballStyle = function (i) {
      var _this$props2 = _this.props,
          color = _this$props2.color,
          margin = _this$props2.margin,
          size = _this$props2.size,
          sizeUnit = _this$props2.sizeUnit;


      return (0, _core.css)(_templateObject4, '' + size / 3 + sizeUnit, '' + size / 3 + sizeUnit, color, margin, '' + -size / 4 + sizeUnit, size, '' + size * 4 + sizeUnit, _this.ball(), i * 0.25);
    }, _this.s1 = function () {
      var _this$props3 = _this.props,
          size = _this$props3.size,
          sizeUnit = _this$props3.sizeUnit;


      return '' + size + sizeUnit + ' solid transparent';
    }, _this.s2 = function () {
      var _this$props4 = _this.props,
          size = _this$props4.size,
          sizeUnit = _this$props4.sizeUnit,
          color = _this$props4.color;


      return '' + size + sizeUnit + ' solid ' + color;
    }, _this.pacmanStyle = function (i) {
      var _this$props5 = _this.props,
          size = _this$props5.size,
          sizeUnit = _this$props5.sizeUnit;


      var s1 = _this.s1();
      var s2 = _this.s2();

      return (0, _core.css)(_templateObject5, s1, i === 0 ? s1 : s2, s2, i === 0 ? s2 : s1, '' + size + sizeUnit, pacman[i]);
    }, _this.wrapper = function () {
      var _this$props6 = _this.props,
          size = _this$props6.size,
          sizeUnit = _this$props6.sizeUnit;


      var wrapper = (0, _core.css)(_templateObject6, '' + size + sizeUnit, '' + size + sizeUnit);

      return _this.props.css ? (0, _core.css)(_templateObject7, wrapper, _this.props.css) : wrapper;
    }, _this.pac = function () {
      return _this.pacmanStyle(0);
    }, _this.man = function () {
      return _this.pacmanStyle(1);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      var loading = this.props.loading;


      return loading ? (0, _core.jsx)(
        'div',
        { css: this.wrapper() },
        (0, _core.jsx)('div', { css: this.pac() }),
        (0, _core.jsx)('div', { css: this.man() }),
        (0, _core.jsx)('div', { css: this.ballStyle(2) }),
        (0, _core.jsx)('div', { css: this.ballStyle(3) }),
        (0, _core.jsx)('div', { css: this.ballStyle(4) }),
        (0, _core.jsx)('div', { css: this.ballStyle(5) })
      ) : null;
    }
  }]);

  return Loader;
}(_react2.default.Component);

Loader.propTypes = {
  loading: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  margin: _propTypes2.default.string,
  sizeUnit: _propTypes2.default.string,
  css: _propTypes2.default.string
};

Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 25,
  margin: '2px',
  sizeUnit: 'px',
  css: ''
};

var Component = (0, _onlyUpdateForKeys2.default)(['loading', 'color', 'size', 'margin', 'sizeUnit', 'css'])(Loader);
Component.defaultProps = Loader.defaultProps;
exports.default = Component;

//# sourceMappingURL=PacmanLoader.jsx.map