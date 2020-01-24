$(document).ready(function () {
  const serviceCityData = {
    zt: {
      ru: {
        salons         : {
          salon: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./nano-epilyatsiya">Нано-эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./shugaring">Шугаринг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./voskovaya-epilyatsiya">Восковая эпиляция\`</a></li>
        `
          }
        },
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./nano-epilyatsiya">Нано-эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./shugaring">Шугаринг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./voskovaya-epilyatsiya">Восковая эпиляция\`</a></li>
        `
      },
      ua: {
        salons         : {
          salon: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./nano-epilyatsiya">Нано-епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./shugaring">Шугарінг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./voskovaya-epilyatsiya">Воскова епіляція</a></li>
        `
          }
        },
        selectedService:
          `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./nano-epilyatsiya">Нано-епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./shugaring">Шугарінг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./voskovaya-epilyatsiya">Воскова епіляція</a></li>
        `
      }
      
    },
    if: {
      ru: {
        salons         : {
          salon: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
        `
          }
        },
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
        `
      },
      ua: {
        salons         : {
          salon: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
        `
          }
        },
        selectedService:
          `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
        `
      }
      
    },
    lt: {
      ru: {
        salons         : {
          salon: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./nano-epilyatsiya">Нано-эпиляция</a></li>
        `
          }
        },
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./nano-epilyatsiya">Нано-эпиляция</a></li>
        `
      },
      ua: {
        salons         : {
          salon: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./nano-epilyatsiya">Нано-епіляція</a></li>
        `
          }
        },
        selectedService:
          `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./nano-epilyatsiya">Нано-епіляція</a></li>
        `
      }
      
    },
    lv: {
      ru: {
        salons         : {
          lv1: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
        `
          },
          lv2: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
        `
          }
        },
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
        `
      },
      ua: {
        salons         : {
          lv1: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
        `
          },
          lv2: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
        `
          }
        },
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
        `
      }
      
    },
    rv: {
      ru: {
        salons         : {
          salon: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./shugaring">Шугаринг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./voskovaya-epilyatsiya">Восковая эпиляция\`</a></li>
        `
          }
        },
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерная эпиляция</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./shugaring">Шугаринг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./voskovaya-epilyatsiya">Восковая эпиляция\`</a></li>
        `
      },
      ua: {
        salons         : {
          salon: {
            selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./shugaring">Шугарінг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./voskovaya-epilyatsiya">Воскова епіляція</a></li>
        `
          }
        },
        selectedService: `
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./epilation">Лазерна епіляція</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./shugaring">Шугарінг</a></li>
          <li class="mb-2 mb-lg-0"><a class="nav-link-text paragraph-text text-color-lightdark-header mob-title" href="./voskovaya-epilyatsiya">Воскова епіляція</a></li>
        `
      }
      
    }
  }
  const citiesData = {
    zt: {
      ru: {
        cityName               : 'Житомир',
        cityNameIn             : 'в Житомире',
        cityPhone              : '380-96-205-50-30',
        address                : 'ул. Киевская, 84',
        cityMap                : '<iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10203.204981280256!2d28.6831072!3d50.2582963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a35524e091%3A0x94671cf8df29cc74!2z0JrQuNC10LLRgdC60LDRjyDRg9C7LiwgODQsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAwMQ!5e0!3m2!1sru!2sua!4v1573470059108!5m2!1sru!2sua"\n' + '    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram          : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
        cityFacebook           : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage : 'assets/img/about-steffany-salon/zt/video-slider-0@2x.jpg',
        imagesAmount           : 6,
        imagesAmountSpecialists: 6,
        
        salons: {
          salon: {
            title      : 'Салон',
            phone      : '380-96-205-50-30',
            address    : 'ул. Киевская, 84',
            schedule   : 'c 9:00 до 20:00',
            map        : '<iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10203.204981280256!2d28.6831072!3d50.2582963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a35524e091%3A0x94671cf8df29cc74!2z0JrQuNC10LLRgdC60LDRjyDRg9C7LiwgODQsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAwMQ!5e0!3m2!1sru!2sua!4v1573470059108!5m2!1sru!2sua"\n' + '    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/zt/salon/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Виктория Демчук',
                education : 'По образованию косметолог',
                experience: 'Работает уже 7 лет',
                skills    : 'Сделает все виды чисток, пилингов, уходовых процедур, лазерную эпиляцию, все виды депиляций, подбор домашнего ухода'
              },
              {
                name      : 'Ульяна Кравчук',
                education : 'По образованию медицинский работник.',
                experience: 'Работает уже 8 лет',
                skills    : 'Сделает лазерную эпиляцию, эстетическую косметологию, шугаринг, восковую эпиляцию'
              },
              {
                name      : 'Татьяна Огир',
                education : 'По образованию медсестра.',
                experience: 'Работает уже 18 лет',
                skills    : 'Сделает массаж, SPA-услуги, лазерную эпиляцию, LPG-массаж'
              },
              {
                name      : 'Инна Степанчук',
                education : 'По образованию фармацевт.',
                experience: 'Работает уже 3 года',
                skills    : 'Сделает перманентный макияж, лазерную эпиляцию, восковую депиляцию, шугаринг, чистку и пилинг лица'
              },
              {
                name      : 'Александра Бордиян',
                education : 'По образованию социальный реабилитолог, фельдшер-лаборант.',
                experience: 'Работает уже 12 лет',
                skills    : 'Сделает все виды чисток, пилингов, уходовые процедуры, лазерную эпиляцию, все виды депиляции, подбор домашнего ухода'
              },
              {
                name      : 'Ирина Гутель',
                education : 'По образованию медсестра и реабилитолог',
                experience: 'Работает уже 9 лет',
                skills    : 'Сделает массаж, SPA-услуги, лазерную эпиляцию, LPG-массаж'
              }
            ]
          }
        },
        
        specialists: [
          {
            name      : 'Виктория Демчук',
            education : 'По образованию косметолог',
            experience: 'Работает уже 7 лет',
            skills    : 'Сделает все виды чисток, пилингов, уходовых процедур, лазерную эпиляцию, все виды депиляций, подбор домашнего ухода'
          },
          {
            name      : 'Ульяна Кравчук',
            education : 'По образованию медицинский работник.',
            experience: 'Работает уже 8 лет',
            skills    : 'Сделает лазерную эпиляцию, эстетическую косметологию, шугаринг, восковую эпиляцию'
          },
          {
            name      : 'Татьяна Огир',
            education : 'По образованию медсестра.',
            experience: 'Работает уже 18 лет',
            skills    : 'Сделает массаж, SPA-услуги, лазерную эпиляцию, LPG-массаж'
          },
          {
            name      : 'Инна Степанчук',
            education : 'По образованию фармацевт.',
            experience: 'Работает уже 3 года',
            skills    : 'Сделает перманентный макияж, лазерную эпиляцию, восковую депиляцию, шугаринг, чистку и пилинг лица'
          },
          {
            name      : 'Александра Бордиян',
            education : 'По образованию социальный реабилитолог, фельдшер-лаборант.',
            experience: 'Работает уже 12 лет',
            skills    : 'Сделает все виды чисток, пилингов, уходовые процедуры, лазерную эпиляцию, все виды депиляции, подбор домашнего ухода'
          },
          {
            name      : 'Ирина Гутель',
            education : 'По образованию медсестра и реабилитолог',
            experience: 'Работает уже 9 лет',
            skills    : 'Сделает массаж, SPA-услуги, лазерную эпиляцию, LPG-массаж'
          }
        ]
      },
      ua: {
        cityName               : 'Житомир',
        cityNameIn             : 'у Житомирі',
        cityPhone              : '380-96-205-50-30',
        address                : 'вул. Київська, 84',
        cityMap                : '<iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10203.204981280256!2d28.6831072!3d50.2582963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a35524e091%3A0x94671cf8df29cc74!2z0JrQuNC10LLRgdC60LDRjyDRg9C7LiwgODQsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAwMQ!5e0!3m2!1sru!2sua!4v1573470059108!5m2!1sru!2sua"\n' + '    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram          : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
        cityFacebook           : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage : 'assets/img/about-steffany-salon/zt/video-slider-0@2x.jpg',
        imagesAmount           : 6,
        imagesAmountSpecialists: 6,
        
        salons: {
          salon: {
            title      : 'Салон',
            phone      : '380-96-205-50-30',
            address    : 'вул. Київська, 84',
            schedule   : 'з 9:00 до 20:00',
            map        : '<iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10203.204981280256!2d28.6831072!3d50.2582963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a35524e091%3A0x94671cf8df29cc74!2z0JrQuNC10LLRgdC60LDRjyDRg9C7LiwgODQsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAwMQ!5e0!3m2!1sru!2sua!4v1573470059108!5m2!1sru!2sua"\n' + '    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/zt/salon/video-slider-0@2x.jpg',
            specialists: [
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
                experience: 'Працює вже 3 роки',
                skills    : 'Зробить перманентний макіяж, лазерну епіляцію, воскову депіляцію, шугарінг, чистку і пілінг обличчя'
              },
              {
                name      : 'Олександра Бордіян',
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
        
        specialists: [
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
            experience: 'Працює вже 3 роки',
            skills    : 'Зробить перманентний макіяж, лазерну епіляцію, воскову депіляцію, шугарінг, чистку і пілінг обличчя'
          },
          {
            name      : 'Олександра Бордіян',
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
        cityName               : 'Ивано-Фр.',
        cityNameIn             : 'в Ивано-Франковске',
        cityPhone              : '380-67-110-09-69',
        address                : 'ул. Ивана Франка, 25',
        cityMap                : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.6151145976846!2d24.714299715612086!3d48.92272480412903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c4f01503f%3A0x2ad33aab5a158616!2z0YPQuy4g0JjQstCw0L3QsCDQpNGA0LDQvdC60L4sIDI1LCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQuiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1sru!2sua!4v1573037148887!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram          : 'https://www.instagram.com/steffany.ifrankivsk/?hl=ru',
        cityFacebook           : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage : 'assets/img/about-steffany-salon/if/video-slider-0@2x.jpg',
        imagesAmount           : 9,
        imagesAmountSpecialists: 1,
        
        salons: {
          salon: {
            title      : 'Салон',
            phone      : '380-67-110-09-69',
            address    : 'ул. Ивана Франка, 25',
            schedule   : 'c 9:00 до 20:00',
            map        : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.6151145976846!2d24.714299715612086!3d48.92272480412903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c4f01503f%3A0x2ad33aab5a158616!2z0YPQuy4g0JjQstCw0L3QsCDQpNGA0LDQvdC60L4sIDI1LCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQuiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1sru!2sua!4v1573037148887!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/if/salon/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Оксана Иванцив',
                education : 'По образованию акушерка',
                experience: 'Работает уже 2,5 месяца',
                skills    : 'Сделает лазерную эпиляцию'
              }
            ]
          }
        },
        
        specialists: [
          {
            name      : 'Оксана Иванцив',
            education : 'По образованию акушерка',
            experience: 'Работает уже 2,5 месяца',
            skills    : 'Сделает лазерную эпиляцию'
          }
        ]
      },
      ua: {
        cityName               : 'Івано-Фр.',
        cityNameIn             : 'у Івано-Франківську ',
        cityPhone              : '380-67-110-09-69',
        address                : 'вул. Івана Франка, 25',
        cityMap                : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.6151145976846!2d24.714299715612086!3d48.92272480412903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c4f01503f%3A0x2ad33aab5a158616!2z0YPQuy4g0JjQstCw0L3QsCDQpNGA0LDQvdC60L4sIDI1LCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQuiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1sru!2sua!4v1573037148887!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram          : 'https://www.instagram.com/steffany.ifrankivsk/?hl=ru',
        cityFacebook           : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage : 'assets/img/about-steffany-salon/if/video-slider-0@2x.jpg',
        imagesAmount           : 9,
        imagesAmountSpecialists: 1,
        
        salons: {
          salon: {
            title      : 'Салон',
            phone      : '380-67-110-09-69',
            address    : 'вул. Івана Франка, 25',
            schedule   : 'з 9:00 до 20:00',
            map        : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.6151145976846!2d24.714299715612086!3d48.92272480412903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c4f01503f%3A0x2ad33aab5a158616!2z0YPQuy4g0JjQstCw0L3QsCDQpNGA0LDQvdC60L4sIDI1LCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQuiwg0JjQstCw0L3Qvi3QpNGA0LDQvdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3NjAwMA!5e0!3m2!1sru!2sua!4v1573037148887!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/if/salon/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Оксана Іванців',
                education : 'За освітою акушерка',
                experience: 'Працює вже 2,5 місяці',
                skills    : 'Зробить лазерну епіляцію'
              }
            ]
          }
        },
        
        specialists: [
          {
            name      : 'Оксана Іванців',
            education : 'За освітою акушерка',
            experience: 'Працює вже 2,5 місяці',
            skills    : 'Зробить лазерну епіляцію'
          }
        ]
      }
      
    },
    lt: {
      ru: {
        cityName               : 'Луцк',
        cityNameIn             : 'в Луцке',
        cityPhone              : '380-68-129-24-23',
        address                : 'пр. Воли, 10',
        cityMap                : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5746604837755!2d25.33165866888208!3d50.74637731008205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599efdec12f9b%3A0x2dd6f91bc0308c8e!2z0L_RgNC-0YHQvy4g0JLQvtC70LgsIDEwLCDQm9GD0YbQuiwg0JLQvtC70YvQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MzAwMA!5e0!3m2!1sru!2sua!4v1574856828162!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram          : 'https://www.instagram.com/steffany.lutsk/?hl=ru',
        cityFacebook           : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage : 'assets/img/about-steffany-salon/lt/video-slider-0@2x.jpg',
        imagesAmount           : 9,
        imagesAmountSpecialists: 3,
        
        salons: {
          salon: {
            title      : 'Салон',
            phone      : '380-68-129-24-23',
            address    : 'пр. Воли, 10',
            schedule   : 'c 9:00 до 20:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5746604837755!2d25.33165866888208!3d50.74637731008205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599efdec12f9b%3A0x2dd6f91bc0308c8e!2z0L_RgNC-0YHQvy4g0JLQvtC70LgsIDEwLCDQm9GD0YbQuiwg0JLQvtC70YvQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MzAwMA!5e0!3m2!1sru!2sua!4v1574856828162!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/lt/salon/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Кристина Данило',
                education : 'По образованию врач-дерматолог, косметолог',
                experience: 'Работает уже 7 лет',
                skills    : 'Сделает лазерную эпиляцию, пилинги, все виды чисток'
              },
              {
                name      : 'Татьяна Королик',
                education : 'По образованию фельдшер',
                experience: 'Работает уже 1 год',
                skills    : 'Сделает лазерную эпиляцию, все виды косметологических услуг'
              },
              {
                name      : 'Руслана Шостак',
                education : 'По образованию медсестра',
                experience: 'Работает уже 5 лет',
                skills    : 'Сделает классический массаж лица, уходовые процедуры, маски, пилинги, биоревитализацию, карбокситерапию, микротоковую терапию'
              }
            ]
          }
        },
        
        specialists: [
          {
            name      : 'Кристина Данило',
            education : 'По образованию врач-дерматолог, косметолог',
            experience: 'Работает уже 7 лет',
            skills    : 'Сделает лазерную эпиляцию, пилинги, все виды чисток'
          },
          {
            name      : 'Татьяна Королик',
            education : 'По образованию фельдшер',
            experience: 'Работает уже 1 год',
            skills    : 'Сделает лазерную эпиляцию, все виды косметологических услуг'
          },
          {
            name      : 'Руслана Шостак',
            education : 'По образованию медсестра',
            experience: 'Работает уже 5 лет',
            skills    : 'Сделает классический массаж лица, уходовые процедуры, маски, пилинги, биоревитализацию, карбокситерапию, микротоковую терапию'
          }
        ]
      },
      ua: {
        cityName               : 'Луцьк',
        cityNameIn             : 'у Луцьку',
        cityPhone              : '380-68-129-24-23',
        address                : 'пр. Волі, 10',
        cityMap                : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5746604837755!2d25.33165866888208!3d50.74637731008205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599efdec12f9b%3A0x2dd6f91bc0308c8e!2z0L_RgNC-0YHQvy4g0JLQvtC70LgsIDEwLCDQm9GD0YbQuiwg0JLQvtC70YvQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MzAwMA!5e0!3m2!1sru!2sua!4v1574856828162!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram          : 'https://www.instagram.com/steffany.lutsk/?hl=ru',
        cityFacebook           : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage : 'assets/img/about-steffany-salon/lt/video-slider-0@2x.jpg',
        imagesAmount           : 9,
        imagesAmountSpecialists: 3,
        
        salons: {
          salon: {
            title      : 'Салон',
            phone      : '380-68-129-24-23',
            address    : 'пр. Волі, 10',
            schedule   : 'c 9:00 до 20:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5746604837755!2d25.33165866888208!3d50.74637731008205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599efdec12f9b%3A0x2dd6f91bc0308c8e!2z0L_RgNC-0YHQvy4g0JLQvtC70LgsIDEwLCDQm9GD0YbQuiwg0JLQvtC70YvQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA0MzAwMA!5e0!3m2!1sru!2sua!4v1574856828162!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/lt/salon/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Христина Данило',
                education : 'За освітою лікар-дерматолог, косметолог',
                experience: 'Працює вже 7 років',
                skills    : 'Зробить лазерну епіляцію, пілінги, усі види чисток'
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
        
        specialists: [
          {
            name      : 'Христина Данило',
            education : 'За освітою лікар-дерматолог, косметолог',
            experience: 'Працює вже 7 років',
            skills    : 'Зробить лазерну епіляцію, пілінги, усі види чисток'
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
        cityName              : 'Львов',
        cityNameIn            : 'во Львове',
        cityPhone             : '380-97-203-90-03',
        address               : 'ул. Гулака-Артемовского, 2',
        cityMap               : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3207133690416!2d24.03369211564091!3d49.83643113929711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add69070842c9%3A0x9108f74379396188!2z0YPQuy4g0JPRg9C70LDQutCwLdCQ0YDRgtC10LzQvtCy0YHQutC-0LPQviwgMiwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1573037292724!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.lviv/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/lv/video-slider-0@2x.jpg',
        
        salons: {
          lv1: {
            title      : 'Салон 1',
            phone      : '380-97-202-20-21',
            address    : 'ул. Княгини Ольги 98А',
            schedule   : 'с 9:00 до 20:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.3135978041103!2d24.003169878435035!3d49.817993772931914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae79add5d429b%3A0x1367e44d6afb11ed!2z0YPQuy4g0JrQvdGP0LPQuNC90Lgg0J7Qu9GM0LPQuCwgOTgsINCb0YzQstC-0LIsINCb0YzQstC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1579688832814!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/lv/lv1/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Ирина Станкевич',
                education : 'По образованию акушерка',
                experience: 'Работает уже 2,5 года',
                skills    : 'Сделает лазерную эпиляцию, косметологические услуги, чистку лица'
              }
            ]
          },
          lv2: {
            title      : 'Салон 2',
            phone      : '380-97-203-90-03',
            address    : 'ул. Гулака-Артемовского, 2',
            schedule   : 'с 9:00 до 20:00',
            map        : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3207133690416!2d24.03369211564091!3d49.83643113929711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add69070842c9%3A0x9108f74379396188!2z0YPQuy4g0JPRg9C70LDQutCwLdCQ0YDRgtC10LzQvtCy0YHQutC-0LPQviwgMiwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1573037292724!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/lv/lv2/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Ирина Станкевич',
                education : 'По образованию акушерка',
                experience: 'Работает уже 2,5 года',
                skills    : 'Сделает лазерную эпиляцию, косметологические услуги, чистку лица'
              }
            ]
          }
        },
        
        imagesAmount           : 10,
        imagesAmountSpecialists: 1,
        specialists            : [
          {
            name      : 'Ирина Станкевич',
            education : 'По образованию акушерка',
            experience: 'Работает уже 2,5 года',
            skills    : 'Сделает лазерную эпиляцию, косметологические услуги, чистку лица'
          }
        ]
      },
      ua: {
        cityName               : 'Львів',
        cityNameIn             : 'у Львові',
        cityPhone              : '380-97-203-90-03',
        address                : 'вул. Гулака-Артемовського, 2',
        cityMap                : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3207133690416!2d24.03369211564091!3d49.83643113929711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add69070842c9%3A0x9108f74379396188!2z0YPQuy4g0JPRg9C70LDQutCwLdCQ0YDRgtC10LzQvtCy0YHQutC-0LPQviwgMiwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1573037292724!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram          : 'https://www.instagram.com/steffany.lviv/?hl=ru',
        cityFacebook           : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage : 'assets/img/about-steffany-salon/lv/video-slider-0@2x.jpg',
        salons                 : {
          lv1: {
            title      : 'Салон 1',
            phone      : '380-97-202-20-21',
            address    : 'вул. Княгині Ольги 98А',
            schedule   : 'з 9:00 до 20:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.3135978041103!2d24.003169878435035!3d49.817993772931914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae79add5d429b%3A0x1367e44d6afb11ed!2z0YPQuy4g0JrQvdGP0LPQuNC90Lgg0J7Qu9GM0LPQuCwgOTgsINCb0YzQstC-0LIsINCb0YzQstC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1579688832814!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/lv/lv1/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Ірина Станкевич',
                education : 'За освітою акушерка',
                experience: 'Працює вже 2,5 роки',
                skills    : 'Зробить лазерну епіляцію, косметологічні послуги, чистку обличчя'
              }
            ]
          },
          lv2: {
            title      : 'Салон 2',
            phone      : '380-97-203-90-03',
            address    : 'вул. Гулака-Артемовського, 2',
            schedule   : 'з 9:00 до 20:00',
            map        : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.3207133690416!2d24.03369211564091!3d49.83643113929711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add69070842c9%3A0x9108f74379396188!2z0YPQuy4g0JPRg9C70LDQutCwLdCQ0YDRgtC10LzQvtCy0YHQutC-0LPQviwgMiwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1573037292724!5m2!1sru!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/lv/lv2/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Ірина Станкевич',
                education : 'За освітою акушерка',
                experience: 'Працює вже 2,5 роки',
                skills    : 'Зробить лазерну епіляцію, косметологічні послуги, чистку обличчя'
              }
            ]
          }
        },
        imagesAmount           : 10,
        imagesAmountSpecialists: 1,
        specialists            : [
          {
            name      : 'Ірина Станкевич',
            education : 'За освітою акушерка',
            experience: 'Працює вже 2,5 роки',
            skills    : 'Зробить лазерну епіляцію, косметологічні послуги, чистку обличчя'
          }
        ]
      }
      
    },
    rv: {
      ru: {
        cityName              : 'Ровно',
        cityNameIn            : 'в Ровно',
        cityPhone             : '380-98-500-48-86',
        address               : 'ул. Киевская, 4',
        cityMap               : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5705084842903!2d26.267335815665785!3d50.61651778326605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1573036973623!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rv/video-slider-0@2x.jpg',
        
        salons: {
          salon: {
            title      : 'Салон',
            phone      : '380-98-500-48-86',
            address    : 'ул. Киевская, 4',
            schedule   : 'c 9:00 до 20:00',
            map        : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5705084842903!2d26.267335815665785!3d50.61651778326605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1573036973623!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/rv/salon/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Валентина Дижурко',
                education : 'По образованию анестезиолог и реаниматолог',
                experience: 'Работает уже 2,5 года',
                skills    : 'Сделает процедуры по уходу за лицом, лазерную эпиляцию, пирсинг, восковую депиляцию'
              },
              {
                name      : 'Лариса Драганчук',
                education : 'По образованию санитарный фельдшер',
                experience: 'Работает уже 3 года',
                skills    : ' Сделает лазерную эпиляцию, чистки кожи, уходовые процедуры, классический массаж лица, микротоковую терапию, безинъекционную мезотерапию, подбор домашнего ухода'
              },
              {
                name      : 'Ирина Куба',
                education : 'По образованию врач-дерматолог',
                experience: 'Работает уже 10 лет',
                skills    : 'Сделает дерматоскопию и удаление новообразований на коже, чистки, пилинги, аппаратные методики для лица, лазерную эпиляцию'
              },
              {
                name      : 'Людмила Чорная',
                education : 'По образованию медсестра',
                experience: 'Работает уже 11 лет',
                skills    : 'Сделает лазерную эпиляцию, восковую депиляцию, уходовые программы для лица, чистки и массаж лица, микротоковую терапию, безинъекционную мезотерапию, подбор домашнего ухода, перманентный макияж'
              }
            ]
          }
        },
        
        imagesAmount           : 10,
        imagesAmountSpecialists: 4,
        specialists            : [
          {
            name      : 'Валентина Дижурко',
            education : 'По образованию анестезиолог и реаниматолог',
            experience: 'Работает уже 2,5 года',
            skills    : 'Сделает процедуры по уходу за лицом, лазерную эпиляцию, пирсинг, восковую депиляцию'
          },
          {
            name      : 'Лариса Драганчук',
            education : 'По образованию санитарный фельдшер',
            experience: 'Работает уже 3 года',
            skills    : ' Сделает лазерную эпиляцию, чистки кожи, уходовые процедуры, классический массаж лица, микротоковую терапию, безинъекционную мезотерапию, подбор домашнего ухода'
          },
          {
            name      : 'Ирина Куба',
            education : 'По образованию врач-дерматолог',
            experience: 'Работает уже 10 лет',
            skills    : 'Сделает дерматоскопию и удаление новообразований на коже, чистки, пилинги, аппаратные методики для лица, лазерную эпиляцию'
          },
          {
            name      : 'Людмила Чорная',
            education : 'По образованию медсестра',
            experience: 'Работает уже 11 лет',
            skills    : 'Сделает лазерную эпиляцию, восковую депиляцию, уходовые программы для лица, чистки и массаж лица, микротоковую терапию, безинъекционную мезотерапию, подбор домашнего ухода, перманентный макияж'
          }
        ]
      },
      ua: {
        cityName              : 'Рівне',
        cityNameIn            : 'у Рівному',
        cityPhone             : '380-98-500-48-86',
        address               : 'вул. Київська, 4',
        cityMap               : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5705084842903!2d26.267335815665785!3d50.61651778326605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1573036973623!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rv/video-slider-0@2x.jpg',
        
        salons: {
          salon: {
            title      : 'Салон',
            phone      : '380-98-500-48-86',
            address    : 'вул. Київська, 4',
            schedule   : 'c 9:00 до 20:00',
            map        : '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.5705084842903!2d26.267335815665785!3d50.61651778326605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f1366b7f21ce1%3A0x6d5a726bdbefb70!2z0YPQuy4g0JrQuNC10LLRgdC60LDRjywgNCwg0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAzMzAwMA!5e0!3m2!1sru!2sua!4v1573036973623!5m2!1sru!2sua"width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            preview    : 'assets/img/_about-steffany-salon/rv/salon/video-slider-0@2x.jpg',
            specialists: [
              {
                name      : 'Валентина Діжурко',
                education : 'За освітою анестезіолог і реаніматолог',
                experience: 'Працює вже 2,5 роки',
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
        },
        
        imagesAmount           : 10,
        imagesAmountSpecialists: 4,
        specialists            : [
          {
            name      : 'Валентина Діжурко',
            education : 'За освітою анестезіолог і реаніматолог',
            experience: 'Працює вже 2,5 роки',
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
  window.cd = citiesData
  window.nav = {
    zt: {
      ru: 'lazernaya-epilyatsiya/{{ page }}',
      ua: 'lazernaya-epilyatsiya/ua/{{ page }}'
    },
    if: {
      ru: 'lazernaya-epilyatsiya/if/{{ page }}',
      ua: 'lazernaya-epilyatsiya/if/ua/{{ page }}'
    },
    lv: {
      ru: 'lazernaya-epilyatsiya/lv/{{ page }}',
      ua: 'lazernaya-epilyatsiya/lv/ua/{{ page }}'
    },
    lt: {
      ru: 'lazernaya-epilyatsiya/lt/{{ page }}',
      ua: 'lazernaya-epilyatsiya/lt/ua/{{ page }}'
    },
    rv: {
      ru: 'lazernaya-epilyatsiya/rv/{{ page }}',
      ua: 'lazernaya-epilyatsiya/rv/ua/{{ page }}'
    }
  }
  
  const binatel = {
    zt: function (d, w, s) {
      var widgetHash = 'hkjkvxczszkz5wt5imor',
          gcw        = d.createElement(s)
      gcw.type = 'text/javascript'
      gcw.async = true
      gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js'
      var sn = d.getElementsByTagName(s)[0]
      sn.parentNode.insertBefore(gcw, sn)
    },
    if: function (d, w, s) {
      var widgetHash = 'fl8zbssa72s58pv4hrpv',
          gcw        = d.createElement(s)
      gcw.type = 'text/javascript'
      gcw.async = true
      gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js'
      var sn = d.getElementsByTagName(s)[0]
      sn.parentNode.insertBefore(gcw, sn)
    },
    lv: function (d, w, s) {
      var widgetHash = 'uh04zih8n1bkwetu4pnv',
          gcw        = d.createElement(s)
      gcw.type = 'text/javascript'
      gcw.async = true
      gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js'
      var sn = d.getElementsByTagName(s)[0]
      sn.parentNode.insertBefore(gcw, sn)
    },
    lt: function (d, w, s) {
      var widgetHash = '7j3ys286vzbh17csmy0n',
          gcw        = d.createElement(s)
      gcw.type = 'text/javascript'
      gcw.async = true
      gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js'
      var sn = d.getElementsByTagName(s)[0]
      sn.parentNode.insertBefore(gcw, sn)
    },
    rv: function (d, w, s) {
      var widgetHash = '65o63ikswb72mszndoi7',
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
  const urlCity      = location.pathname.slice(1).split('/')[1],
        filteredCity = ['rv', 'if', 'lv', 'lt'].find(city => city === urlCity) || 'zt'
  
  let salon = localStorage.getItem('salon') || 'salon'
  
  let city = filteredCity
  window.city = city
  if (Object.keys(citiesData[city][localization].salons).length > 1) {
    if (salon === 'salon') {
      salon = Object.keys(citiesData[city][localization].salons)[0]
    }
    else {
      salon = Object.keys(citiesData[city][localization].salons).includes(salon) ?
              salon :
              Object.keys(citiesData[city][localization].salons)[0]
    }
  }
  else {
    salon = 'salon'
    localStorage.setItem('salon', salon)
  }
  
  const setSalonSwitcher = salons => {
    let switcher = ''
    for (const salon in salons) {
      switcher += `<a data-salon="${salon}">${salons[salon].title}</a>`
    }
    $('.salon-switcher').html(switcher)
    $(`.salon-switcher [data-salon="${salon}"]`).addClass('active')
    $('.salon-switcher').css('display', 'block')
  }
  
  window.salon = salon
  
  
  Object.keys(citiesData[city][localization].salons).length > 1 && setSalonSwitcher(citiesData[city][localization].salons)
  $('[data-salon]').on('click', e => {
    const newSalon = e.target.dataset.salon
    if (e.target.dataset.salon !== salon) {
      localStorage.setItem('salon', newSalon)
      location.reload()
    }
  })
  binatel[city](document, window, 'script')
  changeDataForCity()
  
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
      this.innerText = citiesData[city][localization].salons[salon].phone
      this.setAttribute('href', `tel:+${citiesData[city][localization].salons[salon].cityPhone}`)
    })
    $('.city-in-dynamic').each(function (e) {
      this.innerText = ' ' + citiesData[city][localization].cityNameIn
    })
    
    $('.address-dynamic').each(function (e) {
      this.innerText = citiesData[city][localization].salons[salon].address
    })
    
    $('.map-dynamic').each(function (e) {
      this.innerHTML = citiesData[city][localization].salons[salon].map
    })
    
    $('.service-li-dynamic').each(function (e) {
      this.innerHTML = serviceCityData[city][localization].salons[salon].selectedService
    })
    
    $('.image-about-dynamic').each(function (e) {
      this.setAttribute('src', `${citiesData[city][localization].salons[salon].preview}`)
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
    let specialistsData = citiesData[city][localization].salons[salon].specialists
    let imgPath = `assets/img/about-steffany-salon/${city}/`
    const newImgPath = `assets/img/_about-steffany-salon/${city}/${salon}/`
    let images = ''
    let imagesSmall = ''
    let imagesSpecialists = ''
    
    for (let i = 0; i < imagesAmount; i++) {
      images += `
        <span data-pos="${i}" class="video d-flex align-items-center justify-content-center">
          <img src="${newImgPath}video-slider-${i}.jpg" srcset="${newImgPath}video-slider-${i}@2x.jpg" class="w-100">
        </span>
      `
    }
    
    for (let i = 0; i < imagesAmount; i++) {
      imagesSmall += `
        <span data-pos="${i}" class="owl-dot d-flex align-items-center justify-content-center mb-4">
          <img src="${newImgPath}video-slider-${i}.jpg" srcset="${newImgPath}video-slider-${i}@2x.jpg" class="w-100 video-slider-img">
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
        city = e.target.dataset.city
        const _h   = location.pathname.slice(1).split('/'),
              page = _h[_h.length - 1]
        const link = nav[city][localization].replace('{{ page }}', page)
        location.pathname = '/' + link
      }
    })
  }
  
  initCities()
})
