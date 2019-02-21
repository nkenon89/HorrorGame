

// Click button to start game:
const emptyDiv = document.getElementById('emptyDiv');
const emptyHeader = document.getElementById('header');
const button = document.getElementById('button');
let buttonClicks = 0;

// when window loads populate header 

window.onload = function() {
    emptyHeader.innerHTML = '<h1 class="red-text text-center display-1 font mt-5">' + 'I want To Play A Game...' + '</h1>';
    
};

// When button is clicked...
button.addEventListener('click', function () {
    if (buttonClicks === 0) {
        header.classList.toggle('hidden'); // make header display none
        emptyDiv.innerHTML = '<h1>' + 'Answer questions correctly to escape before the time runs out!' + '<h1>';
        button.innerHTML = 'Play Game';
        buttonClicks += 1;
        console.log(buttonClicks);

        // second click game starts...

    } else if (buttonClicks === 1) {
        let timer = document.getElementById('timer')
        timer.classList.toggle('hidden');        var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');

        // start timer
        startTimer(fiveMinutes, display);

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        };

    
        emptyDiv.innerHTML = '<h1>' + 'You look around the room...' + '<h1>';
        button.innerHTML = 'Continue';
        buttonClicks += 1;
        console.log(buttonClicks);

        // Third... 

    } else if (buttonClicks === 2) {
    emptyDiv.innerHTML = '<h1>' + 'It is dark and cold, a pool of blood lies in the middle of the room' + '<h1>';
    buttonClicks += 1;
    console.log(buttonClicks);

    // Fourth...

    } else if (buttonClicks === 3) {
    emptyDiv.innerHTML = '<h1>' + 'You hear footsteps. Heavy boots coming slowly down the hall, and something metal... Dragging on the floor. What will you do?' + '<h1>'
        + '<br>' + '<button id="correct">' + 'Hide behind the door' + '</button>'
        + '<br>' + '<button id="incorrect">' + 'Play dead' + '</button>';
    let correctAnswer = document.getElementById('correct');
    let incorrectAnswer = document.getElementById('incorrect');
    correctAnswer.addEventListener('click', function () {
        document.getElementById('image').src = 'assets/images/creepyHallway.jpg';
        emptyDiv.innerHTML = '<h1>' + 'Well done. The footsteps pass and you slowly open the door and peer out into a dark hallway' + '<h1>';

    })

    incorrectAnswer.addEventListener('click', function () {
        document.getElementById('image').src = 'assets/images/youDied.png';
        emptyDiv.innerHTML = '<h1>' + 'The footsteps reach the door. Silence. The door creeks open and a dark figure enters. It grabs you by the leg and drags you off into another room' + '</h1>';
        button.innerHTML = 'Try again';
    })
    buttonClicks += 1;
    console.log(buttonClicks);

    } else if (buttonClicks === 4) {
    emptyDiv.innerHTML = '<h1>' + 'To one end of the hall you see the dim light of a single naked bulb flickering on and off. To the opposite direction, darkness. And a faint clinking and grinding sound echoes from the shadows. Which way will you go?' + '<h1>'
        + '<br>' + '<button id="correct">' + 'Head towards the strange sound' + '</button>'
        + '<button id="incorrect">' + 'Go toward the flickering light.' + '</button>';
    let correctAnswer = document.getElementById('correct');
    let incorrectAnswer = document.getElementById('incorrect');
    correctAnswer.addEventListener('click', function () {
        document.getElementById('image').src = 'assets/images/gearRoom.jpg';
        emptyDiv.innerHTML = '<h1>' + 'The sound leads you to a room filled with giant churning gears and mechanisms. You find a lever on the wall.' + '<h1>';

    })

    incorrectAnswer.addEventListener('click', function () {
        document.getElementById('image').src = 'assets/images/youDied.png';
        emptyDiv.innerHTML = '<h1>' + 'As the light brightens upon approaching you see a shadow rounding the corning. Someone obviously lives here, and you just found them.' + '</h1>';
        button.innerHTML = 'Try again';
    })
    buttonClicks += 1;
    console.log(buttonClicks);
}
});

