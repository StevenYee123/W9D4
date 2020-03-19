const followToggle = require("./follow_toggle"); 

$(() =>{
    $(".follow-toggle").each((idx, button) => new followToggle(button));
});

// $('.follow-toggle').on('click', (event) => {
//     event.preventDefault(); 
    
// })