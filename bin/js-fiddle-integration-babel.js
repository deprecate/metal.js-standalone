(function() {
  var tag = document.querySelector(
    'script[type="application/javascript;version=1.7"]'
  );
  tag.setAttribute('type', 'text/babel');
  tag.setAttribute('data-presets', 'es2015,metal-jsx');
})();
