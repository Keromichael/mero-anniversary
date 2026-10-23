/*
  PERSONALIZE THIS FILE:
  1. Replace the sample memory titles/captions below.
  2. Add one favorite photo plus exactly nine memory photos in the images folder.
  3. The anniversary date is March 8, 2025.
*/

const memories = [
  { image: "images/memory-01.jpg", title: "A favorite moment", caption: "One of those little moments I want to keep forever." },
  { image: "images/memory-02.jpg", title: "Us being us", caption: "A memory that still makes me smile." },
  { image: "images/memory-03.jpg", title: "My happy place", caption: "Somehow, ordinary days feel special with you." },
  { image: "images/memory-04.jpg", title: "A day to remember", caption: "I wish I could relive this one." },
  { image: "images/memory-05.jpg", title: "Little things", caption: "It's always the little things that mean the most." },
  { image: "images/memory-06.jpg", title: "A smile I love", caption: "This is one of my favorite versions of happiness." },
  { image: "images/memory-07.jpg", title: "Our kind of fun", caption: "More moments like this, please." },
  { image: "images/memory-08.jpg", title: "A sweet memory", caption: "Keeping this one close to my heart." },
  { image: "images/memory-09.jpg", title: "Just you and me", caption: "My favorite story is the one we're writing." },
];

const photoGrid = document.getElementById("photoGrid");
const photoDialog = document.getElementById("photoDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogCaption = document.getElementById("dialogCaption");

// Special treatment for the one photo that means the most to you both.
const favoritePhotoImage = document.getElementById("favoritePhotoImage");
const favoritePhotoPlaceholder = document.getElementById("favoritePhotoPlaceholder");
const favoritePhotoButton = document.getElementById("favoritePhotoButton");

function showFavoritePhoto() {
  favoritePhotoImage.classList.add("is-loaded");
  favoritePhotoPlaceholder.hidden = true;
}
function showFavoritePlaceholder() {
  favoritePhotoImage.classList.remove("is-loaded");
  favoritePhotoPlaceholder.hidden = false;
}
if (favoritePhotoImage.complete && favoritePhotoImage.naturalWidth > 0) {
  showFavoritePhoto();
} else {
  favoritePhotoImage.addEventListener("load", showFavoritePhoto, { once: true });
  favoritePhotoImage.addEventListener("error", showFavoritePlaceholder, { once: true });
}

favoritePhotoButton.addEventListener("click", () => {
  if (!favoritePhotoImage.classList.contains("is-loaded")) return;
  dialogImage.src = favoritePhotoImage.src;
  dialogImage.alt = favoritePhotoImage.alt;
  dialogCaption.textContent = "Our favorite picture — one feeling, a thousand memories. ♡";
  photoDialog.showModal();
});

const favoriteNoteToggle = document.getElementById("favoriteNoteToggle");
const favoriteNote = document.getElementById("favoriteNote");
favoriteNoteToggle.addEventListener("click", () => {
  const isOpening = favoriteNote.hidden;
  favoriteNote.hidden = !isOpening;
  favoriteNoteToggle.setAttribute("aria-expanded", String(isOpening));
  favoriteNoteToggle.querySelector(".toggle-symbol").textContent = isOpening ? "−" : "+";
});

memories.forEach((memory, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "memory-card";
  card.setAttribute("aria-label", `Open memory ${index + 1}: ${memory.title}`);
  card.innerHTML = `
    <img src="${memory.image}" alt="${memory.title}" loading="lazy">
    <h3>${memory.title}</h3>
    <p>${memory.caption}</p>
  `;
  card.addEventListener("click", () => {
    dialogImage.src = memory.image;
    dialogImage.alt = memory.title;
    dialogCaption.textContent = `${memory.title} — ${memory.caption}`;
    photoDialog.showModal();
  });
  photoGrid.appendChild(card);
});

document.getElementById("closePhoto").addEventListener("click", () => photoDialog.close());
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
});

const openLetter = document.getElementById("openLetter");
const loveLetter = document.getElementById("loveLetter");
openLetter.addEventListener("click", () => {
  const isOpening = loveLetter.hidden;
  loveLetter.hidden = !isOpening;
  openLetter.setAttribute("aria-expanded", String(isOpening));
  openLetter.innerHTML = isOpening
    ? 'Close your letter <span aria-hidden="true">♡</span>'
    : 'Open your letter <span aria-hidden="true">♡</span>';
  if (isOpening) loveLetter.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// March 8, 2025. The next anniversary is calculated automatically.
const anniversaryMonth = 2; // January = 0, March = 2
const anniversaryDay = 8;
const anniversaryYear = 2025;

function getNextAnniversary(now = new Date()) {
  let next = new Date(now.getFullYear(), anniversaryMonth, anniversaryDay, 0, 0, 0);
  if (next <= now) next = new Date(now.getFullYear() + 1, anniversaryMonth, anniversaryDay, 0, 0, 0);
  return next;
}

function updateCountdown() {
  const now = new Date();
  const target = getNextAnniversary(now);
  const difference = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(difference / 1000);
  document.getElementById("days").textContent = String(Math.floor(totalSeconds / 86400)).padStart(3, "0");
  document.getElementById("hours").textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
  document.getElementById("minutes").textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  document.getElementById("seconds").textContent = String(totalSeconds % 60).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Small, subtle floating hearts in the background.
const floatingHearts = document.querySelector(".floating-hearts");
for (let i = 0; i < 10; i++) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = i % 2 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDelay = `${Math.random() * 12}s`;
  heart.style.animationDuration = `${10 + Math.random() * 8}s`;
  heart.style.fontSize = `${12 + Math.random() * 14}px`;
  floatingHearts.appendChild(heart);
}
