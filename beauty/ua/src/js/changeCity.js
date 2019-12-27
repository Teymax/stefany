$(document).ready(function () {
  // const serviceCityData = {
  //   zt: {
  //     ru: {
  //       selectedService:
  //           `
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service-nano.html">Нано-эпиляция</a></li>
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service-shugaring.html">Шугаринг</a></li>
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./waxing.html">Восковая эпиляция\`</a></li>
  //       `
  //     }
  //   },
  //   if: {
  //     ru: {
  //       selectedService:
  //           `
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
  //       `
  //     }
  //   },
  //   lutsk: {
  //     ru: {
  //       selectedService:
  //           `
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service-nano.html">Нано-эпиляция</a></li>
  //       `
  //     }
  //   },
  //   lviv: {
  //     ru: {
  //       selectedService: `
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
  //       `
  //     }
  //   },
  //   rovno: {
  //     ru: {
  //       selectedService: `
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service.html">Лазерная эпиляция</a></li>
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./service-shugaring.html">Шугаринг</a></li>
  //         <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header" href="./waxing.html">Восковая эпиляция\`</a></li>
  //       `
  //     }
  //   }
  // }
  const citiesData = {
    zt: {
      ru: {
        cityName              : 'Житомир',
        cityNameIn            : 'в Житомирі',
        cityPhone             : '098-007-07-53',
        schedule              : '10:00 - 20:00',
        address               : 'вул. Київська, 77, тц "Глобал"',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.345216309848!2d28.6856875!3d50.2668125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9G2C7M8P%2BP7!5e0!3m2!1sru!2sua!4v1576752718526!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/zt/{{ salon }}/salon-0.jpg',

        imagesAmount: 7,

        salons: {
          nail: {
            name       : 'Steffany Nail',
            city       : 'Житомир',
            nameIn     : 'в Житомирі',
            phone      : '098-180-50-90',
            address    : 'вул. Київська, 77, тц "Глобал"',
            schedule   : '9:00 - 21:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5100.697030189027!2d28.6835212!3d50.2667509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64afc032302d%3A0xbdc1a333cb9db4e6!2sSteffany%20Hair%20Studio!5e0!3m2!1sru!2sua!4v1577382926000!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
              {
                name      : 'Аліна Кайсин',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 7 років',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання та зміцнення нігтьової пластини, нарощування нігтів, дизайн (геометрію, аерографію, френч, стемпінг, нескладні малюнки, втирку), парафінотерапію для рук і ніг, спа-процедуру CND',
                cover     : ''
              },
              {
                name      : 'Наталія Кльоц',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 1 рік',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання, зміцнення, нарощування і корекцію нігтів, нескладний дизайн, парафінотерапію для рук і ніг'
              },
              {
                name      : 'Людмила Коржовська',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 7 років',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання та зміцнення нігтьової пластини, дизайн (геометрію, аерографію, френч, стемпінг, нескладні малюнки, втирку), парафінотерапію для рук і ніг, спа-процедуру CND'
              },
              {
                name      : 'Владлена Охмак',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 5 років',
                skills    : 'Зробить європейський, класичний, чоловічий, дитячий манікюр, вирівнювання, зміцнення і «ремонт» нігтьової пластини, усі види дизайну, класичний, кислотний і спа-педикюр, парафінотерапію для рук і ніг'
              },

              {
                name      : 'Ольга Петрук',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 1 рік',
                skills    : 'Зробить усі види манікюру, вирівнювання і зміцнення нігтьової пластини, класичний, кислотний і спа-педикюр, дизайн (френч, аерографію, геометрію, втирку, наклейки, нескладні малюнки)'
              },
              {
                name      : 'Анна Роюк',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 2 роки',
                skills    : 'Зробить усі види манікюру, вирівнювання, зміцнення і нарощування нігтів, класичний, кислотний і комбінований педикюр, нескладний дизайн, спа-процедури і парафінотерапію для рук і ніг'
              },
              {
                name      : 'Ксенія Станіславська',
                education : 'Директор Nail Studio Steffany, майстер нігтьового сервісу',
                experience: 'Працює вже 13 років',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання, нарощування і корекцію нігтів, усі види дизайну, парафінотерапію для рук і ніг'
              },
              {
                name      : 'Ольга Степанчук',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 6 років',
                skills    : 'Зробить класичний, комбінований і апаратний манікюр, класичний, комбінований та кислотний педикюр, парафінотерапію для рук і ніг, зміцнення, «ремонт» і нарощування нігтів, усі види нехудожнього дизайну'
              },
            ]
          },
          hair: {
            name       : 'Steffany Hair',
            city       : 'Житомир',
            nameIn     : 'в Житомирі',
            phone      : '093-406-0479',
            address    : 'вул. Київська, 77, тц "Глобал"',
            schedule   : '10:00 - 20:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.347268440734!2d28.683446015724748!3d50.26677417945044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64afc032302d%3A0xbdc1a333cb9db4e6!2sSteffany%20Hair%20Studio!5e0!3m2!1sru!2sua!4v1577383086491!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
              {
                name      : 'Владислава Бондар',
                education : 'Перукар',
                experience: 'Працює вже 7 років',
                skills    : 'Зробить жіночі та чоловічі стрижки, складні фарбування, догляд за волоссям, зачіски, укладки, полірування волосся, камуфлювання сивини, тонування раніше фарбованого волосся'
              },
              {
                name      : 'Любов Зайнчківська',
                education : 'Чоловічий перукар',
                experience: 'Працює вже 1,5 року',
                skills    : 'Зробить чоловічі стрижки будь-якої складності'
              },
              {
                name      : 'Олександра Кришневська',
                education : 'Brow-майстер, візажист',
                experience: 'Працює вже 1 рік',
                skills    : 'Зробить моделювання та корекцію брів, фарбування брів фарбою і хною, фарбування вій, чоловічу корекцію брів, денний, вечірній і весільний макіяж'
              },
              {
                name      : 'Ірина Михалюк',
                education : 'Перукар',
                experience: 'Працює вже 3 роки',
                skills    : 'Зробить жіночі та чоловічі стрижки, фарбування в один тон, накрутку, укладку, плетіння, догляд за волоссям'
              },

              {
                name      : 'Юлія Павлушина',
                education : 'Перукар',
                experience: 'Працює вже 3 роки',
                skills    : 'Зробить чоловічі, жіночі та дитячі стрижки, фарбування в один тон, складні фарбування, догляд за волоссям, плетіння, зачіски, накрутку, укладку'
              },
              {
                name      : 'Вікторія Павюк',
                education : 'Перукар',
                experience: 'Працює вже 4 роки',
                skills    : 'Зробить жіночі та чоловічі стрижки, укладку, накрутку, фарбування будь-якої складності, догляд за волоссям'
              },
              {
                name      : 'Аліна Путяніна',
                education : 'Перукар',
                experience: 'Працює вже 6 років',
                skills    : 'Зробить жіночі, чоловічі та дитячі стрижки, фарбування волосся у всіх техніках, укладку волосся'
              },
              {
                name      : 'Юлія Соловко',
                education : 'Перукар',
                experience: 'Працює вже 13 років',
                skills    : 'Зробить чоловічі та жіночі стрижки, фарбування в один тон, складні фарбування, накрутку, укладку, плетіння, догляд за волоссям'
              },

              {
                name      : 'Юлія Сурикова',
                education : 'Перукар',
                experience: 'Працює вже 9 років',
                skills    : 'Зробить усі види фарбування, стрижки, укладки, зачіски без плетіння, догляд за волоссям'
              },
              {
                name      : 'Дарина Тарасюк',
                education : 'Перукар',
                experience: 'Працює вже 5 років',
                skills    : 'Зробить жіночі, чоловічі та дитячі стрижки, фарбування волосся в один тон, тонування волосся, полірування волосся, догляд за волоссям, укладки довгого волосся'
              },
              {
                name      : 'Марія Балуєва',
                education : 'Brow-майстер, візажист',
                experience: 'Працює вже 1 рік',
                skills    : 'Зробить моделювання і корекцію брів, фарбування брів фарбою і хною, чоловічу корекцію брів, денний, вечірній і весільний макіяж'
              },
              {
                name      : 'Наталія Бойко',
                education : 'Перукар',
                experience: 'Працює вже 16 років',
                skills    : 'Зробить чоловічі та жіночі стрижки, фарбування в один тон, складні фарбування, накрутку, укладку, плетіння, догляд за волоссям, завивку'
              },
              {
                name      : 'Катерина Бондар',
                education : 'Перукар',
                experience: 'Працює вже 8 років',
                skills    : 'Зробить чоловічі та жіночі стрижки, фарбування в один тон, складні фарбування, догляд за волоссям'
              },
            ]
          }
        }
      }
    },

    rovno: {
      ru: {
        cityName              : 'Рівне',
        cityNameIn            : 'в Рівному',
        cityPhone             : '098-500-48-86',
        schedule              : '9-00 - 20-00',
        address               : 'вул. Київська, 4',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5063.141381159588!2d26.2695245!3d50.6165144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabee90f50ee94b45!2sSteffany%20Nails%20and%20Cosmetology!5e0!3m2!1sru!2sua!4v1577383431739!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rovno/{{ salon }}/salon-0.jpg',

        imagesAmount: 6,
        salons      : {
          salon: {
            name       : '',
            city       : 'Рівне',
            nameIn     : 'в Рівному',
            phone      : '098-500-48-86',
            address    : 'вул. Київська, 4',
            schedule   : '9-00 - 20-00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5063.141381159588!2d26.2695245!3d50.6165144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabee90f50ee94b45!2sSteffany%20Nails%20and%20Cosmetology!5e0!3m2!1sru!2sua!4v1577383431739!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.rivne/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
              {
                name      : 'Інна Кокора',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 1,5 року',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання, корекцію та нарощування нігтів, парафінотерапію для рук і ніг'
              },
              {
                name      : 'Марія Кузьмич',
                education : 'Майстер манікюру',
                experience: 'Працює вже 1 рік',
                skills    : 'Зробить усі види манікюру, зміцнення і корекцію нігтів, парафінотерапію для рук'
              },
              {
                name      : 'Наталія Лело',
                education : 'Перукар',
                experience: 'Працює вже 15 років',
                skills    : 'Зробить жіночі, чоловічі та дитячі стрижки, укладки, зачіски, накрутку, складне фарбування, лікування волосся'
              },
              {
                name      : 'Марія Остапович',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 2 роки',
                skills    : 'Зробить європейський, класичний, комбінований і дитячий манікюр, усі види педикюру, вирівнювання і корекцію нігтьової пластини, парафінотерапію для рук і ніг'
              },

              {
                name      : 'Леся Парух',
                education : 'Brow-майстер, візажист',
                experience: 'Працює вже 1,5 року',
                skills    : 'Зробить фарбування брів фарбою і хною, моделювання, корекцію і ламінування брів, фарбування вій'
              },
              {
                name      : 'Катерина Пархомчук',
                education : 'Майстер манікюру',
                experience: 'Працює вже 3 місяці',
                skills    : 'Зробить усі види манікюру, вирівнювання нігтьової пластини, парафінотерапію для рук'
              },
              {
                name      : 'Галина Ребеш',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 2 роки',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання, корекцію та нарощування нігтів, парафінотерапію для рук і ніг'
              },
              {
                name      : 'Анна Власенко',
                education : 'Майстер манікюру',
                experience: 'Працює вже 6 років',
                skills    : 'Зробить класичний, комбінований і чоловічий манікюр, зміцнення, нарощування і корекцію нігтів'
              },

              {
                name      : 'Яна Галицька',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 4 роки',
                skills    : 'Зробить усі види манікюру та педикюру, зміцнення нігтів, парафінотерапію для рук і ніг'
              },
              {
                name      : 'Вероніка Голянська',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 2 роки',
                skills    : 'Зробить усі види манікюру та педикюру, зміцнення нігтів, парафінотерапію для рук і ніг'
              },
              {
                name      : 'Наталія Довгаль',
                education : 'Майстер манікюру',
                experience: 'Працює вже 3 місяці',
                skills    : 'Зробить усі види манікюру, вирівнювання нігтьової пластини, парафінотерапію для рук'
              },
              {
                name      : 'Ірина Коломійчук',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 3 роки',
                skills    : 'Зробить усі види манікюру, класичний, комбінований і спа-педікюр, вирівнювання, зміцнення і нарощування нігтів, парафінотерапію для рук і ніг'
              },0
            ]
          }
        }
      }
    }
  }
  let localization = 'ru'
  let carouselsHTML = null
  let salon = localStorage.getItem('salon') || ''
  let city = localStorage.getItem('city')
  let width = ''
  $(`.city-trigger[data-city=${city}]`).toggleClass('active')
  const switchData = data => {
    $('.inst-dynamic').each(function (e) {
      this.setAttribute('href', `${data.instagram}`)
    })
    $('.fb-dynamic').each(function (e) {
      this.setAttribute('href', `${data.facebook}`)
    })
    $('.city-dynamic').each(function (e) {
      this.innerText = data.city
    })
    $('.schedule-dynamic').each(function (e) {
      this.innerText = data.schedule
    })
    $('.dynamic-title').each(function (e) {
      this.innerText = data.name
    })
    $('.telephone-dynamic').each(function (e) {
      this.innerText = data.phone
      this.setAttribute('href', `tel:+${data.phone}`)
    })
    $('.city-in-dynamic').each(function (e) {
      this.innerText = ' ' + data.nameIn
    })

    $('.address-dynamic').each(function (e) {
      this.innerText = data.address
    })

    $('.map-dynamic').each(function (e) {
      this.innerHTML = data.map
    })
  }
  if (!city) {
    city = 'zt'
    localStorage.setItem('city', city)
    localStorage.setItem('salon', 'nail')
  }
  if (city) {
    changeDataForCity()
  }


  $('[data-salon]').on('click', e => {
    salon = e.target.dataset.salon
    switchData(citiesData[city][localization].salons[salon])
    localStorage.setItem('salon', salon)
    updateCarouselHTML()
  })

  function changeDataForCity() {
    if (city === 'zt') {
      $('.city-switcher').show()
      salon = salon ? salon !== 'salon' ? salon : 'nail' : 'nail'
      localStorage.setItem('salon', salon)
      $(`[data-salon="${salon}"]`).addClass('active')
    }
    else {
      $('.city-switcher').hide()
      salon = 'salon'
      localStorage.setItem('salon', 'salon')
    }

    switchData(citiesData[city][localization].salons[salon])

    $('.service-li-dynamic').each(function (e) {
      this.innerHTML = serviceCityData[city][localization].selectedService
    })

    $('.image-about-dynamic').each(function (e) {
      this.setAttribute('src', `${citiesData[city][localization].imageAboutStaffanyPage.replace('{{ salon }}', salon)}`)
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

  function updateCarouselHTML() {
    setTimeout(() => {
      location.reload()
    }, 0)
  }

  function generateHTMLForCarouseles() {
    let imagesAmount = citiesData[city][localization].imagesAmount
    salon = salon ? salon : city === 'zt' ? 'nail' : 'salon'
    let imagesAmountSpecialists = citiesData[city][localization].salons[salon].specialists.length
    let specialistsData = citiesData[city][localization].salons[salon].specialists
    let imgPath = `assets/img/about-steffany-salon/${city}/`
    let images = ''
    let imagesSmall = ''
    let imagesSpecialists = ''
    for (let i = 0; i < imagesAmount; i++) {
      images += `
        <span data-pos="${i}" class="video d-flex align-items-center justify-content-center">
          <img src="${imgPath}/${salon}/salon-${i}.jpg" class="w-100">
        </span>
      `
    }

    for (let i = 0; i < imagesAmount; i++) {
      imagesSmall += `
        <span data-pos="${i}" class="owl-dot d-flex align-items-center justify-content-center mb-4">
          <img src="${imgPath}/${salon}/salon-${i}.jpg" class="w-100 salon-img">
          <span class="owl-dot-bg w-100 h-100 d-block"></span>
        </span>
      `
    }
    for (let i = 0; i < imagesAmountSpecialists; i++) {
      imagesSpecialists += `
        <div class="specialists-item">
            <div class="specialists-item-container mb-3 w-100">
                <div class="specialists-img w-100"><img class="w-100" src="${imgPath}/specialists/${salon}/specialist-${i}@2x.jpg" alt="${specialistsData[i].name}"/></div>
                <div class="specialists-info d-flex flex-column align-items-start w-100 p-3">
                    <p class="paragraph-text text-color-lightdark text-w-light">${specialistsData[i].education}</p>
                    <p class="paragraph-text text-color-lightdark text-w-bold">${specialistsData[i].experience}</p>
                    <p class="paragraph-text text-color-lightdark text-w-light">${specialistsData[i].skills}</p>
                </div>
            </div>
            <p class="h4-title text-center white-text">${specialistsData[i].name}</p>
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
        city = e.target.dataset.city
        localStorage.setItem('city', city)
        changeDataForCity()
        if (window.location.href.indexOf('salonPage') !== -1) {
          location.reload()
        }
      }
    })
  }

  if (document.querySelector('a.nav-link-text'))

  initCities()
})

