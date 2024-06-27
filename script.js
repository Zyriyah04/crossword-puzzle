
const crosswordData = [
    ['B', 'O', 'O', 'K', 'S', '_', '_'], // First word: BOOKS
    ['S', 'C', 'I', 'S', 'S', 'O', 'R'], // Second word: SCISSORS
    ['G', 'L', 'U', 'E', '_', '_', '_']  // Third word: GLUE
];

// Clues for each word
const clues = [
    'I like to read.....',
    'You can use the ....... to cut the paper.',
    'Use the.... and make sure it dries correctly on the paper.'
];

// Function to create and populate the crossword grid
function createCrossword() {
    // Get the crossword container element by its ID
    const crosswordContainer = document.getElementById('crossword');
    
    // Loop through each row in the crossword data
    for (let i = 0; i < crosswordData.length; i++) {
        // Loop through each column in the current row
        for (let j = 0; j < crosswordData[i].length; j++) {
            // Create a new div element for each cell
            const cell = document.createElement('div');
            // Add the 'crossword-cell' class to style the cell
            cell.className = 'crossword-cell';
            // Create an input element if it's not an empty cell
            if (crosswordData[i][j] !== '_') {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1; // Limit input to one character
                cell.appendChild(input);
            }
            // Append the cell to the crossword container
            crosswordContainer.appendChild(cell);
        }
    }
}

// Function to get clue for a specific word
function getClue(wordNumber) {
    const clueIndex = wordNumber - 1; 
    // Display the clue in the result container
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Clue for Word ${wordNumber}: ${clues[clueIndex]}`;
}

// Function to check the answers in the crossword puzzle
function checkAnswers() {
    // Get all input fields in the crossword grid
    const inputs = document.querySelectorAll('.crossword-cell input');
    let index = 0;
    let correct = true;

    // Loop through each input field to check the user's answers
    for (let i = 0; i < crosswordData.length; i++) {
        for (let j = 0; j < crosswordData[i].length; j++) {
            if (crosswordData[i][j] !== '_') {
                // Check if the user's input matches the correct letter
                if (inputs[index].value.toUpperCase() !== crosswordData[i][j]) {
                    correct = false;
                    inputs[index].style.backgroundColor = 'lightcoral'; // Highlight incorrect answer
                } else {
                    inputs[index].style.backgroundColor = 'lightgreen'; // Highlight correct answer
                }
                index++;
            }
        }
    }

    // Display the result message
    const resultContainer = document.getElementById('result');
    if (correct) {
        resultContainer.textContent = 'Congratulations! All answers are correct!';
    } else {
        resultContainer.textContent = 'Some answers are incorrect. Try again!';
    }
}

// Function to reset the crossword puzzle
function resetCrossword() {
    // Get all input fields in the crossword grid
    const inputs = document.querySelectorAll('.crossword-cell input');
    // Clear the value and reset the background color of each input field
    inputs.forEach(input => {
        input.value = '';
        input.style.backgroundColor = 'transparent';
    });
    // Clear the result message
    document.getElementById('result').textContent = '';
}

// Call the function to create the crossword puzzle 
createCrossword();
