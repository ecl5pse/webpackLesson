import _ from 'lodash';
import style from './assets/css/style.css';

function component() {

  const element = document.createElement('div');
  element.innerText = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add(style.hello);
  return element;

}

function logo() {

  const logContainer = document.createElement('div');
  logContainer.classList.add(style.logo);

  return logContainer;
}

document.body.appendChild(component());
document.body.appendChild(logo());