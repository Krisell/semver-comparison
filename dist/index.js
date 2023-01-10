"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SemverComparison = /*#__PURE__*/function () {
  function SemverComparison(versionString) {
    _classCallCheck(this, SemverComparison);
    this.versionString = versionString;
    var _versionString$split$ = versionString.split('.').map(function (el) {
        return +el;
      }),
      _versionString$split$2 = _slicedToArray(_versionString$split$, 3),
      major = _versionString$split$2[0],
      minor = _versionString$split$2[1],
      patch = _versionString$split$2[2];
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }
  _createClass(SemverComparison, [{
    key: "isEqualTo",
    value: function isEqualTo(semver) {
      if (typeof semver === 'string') {
        semver = new SemverComparison(semver);
      }
      return "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch) === "".concat(semver.major, ".").concat(semver.minor, ".").concat(semver.patch);
    }
  }, {
    key: "isNewerThan",
    value: function isNewerThan(semver) {
      if (typeof semver === 'string') {
        semver = new SemverComparison(semver);
      }
      if (this.major > semver.major) {
        return true;
      }
      if (this.major === semver.major && this.minor > semver.minor) {
        return true;
      }
      if (this.major === semver.major && this.minor === semver.minor && this.patch > semver.patch) {
        return true;
      }
      return false;
    }
  }, {
    key: "isNewerThanOrEqualTo",
    value: function isNewerThanOrEqualTo(semver) {
      return this.isNewerThan(semver) || this.isEqualTo(semver);
    }
  }]);
  return SemverComparison;
}();
var _default = SemverComparison;
exports["default"] = _default;