let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let zak = 'Zak Ruvalcaba';
let sally = 'Sally Smithers';
let aaron = 'Aaron D. Tyres';
let dan = 'Dan Danger';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, zak), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, aaron), /*#__PURE__*/React.createElement("li", null, dan));
ReactDOM.render(element, document.getElementById('content'));