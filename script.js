/* ========================================= */
/* START SURPRISE */
/* ========================================= */

function startSurprise() {

    const opening = document.getElementById("opening");
    const main = document.getElementById("mainContent");

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.classList.add("hidden");

        main.classList.remove("hidden");

        createHeartExplosion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);
}


/* ========================================= */
/* STRESS BUTTON */
/* ========================================= */

function showComfort() {

    const section = document.getElementById("comfortSection");

    section.style.display = "block";

    setTimeout(() => {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

    createHeartExplosion();
}


/* ========================================= */
/* GO TO QUESTION */
/* ========================================= */

function goToQuestion() {

    const question = document.getElementById("questionSection");

    question.style.display = "block";

    setTimeout(() => {

        question.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

}


/* ========================================= */
/* QUESTION ANSWERS */
/* ========================================= */

function answerYes() {

    const result = document.getElementById("answerResult");

    result.innerHTML = `
        I KNEW IT! 😌🏆❤️<br>
        That's my confident baby!
    `;

    createConfetti();

    setTimeout(() => {

        document.querySelector(".memories-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 2500);
}


function answerMaybe() {

    const result = document.getElementById("answerResult");

    result.innerHTML = `
        That's all I want from you. ❤️<br>
        Give it everything you've got, my hero. 🏏
    `;

    createHeartExplosion();

    setTimeout(() => {

        document.querySelector(".memories-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 2500);
}


function answerNo() {

    const result = document.getElementById("answerResult");

    result.innerHTML = `
        Excuse me?! 😂😂<br>
        My baby is already a winner to me! ❤️
    `;

    createHeartExplosion();

    setTimeout(() => {

        document.querySelector(".memories-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 2500);
}


/* ========================================= */
/* KISSES */
/* ========================================= */

function sendKisses() {

    const result = document.getElementById("kissResult");

    result.innerHTML = `
        😘 💋 😘 💋 😘 💋 😘<br>
        UMMMMMMMMMMMMMAAAAAAAA ❤️
    `;

    createMassiveHearts();

}


/* ========================================= */
/* FLOATING HEARTS */
/* ========================================= */

function createHeartExplosion() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "🥰",
        "😘"
    ];

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-50px";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 4s ease-out, opacity 4s ease-out";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)
                 rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 4500);
    }
}


/* ========================================= */
/* MASSIVE HEARTS */
/* ========================================= */

function createMassiveHearts() {

    for (let i = 0; i < 60; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.fontSize =
            Math.random() * 35 + 15 + "px";

        heart.style.zIndex = "99999";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 2s ease-out, opacity 2s ease-out";

        document.body.appendChild(heart);

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 500 + 150;

        setTimeout(() => {

            heart.style.transform =
                `translate(
                    ${Math.cos(angle) * distance}px,
                    ${Math.sin(angle) * distance}px
                )`;

            heart.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            heart.remove();

        }, 2200);
    }
}


/* ========================================= */
/* CONFETTI */
/* ========================================= */

function createConfetti() {

    const pieces = [
        "🏆",
        "🎉",
        "❤️",
        "🏏",
        "✨",
        "🥳"
    ];

    for (let i = 0; i < 50; i++) {

        const piece = document.createElement("div");

        piece.innerHTML =
            pieces[Math.floor(Math.random() * pieces.length)];

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-50px";

        piece.style.fontSize =
            Math.random() * 25 + 15 + "px";

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        piece.style.transition =
            "transform 3s ease-in, opacity 3s";

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.style.transform =
                `translateY(${window.innerHeight + 100}px)
                 rotate(${Math.random() * 720}deg)`;

            piece.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            piece.remove();

        }, 3500);
    }
}


/* ========================================= */
/* RANDOM FLOATING HEARTS IN BACKGROUND */
/* ========================================= */

setInterval(() => {

    if (Math.random() > 0.6) {

        const hearts = [
            "♡",
            "♥",
            "❤"
        ];

        const heart = document.createElement("div");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-20px";

        heart.style.color = "rgba(255,100,170,0.25)";

        heart.style.fontSize =
            Math.random() * 20 + 10 + "px";

        heart.style.zIndex = "-1";

        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 8s linear, opacity 8s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)`;

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {

            heart.remove();

        }, 8500);

    }

}, 1000);