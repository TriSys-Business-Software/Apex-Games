/*
 * Pong.js
 * Created on Tuesday 22 November 2016 by Josie Musto, Opus Laboris Recruitment
 */


var PongController =
{
    // This method is called when the form is loaded
    Load: function()
    {
        // Your code here
        debugger;
        
        const canvas = document.querySelector('#pong');
        const pong = new Pong(canvas);

        canvas.addEventListener('click', () => pong.play());

        canvas.addEventListener('mousemove', event => {
            const scale = event.offsetY / event.target.getBoundingClientRect().height;
            pong.players[0].pos.y = canvas.height * scale;
        });

        pong.start();
    }
};

// This event fires after the associated Pong.html file is loaded into the DOM 
$(document).ready(function ()
{
    PongController.Load();
});