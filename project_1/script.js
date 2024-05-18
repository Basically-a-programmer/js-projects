// Get the button element
let go_button = document.getElementById("go");

// Function to start the keydown event listener on the entire document
const startKeyListener = () => {
    console.log("Key listener started");
    document.addEventListener('keydown', working);
    go_button.innerHTML = "Press ESC";
};

// Function to play music based on the element ID
const playMusic = (element_id) => {
    let audio = document.getElementById(element_id);
    if (audio) {
        audio.currentTime = 0; // Reset audio to the beginning
        audio.play();
        console.log(`Playing sound for key: ${element_id}`);

    } else {
        console.error(`No audio element found with id: ${element_id}`);
    }
};

// Function to stop the keydown event listener on the entire document
const stopEvent = () => {
    document.removeEventListener('keydown', working);
    go_button.innerHTML = "Go";
    console.log("Key listener stopped");
    alert("Nice Session");
};


// Function to handle keydown events
const working = (event) => {
    console.log(`Key pressed: ${event.key}`);
    switch (event.key) {
        case 'a':
        case 's':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
            playMusic(event.key);
            let button = document.getElementById(event.key);
            button.parentNode.classList.add('pressed'); // Add the 'pressed' class to the parent element
            setTimeout(() => {
                button.parentNode.classList.remove('pressed'); // Remove the 'pressed' class after 200ms
            }, 3000);
            break;
        case 'Escape':
            stopEvent();
            break;
        default:
            alert("Play drums properly");
    }
};


// Add click event listener to the go button to start the keydown listener
go_button.addEventListener('click', startKeyListener);

