function toggleBar() {
  const bar = document.getElementById('bottomBar');
  bar.classList.toggle('collapsed');
  bar.classList.toggle('expanded');
}

window.onload = function () {
  const text = "Typing text";
  const typingElement = document.getElementById("typingText"); // fixed typo match
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
