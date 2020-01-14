$(document).ready(function () {
  const citiesData = {
    zt: {
      ru: {
        cityName              : 'Житомир',
        cityNameIn            : 'в Житомире',
        cityPhone             : '380-98-007-07-53',
        schedule              : '10:00 - 20:00',
        address               : 'ул. Киевская, 77, тц "Глобал"',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.345216309848!2d28.6856875!3d50.2668125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9G2C7M8P%2BP7!5e0!3m2!1sru!2sua!4v1576752718526!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/zt/{{ salon }}/salon-0.jpg',

        imagesAmount: 10,

        salons: {
          nail: {
            name       : 'Steffany Nail',
            city       : 'Житомир',
            nameIn     : 'в Житомире',
            phone      : '380-67-404-19-33',
            address    : 'ул. Киевская, 77, тц "Глобал"',
            schedule   : '9:00 - 21:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.3732072342173!2d28.683759515257734!3d50.26628980849905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x697c4ee100bcc4de!2sSteffany%20Nail%20Studio!5e0!3m2!1sru!2sua!4v1578658568743!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
              {
                name      : 'Алина Кайсын',
                education : 'Мастер ногтевого сервиса',
                experience: 'Работает уже 7 лет',
                skills    : 'Сделает все виды маникюра и педикюра, выравнивание и укрепление ногтевой пластины, наращивание ногтей, дизайн (геометрию, аэрографию, френч, стемпинг, несложные рисунки, втирку), парафинотерапию для рук и ног, спа-процедуру CND',
                cover     : ''
              },
              {
                name      : 'Наталия Клец',
                education : 'Мастер ногтевого сервиса',
                experience: 'Работает уже 1 год',
                skills    : 'Сделает все виды маникюра и педикюра, выравнивание, укрепление, наращивание и коррекцию ногтей, несложный дизайн, парафинотерапию для рук и ног'
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

              // {
              //   name      : 'Ольга Петрук',
              //   education : 'Мастер ногтевого сервиса',
              //   experience: 'Работает уже 1 год',
              //   skills    : 'Сделает все виды маникюра, выравнивание и укрепление ногтевой пластины, классический, кислотный и спа-педикюр, дизайн (френч, аэрографию, геометрию, втирку, наклейки, несложные рисунки)'
              // },
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
              },
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
                skills    : 'Сделает все виды маникюра, выравнивание и укрепление ногтевой'
              }
            ]
          },
          hair: {
            name       : 'Steffany Hair',
            city       : 'Житомир',
            nameIn     : 'в Житомире',
            phone      : '380-67-404-19-33',
            address    : 'ул. Киевская, 77, тц "Глобал"',
            schedule   : '10:00 - 20:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.347268440734!2d28.683446015724748!3d50.26677417945044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64afc032302d%3A0xbdc1a333cb9db4e6!2sSteffany%20Hair%20Studio!5e0!3m2!1sru!2sua!4v1577383086491!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
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
                name      : 'Екатерина Бондарь',
                education : 'Парикмахер',
                experience: 'Работает уже 8 лет ',
                skills    : 'Сделает мужские и женские стрижки, окрашивание в один тон, сложные окрашивания, уход за волосами'
              }
            ]
          }
        }
      },
      ua: {
        cityName              : 'Житомир',
        cityNameIn            : 'у Житомирі',
        cityPhone             : '380-98-007-07-53',
        schedule              : '10:00 - 20:00',
        address               : 'вул. Київська, 77, тц "Глобал"',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.345216309848!2d28.6856875!3d50.2668125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9G2C7M8P%2BP7!5e0!3m2!1sru!2sua!4v1576752718526!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.zhytomyr/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/zt/{{ salon }}/salon-0.jpg',

        imagesAmount: 10,

        salons: {
          nail: {
            name       : 'Steffany Nail',
            city       : 'Житомир',
            nameIn     : 'у Житомирі',
            phone      : '380-67-404-19-33',
            address    : 'вул. Київська, 77, тц "Глобал"',
            schedule   : '9:00 - 21:00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.3732072342173!2d28.683759515257734!3d50.26628980849905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x697c4ee100bcc4de!2sSteffany%20Nail%20Studio!5e0!3m2!1sru!2sua!4v1578658568743!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
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
              //
              // {
              //   name      : 'Ольга Петрук',
              //   education : 'Майстер нігтьового сервісу',
              //   experience: 'Працює вже 1 рік',
              //   skills    : 'Зробить усі види манікюру, вирівнювання і зміцнення нігтьової пластини, класичний, кислотний і спа-педикюр, дизайн (френч, аерографію, геометрію, втирку, наклейки, нескладні малюнки)'
              // },
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
              {
                name      : 'Анастасія Грицик',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 4 років',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання і зміцнення нігтьової пластини, нарощування і корекцію нігтів, нескладний дизайн нігтів'
              },
              {
                name      : 'Ірина Демиденко',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 4 років',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання і зміцнення нігтьової пластини, нарощування нігтів, усі види дизайну нігтів, парафінотерапію для рук і ніг'
              },
              {
                name      : 'Марія Пашковська',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 2 років',
                skills    : 'Зробить усі види манікюру та педикюру, вирівнювання і зміцнення нігтьової пластини, нарощування і корекцію нігтів, дизайн (аерографію, втирку, стемпінг), парафінотерапію для рук і ніг'
              },
              {
                name      : 'Оксана Таргонська',
                education : 'Майстер нігтьового сервісу',
                experience: 'Працює вже 3 років',
                skills    : 'Зробить усі види манікюру, вирівнювання і зміцнення нігтьової пластини, нескладний дизайн (френч, стемпінг, втирку), аерографію, парафінотерапію для рук і ніг'
              }
            ]
          },
          hair: {
            name       : 'Steffany Hair',
            city       : 'Житомир',
            nameIn     : 'у Житомирі',
            phone      : '380-67-404-19-33',
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
        cityPhone             : '098-500-48-86',
        schedule              : '9-00 - 20-00',
        address               : 'ул. Киевская, 4',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5063.141381159588!2d26.2695245!3d50.6165144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabee90f50ee94b45!2sSteffany%20Nails%20and%20Cosmetology!5e0!3m2!1sru!2sua!4v1577383431739!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rv/{{ salon }}/salon-0.jpg',

        imagesAmount: 6,
        salons      : {
          salon: {
            name       : 'Steffany Nails & Cosmetology',
            city       : 'Ровно',
            nameIn     : 'в Ровно',
            phone      : '098-500-48-86',
            address    : 'ул. Киевская, 4',
            schedule   : '9-00 - 20-00',
            map        : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5063.141381159588!2d26.2695245!3d50.6165144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabee90f50ee94b45!2sSteffany%20Nails%20and%20Cosmetology!5e0!3m2!1sru!2sua!4v1577383431739!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
            instagram  : 'https://www.instagram.com/steffany.rivne/?hl=ru',
            facebook   : 'https://www.facebook.com/steffany.ua/',
            specialists: [
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
            ]
          }
        }
      },
      ua: {
        cityName              : 'Рівне',
        cityNameIn            : 'в Рівному',
        cityPhone             : '098-500-48-86',
        schedule              : '9-00 - 20-00',
        address               : 'вул. Київська, 4',
        cityMap               : '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5063.141381159588!2d26.2695245!3d50.6165144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabee90f50ee94b45!2sSteffany%20Nails%20and%20Cosmetology!5e0!3m2!1sru!2sua!4v1577383431739!5m2!1sru!2sua" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>',
        cityInstagram         : 'https://www.instagram.com/steffany.rivne/?hl=ru',
        cityFacebook          : 'https://www.facebook.com/steffany.ua/',
        imageAboutStaffanyPage: 'assets/img/about-steffany-salon/rv/{{ salon }}/salon-0.jpg',

        imagesAmount: 6,
        salons      : {
          salon: {
            name       : 'Steffany Nail & Cosmetology',
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
              }
            ]
          }
        }
      }

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
          gcw = d.createElement(s)
      gcw.type = 'text/javascript'
      gcw.async = true
      gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js'
      var sn = d.getElementsByTagName(s)[0]
      sn.parentNode.insertBefore(gcw, sn)
    }
  }
  window.nav = {
    zt: {
      ru: 'beauty/{{ page }}',
      ua: 'beauty/ua/{{ page }}'
    },
    rv: {
      ru: 'beauty/rv/{{ page }}',
      ua: 'beauty/rv/ua/{{ page }}'
    }
  }
  let localization = location.pathname.split('/').find(function (loc) {
    return loc === 'ua'
  }) || 'ru'
  let carouselsHTML = null
  let salon = localStorage.getItem('salon') || ''
  const urlCity      = location.pathname.slice(1).split('/')[1],
        filteredCity = ['rv'].find(city => city === urlCity) || 'zt'
  // let city = localStorage.getItem('city')
  let city = filteredCity
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
    $('header [data-not-available-rovno]').remove()
    $('[data-not-available-rovno] a.btn-callback').remove()
  }

  if (salon !== 'salon') {
    if (salon === 'nail') {
      console.log('nail')
      $('[data-remove-nail]').remove()
    }
    if (salon === 'hair') {
      $('[data-remove-hair]').remove()
    }
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
    if ($('.video-slider')[0]) initCarousels()
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
        console.log(_h, page, localization, city)
        // const localization = location.pathname.slice(1).split('/').includes('ua') ? 'ua' : 'ru'
        // console.log('Redirect to: ', nav[city][localization].replace('{{ page }}', page))
        const link = nav[city][localization].replace('{{ page }}', page)
        location.pathname = '/' + link
      }
    })
  }

  if (document.querySelector('a.nav-link-text')) {
    initCities()
  }
})
