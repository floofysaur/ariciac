const fortunes = [
  "You should give Aricia a cat :3",
  "Now is the time to adopt a cat.",
  "Be kind to the next raccoon you encounter.",
  "Don't forget to smile at the birds today.",
  "Getting matcha today will bring you good luck.",
  "Keep an eye out for a llamma shaped cloud.",
  "Chocolate may significantly bolster your mental health today",
  "Squirrels are plotting something. Stay vigilant.",
  "A star winked at you today— make a wish!",
  "A puddle will reflect something important to you.",
  "Your shoelaces may form a conspiracy tonight.",
  "A friendly ghost will visit you in your dreams.",
  "Your next sneeze could be magical.",
  "A cloud looks suspciously like a dragon today.",
  "The leftovers in your fridge are trying to tell you something.",
  "The wind is conspiring to tickle your toes.",
  "Your keys might hide themselves in protest.",
  "Your tea might spill a secret if you watch closely."
];

const button = document.getElementById('fortune-btn');
const text = document.getElementById('fortune-text');

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  text.textContent = fortunes[randomIndex];
});