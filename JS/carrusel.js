const images = [
    { src: "carrusel-img/h1.jpg" },
    { src: "carrusel-img/h2.jpg" },
    { src: "carrusel-img/h3.jpg" },
  
   
  ];
  
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselIndicators = document.querySelector(".carousel-indicators");
  
  // Establecer la misma altura para todas las imágenes
  const imageHeight = 300;
  
  images.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.className = "d-block w-40 mx-auto";
    
    // Establecer la misma altura para todas las imágenes
    imgElement.style.height = `${imageHeight}px`;
  
    const itemElement = document.createElement("div");
    itemElement.className = `carousel-item ${index === 0 ? "active" : ""}`;
    itemElement.appendChild(imgElement);
    
    carouselInner.appendChild(itemElement);
    
    const indicatorElement = document.createElement("li");
    indicatorElement.setAttribute("data-target", "#myCarousel");
    indicatorElement.setAttribute("data-slide-to", index.toString());
    if (index === 0) {
      indicatorElement.className = "active";
    }
    
    carouselIndicators.appendChild(indicatorElement);
  });

  // Prevenir el comportamiento por defecto de los enlaces de cambio de imagen
const carouselLinks = document.querySelectorAll('[data-slide="prev"], [data-slide="next"]');
carouselLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    carouselInner.carousel(link.getAttribute('data-slide'));
  });
});
  

  const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
    const carouselItems = document.querySelectorAll(".carousel-item");

    let currentIndex = 0;

    prevButton.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
    });

    nextButton.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    updateCarousel();
    });

    function updateCarousel() {
    carouselItems.forEach((item, index) => {
        if (index === currentIndex) {
        item.classList.add("active");
        } else {
        item.classList.remove("active");
        }
    });
    }




//intervalos
    $('.carousel').carousel({
        interval: 3000
      });