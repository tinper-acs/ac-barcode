'use strict';

exports.__esModule = true;

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jsbarcode = require('jsbarcode');

var _jsbarcode2 = _interopRequireDefault(_jsbarcode);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; }

var getDOMNode = function getDOMNode(ref) {
  return ref;
};

var AcBarcode = function (_Component) {
  _inherits(AcBarcode, _Component);

  function AcBarcode(props) {
    _classCallCheck(this, AcBarcode);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.update = function () {
      var renderElement = getDOMNode(_this.refs.renderElement);
      try {
        new _jsbarcode2.default(renderElement, _this.props.value, (0, _assign2.default)({}, _this.props));
      } catch (e) {
        window.console.error(e);
      }
    };

    return _this;
  }

  AcBarcode.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this2 = this;

    return (0, _keys2.default)(AcBarcode.propTypes).some(function (k) {
      return _this2.props[k] !== nextProps[k];
    });
  };

  AcBarcode.prototype.componentDidMount = function componentDidMount() {
    this.update();
  };

  AcBarcode.prototype.componentDidUpdate = function componentDidUpdate() {
    this.update();
  };

  AcBarcode.prototype.render = function render() {
    if (this.props.renderer === 'svg') {
      return _react2.default.createElement('svg', { ref: 'renderElement' });
    } else if (this.props.renderer === 'canvas') {
      return _react2.default.createElement('canvas', { ref: 'renderElement' });
    } else if (this.props.renderer === 'img') {
      return _react2.default.createElement('img', { ref: 'renderElement' });
    }
  };

  AcBarcode.prototype.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  };

  return AcBarcode;
}(_react.Component);

AcBarcode.propTypes = {
  value: _propTypes2.default.string.isRequired,
  renderer: _propTypes2.default.string,
  format: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  displayValue: _propTypes2.default.bool,
  fontOptions: _propTypes2.default.string,
  font: _propTypes2.default.string,
  textAlign: _propTypes2.default.string,
  textPosition: _propTypes2.default.string,
  textMargin: _propTypes2.default.number,
  fontSize: _propTypes2.default.number,
  background: _propTypes2.default.string,
  lineColor: _propTypes2.default.string,
  margin: _propTypes2.default.number,
  marginTop: _propTypes2.default.number,
  marginBottom: _propTypes2.default.number,
  marginLeft: _propTypes2.default.number,
  marginRight: _propTypes2.default.number
};

AcBarcode.defaultProps = {
  format: 'CODE128',
  renderer: 'svg',
  width: 2,
  height: 100,
  displayValue: true,
  fontOptions: '',
  font: 'monospace',
  textAlign: 'center',
  textPosition: 'bottom',
  textMargin: 2,
  fontSize: 20,
  background: '#ffffff',
  lineColor: '#000000',
  margin: 10
};

var _default = AcBarcode;
exports.default = _default;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getDOMNode, 'getDOMNode', 'src/AcBarcode.js');
  reactHotLoader.register(AcBarcode, 'AcBarcode', 'src/AcBarcode.js');
  reactHotLoader.register(_default, 'default', 'src/AcBarcode.js');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();