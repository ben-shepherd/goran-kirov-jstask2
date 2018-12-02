var form, red, green, blue;

/**
 * Set some random colors and generate a list
 */
window.onload = function() {
    
    setRandomAndRenderList();
    form = document.getElementById('form');
    form.addEventListener('submit', handleSubmit)
}

/**
 * Sets RGB values and renders list
 */
function setRandomAndRenderList() {
    setRandomRGBValues();
    renderList();
}

/**
 * Sets RGB values to form's input boxes
 */
function setRandomRGBValues() {
    red = document.getElementById('red').value = randomNumber(0,255);
    green = document.getElementById('green').value = randomNumber(0,255);
    blue = document.getElementById('blue').value = randomNumber(0,255);
}

/**
 * Handle the form submit event
 * Set the RGB values from user input, and render list
 * @param {*} e 
 */
function handleSubmit(e) {
    e.preventDefault();
    red = e.target.red.value,
    green = e.target.green.value,
    blue = e.target.blue.value;
    count = 0;
    renderList()
}

/**
 * Generate the list
 */
function renderList() {
    var list = document.getElementById('list');
    var ul = document.createElement('ul');
    var r = red;
    var g = green;
    var b = blue;
    var count = 1;

    /**
     * Add an LI tag to the UL
     */
    var addItem = function(r,g,b) {
        var colorStr = 'rgb('+r+','+g+','+b+')';
        var li = document.createElement('li');
        var p = document.createElement('p');

        li.style.backgroundColor = colorStr;
        p.innerHTML = '#'+count + ' ' + colorStr; // Format: Count + rgb(r,g,b)
        li.appendChild(p);
        ul.appendChild(li);
    }

    // loop and check if RGB values are black
    var complete = false;
    
    while(!complete) {

        // Check none of the values go below zero
        if(r < 0) r = 0;
        if(g < 0) g = 0;
        if(b = 0) b = 0;

        // Add the current RGB values
        addItem(r, g, b);
        r--;
        g--;
        b--;
        count++;

        // Check if all the RGB values are equal to black
        complete = r < 0 && g < 0 && b < 0;
    }


    // Clear existing list
    list.innerHTML = '';
    list.appendChild(ul);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}