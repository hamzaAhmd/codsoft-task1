// took help from yt and chatgpt for scrolling

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.links > ul');

  hamburger.addEventListener('click', function () {
      menu.classList.toggle('active');
  });
});


// Function to handle intersection of the skills section
function handleSkillsIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}   

// Create an Intersection Observer targeting the skills section
const skillsObserver = new IntersectionObserver(handleSkillsIntersection, {
  threshold: 0.5, // Adjust as needed
});

// Target the skills section
const skillsSection = document.getElementById('skills');

// Observe the skills section
skillsObserver.observe(skillsSection);

// Define an observer for the skill icons
const skillIcons = document.querySelectorAll('.S-icon');
const skillprogress = document.querySelectorAll('.S-progress');

// Observe each skill icon
skillIcons.forEach(icon => {
  skillsObserver.observe(icon);
});
skillprogress.forEach(prog => {
  skillsObserver.observe(prog);
});

//--------------------------------------------------------------------------------------------
// Function to handle intersection of the about section
function handleAboutIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}

// Create an Intersection Observer targeting the about section
const aboutObserver = new IntersectionObserver(handleAboutIntersection, {
  threshold: 0.5, // Adjust as needed
});

// Target the about section
const aboutSection = document.getElementById('about-me');
  
// Observe the about section
aboutObserver.observe(aboutSection);

// Define an observer for the about icons
const aboutImg = document.querySelectorAll('#AbtAnimation');
const abouttext = document.querySelectorAll('.Texth3');
const abouttxt2 = document.querySelectorAll('.Texth4');
const aboutHead = document.querySelectorAll('.AbtHeadingAnimation');
// const aboutBtn = document.querySelectorAll('#AboutBtn');

// Observe each about icon
aboutImg.forEach(Imge => {
  aboutObserver.observe(Imge);
});
abouttext.forEach(txte1 => {
  aboutObserver.observe(txte1);
});
aboutHead.forEach(Hed => {
  aboutObserver.observe(Hed);
});

abouttxt2.forEach(txet2 => {
aboutObserver.observe(txet2);
});


//--------------------------------------------------------------------------------------------
// Function to handle intersection of the Education section
function handleEducateIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}

// Create an Intersection Observer targeting the education section
const StudyObserver = new IntersectionObserver(handleEducateIntersection, {
  threshold: 0.5, // Adjust as needed
});

// Target the skills section
const StudiesSection = document.getElementById('education');

// Observe the skills section
StudyObserver.observe(StudiesSection);

// Define an observer for the skill icons
const studyANI = document.querySelectorAll('.educate');
const studyANI1 = document.querySelectorAll('.stud_animation');
// Observe each skill icon
studyANI.forEach(Edu => {
  StudyObserver.observe(Edu);
});
studyANI1.forEach(Edu1 => {
  StudyObserver.observe(Edu1);
});


//--------------------------------------------------------------------------------------------
// Function to handle intersection of the portfolio section
function handlePortfolioIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}

// Create an Intersection Observer targeting the portfolio section
const portfolioObserver = new IntersectionObserver(handlePortfolioIntersection, {
  threshold: 0.5, // Adjust as needed
});

// Target the portfolio section
const portSection = document.getElementById('port');

// Observe the portfolio section
StudyObserver.observe(StudiesSection);

// Define an observer for the portfolio icons
const FOliAni = document.querySelectorAll('.portfolio');
const portcard = document.querySelectorAll('.web-animate');
// Observe each portfolio icon
FOliAni .forEach(portF => {
  portfolioObserver.observe(portF);
});
portcard .forEach(portC => {
  portfolioObserver.observe(portC);
});


//--------------------------------------------------------------------------------------------
// Function to handle intersection of the portfolio section
function handleContactIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}

// Create an Intersection Observer targeting the portfolio section
const ContactObserver = new IntersectionObserver(handleContactIntersection, {
  threshold: 0.5, // Adjust as needed
});

// Target the portfolio section
const cntactSection = document.getElementById('contact-form');

// Observe the portfolio section
StudyObserver.observe(StudiesSection);

// Define an observer for the portfolio icons
const formAni = document.querySelectorAll('.cont');
// Observe each portfolio icon
formAni .forEach(ContctF => {
  portfolioObserver.observe(ContctF );
});

//--------------------------------------------------------------------------------------------
//For portfolio work image
// Get a reference to the small image element
const smallImage = document.querySelectorAll('.full-img');

// ----------------------------------------------------------------------------------------
