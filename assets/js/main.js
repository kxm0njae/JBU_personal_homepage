var intro_typing = [
  ' 웹 개발자입니다.',
  ' 중부대학교 학생입니다.',
  ' 프리랜서입니다.',
];
var index = 0;
var i = 0;
var speed = 100;
var deleting = false;
var pauseDuration = 500;
var isPausing = false;

window.onload = function typeWriter() {
  var text = intro_typing[index];
  var outputElement = document.getElementById('intro_typing');

  if (!isPausing) {
    if (!deleting && i < text.length) {
      outputElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else if (!deleting && i >= text.length) {
      deleting = true;
      isPausing = true;
      setTimeout(typeWriter, pauseDuration);
    } else if (deleting && i >= 0) {
      outputElement.textContent = text.substring(0, i);
      i--;
      setTimeout(typeWriter, speed);
    } else if (deleting && i < 0) {
      deleting = false;
      index = (index + 1) % intro_typing.length;
      setTimeout(typeWriter, speed);
    }
  } else {
    setTimeout(function () {
      isPausing = false;
      typeWriter();
    }, pauseDuration);
  }
};

function fadeInElements() {
  let sections = document.querySelectorAll('.fade-in');

  sections.forEach((section) => {
    let sectionBounding = section.getBoundingClientRect();
    if (
      sectionBounding.top < window.innerHeight &&
      sectionBounding.bottom >= 0
    ) {
      section.classList.add('fade-in-visible');
    } else {
      section.classList.remove('fade-in-visible');
    }
  });
}

document.addEventListener('DOMContentLoaded', fadeInElements);
window.addEventListener('scroll', fadeInElements);
