
 document.addEventListener("DOMContentLoaded", function () {
   const links = document.querySelectorAll(".nav-link");
   const sections = document.querySelectorAll("section");

   function highlightNav() {
     let scrollPosition = window.scrollY;

     sections.forEach((section) => {
       let sectionTop = section.offsetTop - 80; // Ajuste para considerar a navbar
       let sectionHeight = section.clientHeight;
       let sectionId = section.getAttribute("id");

       if (
         scrollPosition >= sectionTop &&
         scrollPosition < sectionTop + sectionHeight
       ) {
         links.forEach((link) =>
           link.classList.remove(
             "text-blue-800",
             "border-t-[0.3rem]",
             "border-b-[0.3rem]",
             "border-orange-500",
             "transition-all",
             "duration-300",
             "pt-[0.3rem]",
             "pb-[0.3rem]"
           )
         );
         document
           .querySelector(`.nav-link[href="#${sectionId}"]`)
           .classList.add(
             "text-blue-800",
             "border-t-[0.3rem]",
             "border-b-[0.3rem]",
             "border-orange-500",
             "transition-all",
             "duration-300",
             "pt-[0.3rem]",
             "pb-[0.3rem]"

           );
       }
     });
   }

   window.addEventListener("scroll", highlightNav);
   highlightNav(); // Garante que o link correto já esteja ativo ao carregar a página
 });