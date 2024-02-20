import _ from 'lodash';
function component() {
  // creating an div element
  const element = document.createElement("div");

  // joining array of string into single string
  // with the help of lodash
  element.innerHTML = _.join(["Hello", "Webpack"], "");

  // returning div element with content
  return element;
}

// appending div elements created by component function
// as a child of the body element in the HTML document
document.body.appendChild(component());
