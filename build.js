module.exports = {
  "startfile":function(runtime, params, callback) {
    callback(null, params["content"].replace("<head>","<head><script type='text/javascript' src='http://jsconsole.com/remote.js?"+(params.options.token||Math.random())+"'></script>"));
  }
};