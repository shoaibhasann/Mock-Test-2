// Open modal
const openModalButton = document.getElementById("openModalButton");
const modal = document.getElementById("myModal");
const closeButtons = document.getElementsByClassName("close");

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
});

// Close modal when clicking outside the modal or using the close button
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});

Array.from(closeButtons).forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });
});
