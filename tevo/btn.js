const buttons = document.querySelectorAll('.button');
const iframe = document.getElementById('midbox');

// Function that activates a button
function activate(btn) {
  // remove active from all buttons
  buttons.forEach(b => b.classList.remove('active'));

  // add to the clicked one
  btn.classList.add('active');

  // change iframe source
  iframe.src = btn.dataset.src;
}

// Assign click listeners
buttons.forEach(btn => {
  btn.addEventListener('click', () => activate(btn));
});

// Auto-activate the default button on page load
window.addEventListener('DOMContentLoaded', () => {
  const defaultBtn = document.getElementById('defaultTab');
  activate(defaultBtn);
});
