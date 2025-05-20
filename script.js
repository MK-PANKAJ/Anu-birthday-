// ======= Countdown Timer =======
const targetDate = new Date();
// Example of setting exact birth date/time:
targetDate.setFullYear(2025, 6, 26); // May is month 4 (zero-based)
 targetDate.setHours(15, 45, 0);       // 9:00 AM IST

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

  // Replace this with your actual link
  const pdfLink = "https://heyzine.com/flip-book/1922cca5f5.html";

  // Prompt user to visit the PDF link
  const goToPdf = confirm("Want to see your birthday surprise now?");

  if (goToPdf) {
    window.open(pdfLink, "_blank");
  }
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

// ======= Smart Autoplay + Fallback Button for Birthday Song =======
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('birthdayAudio');
  const btn = document.getElementById('playAudioBtn');
  audio.volume = 0.7;

  // Try to autoplay
  const tryPlay = audio.play();
  if (tryPlay !== undefined) {
    tryPlay
      .then(() => {
        // Autoplay worked—no button needed
        console.log('🎵 Autoplay succeeded');
      })
      .catch(() => {
        // Autoplay blocked—show our button
        console.log('🔇 Autoplay blocked, showing play button');
        btn.classList.add('show');

        // On click or touch, play & hide button
        const startAudio = () => {
          audio.play().catch(e => console.error('Still blocked:', e));
          btn.classList.remove('show');
          btn.removeEventListener('click', startAudio);
          btn.removeEventListener('touchstart', startAudio);
        };

        btn.addEventListener('click', startAudio);
        btn.addEventListener('touchstart', startAudio);
      });
  }

  // Optional: if you want the button to appear after any user interaction,
  // even if autoplay somehow didn’t fire its catch:
  document.addEventListener('click', () => {
    if (audio.paused && !btn.classList.contains('show')) {
      btn.classList.add('show');
    }
  }, { once: true });
});
