var productElements = document.querySelectorAll(".product");
var modal = document.getElementById("productModal");
var closeBtn = document.querySelector(".close-modal");

// Добавляем обработчик события для каждого элемента продукта
productElements.forEach(function(productElement) {
  if (productElement) {
    productElement.addEventListener("click", function() {
      // Открываем модальное окно при клике на элемент продукта
      if (modal) {
        modal.classList.add("active");
      }
    });
  }
});

// Добавляем обработчик события для кнопки закрытия модального окна
if (closeBtn) {
  closeBtn.addEventListener("click", function() {
    // Закрываем модальное окно при клике на кнопку закрытия
    if (modal) {
      modal.classList.remove("active");
    }
  });
}

// Закрываем модальное окно при клике вне его области
window.addEventListener("click", function(event) {
  if (modal && event.target === modal) {
    modal.classList.remove("active");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let lastScrollTop = 0;
  const blocks = document.querySelectorAll('.digit-decor');
  const initialPositions = Array.from(blocks, block => block.getBoundingClientRect().top + window.scrollY - 700); // Вычесть 300 для начала анимации раньше

  window.addEventListener('scroll', function () {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      blocks.forEach(function (block, index) {
          const distance = st - initialPositions[index];

          // Проверяем, находится ли блок в видимой области
          const isInViewport = block.getBoundingClientRect().top <= window.innerHeight && block.getBoundingClientRect().bottom >= 0;

          if (isInViewport) {
              const translateY = Math.max(0, Math.min(distance / 5, 300)); // Подстройте коэффициент деления для более плавного/быстрого движения

              if (distance > 0) {
                  // Прокрутка вниз
                  block.style.transform = 'translateY(' + translateY + 'px)';
              } else {
                  // Прокрутка вверх
                  block.style.transform = 'translateY(' + translateY + 'px)';
              }
          } else {
              // Сброс трансформации, когда блок не находится в видимой области
              block.style.transform = 'translateY(0)';
          }
      });

      lastScrollTop = st;
  });
});


var productThumbs = new Swiper(".card-product__slider-thumb", {
    spaceBetween: 30,
    slidesPerView: 2,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
  var productSlider = new Swiper(".card-product__slider-main", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    loopedSlides: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: productThumbs,
    },
    
  });

var productThumbsElement = document.querySelector(".product-thumbs");
if (productThumbsElement) {
  var productThumbs = new Swiper(productThumbsElement, {
    slidesPerView: 'auto',
    spaceBetween: 35,
    initialSlide: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
      click: function(e) {
        // Получаем индекс кликнутой миниатюры
        var clickedIndex = this.clickedIndex;

        // Переключаем слайдер productSlider на тот же индекс
        productSlider.slideTo(clickedIndex);

        // Скролим к следующему слайду в productThumbs
        this.slideNext();
      }
    }
  });
}

// Инициализация слайдера productSlider (продуктовый слайдер)
var productSliderElement = document.querySelector(".product-slider");
if (productSliderElement) {
  var productSlider = new Swiper(productSliderElement, {
    loop: true,
    effect: 'fade',
    spaceBetween: 10,
    slidesPerView: 1,
    loopedSlides: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: productThumbs,
    },
  });
}

// Инициализация слайдера gallery (галерея)
var galleryElement = document.querySelector(".gallery__slider");
if (galleryElement) {
  var gallerySlider = new Swiper(galleryElement, {
    slidesPerView: 'auto',
    spaceBetween: 25,
    initialSlide: 0,
    centerInsufficientSlides: true,
    freeMode: false,
    watchSlidesProgress: false,
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: 300,
    },
  });
}

var variantSliderElements = document.querySelectorAll(".variants-slider");

variantSliderElements.forEach(function(variantSliderElement) {
  var variantSlider = new Swiper(variantSliderElement, {
    slidesPerView: 'auto',
    spaceBetween: 40,
    initialSlide: 0,
    centerInsufficientSlides: true,
    freeMode: false,
    watchSlidesProgress: false,
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: 300,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
    var vidButton = document.querySelector('.vid-name');
var vidWrapper = document.querySelector('.vid__wrapper');
var vidRazmers = document.querySelectorAll('.vid__razmer');

// Check if video elements exist before adding event listeners
if (vidButton && vidWrapper && vidRazmers) {
  vidButton.addEventListener('click', function () {
    vidWrapper.classList.add('active');
  });

  // Add event listener to each element with the class .vid__razmer
  vidRazmers.forEach(function (vidRazmer) {
    vidRazmer.addEventListener('click', function () {
      vidWrapper.classList.remove('active');
    });
  });
}
  
    // Modal section
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('openModalBtn');
    var span = document.querySelector('.close');
  
    // Check if modal elements exist before adding event listeners
    if (modal && btn && span) {
      btn.addEventListener('click', function () {
        modal.style.display = 'flex';
      });
  
      span.addEventListener('click', function () {
        modal.style.display = 'none';
      });
  
      window.addEventListener('click', function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  });