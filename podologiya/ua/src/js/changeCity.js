$(document).ready(function () {
  const citiesData = {
    zt: {
      ru: {
        cityName              : 'Житомир',
        cityNameIn            : 'в Житомире',
        cityPhone             : '380-98-180-10-88',
        schedule              : '9:00 - 20:00',
        address               : 'Площадь Путятинская, 1/63',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6288.768477360866!2d28.67355334502534!3d50.25248404598579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2cbe153518a079e!2sSteffany!5e0!3m2!1sru!2sua!4v1578986511431!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.podology/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.podology/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/zt/{{ salon }}/salon-0.png',
        
        imagesAmount: 10,
        salonImages : 9,
        
        salons: {
          salon: {
            name       : 'Steffany Podology',
            city       : 'Житомир',
            nameIn     : 'в Житомире',
            phone      : '380-98-180-10-88',
            address    : 'Площадь Путятинская, 1/63',
            schedule   : '9:00 - 20:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6288.768477360866!2d28.67355334502534!3d50.25248404598579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2cbe153518a079e!2sSteffany!5e0!3m2!1sru!2sua!4v1578986511431!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.podology/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.podology/',
            specialists: [
              {
                name     : 'Руслана Даценко',
                education: 'Подолог, специалист по ортониксии, преподаватель и автор обучающих методик',
                skills   : 'Специализируется на аппаратном медицинском педикюре, компьютерной диагностике стопы и биомеханики ходьбы, проектировании индивидуальных стелек, изготовлении разгрузочных стелек PWO'
              },
              {
                name     : 'Наталья Полищук',
                education: 'Подолог',
                skills   : 'Специализируется на компьютерной диагностике стоп и биомеханики ходьбы, проектировании и изготовлении индивидуальных стелек, обработке и лечении вросшего ногтя, установке систем ортониксии по коррекции вросшего ногтя, лечении деформаций ногтей, удалении бородавок и мозолей'
              },
              {
                name     : 'Татьяна Атаманенко',
                education: 'Подолог',
                skills   : 'Специализируется на компьютерной диагностике стоп и биомеханики ходьбы, проектировании и изготовлении индивидуальных стелек, установке систем ортониксии по коррекции вросшего ногтя, обработке и лечении вросшего ногтя, лечении деформаций ногтей, удалении бородавок, мозолей и трещин на стопе'
              },
              {
                name     : 'Юлия Писаревская',
                education: 'Подолог',
                skills   : 'Специализируется на медицинском педикюре для диабетиков, удалении бородавок, мозолей, трещин на стопе, установке систем ортониксии для коррекции вросших ногтей, обработке и лечении вросшего ногтя, протезировании и восстановлении ногтей, обработке грибковых поражений кожи и ногтей'
              },
              {
                name     : 'Яна Левковская',
                education: 'Подолог',
                skills   : 'Специализируется на медицинском педикюре, коррекции и снятии воспаления с вросшего ногтя, лечении мозолей, бородавок, грибковых поражений ногтей и кожи, коррекционных системах ортониксии, обработке и профилактике трещин на стопе, удалении ороговений кожи, обработке диабетической стопы, диагностике стопы'
              },
              {
                name     : 'Ирина Черных',
                education: 'Подолог',
                skills   : 'Специализируется на медицинском педикюре, удалении бородавок, мозолей, обработке и профилактике трещин на стопе, установке систем ортониксии для коррекции вросших ногтей, обработке и лечении вросшего ногтя, протезировании и восстановлении ногтей, обработке грибковых поражений кожи и ногтей'
              },
              {
                name     : 'Ирина Вышневская',
                education: 'Подолог',
                skills   : 'Специализируется на медицинском педикюре, удалении бородавок, мозолей, обработке и профилактике трещин на стопе, установке систем ортониксии для коррекции вросших ногтей, протезировании и восстановлении ногтей, обработке грибковых поражений кожи и ногтей'
              },
              {
                name     : 'Наталья Томашевская',
                education: 'Подолог',
                skills   : 'Специализируется на медицинском педикюре, удалении бородавок, мозолей, обработке и лечении вросшего ногтя и трещин на стопе, установке систем ортониксии для коррекции вросших ногтей, протезировании и восстановлении ногтей, обработке грибковых поражений кожи и ногтей, удалении ороговений кожи'
              }
            ]
          }
        }
      },
      ua: {
        cityName              : 'Житомир',
        cityNameIn            : 'в Житомирі',
        cityPhone             : '380-98-180-10-88',
        schedule              : '90:00 - 20:00',
        address               : 'Путятинська Площа, 1/63',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6288.768477360866!2d28.67355334502534!3d50.25248404598579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2cbe153518a079e!2sSteffany!5e0!3m2!1sru!2sua!4v1578986511431!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.podology/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.podology/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/zt/{{ salon }}/salon-0.png',
        
        imagesAmount: 10,
        salonImages : 9,
        
        salons: {
          salon: {
            name       : 'Steffany Podology',
            city       : 'Житомир',
            nameIn     : 'в Житомирі',
            phone      : '380-67-404-19-33',
            address    : 'вул. Київська, 77, тц "Глобал"',
            schedule   : '9:00 - 21:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.3732072342173!2d28.683759515257734!3d50.26628980849905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x697c4ee100bcc4de!2sSteffany%20Nail%20Studio!5e0!3m2!1sru!2sua!4v1578658568743!5m2!1sru!2sua" width="600" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
              {
                name     : 'Руслана Даценко',
                education: 'Подолог, фахівець з ортоніксіі, викладач і автор навчальних методик',
                skills   : 'Спеціалізується на апаратному медичному педикюрі, комп\'ютерній діагностиці стопи і біомеханіки ходьби, проектуванні індивідуальних устілок, виготовленні розвантажувальних устілок PWO'
              },
              {
                name     : 'Наталія Поліщук',
                education: 'Подолог',
                skills   : 'Спеціалізується на комп\'ютерній діагностиці стоп і біомеханіки ходьби, проектуванні і виготовленні індивідуальних устілок, обробці та лікуванні врослого нігтя, установці систем ортоніксіі по корекції врослого нігтя, лікуванні деформацій нігтів, видаленні бородавок і мозолів'
              },
              {
                name     : 'Тетьяна Атаманенко',
                education: 'Подолог',
                skills   : 'Спеціалізується на комп\'ютерній діагностиці стоп та біомеханіки ходьби, проектуванні та виготовленні індивідуальних устілок, установці систем ортоніксіі по корекції врослого нігтя, обробці та лікуванні врослого нігтя, лікуванні деформацій нігтів, видаленні бородавок, мозолів і тріщин на стопі'
              },
              {
                name     : 'Юлія Писаревська',
                education: 'Подолог',
                skills   : 'Спеціалізується на медичному педикюрі для діабетиків, видаленні бородавок, мозолів, тріщин на стопі, установці систем ортоніксіі для корекції врослих нігтів, обробці та лікуванні врослого нігтя, протезуванні і відновленні нігтів, обробці грибкових уражень шкіри та нігтів'
              },
              {
                name     : 'Яна Левковська',
                education: 'Подолог',
                skills   : 'Спеціалізується на медичному педикюрі, корекції і знятті запалення з врослого нігтя, лікуванні мозолів, бородавок, грибкових уражень нігтів і шкіри, корекційних системах ортоніксіі, обробці і профілактиці тріщин на стопі, видаленні ороговілої шкіри, обробці діабетичної стопи, діагностиці стопи'
              },
              {
                name     : 'Ірина Чорних',
                education: 'Подолог',
                skills   : 'Спеціалізується на медичному педикюрі, видаленні бородавок, мозолів, обробці та профілактиці тріщин на стопі, установці систем ортоніксіі для корекції врослих нігтів, обробці та лікуванні врослого нігтя, протезуванні та відновленні нігтів, обробці грибкових уражень шкіри і нігтів'
              },
              {
                name     : 'Ірина Вишневська',
                education: 'Подолог',
                skills   : 'Спеціалізується на медичному педикюрі, видаленні бородавок, мозолів, обробці і профілактиці тріщин на стопі, установці систем ортоніксіі для корекції врослих нігтів, протезуванні та відновленні нігтів, обробці грибкових уражень шкіри та нігтів'
              },
              {
                name     : 'Наталія Томашевська',
                education: 'Подолог',
                skills   : 'Спеціалізується на медичному педикюрі, видаленні бородавок, мозолів, обробці та лікуванні врослого нігтя і тріщин на стопі, установці систем ортоніксіі для корекції врослих нігтів, протезуванні і відновленні нігтів, обробці грибкових уражень шкіри і нігтів, видаленні ороговілої шкіри'
              }
            ]
          }
        }
      }
    },
    rv: {
      ru: {
        cityName              : 'Ровно',
        cityNameIn            : 'в Ровно',
        cityPhone             : '380-98-500-48-86',
        schedule              : '9-00 - 20-00',
        address               : 'ул. Киевская, 4',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.9732425877958!2d26.269108057641883!3d50.6165984522853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1578987175913!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rv/{{ salon }}/salon-0.png',
        
        imagesAmount: 6,
        salonImages : 9,
        
        salons: {
          salon: {
            name       : 'Steffany Podology',
            city       : 'Ровно',
            nameIn     : 'в Ровно',
            phone      : '380-98-500-48-86',
            address    : 'ул. Киевская, 4',
            schedule   : '9-00 - 20-00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.9732425877958!2d26.269108057641883!3d50.6165984522853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1578987175913!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.rivne/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
              {
                name     : 'Тетьяна Кухар',
                education: 'Подолог',
                skills   : 'Медицинский педикюр, вросший ноготь - коррекция и снятие воспаление, лечение мозолей, бородавок, грибковых поражений ногтей и кожи, коррекционые системы ортониксии, обработка и профиллактика трещин на стопе, удаление ороговений кожи, диабетическая стопа, диагностика стопы'
              }
            ]
          }
        }
      },
      ua: {
        cityName              : 'Рівне',
        cityNameIn            : 'в Рівному',
        cityPhone             : '380-98-500-48-86',
        schedule              : '9-00 - 20-00',
        address               : 'вул. Київська, 4',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.9732425877958!2d26.269108057641883!3d50.6165984522853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1578987175913!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rv/{{ salon }}/salon-0.png',
        
        imagesAmount: 6,
        salons      : {
          salon: {
            name       : 'Steffany Podology',
            city       : 'Рівне',
            nameIn     : 'в Рівному',
            phone      : '380-98-500-48-86',
            address    : 'вул. Київська, 4',
            schedule   : '9-00 - 20-00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d532.9732425877958!2d26.269108057641883!3d50.6165984522853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1578987175913!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.rivne/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
              {
                name     : 'Тетяна Кухар',
                education: 'Подолог',
                skills   : 'Медичний педикюр, врослий ніготь - корекція і зняття запалення, лікування мозолів, бородавок, грибкових уражень нігтів і шкіри, корекційні системи ортоніксіі, обробка і профіллактікі тріщин на стопі, видалення зроговіння шкіри, діабетична стопа, діагностика стопи'
              }
            ]
          }
        }
      }
      
    }
  }
  
  window.nav = {
    zt: {
      ru: 'podologiya/{{ page }}',
      ua: 'podologiya/ua/{{ page }}'
    },
    rv: {
      ru: 'podologiya/rv/{{ page }}',
      ua: 'podologiya/rv/ua/{{ page }}'
    }
  }
  
  const binatel = {
    zt: function (d, w, s) {
      var widgetHash = 'rkr67ua265zfjx62zen7',
          gcw        = d.createElement(s)
      gcw.type = 'text/javascript'
      gcw.async = true
      gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js'
      var sn = d.getElementsByTagName(s)[0]
      sn.parentNode.insertBefore(gcw, sn)
    },
    rv: function (d, w, s) {
      var widgetHash = 'brp0dbyeu2gyu85snk25',
          gcw        = d.createElement(s)
      gcw.type = 'text/javascript'
      gcw.async = true
      gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js'
      var sn = d.getElementsByTagName(s)[0]
      sn.parentNode.insertBefore(gcw, sn)
    }
  }
  
  window.localization = location.pathname.split('/').find(function (loc) {
    return loc === 'ua'
  }) || 'ru'
  let carouselsHTML = null
  window.salon = localStorage.getItem('salon') || ''
  const urlCity      = location.pathname.slice(1).split('/')[1],
        filteredCity = ['rv'].find(city => city === urlCity) || 'zt'
  // let city = localStorage.getItem('city')
  
  window.city = filteredCity
  binatel[city](document, window, 'script')
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
  if (!salon) {
    localStorage.setItem('salon', 'nail')
  }
  // if (city) {
  changeDataForCity()
  // }
  
  if (city === 'rv') {
    $('header [data-not-avalable-rovno]').remove()
    $('[data-not-available-rovno] a.btn-callback').remove()
  }
  
  // if (salon !== 'salon') {
  //   if (salon === 'nail') {
  //     $('[data-remove-nail]').remove()
  //   }
  //   if (salon === 'hair') {
  //     $('[data-remove-hair]').remove()
  //   }
  // }
  
  $('[data-salon]').on('click', e => {
    salon = e.target.dataset.salon
    switchData(citiesData[city][localization].salons[salon])
    localStorage.setItem('salon', salon)
    updateCarouselHTML()
  })
  
  function changeDataForCity() {
    salon = 'salon'
    // if (city === 'zt') {
    //   // $('.city-switcher').show()
    //   salon = salon ? salon !== 'salon' ? salon : 'nail' : 'nail'
    //   localStorage.setItem('salon', salon)
    //   // $(`[data-salon="${salon}"]`).addClass('active')
    // }
    // else {
    //   // $('.city-switcher').hide()
    //   salon = 'salon'
    //   localStorage.setItem('salon', 'salon')
    // }
    localStorage.setItem('salon', 'salon')
    switchData(citiesData[city][localization].salons[salon])
    
    // $('.service-li-dynamic').each(function (e) {
    //   this.innerHTML = serviceCityData[city][localization].selectedService
    // })
    
    $('.image-about-dynamic').each(function (e) {
      this.setAttribute('src', `${citiesData[city][localization].imageAboutStaffanyPage.replace('{{ salon }}', salon)}`)
    })
  }
  
  function initCarousels() {
    carouselsHTML = generateHTMLForCarouseles()
    const videoSlider = $('.video-slider')
    const owlDots = $('.small-owl-images-container .owl-dots-item')
    const specialistsSlider = $('.specialists-slider')
    const salonImages = $('.salon-photos-slider')
    console.log(specialistsSlider)
    if (videoSlider) {
      videoSlider.html(carouselsHTML.videoCarousel)
    }
    if (owlDots) {
      owlDots.html(carouselsHTML.videoCarouselSmall)
    }
    if (specialistsSlider) {
      specialistsSlider.html(carouselsHTML.specialistsCarousel)
    }
    console.log('asd', carouselsHTML.imagesSalon)
    if (salonImages) {
      salonImages.html(carouselsHTML.imagesSalon)
    }
    $('.salon-photos-slider').owlCarousel({
      center    : true,
      items     : 3,
      loop      : true,
      margin    : 15,
      responsive: {
        0   : {
          items: 1
        },
        575 : {
          items: 1
        },
        993 : {
          items: 1.5
        },
        1400: {
          items: 2
        },
        2000: {
          items: 4
        }
      }
    })
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
      // const slider = $('.specialists-slider.owl-carousel.slider-block.slider-pad.owl-loaded.owl-drag')[0]
      // width = $('.specialists')[0].querySelector('.owl-item').style.width
      // slider.innerHTML = ''
      location.reload()
    }, 0)
  }
  
  function generateHTMLForCarouseles() {
    let imagesAmount = citiesData[city][localization].imagesAmount
    salon = salon ? salon : city === 'zt' ? 'nail' : 'salon'
    let imagesAmountSpecialists = citiesData[city][localization].salons[salon].specialists.length
    let specialistsData = citiesData[city][localization].salons[salon].specialists
    let salonLength = citiesData[city][localization].salonImages
    let imgPath = `assets/img/about-steffany-salon/${city}/`
    let images = ''
    let imagesSmall = ''
    let imagesSpecialists = ''
    let imagesSalon = ''
    for (let i = 0; i < salonLength; i++) {
      imagesSalon += `<img src="assets/img/about-steffany-salon/${city}/salon/salon-${i}.png">`
    }
    console.log(imagesSalon)
    // for(let i = 0; i )
    for (let i = 0; i < imagesAmount; i++) {
      images += `
        <span data-pos="${i}" class="video d-flex align-items-center justify-content-center">
          <img src="${imgPath}/${salon}/salon-${i}.png" class="w-100">
        </span>
      `
    }
    
    for (let i = 0; i < imagesAmount; i++) {
      imagesSmall += `
        <span data-pos="${i}" class="owl-dot d-flex align-items-center justify-content-center mb-4">
          <img src="${imgPath}/${salon}/salon-${i}.png" class="w-100 salon-img">
          <span class="owl-dot-bg w-100 h-100 d-block"></span>
        </span>
      `
    }
    for (let i = 0; i < imagesAmountSpecialists; i++) {
      imagesSpecialists += `
        <div class="specialists-item">
          <div class="specialists-item-container mb-3 w-100">
            <div class="specialists-img w-100">
              <img class="w-100" src="${imgPath}/specialists/${salon}/specialists-${i}.png" alt="Doctor">
            </div>
            <div class="specialists-info d-flex flex-column align-items-start justify-content-between w-100 p-3">
              <p class="p-text-light fs-16">${specialistsData[i].skills}</p>
            </div>
          </div>
          <p class="h3-title h-center">${specialistsData[i].name}</p>
          <p class="fs-16 h-center light-white">${specialistsData[i].education}</p>
        </div>`
    }
    
    return {
      videoCarousel      : images,
      videoCarouselSmall : imagesSmall,
      specialistsCarousel: imagesSpecialists,
      imagesSalon
    }
  }
  
  function changeImagesSalon() {
    $('.video-slider').trigger('add.owl.carousel', [jQuery(carouselsHTML.videoCarousel)]).trigger(
      'refresh.owl.carousel')
    $('.video-slider-dots').trigger('add.owl.carousel', [jQuery(carouselsHTML.videoCarouselSmall)]).trigger(
      'refresh.owl.carousel')
  }
  
  function initCities() {
    // if ($('.video-slider')[0])
    initCarousels()
    $(document).click(function (e) {
      let closestDropdown = e.target.closest('.select-city-dropdown')
      if (closestDropdown && e.target.classList.contains('nav-link-text')) {
        city = e.target.dataset.city
        // localStorage.setItem('city', city)
        // changeDataForCity()
        // if (window.location.href.indexOf('salonPage') !== -1) {
        //   location.reload()
        // }
        const _h   = location.pathname.slice(1).split('/'),
              page = _h[_h.length - 1]
        const link = nav[city][localization].replace('{{ page }}', page)
        location.pathname = '/' + link
      }
    })
  }
  
  if (document.querySelector('a.nav-link-text')) {
    initCities()
  }
})

