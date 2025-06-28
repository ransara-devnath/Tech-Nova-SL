function toggleMore(button) {
  const moreText = button.previousElementSibling;
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    button.textContent = "Read Less";
} else {
    moreText.style.display = "none";
    button.textContent = "Read More";
}
}

function toggleTools() {
  const section = document.getElementById("tools-section");
  section.style.display = section.style.display === "none"? "block": "none";
}