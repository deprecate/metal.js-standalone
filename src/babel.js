const Babel = require('babel-standalone');
const BabelPresetMetalJSX = require('babel-preset-metal-jsx');

const incrementalDOMConfig = BabelPresetMetalJSX.plugins[0][1];

const metalJSX = {
  plugins: [
    [require('babel-plugin-incremental-dom').default, incrementalDOMConfig]
  ]
};

Babel.registerPreset('metal-jsx', metalJSX);
