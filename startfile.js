/**
 * @fileoverview Startfile hook that injects the JS console code right
 * before the first <script> tag
 */
define([], function () {
  return function (runtime, params, callback) {
    params.content = runtime.scriptPrepend(params.content,
      '<script type="text/javascript" src="http://jsconsole.com/remote.js?' +
      (params.options.token || Math.random()) +
      '"></script>');
    return callback(null, params.content);
  };
});