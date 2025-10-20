// ====== BOTÓN "VOLVER ARRIBA" ======
const btnTop = document.createElement("button");
btnTop.textContent = "↑";
btnTop.classList.add("btn-top");
document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
  btnTop.classList.toggle("visible", window.scrollY > 400);
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== SCROLL SUAVE PARA NAVBAR ======
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// ====== HIGHLIGHT DE SECCIÓN ACTIVA ======
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // ajuste fino
    if (window.scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ====== MENSAJE DE CONFIRMACIÓN ======
console.log("CV cargado correctamente © Julián Barcelo De Esteban");
