//This waits till the website is loaded before adding an Event Listener to whole site.
document.addEventListener('DOMContentLoaded', () => 
{
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let square = document.querySelector('#square')
    let button = document.querySelector('#button')
    button.addEventListener('click', () => {
        square.style.backgroundColor=getRandomColor();
    })
})



// function changeColor ()
// {
//     document.getElementById("square").style.backgroundColor="green";
// }

function setRandomColor()
{
    var colors = ["Red", "Blue", "Green", "Black", "Purple", "Yellow", "Black"];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("square").style.backgroundColor=randColor;
}
