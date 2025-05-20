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

// ======= Autoplay with Two‑Step Fallback =======
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('birthdayAudio');
  const btn   = document.getElementById('playAudioBtn');
  audio.volume = 0.7;

  // Helper to show button
  const showButton = () => btn.classList.add('show');

  // Second‑chance play after first user gesture
  const secondChance = () => {
    audio.play()
      .then(() => {
        console.log('🎵 Autoplay succeeded on second attempt');
      })
      .catch(() => {
        console.log('🔇 Second attempt failed — showing play button');
        showButton();
      });
    // clean up first‑gesture listeners
    document.removeEventListener('click', secondChance);
    document.removeEventListener('touchstart', secondChance);
    document.removeEventListener('scroll', secondChance);
  };

  // 1st attempt: autoplay on load
  audio.play()
    .then(() => {
      console.log('🎵 Autoplay succeeded');
    })
    .catch(() => {
      console.log('🔇 Autoplay blocked — waiting for first gesture');
      // Wait for any user interaction
      document.addEventListener('click', secondChance, { once: true });
      document.addEventListener('touchstart', secondChance, { once: true });
      document.addEventListener('scroll', secondChance, { once: true });
    });

  // Button click always tries to play (user‑initiated)
  btn.addEventListener('click', () => {
    audio.play().catch(err => console.error('Playback still failed:', err));
    btn.classList.remove('show');
  });
});
