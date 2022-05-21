'use strict'

const reset = document.getElementById('btn-reset');
let action

const gameReset = function() {
    reset.addEventListener('click', function(){
        console.log('Reset button was hit')
    })
}

gameReset()