function toggleBar() {
  const bar = document.getElementById('bottomBar');
  bar.classList.toggle('collapsed');
  bar.classList.toggle('expanded');
}

window.onload = function () {
  const text = "Bottom Bar Typing Animation Demo";
  const typingElement = document.getElementById("typingText");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
};

