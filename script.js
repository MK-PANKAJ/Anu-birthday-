// Countdown Timer
const targetDate = new Date();  // set to her exact birth time if known
targetDate.setHours(targetDate.getHours() + 5);  // example: 5 hours ahead
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    document.getElementById('countdown').textContent = "🎂 It's Here! 🎉";
    clearInterval(interval);
    return;
  }
  const hrs = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById('countdown').textContent = 
    `${hrs}h ${mins}m ${secs}s until your moment!`;
}
const interval = setInterval(updateCountdown, 1000);

// Timeline Easter‑Egg Notes
document.querySelectorAll('.milestone').forEach(el => {
  el.addEventListener('click', () => {
    alert(el.dataset.message);
  });
});

// Quiz Logic
document.getElementById('quizSubmit').addEventListener('click', () => {
  const choice = document.querySelector('input[name="flavor"]:checked');
  let msg = "Pick a flavor!";
  if (choice) {
    if (choice.value === 'velvet') msg = "You’re Velvet Rose: warm, elegant, and unforgettable—just like today.";
    else if (choice.value === 'choco') msg = "You’re Chocolate Fudge: rich, fun, and full of surprises!";
  }
  document.getElementById('quizResult').textContent = msg;
});

// Gallery Wish‑Tokens
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', () => {
    const note = document.createElement('div');
    note.className = 'wish-note';
    note.textContent = photo.dataset.note;
    photo.appendChild(note);
  });
});

// Confession Modal
const modal = document.getElementById('confessionModal');
document.getElementById('openConfession').addEventListener('click', () => {
  modal.classList.remove('hidden');
});
modal.querySelector('.close').addEventListener('click', () => {
  modal.classList.add('hidden');
});
