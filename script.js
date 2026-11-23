const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const modal = document.getElementById("certificateModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalHint = document.getElementById("modalHint");

if (modal) {
  document.querySelectorAll(".certificate-card").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.dataset.title || "Sertifikat";
      const image = card.dataset.image || "";

      if (modalTitle) modalTitle.textContent = title;

      if (image && modalImage) {
        modalImage.src = image;
        modalImage.style.display = "block";
        if (modalHint) modalHint.style.display = "none";
      } else {
        if (modalImage) {
          modalImage.removeAttribute("src");
          modalImage.style.display = "none";
        }
        if (modalHint) {
          modalHint.textContent = "Sertifikat belum ditambahkan. Masukkan file gambar ke folder assets dan isi atribut data-image pada kartu sertifikat.";
          modalHint.style.display = "block";
        }
      }

      modal.showModal();
    });
  });

  const modalClose = document.getElementById("modalClose");
  if (modalClose) modalClose.addEventListener("click", () => modal.close());

  modal.addEventListener("click", event => {
    if (event.target === modal) modal.close();
  });
}
