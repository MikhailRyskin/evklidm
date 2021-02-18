document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.how-link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger-menu-hide').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.remove('is-active')
  })
})

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

$(function () {
  $("#accordion").accordion();
});
