'use strict'

const reset = document.getElementById('btn-reset');
const info = document.getElementById('btn-info');

// Game Reset
const gameReset = function() {
    reset.addEventListener('click', function(){
        console.log('Reset button was hit')
    })
}

gameReset()

// Game Info
const gameInfo = function() {
    info.addEventListener('click', function(){
        console.log('Info button was hit')
    })
}

gameInfo()