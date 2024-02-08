function checkViewportWidth() {
    var imgElement = document.getElementById('img');
    if (window.innerWidth < 465) {
      imgElement.src = './assets/images/image-web-3-mobile.jpg';
    } else {
      imgElement.src = './assets/images/image-web-3-desktop.jpg';
    }
  }
  
  // Sprawdź przy załadowaniu strony
  window.addEventListener('load', checkViewportWidth);
  // Sprawdź przy zmianie rozmiaru okna
  window.addEventListener('resize', checkViewportWidth);


  //kliknij przycisk hamburgera na stronie
  document.getElementById("nav-bar-icon").addEventListener("click", () => {
    document.getElementById("mobile-nav-bar-open").classList.toggle("show");
    document.getElementById("mobile-nav-bar-overlay").classList.toggle("active");
  });

//kliknij na przycisk x na stronie
  document.getElementById("close-nav-bar-icon").addEventListener("click", () => {
    document.getElementById("mobile-nav-bar-open").classList.toggle("show");
    document.getElementById("mobile-nav-bar-overlay").classList.toggle("active");
  });
  