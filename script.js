// Custom Green Glowing Cursor
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .stat-item, .content-card, .social-links i');

            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    cursor.style.boxShadow = '0 0 15px #00ff00, 0 0 30px #00ff00, 0 0 45px #00ff00';
                });

                el.addEventListener('mouseleave', () => {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursor.style.boxShadow = '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00';
                });
            });

    // Keep cursor visible at all times (don't hide when leaving window)
    cursor.style.opacity = '1';
});

// Subscrbe YouTube Tamzidan Mahdiyin

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// Animasi Menulis

const texts = [
    "DEVELOPER",
    "front_end DEVELOPER",
    "back_end DEVELOPER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = function() {
    typeWriter();
    setTimeout(function() {
        var welcome = document.getElementById('welcome-screen');
        if (welcome) {
            welcome.style.opacity = '0';
            welcome.style.pointerEvents = 'none';
            setTimeout(function() {
                welcome.style.display = 'none';
            }, 500); // Smooth fade out
        }
    }, 2000); // 2 seconds
};

// Subscrbe YouTube Tamzidan Mahdiyin