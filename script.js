// =====================
// CARRUSEL
// =====================
const contenedor = document.querySelector(".carrusel-contenedor");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const items = document.querySelectorAll(".carrusel-item");
const totalItems = items.length;

let index = 0;

function mostrarImagen(i) {
  contenedor.style.transform = `translateX(-${i * 100}%)`;
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalItems;
    mostrarImagen(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalItems) % totalItems;
    mostrarImagen(index);
  });

  setInterval(() => {
    index = (index + 1) % totalItems;
    mostrarImagen(index);
  }, 4000);
}

// =====================
// MENÚ MÓVIL
// =====================
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // Cerrar al hacer clic en un enlace
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // Cerrar con click fuera
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

// =====================
// FORMULARIO WHATSAPP
// =====================
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío tradicional

    // Obtener valores del formulario
    const nombre = document.getElementById("b_name").value.trim();
    const telefono = document.getElementById("b_phone").value.trim();
    const motivo = document.getElementById("b_reason").value;
    const fecha = document.getElementById("b_date").value;

    // Validar que se complete nombre y teléfono
    if (!nombre || !telefono) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mensaje a enviar
    const mensaje = `Hola, soy *${nombre}*.\nTeléfono: ${telefono}\nMotivo: ${motivo}${fecha ? `\nFecha tentativa: ${fecha}` : ""}`;

    // Número de WhatsApp de la doctora (sin + y espacios)
    const numeroWhats = "51927486134";

    // Abrir WhatsApp en nueva pestaña
    const urlWhats = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhats, "_blank");
  });


  
}
