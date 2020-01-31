$(document).ready(() => {
  $('.sub-menu-trigger').on('click', e => {
    $(e.target).toggleClass('triggered')
    $(e.target).children('ul').toggleClass('open')
  })
  
  $('.redirectBtn .btn-callback').on('click', e => {
  
  })
  $('[data-city]').on('click', e => {
    if (e.target.dataset.changeSalon) {
      localStorage.setItem('salon', e.target.dataset.changeSalon)
    }
    const city = e.target.dataset.city
    const _h   = location.pathname.slice(1).split('/'),
          page = _h[_h.length - 1]
    const paths = {
      zt: {
        ru: '/lazernaya-epilyatsiya/salon',
        ua: '/lazernaya-epilyatsiya/ua/salon'
      },
      rv: {
        ru: '/lazernaya-epilyatsiya/{{ city }}/salon',
        ua: '/lazernaya-epilyatsiya/{{ city }}/ua/salon'
      },
      lv: {
        ru: '/lazernaya-epilyatsiya/{{ city }}/salon',
        ua: '/lazernaya-epilyatsiya/{{ city }}/ua/salon'
      },
      lt: {
        ru: '/lazernaya-epilyatsiya/{{ city }}/salon',
        ua: '/lazernaya-epilyatsiya/{{ city }}/ua/salon'
      },
      if: {
        ru: '/lazernaya-epilyatsiya/{{ city }}/salon',
        ua: '/lazernaya-epilyatsiya/{{ city }}/ua/salon'
      }
    }
    console.log(_h, page, localization, city)
    const link = paths[city][localization].replace('{{ city }}', city)
    location.pathname = link
  })
  $('body').on('click', e => {
    if (e.target.id === 'mobTrigger') {
      document.querySelector('#selectCityDropdownHeader1').style.cssText += 'display: block !important;'
    }
    else if (e.target.dataset.city || e.target.id === 'cityHeader1') {
    
    }
    else {
      document.querySelector('#selectCityDropdownHeader1').style.cssText += 'display: none !important;'
      $('#selectCityDropdownHeader2')[0].style.cssText = ''
      $('#specArrow')[0].style.transform = ''
    }
  })
  const _toggleMenu = disable => {
    if (disable) {
      document.querySelector('html').style.overflowX = 'auto'
      document.querySelector('html').style.overflowY = 'auto'
      document.querySelector('body').style.position = 'initial'
      document.querySelector('#bingc-phone-button').style.opacity = 1
      document.querySelector('jdiv:not([class]):not([id])').style.opacity = 1
    }
    else {
      document.querySelector('html').style.overflowX = 'hidden'
      document.querySelector('html').style.overflowY = 'hidden'
      document.querySelector('body').style.position = 'relative'
      document.querySelector('#bingc-phone-button').style.opacity = 0
      document.querySelector('jdiv:not([class]):not([id])').style.opacity = 0
    }
  }
  
  $('.menu-trigger').click(function (e) {
    this.classList.contains('open') ? _toggleMenu(true) : _toggleMenu(false)
  })
  
  $('#cityHeader1').on('click', e => {
    if ($('#selectCityDropdownHeader2')[0].style.cssText) {
      $('#selectCityDropdownHeader2')[0].style.cssText = ''
      $('#specArrow')[0].style.transform = ''
    }
    else {
      $('#selectCityDropdownHeader2')[0].style.cssText = 'display: block !important;'
      $('#specArrow')[0].style.transform = 'rotate(180deg)'
    }
  })
})
