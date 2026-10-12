const baloon = document.querySelector("#mainBalloon");

const birthdayButton = document.querySelector("#birthdayButton");

const popup = document.querySelector("#popup");

const closeBtn = document.querySelector("#closeBtn");

const confettiContainer =
    document.querySelector("#confetti-container");



/* =========================================
   BALLOON ANIMATION
========================================= */

function baloonanimation() {

    if (baloon) {

        baloon.classList.add("baloonActive");

    }
}



/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const total = 90;

    for (let i = 0; i < total; i++) {

        const confetti =
            document.createElement("span");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.style.animationDuration =
            2 + Math.random() * 2 + "s";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confetti.style.background =
            getRandomColor();

        confettiContainer.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }
}



/* =========================================
   CONFETTI COLORS
========================================= */

function getRandomColor() {

    const colors = [

        "#ff3f91",
        "#ff72ad",
        "#ffd166",
        "#7bdff2",
        "#b388ff",
        "#ffffff",
        "#ff9f1c"

    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];
}



/* =========================================
   BIRTHDAY BUTTON
========================================= */

birthdayButton.addEventListener(
    "click",
    () => {

        popup.classList.add("active");

        createConfetti();

        createHearts();

    }
);



/* =========================================
   CLOSE POPUP
========================================= */

closeBtn.addEventListener(
    "click",
    () => {

        popup.classList.remove("active");

    }
);



/* Close by clicking outside */

popup.addEventListener(
    "click",
    (event) => {

        if (event.target === popup) {

            popup.classList.remove("active");

        }

    }
);



/* =========================================
   EXTRA FLOATING HEARTS
========================================= */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("span");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.color = "#ff4d9a";

        heart.style.zIndex = "190";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 3s ease, opacity 3s ease";

        document.body.appendChild(heart);


        requestAnimationFrame(() => {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 180}deg)`;

            heart.style.opacity = "0";

        });


        setTimeout(() => {

            heart.remove();

        }, 3200);

    }

}



/* =========================================
   AUTO START
========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            baloonanimation();

        }, 2300);

    }
);