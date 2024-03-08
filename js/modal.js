(() => {
    const refs = {
      openModalBtn: document.querySelector(".button-type"),
      closeModalBtn: document.querySelector(".modal-button"),
      modal: document.querySelector(".modal-window-container"),
    };
  
    if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);
    }
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
  })();
  
  (() => {
    const mobileMenu = document.querySelector(".mobile-menue-window");
    const openMenuBtn = document.querySelector(".mobile-button-open");
    const closeMenuBtn = document.querySelector(".mobile-button-close");
  
    if (mobileMenu && openMenuBtn && closeMenuBtn) {
      const toggleMenu = () => {
        const isMenuOpen = mobileMenu.classList.contains("is-open");
        mobileMenu.classList.toggle("is-open");
      };
  
      openMenuBtn.addEventListener("click", toggleMenu);
      closeMenuBtn.addEventListener("click", toggleMenu);
  
      window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
        if (!e.matches) return;
        mobileMenu.classList.remove("is-open");
      });
    }
  })();

 