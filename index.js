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
  