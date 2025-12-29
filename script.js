const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.onmouseover = () => card.style.transform = "scale(1.05)";
  card.onmouseout = () => card.style.transform = "scale(1)";
});
