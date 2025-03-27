
//  document.addEventListener("DOMContentLoaded", function () {
//    const links = document.querySelectorAll(".nav-link");
//    const sections = document.querySelectorAll("section");

//    function highlightNav() {
//      let scrollPosition = window.scrollY;

//      sections.forEach((section) => {
//        let sectionTop = section.offsetTop - 80; // Ajuste para considerar a navbar
//        let sectionHeight = section.offsetHeight;
//        let sectionId = section.getAttribute("id");

//        if (
//          scrollPosition >= sectionTop &&
//          scrollPosition < sectionTop + sectionHeight
//        ) {
//          links.forEach((link) =>
//            link.classList.remove(
//              "text-white",
//              "transition-all",
//              "duration-300",
//              "border-b-[3px]",
//              "border-orange-900"
             
//            )
//          );
//          document
//            .querySelector(`.nav-link[href="#${sectionId}"]`)
//            .classList.add(
//              "text-white",
//              "transition-all",
//              "duration-300",
//              "border-b-[3px]",
//              "border-orange-900"
//            );
//        }
//      });
//    }

//    window.addEventListener("scroll", highlightNav);
//    highlightNav(); // Garante que o link correto já esteja ativo ao carregar a página
//  });

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-item");

  function activateMenu() {
    let scrollPos = window.scrollY + 50; // Ajuste para ativar corretamente

    sections.forEach((section) => {
      const top = section.offsetTop; //Obtém a distância do topo da página até essa seção.
      const height = section.offsetHeight; //Obtém a altura total da seção.
      const id = section.getAttribute("id"); //Obtém o ID da seção para usarmos como referência nos links

      if (scrollPos >= top && scrollPos < top + height) { //O usuário já rolou até essa seção. O usuário ainda não saiu dessa seção.
        navLinks.forEach((link) => {
          link.classList.remove("text-white", "border-b-[2px]", "border-orange-900");
          link.classList.add("text-orange-600");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("text-white", "border-b-[2px]", "border-orange-900");
            link.classList.remove("text-orange-600");
          }
        });
      }
    });
  }

  activateMenu();

  window.addEventListener("scroll", activateMenu);
});