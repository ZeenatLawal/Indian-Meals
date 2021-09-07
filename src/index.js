import './style.css';
function component() {
  const element = document.createElement('div');

  element.innerHTML = `Hello Webpack!`;
  element.className = 'hello';
  return element;
}

document.body.appendChild(component());

const footer = document.createElement('div');
footer.className = 'footer';
const footerText = document.createElement('p');
footerText.innerHTML = 'Created By Microverse under CC lisence';
footer.appendChild(footerText);
document.body.appendChild(footer);
