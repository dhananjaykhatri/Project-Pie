function calculatePiDigits(iterations) {
    let number = '';

    // Generate 100000 random digits
    for (let i = 0; i < 100000; i++) {
        number += Math.floor(Math.random() * 10); // Append a random digit (0-9)
    }

    return number;
}

// update display and fetch more digits of pie
function updatePiDisplay() {
    const newDigits = calculatePiDigits(); // Adjust the number of iterations as needed
    const piContainer = document.getElementById('content');
    piContainer.textContent += newDigits;
}

// to check if user func. is close to the last item
function isCloseToLastItem() {
    const lastItem = document.getElementById('last-item');
    if (!lastItem) return false;
    const rect = lastItem.getBoundingClientRect();
    return rect.top - window.innerHeight <= 80; // Adjust this value as needed
}

// fetching more digits of pie is close to last item
window.addEventListener('scroll', function() {
    if (isCloseToLastItem()) {
        updatePiDisplay()
    }
});

//intial for update pie
if (isCloseToLastItem()) {
    updatePiDisplay();
}


updatePiDisplay()