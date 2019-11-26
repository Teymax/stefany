$(document).ready(function () {
  const citiesData = {
    zt: {
      ru: {
        cityName: 'Житомир',
        cityNameIn: 'Житомире',
        address: 'ул. Киевская, 84',
        imagesAmount: 6,
        imagesAmountSpecialists: 7,
        specialists: [
          {
            name: 'Кос Инна',
            education: 'По образованию медсестра',
            experience: 'Работает уже 7 лет',
            skills: 'Сделает лазерную эпиляцию, восковую депиляцию, шугаринг, пилинг, уходовые процедуры, индивидуальные программы с учетом состояния и типа кожи'
          },
          {
            name: 'Виктория Демчук',
            education: 'По образованию косметолог',
            experience: 'Работает уже 7 лет',
            skills: 'Сделает все виды чисток, пилингов, уходовых процедур, лазерную эпиляцию, все виды депиляций, подбор домашнего ухода'
          },
          {
            name: 'Ульяна Кравчук',
            education: 'По образованию медицинский работник.',
            experience: 'Работает уже 8 лет',
            skills: 'Сделает лазерную эпиляцию, эстетическую косметологию, шугаринг, восковую эпиляцию'
          },
          {
            name: 'Татьяна Огир',
            education: 'По образованию медсестра.',
            experience: 'Работает уже 18 лет',
            skills: 'Сделает массаж, SPA-услуги, лазерную эпиляцию, LPG-массаж'
          },
          {
            name: 'Инна Степанчук',
            education: 'По образованию фармацевт.',
            experience: 'Работает уже 3 года',
            skills: 'Сделает перманентный макияж, лазерную эпиляцию, восковую депиляцию, шугаринг, чистку и пилинг лица'
          },
          {
            name: 'Александра Бородиян',
            education: 'По образованию социальный реабилитолог, фельдшер-лаборант.',
            experience: 'Работает уже 12 лет',
            skills: 'Сделает все виды чисток, пилингов, уходовые процедуры, лазерную эпиляцию, все виды депиляции, подбор домашнего ухода'
          },
          {
            name: 'Ирина Гутель',
            education: 'По образованию медсестра и реабилитолог',
            experience: 'Работает уже 9 лет',
            skills: 'Сделает массаж, SPA-услуги, лазерную эпиляцию, LPG-массаж'
          }
        ]
      }
    },
    if: {
      ru: {
        cityName: 'Ивано-Франковск',
        cityNameIn: 'Ивано-Франковске',
        address: 'ул. Ивана Франка, 25',
        imagesAmount: 5,
        imagesAmountSpecialists: null,
        specialists: []
      }
    },
    lutsk: {
      ru: {
        cityName: 'Луцк',
        cityNameIn: 'Луцке',
        address: 'пр. Воли, 10',
        imagesAmount: 9,
        imagesAmountSpecialists: null,
        specialists: []
      }
    },
    lviv: {
      ru: {
        cityName: 'Львов',
        cityNameIn: 'Львове',
        address: 'ул. Гулака-Артемовского, 2',
        imagesAmount: 0,
        imagesAmountSpecialists: null,
        specialists: []
      }
    },
    rovno: {
      ru: {
        cityName: 'Ровно',
        cityNameIn: 'Ровно',
        address: 'ул. Киевская, 4',
        imagesAmount: 10,
        imagesAmountSpecialists: 4,
        specialists: [
          {
            name: 'Rovnooo Кос Инна',
            education: 'По образованию медсестра',
            experience: 'Работает уже 7 лет',
            skills: 'Сделает лазерную эпиляцию, восковую депиляцию, шугаринг, пилинг, уходовые процедуры, индивидуальные программы с учетом состояния и типа кожи'
          },
          {
            name: 'Виктория Демчук',
            education: 'По образованию косметолог',
            experience: 'Работает уже 7 лет',
            skills: 'Сделает все виды чисток, пилингов, уходовых процедур, лазерную эпиляцию, все виды депиляций, подбор домашнего ухода'
          },
          {
            name: 'Ульяна Кравчук',
            education: 'По образованию медицинский работник.',
            experience: 'Работает уже 8 лет',
            skills: 'Сделает лазерную эпиляцию, эстетическую косметологию, шугаринг, восковую эпиляцию'
          },
          {
            name: 'Татьяна Огир',
            education: 'По образованию медсестра.',
            experience: 'Работает уже 18 лет',
            skills: 'Сделает массаж, SPA-услуги, лазерную эпиляцию, LPG-массаж'
          },
          {
            name: 'Инна Степанчук',
            education: 'По образованию фармацевт.',
            experience: 'Работает уже 3 года',
            skills: 'Сделает перманентный макияж, лазерную эпиляцию, восковую депиляцию, шугаринг, чистку и пилинг лица'
          },
          {
            name: 'Александра Бородиян',
            education: 'По образованию социальный реабилитолог, фельдшер-лаборант.',
            experience: 'Работает уже 12 лет',
            skills: 'Сделает все виды чисток, пилингов, уходовые процедуры, лазерную эпиляцию, все виды депиляции, подбор домашнего ухода'
          },
          {
            name: 'Ирина Гутель',
            education: 'По образованию медсестра и реабилитолог',
            experience: 'Работает уже 9 лет',
            skills: 'Сделает массаж, SPA-услуги, лазерную эпиляцию, LPG-массаж'
          }
        ]
      }
    }
  };

  let localization = 'ru';
  let carouselsHTML = null;
  let city = localStorage.getItem('city') || 'zt';
  if (city) {
    changeDataForCity();
  }

  function changeDataForCity() {
    $('.city-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].cityName;
    });

    $('.city-in-dynamic').each(function (e) {
      this.innerText = ' ' + citiesData[city][localization].cityNameIn;
    });

    $('.address-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].address;
    });
  }

  function initCarousels() {
    carouselsHTML = generateHTMLForCarouseles();
    const videoSlider = $('.video-slider');
    const owlDots = $('.small-owl-images-container .owl-dots-item');
    const specialistsSlider = $('.specialists-slider');
    console.log(videoSlider);
    if (videoSlider) {
      videoSlider.html(carouselsHTML.videoCarousel);
    }
    if (owlDots) {
      owlDots.html(carouselsHTML.videoCarouselSmall);
    }
    if (specialistsSlider) {
      specialistsSlider.html(carouselsHTML.specialistsCarousel);
    }

    var videoSLiderCarousel = $('.video-slider').owlCarousel({
      loop: false,
      margin: 0,
      nav: false,
      dots: false,
      items: 1,
      dotsContainer: '.video-slider-dots-wrap .video-slider-dots',
      responsive: {
        0: {
          nav: true
        },
        541: {
          nav: false
        },
        1200: {
          nav: false
        }
      }
    })

    $('.video-slider-dots .owl-dot').click(function (e) {
      e.preventDefault()
      var itemPosition = $(this).attr('data-pos')
      videoSLiderCarousel.trigger('to.owl.carousel', [itemPosition, 300])
    })

    var videoSliderDots = $('.video-slider-dots').owlCarousel({
      navContainer: '.video-nav-slider-dots',
      loop: false,
      margin: 0,
      nav: true,
      dots: false,
      items: 1
    })

    $('.specialists-slider').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        731: {
          items: 2
        },
        1200: {
          items: 4
        }
      }
    });

    $('.video-nav-slider-dots .owl-next').click(function () {
      videoSliderDots.trigger('next.owl.carousel')
    })

    $('.video-nav-slider-dots .owl-prev').click(function () {
      videoSliderDots.trigger('prev.owl.carousel', [300])
    })
  }

  function generateHTMLForCarouseles() {
    let imagesAmount = citiesData[city][localization].imagesAmount;
    let imagesAmountSpecialists = citiesData[city][localization].imagesAmountSpecialists;
    let specialistsData = citiesData[city][localization].specialists;
    let imgPath = `assets/img/about-steffany-salon/${city}/`;
    let images = '';
    let imagesSmall = '';
    let imagesSpecialists = '';

    for (let i = 0; i < imagesAmount; i++) {
      images += `
        <span data-pos="${i}" data-fancybox="" class="video d-flex align-items-center justify-content-center">
          <img src="${imgPath}video-slider-${i}.jpg" srcset="${imgPath}video-slider-${i}@2x.jpg" class="w-100">
        </span>
      `;
    }

    for (let i = 0; i < imagesAmount; i++) {
      imagesSmall += `
        <span data-pos="${i}" class="owl-dot d-flex align-items-center justify-content-center mb-4">
          <img src="${imgPath}video-slider-${i}.jpg" srcset="${imgPath}video-slider-${i}@2x.jpg" class="w-100 video-slider-img">
          <span class="owl-dot-bg w-100 h-100 d-block"></span>
        </span>
      `;
    }

    for (let i = 0; i < imagesAmountSpecialists; i++) {
      // console.log('specialist', specialistsData[i]);
      imagesSpecialists += `
        <div class="specialists-item">
            <div class="specialists-item-container mb-3 w-100" data-fancybox="">
                <div class="specialists-img w-100"><img class="w-100" src="${imgPath}/specialists/specialist-${i}.jpg" alt="${specialistsData[i].name}" srcset="${imgPath}/specialists/specialist-${i}@2x.jpg 2x" /></div>
                <div class="specialists-info d-flex flex-column align-items-start w-100 p-3">
                    <p class="paragraph-text text-color-lightdark text-w-light">${specialistsData[i].education}</p>
                    <p class="paragraph-text text-color-lightdark text-w-bold">${specialistsData[i].experience}</p>
                    <p class="paragraph-text text-color-lightdark text-w-light">${specialistsData[i].skills}</p>
                </div>
            </div>
            <p class="h4-title h-center">${specialistsData[i].name}</p>
        </div>
      `;
    }

    return {
      videoCarousel: images,
      videoCarouselSmall: imagesSmall,
      specialistsCarousel: imagesSpecialists
    }
  }

  function changeImagesSalon() {
    $('.video-slider').trigger('add.owl.carousel', [jQuery(carouselsHTML.videoCarousel)]).trigger('refresh.owl.carousel');
    $('.video-slider-dots').trigger('add.owl.carousel', [jQuery(carouselsHTML.videoCarouselSmall)]).trigger('refresh.owl.carousel');
  }

  function initCities() {
    initCarousels();
    $(document).click(function (e) {
      let closestDropdown = e.target.closest('.select-city-dropdown')
      if (closestDropdown && e.target.classList.contains('nav-link-text')) {
        city = e.target.dataset.city;
        localStorage.setItem('city', city);
        changeDataForCity();
        location.reload();
      }
    });
  }

  initCities();
})

