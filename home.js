function toggleBar() {
  const bar = document.getElementById('sideBar');
  const arrow = document.getElementById('arrow');

  bar.classList.toggle('collapsed');
  bar.classList.toggle('expanded');

  if (bar.classList.contains('collapsed')) {
    arrow.innerHTML = '&gt;'; // ">"
  } else {
    arrow.innerHTML = '&lt;'; // "<"
  }
}


window.onload = function () {
  const text = "Typing text";
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
