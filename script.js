// ======= Countdown Timer =======
const targetDate = new Date();
// Example of setting exact birth date/time:
targetDate.setFullYear(2025, 6, 26); // May is month 4 (zero-based)
 targetDate.setHours(0, 0, 0);       // 9:00 AM IST

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    countdownEl.textContent = "🎂 It's Here! 🎉";
    clearInterval(interval);
    return;
  }
  const hrs = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  countdownEl.textContent = `${hrs}h ${mins}m ${secs}s until your moment!`;
}

const countdownEl = document.getElementById('countdown');
const interval = setInterval(updateCountdown, 1000);

// ======= Timeline Easter‑Egg =======
document.querySelectorAll('.milestone').forEach(el => {
  el.addEventListener('click', () => {
    const msg = el.dataset.message || 'Special moment!';
    alert(msg);
  });
});

// ======= Quiz Logic =======
document.getElementById('quizSubmit').addEventListener('click', () => {
  const choice = document.querySelector('input[name="flavor"]:checked');
  let msg = 'Select a flavor to see your result!';
  if (choice) {
    switch (choice.value) {
      case 'velvet':
        msg = "You’re Velvet Rose: warm, elegant, and unforgettable—just like today.";
        break;
      case 'choco':
        msg = "You’re Chocolate Fudge: rich, fun, and full of surprises!";
        break;
      case 'berry':
        msg = "You’re Berry Bliss: bright, cheerful, and full of life!";
        break;
      case 'citrus':
        msg = "You’re Citrus Zing: zesty, fresh, and utterly delightful!";
        break;
    }
  }
  document.getElementById('quizResult').textContent = msg;
});

// ======= Gallery Wish‑Notes =======
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', () => {
    const note = document.createElement('div');
    note.className = 'wish-note';
    note.textContent = photo.dataset.note;
    photo.appendChild(note);
  });
});

// ======= Mini‑Game Hidden Objects =======
let foundCount = 0;
const totalItems = document.querySelectorAll('.hidden-item').length;
document.querySelectorAll('.hidden-item').forEach(item => {
  item.addEventListener('click', () => {
    if (!item.classList.contains('found')) {
      item.classList.add('found');
      foundCount++;
      alert(item.dataset.found);
      if (foundCount === totalItems) {
        alert("🎉 You found all the surprises! 🎉");
      }
    }
  });
});

// ======= Confession Modal =======
const modal = document.getElementById('confessionModal');
const openBtn = document.getElementById('openConfession');
const closeBtn = modal.querySelector('.close');
openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
