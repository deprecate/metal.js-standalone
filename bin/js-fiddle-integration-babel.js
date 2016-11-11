(function() {
  var tag = document.querySelector(
    'script[type="text/babel"]'
  );
  tag.setAttribute('type', 'text/babel;harmony=true');
  tag.setAttribute('data-presets', 'es2015,metal-jsx');
})();
