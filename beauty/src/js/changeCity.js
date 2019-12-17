$(document).ready(function () {
  const serviceCityData = {
    zt: {
      ru: {
        selectedService:
            `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service-nano.html">Нано-эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service-shugaring.html">Шугаринг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./waxing.html">Восковая эпиляция\`</a></li>
        `
      }
    },
    if: {
      ru: {
        selectedService:
            `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
        `
      }
    },
    lutsk: {
      ru: {
        selectedService:
            `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service-nano.html">Нано-эпиляция</a></li>
        `
      }
    },
    lviv: {
      ru: {
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
        `
      }
    },
    rovno: {
      ru: {
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service-shugaring.html">Шугаринг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./waxing.html">Восковая эпиляция\`</a></li>
        `
      }
    }
  }
  const citiesData = {
    zt: {
      ru: {
        cityName: 'Житомир',
        cityNameIn: 'в Житомире',
        cityPhone: '098-007-07-53',
        address: 'ул. Киевская, 77, тц "Глобал"',
        cityMap: '<iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10203.204981280256!2d28.6831072!3d50.2582963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a35524e091%3A0x94671cf8df29cc74!2z0JrQuNC10LLRgdC60LDRjyDRg9C7LiwgODQsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAwMQ!5e0!3m2!1sru!2sua!4v1573470059108!5m2!1sru!2sua"\n' +'    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram: 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
        cityFacebook: 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/zt/salon-0@2x.jpg',

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
    rovno: {
      ru: {
        cityName: 'Ровно',
        cityNameIn: 'в Ровно',
        cityPhone: '098-500-48-86',
        address: 'ул. Киевская, 4',
        cityMap: '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5705084842903!2d26.267335815665785!3d50.61651778326605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1573036973623!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram: 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook: 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rovno/salon-0@2x.jpg',

        imagesAmount: 10,
        imagesAmountSpecialists: 4,
        specialists: [
          {
            name: 'Валентина Дижурко',
            education: 'По образованию анестезиолог и реаниматолог',
            experience: 'Работает уже 2,5 года',
            skills: 'Сделает процедуры по уходу за лицом, лазерную эпиляцию, пирсинг, восковую депиляцию'
          },
          {
            name: 'Лариса Драганчук',
            education: 'По образованию санитарный фельдшер',
            experience: 'Работает уже 3 года',
            skills: ' Сделает лазерную эпиляцию, чистки кожи, уходовые процедуры, классический массаж лица, микротоковую терапию, безинъекционную мезотерапию, подбор домашнего ухода'
          },
          {
            name: 'Ирина Куба',
            education: 'По образованию врач-дерматолог',
            experience: 'Работает уже 10 лет',
            skills: 'Сделает дерматоскопию и удаление новообразований на коже, чистки, пилинги, аппаратные методики для лица, лазерную эпиляцию'
          },
          {
            name: 'Людмила Чорная',
            education: 'По образованию медсестра',
            experience: 'Работает уже 11 лет',
            skills: 'Сделает лазерную эпиляцию, восковую депиляцию, уходовые программы для лица, чистки и массаж лица, микротоковую терапию, безинъекционную мезотерапию, подбор домашнего ухода, перманентный макияж"'
          },
        ]
      }
    }
  };

  let localization = 'ru';
  let carouselsHTML = null;
  let city = localStorage.getItem('city');
  if (!city) {
    city = 'zt'
    localStorage.setItem('city', city)
  }
  if (city) {
    changeDataForCity();
  }

  $(`a.nav-link-text.btn-simple-map.city-trigger[data-city="${city}"]`).toggleClass('active')

  function changeDataForCity() {
    $('.inst-dynamic').each(function (e) {
      this.setAttribute('href', `${citiesData[city][localization].cityInstagram}`);
    });
    $('.fb-dynamic').each(function (e) {
      this.setAttribute('href', `${citiesData[city][localization].cityFacebook}`);
    });
    $('.city-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].cityName;
    });
    $('.telephone-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].cityPhone;
      this.setAttribute('href', `tel:+${citiesData[city][localization].cityPhone}`);
    });
    $('.city-in-dynamic').each(function (e) {
      this.innerText = ' ' + citiesData[city][localization].cityNameIn;
    });

    $('.address-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].address;
    });

    $('.map-dynamic').each(function (e) {
      this.innerHTML = citiesData[city][localization].cityMap;
    });

    $('.service-li-dynamic').each(function (e) {
      this.innerHTML = serviceCityData[city][localization].selectedService;
    });

    $('.image-about-dynamic').each(function (e) {
          this.setAttribute('src', `${citiesData[city][localization].imageAboutStaffanyPage}`);
    });


  }

  function initCarousels() {
    carouselsHTML = generateHTMLForCarouseles();
    const videoSlider = $('.video-slider');
    const owlDots = $('.small-owl-images-container .owl-dots-item');
    const specialistsSlider = $('.specialists-slider');
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
      loop: false,
      margin: 20,
      nav: true,
      dots: false,
      navigation: true,
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
        <span data-pos="${i}" class="video d-flex align-items-center justify-content-center">
          <img src="${imgPath}salon-${i}.jpg" class="w-100">
        </span>
      `;
    }

    for (let i = 0; i < imagesAmount; i++) {
      imagesSmall += `
        <span data-pos="${i}" class="owl-dot d-flex align-items-center justify-content-center mb-4">
          <img src="${imgPath}salon-${i}.jpg" class="w-100 salon-img">
          <span class="owl-dot-bg w-100 h-100 d-block"></span>
        </span>
      `;
    }

    for (let i = 0; i < imagesAmountSpecialists; i++) {
      imagesSpecialists += `
        <div class="specialists-item">
            <div class="specialists-item-container mb-3 w-100">
                <div class="specialists-img w-100"><img class="w-100" src="" alt="${specialistsData[i].name}" srcset="${imgPath}/specialists/specialist-${i}@2x.jpg 2x" /></div>
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
        if (window.location.href.indexOf('salonPage') !== -1) {
          location.reload()
        }
      }
    });
  }
  initCities();

})

