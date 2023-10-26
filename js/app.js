let lastLink;

function showConceptsOnList() {
    const lista = document.getElementById("lista-nav-wiki");

    conceptos.forEach(function (item) {
      let li = document.createElement("li");
      li.classList.add("nav-item");

      let a = document.createElement("a");
      a.classList.add("nav-link", "text-secondary");
      a.setAttribute("id", item.concepto);
      a.href = '#' + item.concepto;
      a.textContent = item.concepto;

      a.onclick = showContent;

      li.appendChild(a);
      lista.appendChild(li);

    });
  }

     // Función para mostrar contenido cuando se selecciona un elemento
     function showContent(event) {
        const enlace = event.target;
        enlace.classList.add('active', 'text-light');



        console.log(enlace.getAttribute("id"))
        const contenidoDiv = document.getElementById("content");
        const palabra = conceptos.find(item => item.concepto == enlace.getAttribute("id"));

        if (palabra) {
          contenidoDiv.innerHTML = `
          <h1 class="text-light">${palabra.concepto}</h1>
          <p class="text-light">${palabra.significado}</p>
          <img src="${palabra.img}" alt="${palabra.significado}" class="img-fluid">
          `;
        }

        if (lastLink && lastLink !== enlace) {
          lastLink.classList.remove('active');
          lastLink.classList.remove('text-light');
        }

        lastLink = enlace

      }

  


  // Llama a la función para generar los elementos de lista
  showConceptsOnList();