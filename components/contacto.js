function contactComponent (elem){
    const componentEL = document.createElement("div")
    componentEL.innerHTML =
     `<section class="contact">
      <h2 class="contact__title"> Contacto</h2>
      <form class="contact__form"action="">
          <label for="">
              <h3  class="contact__label">Nombre</h3>
              <input type="text" class="contact__input">
          </label>
          <label for="" >
              <h3  class="contact__label">Email</h3>
              <input type="text" class="contact__input">
          </label>
          <label for="" >
              <h3  class="contact__label">Mensaje</h3>
              <textarea class="contact__input"></textarea>    
          </label>
          <div class="contact__container-button">
              <button class="contact_button">Enviar</button>
          </div>
      </form>
    </section>`
    const form = componentEL.querySelector(".contact__form");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("Se envió el formulario")
    })
    elem.appendChild(componentEL);
    }