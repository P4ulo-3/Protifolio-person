
    // document.addEventListener("DOMContentLoaded", function () {
    //   let textos = [
    //     " I am Paul Robert",
    //     " Especialista em:",
    //     " Front-End e Back-End!",
    //     " Layout Responsivos!",
    //   ];
    //   let index = 0;
    //   let charIndex = 0;
    //   let velocidade = 100; // Velocidade de digitação
    //   let apagando = false;

    //   function digitar() {
    //     let titulo = document.getElementById("titulo");

    //     if (!apagando) {
    //       titulo.textContent = textos[index].substring(0, charIndex++);
    //       if (charIndex > textos[index].length) {
    //         apagando = true;
    //         setTimeout(digitar, 1000); // Espera antes de apagar
    //         return;
    //       }
    //     } else {
    //       titulo.textContent = textos[index].substring(0, charIndex--);
    //       if (charIndex === 0) {
    //         apagando = false;
    //         index = (index + 1) % textos.length;
    //       }
    //     }
    //     setTimeout(digitar, velocidade);
    //   }

    //   digitar();
    // });

    // document.addEventListener("DOMContentLoaded", function () {
    //   let textos = [
    //     " Bem-vindo ao Site!",
    //     " Aproveite o Conteúdo!",
    //     " Explore Novidades!",
    //     " Dicas Incríveis!",
    //   ];
    //   let index = 0;

    //   setInterval(() => {
    //     document.getElementById("titulo").textContent = textos[index];
    //     index = (index + 1) % textos.length; // Alterna em loop infinito
    //   }, 2000); // Troca o texto a cada 2 segundos
    // });

    document.addEventListener("DOMContentLoaded", function () {
      let textos = [
        "I am Paul Robert",
        "Especialista em:",
        "Front-End e Back-End!",
        "Layouts Responsivos!",
        "Fale comigo",
      ];
      let index = 0;
      let titulo = document.getElementById("titulo");

      setInterval(() => {
        titulo.style.opacity = 0; // Some suavemente
        setTimeout(() => {
          titulo.textContent = textos[index]; // Muda o texto
          titulo.style.opacity = 1; // Aparece suavemente
          index = (index + 1) % textos.length;
        }, 500); // Tempo da transição (0.5s)
      }, 3000); // Alterna o texto a cada 2 segundos
    });

    window.revelar = ScrollReveal({reset:true})

    // TOPO DO SITE

    revelar.reveal(".topo-1", {
      duration: 2000,
      origin: "right",
      distance: "500px",
    });

    // Serviços

    revelar.reveal(".servicos", {
      duration: 1000,
      origin: "bottom",
      distance: "500px",
    });

    revelar.reveal(".card-1", {
      duration: 500,
      origin: "left",
      distance: '500px',
      delay: 900
    });

    revelar.reveal(".card-2", {
      duration: 500,
      origin: "left",
      distance: "1000px",
      delay: 600,
    });

    revelar.reveal(".card-3", {
      duration: 500,
      origin: "left",
      distance: "1500px",
      delay: 300,
    });

    revelar.reveal(".card-6", {
      duration: 500,
      origin: "right",
      distance: "500px",
      delay: 900,
    });

    revelar.reveal(".card-5", {
      duration: 500,
      origin: "right",
      distance: "1000px",
      delay: 600,
    });

    revelar.reveal(".card-4", {
      duration: 500,
      origin: "right",
      distance: "1500px",
      delay: 300,
    });

    revelar.reveal(".sobre-mim", {
      duration: 2000,
      origin: "left",
      distance: "900px",
    
    });

    revelar.reveal(".img-sobre-mim", {
      duration: 2000,
      origin: "right",
      distance: "900px",
      delay: 500
    });

    revelar.reveal(".div-skill", {
      duration: 1500,
      origin: "left",
      distance: "300px"
      
    });

    revelar.reveal(".txt-skill", {
      duration: 1500,
      origin: "left",
      distance: "300px",
    });

    
