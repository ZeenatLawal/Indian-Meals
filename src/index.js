import './style.css';

const footer = document.createElement('div');
footer.className = 'footer';
const footerText = document.createElement('p');
footerText.innerHTML = 'Created By Microverse under CC lisence';
footer.appendChild(footerText);
document.body.appendChild(footer);
