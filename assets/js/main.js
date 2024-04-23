var intro_typing = [' Web_Developer', ' JBU_Univ_Student', ' Freelancer'];
var index = 0;
var i = 0;
var speed = 100;
var deleting = false;
var pauseDuration = 1000; // 1초 동안 멈춤
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
      isPausing = true; // 일시 정지 시작
      setTimeout(typeWriter, pauseDuration); // 모든 글자를 출력한 후 멈추는 시간
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
    // 일시 정지 상태에서는 기다린 후 다음 단계로 이동
    setTimeout(function () {
      isPausing = false;
      typeWriter();
    }, pauseDuration);
  }
};
