function footerComponent(elem){
    const footerEl= document.createElement("div")
    footerEl.innerHTML= `<footer class="footer">
    <div class="container-footer">
      <div class="logo-footer-section">
        <img class= "logo-footer" src="./" alt="">
      </div>
      <div class="social">
        <a href="https://www.linkedin.com/in/mariana-pastran/">Linkedin<img class="img-social" src="./assets footer/linkedin.png" alt="linkedin"></a>
        <a href="">Email<img class="img-social" src="./assets footer/email.png" alt="email"></a>
        <a href="">Github<img class="img-social" src="./assets footer/github.png" alt="github"></a>
      </div>
    </div>
  </footer> `
    elem.appendChild(footerEl);
}