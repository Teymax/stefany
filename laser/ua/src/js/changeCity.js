$(document).ready(function () {
  const serviceCityData = {
    zt: {
      ru: {
        selectedService:
            `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./nano-epilyatsiy">Нано-епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./shugaring">Шугарінг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./voskovaya-epilyatsiya">Воскова епіляція</a></li>
        `
      }
    },
    if: {
      ru: {
        selectedService:
            `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./epilation">Лазерна епіляція</a></li>
        `
      }
    },
    lt: {
      ru: {
        selectedService:
          `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./nano-epilyatsiy">Нано-епіляція</a></li>
        `
      }
    },
    lv: {
      ru: {
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./epilation">Лазерна епіляція</a></li>
        `
      }
    },
    rv: {
      ru: {
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./shugaring">Шугарінг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./voskovaya-epilyatsiya">Воскова епіляція</a></li>
        `
      }
    }
  }
  const citiesData = {
    zt: {
      ru: {
        cityName              : 'Житомир',
        cityNameIn            : 'у Житомирі',
        cityPhone             : '096-205-50-30',
        address               : 'вул. Київська, 84',
        cityMap               : '<iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10203.204981280256!2d28.6831072!3d50.2582963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a35524e091%3A0x94671cf8df29cc74!2z0JrQuNC10LLRgdC60LDRjyDRg9C7LiwgODQsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAwMQ!5e0!3m2!1sru!2sua!4v1573470059108!5m2!1sru!2sua"\n' + '    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/zt/video-slider-0@2x.jpg',
        
        imagesAmount           : 6,
        imagesAmountSpecialists: 7,
        specialists            : [
          {
            name      : 'Інна Кос',
            education : 'За освітою медсестра',
            experience: 'Працює вже 7 років',
            skills    : 'Зробить лазерну епіляцію, воскову депіляцію, шугарінг, пілінг, доглядові процедури, індивідуальні програми з урахуванням стану і типу шкіри'
          },
          {
            name      : 'Вікторія Демчук',
            education : 'За освітою косметолог',
            experience: 'Працює вже 7 років',
            skills    : 'Зробить усі види чисток, пілінгів, доглядових процедур, лазерну епіляцію, усі види депіляції, підбір домашнього догляду'
          },
          {
            name      : 'Уляна Кравчук',
            education : 'За освітою медичиний працівник',
            experience: 'Працює вже 8 років',
            skills    : 'Зробить лазерну епіляцію, естетичну косметологію, шугарінг, воскову депиляцію'
          },
          {
            name      : 'Тетяна Огир',
            education : 'За освітою медсестра.',
            experience: 'Працює вже 18 років',
            skills    : 'Зробить масаж, SPA-послуги, лазерну епіляцію, LPG-масаж'
          },
          {
            name      : 'Інна Степанчук',
            education : 'За освітою фармацевт.',
            experience: 'Працює вже 3 років',
            skills    : 'Зробить перманентний макіяж, лазерну епіляцію, воскову депіляцію, шугарінг, чистку і пілінг обличчя'
          },
          {
            name      : 'Олександра Бородіян',
            education : 'За освітою соціальний реабілітолог, фельдшер-лаборант.',
            experience: 'Працює вже 12 років',
            skills    : 'Зробить усі види чисток, пілінгів, доглядові процедури, лазерну епіляцію, усі види депіляції, підбір домашнього догляду'
          },
          {
            name      : 'Ірина Гутель',
            education : 'За освітою медсестра і реабілітолог',
            experience: 'Працює вже 9 років',
            skills    : 'Зробить масаж, SPA-послуги, лазерну епіляцію, LPG-масаж'
          }
        ]
      }
    },
    if: {
      ru: {
        cityName              : 'Івано-Франківськ',
        cityNameIn            : 'у Івано-Франківську ',
        cityPhone             : '067-110-09-69',
        address               : 'вул. Івана Франка, 25',
        cityMap               : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.6151145976846!2d24.714299715612086!3d48.92272480412903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c4f01503f%3A0x2ad33aab5a158616!2z0YPQuy4g0JjQstCw0L3QsCDQpNGA0LDQvdC60L4sIDI1LCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQuiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1sru!2sua!4v1573037148887!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.ifrankivsk/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/if/video-slider-0@2x.jpg',
        
        imagesAmount           : 9,
        imagesAmountSpecialists: 2,
        specialists            : [
          {
            name      : 'Оксана Іваницька',
            education : 'За освітою акушерка',
            experience: 'Працює вже 2,5 місяці',
            skills    : 'Зробить лазерну епіляцію'
          },
          {
            name      : 'Христина Данило',
            education : 'За освітою лікар-дерматолог, косметолог',
            experience: 'Працює вже 7 років',
            skills    : 'Зробить лазерну епіляцію, пілінги, усі види чисток'
          }
        ]
      }
    },
    lt: {
      ru: {
        cityName              : 'Луцьк',
        cityNameIn            : 'у Луцьку',
        cityPhone             : '068-129-24-23',
        address               : 'пр. Волі, 10',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5746604837755!2d25.33165866888208!3d50.74637731008205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599efdec12f9b%3A0x2dd6f91bc0308c8e!2z0L_RgNC-0YHQvy4g0JLQvtC70LgsIDEwLCDQm9GD0YbQuiwg0JLQvtC70YvQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MzAwMA!5e0!3m2!1sru!2sua!4v1574856828162!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.lutsk/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/lutsk/video-slider-0@2x.jpg',
        
        
        imagesAmount           : 9,
        imagesAmountSpecialists: 3,
        specialists            : [
          {
            name      : 'Кристина Данило',
            education : 'По образованию врач-дерматолог, косметолог',
            experience: 'Работает уже 7 лет',
            skills    : 'Сделает лазерную эпиляцию, пилинги, все виды чисток'
          },
          {
            name      : 'Тетяна Королик',
            education : 'За освітою фельдшер',
            experience: 'Працює вже 1 рік',
            skills    : 'Зробить лазерну епіляцію, усі види косметологічних послуг'
          },
          {
            name      : 'Руслана Шостак',
            education : 'За освітою медсестра',
            experience: 'Працює вже 5 років',
            skills    : 'Зробить класичний масаж обличчя, доглядові процедури, маски, пілінги, біоревіталізацію, карбоксітерапію, мікрострумову терапію'
          }
        ]
      }
    },
    lv: {
      ru: {
        cityName              : 'Львів',
        cityNameIn            : 'у Львові',
        cityPhone             : '097-203-90-03',
        address               : 'вул. Гулака-Артемовського, 2',
        cityMap               : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3207133690416!2d24.03369211564091!3d49.83643113929711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add69070842c9%3A0x9108f74379396188!2z0YPQuy4g0JPRg9C70LDQutCwLdCQ0YDRgtC10LzQvtCy0YHQutC-0LPQviwgMiwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1573037292724!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.lviv/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/lviv/video-slider-0@2x.jpg',
        
        
        imagesAmount           : 10,
        imagesAmountSpecialists: 2,
        specialists            : [
          {
            name      : 'Ірина Станкевич',
            education : 'За освітою акушерка',
            experience: 'Працює вже 2,5 года',
            skills    : 'Зробить лазерну епіляцію, косметологічні послуги, чистку обличчя'
          },
          {
            name      : 'Христина Демедюк',
            education : 'По образованию',
            experience: 'Працює вже 2,5 місяці',
            skills    : 'Зробить лазерну епіляцію'
          }
        ]
      }
    },
    rv: {
      ru: {
        cityName              : 'Рівне',
        cityNameIn            : 'у Рівному',
        cityPhone             : '098-500-48-86',
        address               : 'вул. Київська, 4',
        cityMap               : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5705084842903!2d26.267335815665785!3d50.61651778326605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1573036973623!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rovno/video-slider-0@2x.jpg',
        
        
        imagesAmount           : 10,
        imagesAmountSpecialists: 4,
        specialists            : [
          {
            name      : 'Валентина Дижурко',
            education : 'За освітою анестезіолог і реаніматолог',
            experience: 'Працює вже 2,5 року',
            skills    : 'Зробить процедури по догляду за обличчям, лазерну епіляцію, пірсинг, воскову депіляцію'
          },
          {
            name      : 'Лариса Драганчук',
            education : 'За освітою санітарний фельдшер',
            experience: 'Працює вже 3 роки',
            skills    : 'Зробить лазерну епіляцію, чистку шкіри, доглядові процедури, класичний масаж обличчя, мікрострумову терапію, безін\'єкційну мезотерапію, підбір домашнього догляду'
          },
          {
            name      : 'Ірина Куба',
            education : 'За освітою лікар-дерматолог',
            experience: 'Працює вже 10 років',
            skills    : 'Зробить дерматоскопію і видалення новоутворень на шкірі, чистку, пілінги, апаратні методики для обличчя, лазерну епіляцію'
          },
          {
            name      : 'Людмила Чорна',
            education : 'За освітою медсестра',
            experience: 'Працює вже 11 років',
            skills    : 'Зробить лазерну епіляцію, воскову депіляцію, доглядові програми для обличчя, чистку і масаж обличчя, мікрострумову терапію, безін\'єкційну мезотерапію, підбір домашнього догляду, перманентний макіяж'
          }
        ]
      }
    }
  }
  
  const nav = {
    zt: 'lazernaya-epilyatsiya/ua/{{ page }}',
    if: 'lazernaya-epilyatsiya/if/ua/{{ page }}',
    lv: 'lazernaya-epilyatsiya/lv/ua/{{ page }}',
    lt: 'lazernaya-epilyatsiya/lt/ua/{{ page }}',
    rv: 'lazernaya-epilyatsiya/rv/ua/{{ page }}'
  }
  
  const urlCity      = location.pathname.slice(1).split('/')[1],
        filteredCity = ['rv', 'if', 'lv', 'lt'].find(city => city === urlCity) || 'zt'
  
  // location.pathname.slice(1).split('/')[2]
  let localization = 'ru'
  let carouselsHTML = null
  // let city = localStorage.getItem('city')
  let city = filteredCity
  // if (!city) {
  //   city = 'zt'
  //   localStorage.setItem('city', city)
  // }
  // if (city) {
  changeDataForCity()
  // }
  
  $(`a.nav-link-text.btn-simple-map.city-trigger[data-city="${city}"]`).toggleClass('active')
  
  function changeDataForCity() {
    $('.inst-dynamic').each(function (e) {
      this.setAttribute('href', `${citiesData[city][localization].cityInstagram}`)
    })
    $('.fb-dynamic').each(function (e) {
      this.setAttribute('href', `${citiesData[city][localization].cityFacebook}`)
    })
    $('.city-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].cityName
    })
    $('.telephone-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].cityPhone
      this.setAttribute('href', `tel:+${citiesData[city][localization].cityPhone}`)
    })
    $('.city-in-dynamic').each(function (e) {
      this.innerText = ' ' + citiesData[city][localization].cityNameIn
    })
    
    $('.address-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].address
    })
    
    $('.map-dynamic').each(function (e) {
      this.innerHTML = citiesData[city][localization].cityMap
    })
    
    $('.service-li-dynamic').each(function (e) {
      this.innerHTML = serviceCityData[city][localization].selectedService
    })
    
    $('.image-about-dynamic').each(function (e) {
      this.setAttribute('src', `${citiesData[city][localization].imageAboutStaffanyPage}`)
    })
    
    
  }
  
  function initCarousels() {
    carouselsHTML = generateHTMLForCarouseles()
    const videoSlider = $('.video-slider')
    const owlDots = $('.small-owl-images-container .owl-dots-item')
    const specialistsSlider = $('.specialists-slider')
    if (videoSlider) {
      videoSlider.html(carouselsHTML.videoCarousel)
    }
    if (owlDots) {
      owlDots.html(carouselsHTML.videoCarouselSmall)
    }
    if (specialistsSlider) {
      specialistsSlider.html(carouselsHTML.specialistsCarousel)
    }
    
    var videoSLiderCarousel = $('.video-slider').owlCarousel({
      loop         : false,
      margin       : 0,
      nav          : false,
      dots         : false,
      items        : 1,
      dotsContainer: '.video-slider-dots-wrap .video-slider-dots',
      responsive   : {
        0   : {
          nav: true
        },
        541 : {
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
      loop        : false,
      margin      : 0,
      nav         : true,
      dots        : false,
      items       : 1
    })
    
    $('.specialists-slider').owlCarousel({
      loop      : false,
      margin    : 20,
      nav       : true,
      dots      : false,
      navigation: true,
      responsive: {
        0   : {
          items: 1
        },
        731 : {
          items: 2
        },
        1200: {
          items: 4
        }
      }
    })
    
    $('.video-nav-slider-dots .owl-next').click(function () {
      videoSliderDots.trigger('next.owl.carousel')
    })
    
    $('.video-nav-slider-dots .owl-prev').click(function () {
      videoSliderDots.trigger('prev.owl.carousel', [300])
    })
  }
  
  function generateHTMLForCarouseles() {
    let imagesAmount = citiesData[city][localization].imagesAmount
    let imagesAmountSpecialists = citiesData[city][localization].imagesAmountSpecialists
    let specialistsData = citiesData[city][localization].specialists
    let imgPath = `assets/img/about-steffany-salon/${city}/`
    let images = ''
    let imagesSmall = ''
    let imagesSpecialists = ''
    
    for (let i = 0; i < imagesAmount; i++) {
      images += `
        <span data-pos="${i}" class="video d-flex align-items-center justify-content-center">
          <img src="${imgPath}video-slider-${i}.jpg" srcset="${imgPath}video-slider-${i}@2x.jpg" class="w-100">
        </span>
      `
    }
    
    for (let i = 0; i < imagesAmount; i++) {
      imagesSmall += `
        <span data-pos="${i}" class="owl-dot d-flex align-items-center justify-content-center mb-4">
          <img src="${imgPath}video-slider-${i}.jpg" srcset="${imgPath}video-slider-${i}@2x.jpg" class="w-100 video-slider-img">
          <span class="owl-dot-bg w-100 h-100 d-block"></span>
        </span>
      `
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
      `
    }
    
    return {
      videoCarousel      : images,
      videoCarouselSmall : imagesSmall,
      specialistsCarousel: imagesSpecialists
    }
  }
  
  function changeImagesSalon() {
    $('.video-slider').trigger('add.owl.carousel', [jQuery(carouselsHTML.videoCarousel)]).trigger(
      'refresh.owl.carousel')
    $('.video-slider-dots').trigger('add.owl.carousel', [jQuery(carouselsHTML.videoCarouselSmall)]).trigger(
      'refresh.owl.carousel')
  }
  
  function initCities() {
    initCarousels()
    $(document).click(function (e) {
      let closestDropdown = e.target.closest('.select-city-dropdown')
      if (closestDropdown && e.target.classList.contains('nav-link-text')) {
        // city = e.target.dataset.city
        // localStorage.setItem('city', city)
        // changeDataForCity()
        // if (window.location.href.indexOf('about-steffany') !== -1) {
        //   location.reload()
        // }
        city = e.target.dataset.city
        // localStorage.setItem('city', city)
        // changeDataForCity()
        const _h   = location.pathname.slice(1).split('/'),
              page = _h[_h.length - 1]
        console.log('Redirect to: ', nav[city].replace('{{ page }}', page))
        const link = nav[city].replace('{{ page }}', page)
        location.pathname = '/' + link
        // if (window.location.href.indexOf('about-steffany') !== -1) {
        //   location.reload()
        // }
      }
    })
  }
  
  initCities()
  
})

