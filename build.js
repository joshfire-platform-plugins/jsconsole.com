// DEPRECATED (2012-07-12): to be removed once new add-ons system is up
module.exports = {
  "startfile":function(runtime, params, callback) {
    callback(null, params["content"].replace("<head>","<head><script type='text/javascript' src='http://jsconsole.com/remote.js?"+(params.options.token||Math.random())+"'></script>"));
  }
};