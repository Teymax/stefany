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
        cityNameIn            : 'в Житомире',
        cityPhone             : '098-007-07-53',
        schedule              : '10:00 - 20:00',
        address               : 'ул. Киевская, 77, тц "Глобал"',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.345216309848!2d28.6856875!3d50.2668125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9G2C7M8P%2BP7!5e0!3m2!1sru!2sua!4v1576752718526!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/zt/salon-0.jpg',
        
        imagesAmount    : 1,
        specialists     : [
          {
            name      : 'Владислава Бондарь',
            education : 'Парикмахер',
            experience: 'Работает уже 7 лет',
            skills    : 'Сделает женские и мужские стрижки, сложные окрашивания, уход за волосами, прически, укладку, полировку волос, камуфлирование седины, тонирование ранее окрашенных волос'
          },
          {
            name      : 'Любовь Зайнчковская',
            education : 'Мужской парикмахер',
            experience: 'Работает уже 1,5 года',
            skills    : 'Сделает мужские стрижки любой сложности'
          },
          {
            name      : 'Александра Крышневская',
            education : 'Brow-мастер, визажист',
            experience: 'Работает уже 1 год',
            skills    : 'Сделает моделирование и коррекцию бровей, окрашивание бровей краской и хной, окрашивание ресниц, мужскую коррекцию бровей, дневной, вечерний и свадебный макияж'
          },
          {
            name      : 'Ирина Михалюк',
            education : 'Парикмахер',
            experience: 'Работает уже 3 года',
            skills    : 'Сделает женские и мужские стрижки, окрашивание в один тон, накрутку, укладку, плетение, уход за волосами'
          },
          
          {
            name      : 'Юлия Павлушина',
            education : 'Парикмахер',
            experience: 'Работает уже 3 года',
            skills    : 'Сделает мужские, женские и детские стрижки, окрашивания в один тон, сложные окрашивания, уход за волосами, плетение, прически, накрутку, укладку'
          },
          {
            name      : 'Виктория Павюк',
            education : 'Парикмахер',
            experience: 'Работает уже 4 года',
            skills    : 'Сделает женские и мужские стрижки, укладку, накрутку, окрашивание любой сложности, уход за волосами'
          },
          {
            name      : 'Алина Путянина',
            education : 'Парикмахер',
            experience: 'Работает уже 6 лет',
            skills    : 'Сделает женские, мужские и детские стрижки, окрашивание волос во всех техниках, укладку волос'
          },
          {
            name      : 'Юлия Соловко',
            education : 'Парикмахер',
            experience: 'Работает уже 13 лет',
            skills    : 'Сделает мужские и женские стрижки, окрашивание в один тон, сложные окрашивания, накрутку, укладку, плетение, уход за волосами'
          },
          
          {
            name      : 'Юлия Сурикова',
            education : 'Парикмахер',
            experience: 'Работает уже 9 лет',
            skills    : 'Сделает все виды окрашивания, стрижки, укладку, прически без плетения, уход за волосами'
          },
          {
            name      : 'Дарья Тарасюк',
            education : 'Парикмахер',
            experience: 'Работает уже 5 лет',
            skills    : 'Сделает женские, мужские и детские стрижки, окрашивание волос в один тон, тонирование волос, полировку волос, уход за волосами, укладку длинных волос'
          },
          {
            name      : 'Мария Балуева',
            education : 'Brow-мастер, визажист',
            experience: 'Работает уже 1 год',
            skills    : 'Сделает моделирование и коррекцию бровей, окрашивание бровей краской и хной, мужскую коррекцию бровей, дневной, вечерний и свадебный макияж'
          },
          {
            name      : 'Наталия Бойко',
            education : 'Парикмахер',
            experience: 'Работает уже 16 лет',
            skills    : 'Сделает мужские и женские стрижки, окрашивание в один тон, сложные окрашивания, накрутку, укладку, плетение, уход за волосами, завивку'
          },
          
          {
            name      : 'Алина Кайсын',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 7 лет',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание и укрепление ногтевой пластины, наращивание ногтей, дизайн (геометрию, аэрографию, френч, стемпинг, несложные рисунки, втирку), парафинотерапию для рук и ног, спа-процедуру CND'
          },
          {
            name      : 'Наталия Клец',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 1 год',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание, укрепление, наращивание и коррекцию ногтей, несложный дизайн, парафинотерапию для рук и ног'
          },
          
          {
            name      : 'Екатерина Бондарь',
            education : 'Парикмахер',
            experience: 'Работает уже 8 лет ',
            skills    : 'Сделает мужские и женские стрижки, окрашивание в один тон, сложные окрашивания, уход за волосами'
          },
          
          
          {
            name      : 'Людмила Коржовская',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 7 ле',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание и укрепление ногтевой пластины, дизайн (геометрию, аэрографию, френч, стемпинг, несложные рисунки, втирку), парафинотерапию для рук и ног, спа-процедуру CND'
          },
          {
            name      : 'Владлена Охмак',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 5 лет',
            skills    : 'Сделает европейский, классический, мужской, детский маникюр, выравнивание, укрепление и «ремонт» ногтевой пластины, все виды дизайна, классический, кислотный и спа-педикюр, парафинотерапию для рук и ног'
          },
          
          {
            name      : 'Ольга Петрук',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 1 год',
            skills    : 'Сделает все виды маникюра, выравнивание и укрепление ногтевой пластины, классический, кислотный и спа-педикюр, дизайн (френч, аэрографию, геометрию, втирку, наклейки, несложные рисунки)'
          },
          {
            name      : 'Анна Роюк',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 2 года',
            skills    : 'Сделает все виды маникюра, выравнивание, укрепление и наращивание ногтей, классический, кислотный и комбинированный педикюр, несложный дизайн, спа-процедуры и парафинотерапию для рук и ног'
          },
          {
            name      : 'Ксения Станиславская',
            education : 'Директор Nail Studio Steffany, мастер ногтевого сервиса',
            experience: 'Работает уже 13 лет',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание, наращивание и коррекцию ногтей, все виды дизайна, парафинотерапию для рук и ног'
          },
          {
            name      : 'Ольга Степанчук',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 6 лет',
            skills    : 'Сделает классический, комбинированный и аппаратный маникюр, классический, комбинированный и кислотный педикюр, парафинотерапию для рук и ног, укрепление, «ремонт» и наращивание ногтей, все виды нехудожественного дизайна'
          }
        ],
        specialistsSalon: [
          {
            name      : 'Анастасия Грицык',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 4 года',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание и укрепление ногтевой пластины, наращивание и коррекцию ногтей, несложный дизайн ногтей'
          },
          {
            name      : 'Ирина Демиденко',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 4 года',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание и укрепление ногтевой пластины, наращивание ногтей, все виды дизайна ногтей, парафинотерапию для рук и ног'
          },
          {
            name      : 'Мария Пашковская',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 2 года',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание и укрепление ногтевой пластины, наращивание и коррекцию ногтей, дизайн (аэрографию, втирку, стемпинг), парафинотерапию для рук и ног'
          },
          {
            name      : 'Оксана Таргонская',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 3 года',
            skills    : 'Сделает все виды маникюра, выравнивание и укрепление ногтевой пластины, несложный дизайн (френч, стемпинг, втирку), аэрографию, парафинотерапию для рук и ног'
          }
        ],
        salons          : {
          nail: {
            name     : 'Steffany Nail',
            city     : 'Житомир',
            nameIn   : 'в Житомире',
            phone    : '098-180-50-90',
            address  : 'ул. Киевская, 77, тц "Глобал',
            schedule : '9:00 - 21:00',
            map      : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.5933359812803!2d28.685401029267087!3d50.2662872559772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64af91555555%3A0x697c4ee100bcc4de!2sSteffany%20Nail%20Studio!5e0!3m2!1sru!2sua!4v1576830374046!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram: 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
            facebook : 'https://www.facebook.com/steffany.ua/'
          },
          hair: {
            name     : 'Steffany Hair',
            city     : 'Житомир',
            nameIn   : 'в Житомире',
            phone    : '093-406-0479',
            address  : 'ул. Киевская, 77, тц "Глобал',
            schedule : '10:00 - 20:00',
            map      : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.5868053754273!2d28.685087529251003!3d50.26677505596847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64afc032302d%3A0xbdc1a333cb9db4e6!2sSteffany%20Hair%20Studio!5e0!3m2!1sru!2sua!4v1576830696418!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram: 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
            facebook : 'https://www.facebook.com/steffany.ua/'
          }
        }
      }
    },
    
    rovno: {
      ru: {
        cityName              : 'Ровно',
        cityNameIn            : 'в Ровно',
        cityPhone             : '098-500-48-86',
        schedule              : '9-00 - 20-00',
        address               : 'ул. Киевская, 4',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32161.630767479204!2d26.25760338424141!3d50.59794991865695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9G28J789%2BJR!5e0!3m2!1sru!2sua!4v1576752786381!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rovno/salon-0.jpg',
        
        imagesAmount: 1,
        specialists : [
          {
            name      : 'Инна Кокора',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 1,5 года',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание, коррекцию и наращивание ногтей, парафинотерапию для рук и ног'
          },
          {
            name      : 'Мария Кузьмич',
            education : 'Мастер маникюра',
            experience: 'Работает уже 1 год',
            skills    : 'Сделает все виды маникюра, укрепление и коррекцию ногтей, парафинотерапию для рук'
          },
          {
            name      : 'Наталия Лело',
            education : 'Парикмахер',
            experience: 'Работает уже 15 лет',
            skills    : 'Сделает все виды маникюра, укрепление и коррекцию ногтей, парафинотерапию для рук'
          },
          {
            name      : 'Мария Остапович',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 2 года',
            skills    : 'Сделает европейский, классический, комбинированный и детский маникюр, все виды педикюра, выравнивание и коррекцию ногтевой пластины, парафинотерапию для рук и ног'
          },
          
          {
            name      : 'Леся Парух',
            education : 'Brow-мастер, визажист',
            experience: 'Работает уже 1,5 года',
            skills    : 'Сделает окрашивание бровей краской и хной, моделирование, коррекцию и ламинирование бровей, окрашивание ресниц'
          },
          {
            name      : 'Екатерина Пархомчук',
            education : 'Мастер маникюра',
            experience: 'Работает уже 3 месяца',
            skills    : 'Сделает все виды маникюра, выравнивание ногтевой пластины, парафинотерапия для рук'
          },
          {
            name      : 'Галина Ребеш',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 2 года',
            skills    : 'Сделает все виды маникюра и педикюра, выравнивание, коррекцию и наращивание ногтей, парафинотерапию для рук и ног'
          },
          {
            name      : 'Анна Власенко',
            education : 'Мастер маникюра',
            experience: 'Работает уже 6 лет',
            skills    : 'Сделает классический, комбинированный и мужской маникюр, укрепление, наращивание и коррекцию ногтей'
          },
          
          {
            name      : 'Яна Галицкая',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 4 года',
            skills    : 'Сделает все виды маникюра и педикюра, укрепление ногтей, парафинотерапию для рук и ног'
          },
          {
            name      : 'Вероника Голянская',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 2 года',
            skills    : 'Сделает все виды маникюра и педикюра, укрепление ногтей, парафинотерапию для рук и ног'
          },
          {
            name      : 'Наталия Довгаль',
            education : 'Мастер маникюра',
            experience: 'Работает уже 3 месяца',
            skills    : 'Сделает все виды маникюра, выравнивание ногтевой пластины, парафинотерапию для рук'
          },
          {
            name      : 'Ирина Коломийчук',
            education : 'Мастер ногтевого сервиса',
            experience: 'Работает уже 3 года',
            skills    : 'Сделает все виды маникюра, классический, комбинированный и спа-педикюр, выравнивание, укрепление и наращивание ногтей, парафинотерапию для рук и ног'
          }
        ],
        salons      : {
          salon: {
            name     : '',
            city     : 'Ровно',
            nameIn   : 'в Ровно',
            phone    : '098-500-48-86',
            address  : 'ул. Киевская, 4',
            schedule : '9-00 - 20-00',
            map      : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32161.630767479204!2d26.25760338424141!3d50.59794991865695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9G28J789%2BJR!5e0!3m2!1sru!2sua!4v1576752786381!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram: 'https://www.instagram.com/steffany.rivne/?hl=ru',
            facebook : 'https://www.facebook.com/steffany.ua/'
          }
        }
      }
    }
  }
  
  let localization = 'ru'
  let carouselsHTML = null
  let salon = ''
  let city = localStorage.getItem('city')
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
  }
  if (city) {
    changeDataForCity()
  }
  
  $('[data-salon]').first().click()
  
  $(`a.nav-link-text.btn-simple-map.city-trigger[data-city="${city}"]`).toggleClass('active')
  
  $('[data-salon]').on('click', e => {
    salon = e.target.dataset.salon
    switchData(citiesData[city][localization].salons[salon])
  })
  
  function changeDataForCity() {
    if (city === 'zt') {
      $('.city-switcher').show()
      salon = 'hair'
      $('[data-salon]').first().toggleClass('active')
    }
    else {
      $('.city-switcher').hide()
      salon = 'salon'
    }
  
    switchData(citiesData[city][localization].salons[salon])
    
    
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
    let imagesAmountSpecialists = citiesData[city][localization].specialists.length
    let specialistsData = citiesData[city][localization].specialists
    let imgPath = `assets/img/about-steffany-salon/${city}/`
    let images = ''
    let imagesSmall = ''
    let imagesSpecialists = ''
    
    for (let i = 0; i < imagesAmount; i++) {
      images += `
        <span data-pos="${i}" class="video d-flex align-items-center justify-content-center">
          <img src="${imgPath}salon-${i}.jpg" class="w-100">
        </span>
      `
    }
    
    for (let i = 0; i < imagesAmount; i++) {
      imagesSmall += `
        <span data-pos="${i}" class="owl-dot d-flex align-items-center justify-content-center mb-4">
          <img src="${imgPath}salon-${i}.jpg" class="w-100 salon-img">
          <span class="owl-dot-bg w-100 h-100 d-block"></span>
        </span>
      `
    }
    
    for (let i = 0; i < imagesAmountSpecialists; i++) {
      imagesSpecialists += `
        <div class="specialists-item">
            <div class="specialists-item-container mb-3 w-100">
                <div class="specialists-img w-100"><img class="w-100" src="${imgPath}/specialists/specialist-${i}@2x.jpg" alt="${specialistsData[i].name}"/></div>
                <div class="specialists-info d-flex flex-column align-items-start w-100 p-3">
                    <p class="paragraph-text text-color-lightdark text-w-light">${specialistsData[i].education}</p>
                    <p class="paragraph-text text-color-lightdark text-w-bold">${specialistsData[i].experience}</p>
                    <p class="paragraph-text text-color-lightdark text-w-light">${specialistsData[i].skills}</p>
                </div>
            </div>
            <p class="h4-title text-center text-color-white">${specialistsData[i].name}</p>
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
  
  initCities()
  
})

