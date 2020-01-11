$(document).ready(() => {
  $('body').on('click', e => {
    if (e.target.id === 'mobTrigger') {
      document.querySelector('#selectCityDropdownHeader1').style.cssText += 'display: block !important;'
    }
    else {
      document.querySelector('#selectCityDropdownHeader1').style.cssText += 'display: none !important;'
    }
  })
  const _toggleMenu = disable => {
    if (disable) {
      document.querySelector('html').style.overflowX = 'auto'
      document.querySelector('body').style.position = 'initial'
    }
    else {
      document.querySelector('html').style.overflowX = 'hidden'
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
    } else {
      $('#selectCityDropdownHeader2')[0].style.cssText = 'display: block !important;'
      $('#specArrow')[0].style.transform = 'rotate(180deg)'
    }
  })
})
