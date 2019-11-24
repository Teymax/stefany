$(document).ready(function () {
  const citiesData = {
    zt: {
      ru: {
        cityName: 'Житомир',
        address: 'ул. Киевская, 84',
        images: [
          {
            img: 'assets/img/about-steffany-zt/video-slider-0.jpg',
            img2x: 'assets/img/about-steffany-zt/video-slider-01@2x.jpg 2x'
          }
        ]
      }
    },
    if: {
      ru: {
        cityName: 'Ивано-Франковск',
        address: 'ул. Ивана Франка, 25'
      }
    },
    lutsk: {
      ru: {
        cityName: 'Луцк',
        address: 'пр. Воли, 10'
      }
    },
    lviv: {
      ru: {
        cityName: 'Львов',
        address: 'ул. Гулака-Артемовского, 2'
      }
    },
    rovno: {
      ru: {
        cityName: 'Ровно',
        address: 'ул. Киевская, 4'
      }
    }
  };

  let localization = 'ru';
  let city = localStorage.getItem('city') || null;
  if (city) {
    changeDataForCity();
  }

  function changeDataForCity() {
    // #cityHeader .city-dynamic content
    // #telephoneHeader .telephone-dynamic href + content
    // #cityFooter .city-dynamic
    // #telephoneFooter .telephone-dynamic
    // #fbFooter .fb-dynamic href
    // #instFooter .instDynamic href
    // $('.city-dynamic').each(node => node.innerText = citiesData[city][localization].address);

    $('.city-dynamic').each(function(e) {
      this.innerText = citiesData[city][localization].cityName;
    });

    $('.address-dynamic').each(function(e) {
      this.innerText = citiesData[city][localization].address;
    });
  }

  function changeImages() {
    let imagesContainerVideo = $('.video-silder-dots');
    if (imagesContainerVideo) {
      $('.video-slider-img').each(function(e) {
        let pos = this.dataset.pos;
        this.src = `assets/img/about-steffany-zt/video-slider-${pos}.jpg`;
        this.srcset = `assets/img/about-steffany-zt/video-slider-${pos}@2x.jpg 2x`;
        // img: 'assets/img/about-steffany-zt/video-slider-0.jpg',
        //   img2x: 'assets/img/about-steffany-zt/video-slider-01@2x.jpg 2x'
        // this.src = images[pos].img;
        // this.srcset = images[pos].img2;
      });
    }

  }

  function initCities() {
    city = localStorage.getItem('city');
    $(document).click(function (e) {
      let closestDropdown = e.target.closest('.select-city-dropdown')
      if(closestDropdown) {
        city = e.target.dataset.city;
        localStorage.setItem('city', city);
        changeDataForCity();
        // changeImages();
      }
    });
  }

  initCities()
})

/*
const towns = {
  zt  : {
    ua: {
      rest   : {
        kiev: 'Київ',
        if  : 'Івано-Франківськ'
      },
      current: 'Житомир'
    },
    ru: {
      rest   : {
        kiev: 'Киев',
        if  : 'Ивано-Франковск'
      },
      current: 'Житомир'
    }
  },
  kiev: {
    ua: {
      rest   : {
        zt: 'Житомир',
        if: 'Івано-Франківськ'
      },
      current: 'Київ'
    },
    ru: {
      rest   : {
        zt: 'Житомир',
        if: 'Ивано-Франковск'
      },
      current: 'Киев'
    }
  },
  if  : {
    ua: {
      rest   : {
        zt  : 'Житомир',
        kiev: 'Київ'
      },
      current: 'Івано-Франківськ'
    },
    ru: {
      rest   : {
        zt  : 'Житомир',
        kiev: 'Киев'
      },
      current: 'Ивано-Франковск'
    }
  }
}
*/