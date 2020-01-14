$(document).ready(() => {
  $('.sub-menu-trigger').on('click', e => {
    $(e.target).toggleClass('triggered')
    $(e.target).children('ul').toggleClass('open')
  })
  $('.redirectBtn .btn-callback').on('click', e => {
  
  })
  $('[data-city]').on('click', e => {
    const city = e.target.dataset.city
    // localStorage.setItem('city', city)
    // changeDataForCity()
    const _h   = location.pathname.slice(1).split('/'),
          page = _h[_h.length - 1]
    // console.log('Redirect to: ', nav[city].replace('{{ page }}', page))
    const localization = location.pathname.slice(1).split('/').includes('ua') ? 'ua' : 'ru'
    const link = nav[city][localization].replace('{{ page }}', page)
    location.pathname = '/' + link
  })
  $('body').on('click', e => {
    console.log(e.target)
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
    // document.querySelector('html').style.touchAction = ta
    // document.querySelector('html').style.overflowY = of
    if (disable) {
      document.querySelector('html').style.overflowX = 'auto'
      document.querySelector('html').style.overflowY = 'auto'
      document.querySelector('body').style.position = 'initial'
      
    }
    else {
      document.querySelector('html').style.overflowX = 'hidden'
      document.querySelector('html').style.overflowY = 'hidden'
      document.querySelector('body').style.position = 'relative'
    }
  }
  
  $('.menu-trigger').click(function (e) {
    console.log(this.classList.contains('open'))
    this.classList.contains('open') ? _toggleMenu(true) : _toggleMenu(false)
  })
  
  $('#cityHeader1').on('click', e => {
    // $('#selectCityDropdownHeader2')[0].style.cssText += 'display: block !important;'
    console.log($('#selectCityDropdownHeader2')[0].style.cssText)
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
