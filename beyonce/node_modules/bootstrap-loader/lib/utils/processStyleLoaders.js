'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var loaders = _ref.loaders;
  var disableSassSourceMap = _ref.disableSassSourceMap;
  var disableResolveUrlLoader = _ref.disableResolveUrlLoader;

  if (!Array.isArray(loaders)) {
    throw new Error('\nSpecify your loaders as an array.\nDefault is [\'style\', \'css\', \'sass\']\n    ');
  }

  if (disableSassSourceMap && disableResolveUrlLoader) {
    return loaders;
  }

  // We need to match user loaders in different formats:
  // 'sass', 'sass-loader', 'sass?someParam' etc.
  var getLoaderRegExp = function getLoaderRegExp(module) {
    return new RegExp('^' + (0, _escapeRegexp2.default)(module) + '(?:-loader)?(?:\\?.*)?$');
  };

  var sassLoaderRegExp = getLoaderRegExp('sass');
  var sassLoader = loaders.find(function (loader) {
    return sassLoaderRegExp.test(loader);
  });
  var sassLoaderIndex = loaders.indexOf(sassLoader);

  if (!disableSassSourceMap) {
    if (!sassLoader) {
      throw new Error('\n        I can\'t find \'sass-loader\'.\n        Add it to array of loaders in .bootstraprc.\n      ');
    }

    var sassLoaderQuery = sassLoader.split('?')[1];

    // We need to check if user's loader already contains sourceMap param
    // And if it's not there - inject it
    var sassLoaderWithSourceMap = void 0;
    if (sassLoaderQuery) {
      sassLoaderWithSourceMap = sassLoaderQuery.includes('sourceMap') ? sassLoader : sassLoader + '&sourceMap';
    } else {
      sassLoaderWithSourceMap = sassLoader + '?sourceMap';
    }

    loaders[sassLoaderIndex] = sassLoaderWithSourceMap;
  }

  if (!disableResolveUrlLoader) {
    (function () {
      var resolveUrlLoaderRegExp = getLoaderRegExp('resolve-url');
      var resolveUrlLoader = loaders.find(function (loader) {
        return resolveUrlLoaderRegExp.test(loader);
      });

      if (!resolveUrlLoader) {
        loaders.splice(sassLoaderIndex, 0, 'resolve-url');
      }
    })();
  }

  return loaders;
};

var _escapeRegexp = require('escape-regexp');

var _escapeRegexp2 = _interopRequireDefault(_escapeRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }