const animationData = {
  container: document.getElementById("loading-animation"),
  path: "../../Student 1/Splash Screen/Animation.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
};

const anim = lottie.loadAnimation(animationData);

document.addEventListener('DOMContentLoaded', function() {
  // Wait 4 seconds and to redirect
  setTimeout(function() {
    window.location.href = '../CW web/Student 2/Home/Home.html';
  }, 4000);
});