"use strict";

!function() {
  window.addEventListener('load', () => {
    var id = 1;
    setInterval(() => {
      var next = document.getElementById(`image-featured-${id + 1}`);
      document.getElementById(`image-featured-${id}`).classList.remove('featured-background-image--active');
      if (next) {
        next.classList.add('featured-background-image--active');
        id += 1;
      } else {
        id = 1;
        document.getElementById(`image-featured-${id}`).classList.add('featured-background-image--active');
      }
    }, 3000);
  });
}();

!function() {
  var id = 1;
  document.getElementById('image-gallery-arrowButton').addEventListener('click', (event) => {
    var container = document.getElementById('image-gallery');
    var next = document.getElementById(`image-gallery-${id + 1}`);
    document.getElementById(`image-gallery-${id}`).classList.remove('image-gallery-item--active');
    if (next) {
      next.classList.add('image-gallery-item--active');
      var rect = document.getElementById(`image-gallery-${id}`).getBoundingClientRect();
      container.setAttribute('style', `transform: translateX(-${rect.x * id + rect.width * id}px)`);
      id += 1;
    } else {
      id = 1;
      document.getElementById(`image-gallery-${id}`).classList.add('image-gallery-item--active');
      container.setAttribute('style', `transform: translateX(0)`);
    }
  });
  window.addEventListener('resize', (event) => {
    document.getElementById('image-gallery').setAttribute('style', `transform: translateX(0)`);
    document.querySelector('.image-gallery-item--active').classList.remove('image-gallery-item--active');
    document.getElementById(`image-gallery-1`).classList.add('image-gallery-item--active');
    id = 1;
  });
}();

!function() {
  window.addEventListener('load', () => {
    var id = 1;
    setInterval(() => {
      var next = document.getElementById(`image-accom-${id + 1}`);
      document.getElementById(`image-accom-${id}`).classList.remove('accom-gallery-item--active');
      if (next) {
        next.classList.add('accom-gallery-item--active');
        id += 1;
      } else {
        id = 1;
        document.getElementById(`image-accom-${id}`).classList.add('accom-gallery-item--active');
      }
    }, 3000);
  });
}();

!function() {
  window.addEventListener('load', () => {
    var id = 1;
    setInterval(() => {
      var next = document.getElementById(`image-restaurant-${id + 1}`);
      document.getElementById(`image-restaurant-${id}`).classList.remove('accom-gallery-item--active');
      if (next) {
        next.classList.add('accom-gallery-item--active');
        id += 1;
      } else {
        id = 1;
        document.getElementById(`image-restaurant-${id}`).classList.add('accom-gallery-item--active');
      }
    }, 3000);
  });
}();
