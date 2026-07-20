/*==============================
    STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(7,11,20,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.background = "rgba(10,15,25,.45)";
        header.style.boxShadow = "none";

    }

});

/*==============================
    ACTIVE NAVIGATION
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {   

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*==============================
    SCROLL REVEAL
==============================*/

const reveals = document.querySelectorAll(
".about-card, .stat-box, .skill-card, .project-card, .contact form"
);

function revealOnScroll(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("fade-up","show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*==============================
    SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==============================
    TYPING EFFECT
==============================*/

const text = [
    "Electronics Engineering Student",
    "Handsome",
    "College Student",
    "Future Electronics Engineer"
];

const typing = document.querySelector(".home h3");

let word = 0;
let letter = 0;
let deleting = false;

function typeEffect(){

    const current = text[word];

    if(!deleting){

        typing.textContent = current.substring(0,letter);

        letter++;

        if(letter > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = current.substring(0,letter);

        letter--;

        if(letter < 0){

            deleting = false;

            word++;

            if(word >= text.length){

                word = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

typeEffect();

/*==============================
    PARALLAX BACKGROUND
==============================*/

const blobs = document.querySelectorAll(".bg-animation span");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.clientX)/40;
    let y = (window.innerHeight/2 - e.clientY)/40;

    blobs.forEach((blob,index)=>{

        blob.style.transform =
        `translate(${x*(index+1)}px,${y*(index+1)}px)`;

    });

});

/*==============================
    BUTTON RIPPLE EFFECT
==============================*/

const buttons = document.querySelectorAll(".btn, .btn-outline");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform = "translateY(-6px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform = "translateY(0) scale(1)";

    });

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(
        "service_71lben5",
        "template_ntvsgdg",
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
    )
    .then(function(){

        alert("Message sent successfully!");

        form.reset();

    })
    .catch(function(error){

        console.error(error);

        alert(
            "Error:\n" + error.text
        );

    });

});

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href = "portfolio.html";

}