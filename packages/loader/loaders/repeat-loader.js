var loaderUtils = require("loader-utils");

module.exports = function(content){
  var options = loaderUtils.getOptions(this) || {};
  return replace(content)


  function replace(source){
    var o = options.origin
    var re = new RegExp(o, "g");
    return source.replace(re, options.target)
  }

}






