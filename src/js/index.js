import _ from 'lodash';
import './../css/app.css';
import alertMe from './components/print.js'

/**
 * This function creates tags to add to the DOM
 */
function component() {
    // Creating the new tags
    let element = document.createElement('div');
    let btn = document.createElement('button');
    
    // adding content to the tags
    element.innerHTML = _.join(['hello', 'webpack']);
    btn.innerHTML = 'Click me!';

    // Adding behavior to our button
    btn.onclick = alertMe;

    // adding styling to our component
    element.classList.add('hello');

    // Appending the new tags to the DOM
    element.appendChild(btn);

    // Returning the new element with the appended tags
    return element;
}

// let's go ahead an append the new component to the DOM
document.body.appendChild(component());

