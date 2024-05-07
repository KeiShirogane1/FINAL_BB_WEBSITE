var clickCount = 0;

// --------------------------MILKTEA---------------------------------------------------------


// SWITCH PICTURE MILKTEA SELECT COLOR
// Get the images and buttons
var images1 = document.querySelectorAll('.order1 img');
var milkTeaButtons = document.querySelectorAll('.button_mt .btnhover');

// Add event listeners to milk tea buttons
milkTeaButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Reset z-index for all images
        images1.forEach(function(image) {
            image.style.zIndex = '-1';
        });
        // Set z-index for the corresponding milk tea image
        images1[index].style.zIndex = '2';
    });
});

// --------------------------FRUITTEA---------------------------------------------------------
 
// SWITCH PICTURE FRUIT TEA SELECT COLOR
// Get the images and buttons
var images2 = document.querySelectorAll('.order2 img');
var fruitButtons = document.querySelectorAll('.button_ft .btnhover');

// Add event listeners to fruit buttons
fruitButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Reset z-index for all images
        images2.forEach(function(image) {
            image.style.zIndex = '-1';
        });
        // Set z-index for the corresponding fruit image
        images2[index].style.zIndex = '2';
    });
});

// --------------------------ICEECOFFEE---------------------------------------------------------

// SWITCH PICTURE FRUIT TEA SELECT COLOR
// Get the images and buttons
var images3 = document.querySelectorAll('.order3 img');
var icecoffeeButtons = document.querySelectorAll('.button_ick .btnhover');

// Add event listeners to fruit buttons
icecoffeeButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Reset z-index for all images
        images3.forEach(function(image) {
            image.style.zIndex = '-1';
        });
        // Set z-index for the corresponding fruit image
        images3[index].style.zIndex = '2';
    });
});

// --------------------------HOTBREW---------------------------------------------------------

// SWITCH PICTURE FRUIT TEA SELECT COLOR
// Get the images and buttons
var images4 = document.querySelectorAll('.order4 img');
var hotbrewButtons = document.querySelectorAll('.button_hb .btnhover');

// Add event listeners to fruit buttons
hotbrewButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Reset z-index for all images
        images4.forEach(function(image) {
            image.style.zIndex = '-1';
        });
        // Set z-index for the corresponding fruit image
        images4[index].style.zIndex = '2';
    });
});

// --------------------------PRAF---------------------------------------------------------

// SWITCH PICTURE FRUIT TEA SELECT COLOR
// Get the images and buttons
var images5 = document.querySelectorAll('.order5 img');
var prafButtons = document.querySelectorAll('.button_pf .btnhover');

// Add event listeners to fruit buttons
prafButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Reset z-index for all images
        images5.forEach(function(image) {
            image.style.zIndex = '-1';
        });
        // Set z-index for the corresponding fruit image
        images5[index].style.zIndex = '2';
    });
});

// -----------------------------------------------------------------------------------

let translateXValue = 0;

function moveLeft() {
    const ordersDiv = document.querySelector('.orders');
    if (translateXValue > 0) { // Decrement clickCount if translateXValue is greater than 0
        clickCount--;
    }
    translateXValue -= 100;
    ordersDiv.style.transform = `translateX(${translateXValue}%)`;
    handleMove();
}

function moveRight() {
    const ordersDiv = document.querySelector('.orders');
    translateXValue += 100;
    ordersDiv.style.transform = `translateX(${translateXValue}%)`;
    handleMove();
}

function handleMove() {
    clickCount++;
    const moveRightButton = document.getElementById('moveRightButton');
    const ordersDiv = document.querySelector('.orders');
    const ordersImages = ordersDiv.querySelectorAll('img');

    if (Math.abs(translateXValue) >= 100) {
        moveRightButton.disabled = false; // Enable the "Move Right" button
        moveRightButton.style.opacity = 1; // Set opacity to 0.5 when disabled

    } else {
        moveRightButton.disabled = true; // Keep the "Move Right" button disabled
        moveRightButton.style.opacity = 0.5; // Set opacity to 0.5 when disabled
    }

    // Check if translateXValue is 0 or 100 and set z-index accordingly
    const buttonMt = document.querySelector('.button_mt');
    const buttonFt = document.querySelector('.button_ft');
    const buttonIck = document.querySelector('.button_ick');
    const buttonHb = document.querySelector('.button_hb');
    const buttonPF = document.querySelector('.button_pf');

// MILKTEA
    if (Math.abs(translateXValue) === 0) {
        buttonMt.style.zIndex = '2';
        buttonMt.style.opacity = 1;

    } else {
        buttonMt.style.zIndex = '-1';
        buttonMt.style.opacity = 0;
    }

//FRUIT TEA
    if (Math.abs(translateXValue) === 100) {
        buttonFt.style.zIndex = '2';
        buttonFt.style.opacity = 1;
    } else {
        buttonFt.style.zIndex = '-1';
        buttonFt.style.opacity = 0;
    }

//ICE COFFEE
    if (Math.abs(translateXValue) === 200) {
        buttonIck.style.zIndex = '2';
        buttonIck.style.opacity = 1;
    } else {
        buttonIck.style.zIndex = '-1';
        buttonIck.style.opacity = 0;
    }

//HOT BREW
    if (Math.abs(translateXValue) === 300) {
        buttonHb.style.zIndex = '2';
        buttonHb.style.opacity = 1;
    } else {
        buttonHb.style.zIndex = '-1';
        buttonHb.style.opacity = 0;
    }

//PRAF
    if (Math.abs(translateXValue) === 400) {
        buttonPF.style.zIndex = '2';
        buttonPF.style.opacity = 1;
    } else {
        buttonPF.style.zIndex = '-1';
        buttonPF.style.opacity = 0;
    }

    // Disable all images except the one at 100 translateX value
    ordersImages.forEach(img => {
        if (img.parentElement.classList.contains(`order${Math.abs(translateXValue) / 100 + 1}`)) {
            img.disabled = false; // Enable the image at 100 translateX value
        } else {
            img.disabled = true; // Disable  other images
        }
    });

    // Blur all images except the one at 100 translateX value
    if (Math.abs(translateXValue) >= 0) {
        ordersImages.forEach(img => {

            if (Math.abs(translateXValue) >= 500) {
                resetPosition();
                buttonMt.style.opacity = 1;
                buttonMt.style.zIndex = 1;
                translateXValue = 0;
                clickCount = 0; // Reset clickCount when position is reset
                moveRightButton.style.opacity = 0.5; // Set opacity to 0.5 when disabled
            }

            if (img.parentElement.classList.contains(`order${Math.abs(translateXValue) / 100 + 1}`)) {
                img.style.opacity = 1; // Set opacity to 1 for the image at 100 translateX value
            } else {
                img.style.opacity = 0; // Set opacity to 0 for other images
            }
        });

    } else {
        // Apply blur effect for all images if translateXValue is less than 100
        ordersImages.forEach(img => {
            img.style.opacity = 0; // Set opacity to 0 for other images
        });
    }

}

function resetPosition() {
    const ordersDiv = document.querySelector('.orders');
    ordersDiv.style.transform = 'translateX(0%)';
    document.getElementById('moveRightButton').disabled = true; // Disable the "Move Right" button after resetting
}

// Run handleMove function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    handleMove();
});