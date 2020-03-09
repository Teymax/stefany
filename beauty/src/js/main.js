const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
const bearer_token = 'f5wujgx5yn6cagtk9fg2'
const partnerId = 72145
const managerId = 791383
let servicesArr = []
const cities = {
  zt: 'Житомир',
  rv: 'Ровно'
}
window.mail = {
  Host    : 'smtp.gmail.com',
  Username: 'uasteffany@gmail.com',
  Password: 'uasteffany12345',
  To      : 'info@steffany.ua'
}

window.serviceId = 2495961
window.serviceText = ''
$(function () {
  $('img').Lazy()
})

// const writeClient = (time, data) => {
//   var bearer_token = 'f5wujgx5yn6cagtk9fg2'
//   var headers = {
//     'Content-Type' : 'application/json',
//     'Authorization': 'Bearer ' + bearer_token
//   }
//   var payload = {
//     'phone'       : data.phone,
//     'fullname'    : data.name,
//     'email'       : data.email,
//     'comment'     : window.serviceText + ' ' + cities[localStorage.getItem('city')],
//     'appointments': [
//       {
//         'id'      : new Date().getTime(),
//         'services': [window.serviceId],
//         'staff_id': managerId,
//         'datetime': time
//       }
//     ]
//   }
//
//   $('.modal').modal('hide')
//   $('#thanksPopup').modal('show')
//   $('.modal form input[type="tel"]').val('')
//   $('.modal form input[type="text"]').val('')
//   $('.modal form input[type="email"]').val('')
//
//
//   fetch('https://api.yclients.com/api/v1/book_record/' + partnerId, {
//     method: 'POST',
//     body  : JSON.stringify(payload),
//     headers
//   })
//     .then(response => response.json())
//     .then(response => {
//       console.log(response)
//     })
// }

function sendEmail(details) {
  Email.send(
    {
      ...mail,
      ...details
    }).then(
    res => console.log(res),
    rej => console.log("ERROR:", rej)
  )

}

function closeAllModals() {
  setTimeout(() => {
    $('.modal').modal('hide')
  }, 3000)
}

$(document).ready(function () {
  $('.close-pp-btn').on('click', e => $('.modal').modal('hide'))
  
  $('[type="tel"]').mask('+38-(000)-000-00-00')
  
  $('.btn-callback').on('click', e => {
    if (e.target.dataset.serviceId) {
      window.serviceText = e.target.dataset.serviceId
    }
  })
  
  function scrollToAnchor(aid) {
    var aTag = $('[data-anchor=\'' + aid + '\']')
    $('html,body').animate({scrollTop: aTag.offset().top}, 'slow')
  }
  
  $('[data-anchor-link]').on('click', e => {
    const t      = e.target,
          anchor = t.dataset.anchorLink
    scrollToAnchor(anchor)
  })
  
  $('#sendMail').on('click', _ => {
    $('.feedback-form').submit()
  })
  
  $('.feedback-form').on('submit', e => {
    e.preventDefault()
    if ($('.feedback-form')[0].checkValidity()) {
      sendEmail( {
        Subject: 'Обратная связь',
        From   : $('.feedback-form input[type="email"]').val(),
        Body   : `Имя: ${$('.feedback-form input[type="text"]').val()}<br>Email: ${$('.feedback-form input[type="email"]')
          .val()}<br>Телефон: ${$('.feedback-form input[type="tel"]').val()}<br>Сообщение: ${$(
          '.feedback-form textarea')
          .val()}`
      })
      $('.feedback-form input[type="email"]').val('')
      $('.feedback-form input[type="text"]').val('')
      $('.feedback-form input[type="tel"]').val('')
      $('.feedback-form textarea').val('')
      $('#thanksPopup').modal('show')
      closeAllModals()
    }
    else {
      $('.feedback-form')[0].reportValidity()
    }
  })
  
  function _bookRecord() {
    var bearer_token = 'f5wujgx5yn6cagtk9fg2'
    var date = new Date()
    // Change

    // date.setDate(date.getDate() + 1)
    // var dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    // var url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString + '?service_ids=' + serviceId

    // var headers = {
    //   'Content-Type' : 'application/json',
    //   'Authorization': 'Bearer ' + bearer_token
    // }
    //
    // fetch(url, {
    //   method: 'GET',
    //   headers
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     if (response.length) {
    //       writeClient(response[0].datetime, payload)
    //     }
    //     else {
    //
    //     }
    //   })
  }
  let formForSend = document.querySelector('.modal form');
  formForSend.addEventListener('submit', e => {
    e.preventDefault()
    var payload = {
      'phone': $('.modal form input[type="tel"]').val(),
      'name' : $('.modal form input[type="text"]').val(),
      'email': $('.modal form input[type="email"]').val()
    }
    let det = {

      Subject: 'Запись',
      From   : payload.email,
      Body:
        `Имя: ${payload.name}
      <br>Email: ${payload.email}
      <br>Телефон:  ${payload.phone}
      <br>Услуги:  ${serviceId}
      <br>Город:  ${cities[localStorage.getItem('city')]}`
    }
    console.log(det)
    sendEmail(det)
    $('.modal form input[type="tel"]').val('')
    $('.modal form input[type="text"]').val('')
    $('.modal form input[type="email"]').val('')
    $('.modal').modal('hide')
    $('#thanksPopup').modal('show')
  });
  // $('.modal form').on('submit', e => {
  //   e.preventDefault()
  //   var payload = {
  //     'phone': $('.modal form input[type="tel"]').val(),
  //     'name' : $('.modal form input[type="text"]').val(),
  //     'email': $('.modal form input[type="email"]').val()
  //   }
  //   console.log(payload)
  //   sendEmail( {
  //
  //     Subject: 'Запись',
  //     From   : payload.email,
  //     Body:
  //       `Имя: ${payload.name}
  //     <br>Email: ${payload.email}
  //     <br>Телефон:  ${payload.phone}
  //     <br>Услуги:  ${serviceId}
  //     <br>Город:  ${cities[localStorage.getItem('city')]}`
  //   })
  //    $('.modal form input[type="tel"]').val('')
  //   $('.modal form input[type="text"]').val('')
  //    $('.modal form input[type="email"]').val('')
  //   $('.modal').modal('hide')
  //   $('#thanksPopup').modal('show')
  //
  //   // getBookTime([serviceId], 0, _bookRecord)
  //   // var bearer_token = 'f5wujgx5yn6cagtk9fg2'
  //   // var date = new Date()
  //   // // Change
  //   // var payload = {
  //   //   'phone': $('.modal form input[type="tel"]').val(),
  //   //   'name' : $('.modal form input[type="text"]').val(),
  //   //   'email': $('.modal form input[type="email"]').val()
  //   // }
  //   // date.setDate(date.getDate() + 1)
  //   // var dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  //   // var url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString + '?service_ids=' + serviceId
  //   //
  //   // $('#callbackModal').modal('hide')
  //   //
  //   // $('#thanksPopup').modal('show')
  //   //
  //   // $('#consultPhone').val('')
  //   // $('#consultName').val('')
  //   // $('#consultEmail').val('')
  //   //
  //   // var headers = {
  //   //   'Content-Type' : 'application/json',
  //   //   'Authorization': 'Bearer ' + bearer_token
  //   // }
  //   //
  //   // fetch(url, {
  //   //   method: 'GET',
  //   //   headers
  //   // })
  //   //   .then(response => response.json())
  //   //   .then(response => {
  //   //     if (response.length) {
  //   //       console.log(response)
  //   //       writeClient(response[0].datetime, payload)
  //   //     } else {
  //   //
  //   //     }
  //   //   })
  //
  //   // request.done(function (msg) {
  //   //   console.log(msg);
  //   //   writeClient(msg[0].datetime, payload)
  //   // })
  //   //
  //   // request.fail(function (jqXHR, textStatus) {
  //   //   // handle
  //   // })
  //   // $('.modal').modal('hide')
  //   // $('#thanksPopup').modal('show')
  //
  // })
  let btnForSend = document.querySelector('.modal form .btn-callback');
  btnForSend.addEventListener('click', () => {
    let inputForSend = document.querySelector('.modal form input[type="submit"]');
    inputForSend.click();
  });

  // $('.modal form .btn-callback').on('click', () => {
  //   $('.modal form input[type="submit"]').click()
  // })
  
  $('.city-trigger').click(function (e) {
    e.preventDefault()
    var city = '.' + $(this).attr('data-city')
    $('.city-trigger').removeClass('active')
    $('.city-item').removeClass('city-active')
    $(this).addClass('active')
    $(city).addClass('city-active')
  })
  
  
  $('.city-trigger').click(function (e) {
    e.preventDefault()
    var city = '.' + $(this).attr('data-city')
    $('.city-trigger').removeClass('active')
    $('.city-item').removeClass('city-active')
    $(this).addClass('active')
    $(city).addClass('city-active')
  })
  const _toggleMenu = (ta, of) => {
    document.querySelector('html').style.touchAction = ta
    document.querySelector('html').style.overflowY = of
  }
  $('.menu-trigger').click(function (e) {
    $(this).toggleClass('open')
    this.classList.contains('open') ? _toggleMenu('none', 'hidden') : _toggleMenu('initial', 'initial')
    $('header').toggleClass('open')
    $('body').toggleClass('fixed')
  })
  
  $('body').click(function (event) {
    var t = event.target
    
    if (t.hasAttribute('data-role') && t.dataset.role === 'href') {
      location.href = t.dataset.link
    }
    
    var dropMenuClosest = t.closest('.drop-menu')
    if (dropMenuClosest) {
      $('.drop-menu').not(dropMenuClosest).removeClass('open')
      dropMenuClosest.classList.toggle('open')
    }
    else {
      $('.drop-menu').removeClass('open')
    }
  })
  
  $('.questions-item, .program-item .collapse, .program-item  .collapse').on('show.bs.collapse', function () {
    $(this).closest('.questions-item, .program-item').addClass('active')
  })
  
  $('.questions-item, .program-item .collapse, .program-item  .collapse').on('hide.bs.collapse', function () {
    $(this).closest('.questions-item, .program-item').removeClass('active')
  })
  
  $('.questions-item, .program-item').each(function (el) {
    if ($(this).find('.collapse-answer').hasClass('show') == true) {
      $(this).addClass('active')
    }
  })
  
  $('.diploma-slider').owlCarousel(
    {
      loop      : true,
      margin    : 35,
      nav       : false,
      dots      : true,
      responsive: {
        0  : {
          items: 1
        },
        575: {
          items: 2
        },
        993: {
          items: 4
        }
      }
    })
  
  $('.specialists-slider').owlCarousel(
    {
      loop      : true,
      margin    : 20,
      nav       : true,
      dots      : false,
      responsive: {
        0  : {
          items: 1
        },
        575: {
          items: 2
        },
        993: {
          items: 4
        }
      }
    })
  
  var videoSLider = $('.video-slider').owlCarousel(
    {
      loop         : false,
      margin       : 0,
      nav          : false,
      dots         : false,
      items        : 1,
      dotsContainer: '.video-slider-dots',
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
    videoSLider.trigger('to.owl.carousel', [itemPosition, 300])
  })
  
  var videoSliderDots = $('.video-slider-dots').owlCarousel(
    {
      navContainer: '.video-nav-slider-dots',
      loop        : false,
      margin      : 0,
      nav         : true,
      dots        : false,
      items       : 1
    })
  
  $('.video-nav-slider-dots .owl-next').click(function () {
    videoSliderDots.trigger('next.owl.carousel')
  })
  
  $('.video-nav-slider-dots .owl-prev').click(function () {
    videoSliderDots.trigger('prev.owl.carousel', [300])
  })
  
})

function ajax(method, headers, url, params, callback) {
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      callback(xmlhttp.responseText)
    }
  }
  xmlhttp.open(method, url, true/*, login, password*/)
  for (let key in headers) {
    xmlhttp.setRequestHeader(key, headers[key])
  }
  xmlhttp.send(JSON.stringify(params))
}

function getData(data) {
  let answer
  // try {
  answer = JSON.parse(data)
  // } catch (err) {
  //   return {error: err.message, status: answer['errors']['code']};
  // }
  if (answer['errors']) {
    if (answer['errors'].length > 1) {
      return {
        error : answer['errors'][0]['message'],
        status: answer['errors'][0]['code']
      }
    }
    else {
      return {
        error : answer['errors']['message'],
        status: answer['errors']['code']
      }
    }
  }
  return answer
}

function processErrors(data) {
  let msg
  if (!data._error) return false
  msg = data._error.message
  
  alert(msg)
  return true
}

function getBookTime(services, plusDate = 0, callbackFunction, callbackParams = []) {
  let date = new Date()
  if (plusDate > 0) date.setDate(date.getDate() + plusDate)
  let dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) :
                   date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
  
  let url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString
  url += services ? ('?service_ids=' + encodeURIComponent(services.join(','))) : ''
  let headers = {
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer ' + bearer_token
  }
  ajax('GET', headers, url, null, function (data) {
    let dataArr = getData(data)
    if (processErrors(dataArr)) return alert('Error')
    if (dataArr.length < services.length) {
      return getBookTime(services, ++plusDate, callbackFunction, callbackParams)
    }
    else {
      callbackParams.push(dataArr[0].datetime)
      callbackFunction(...callbackParams)
    }
  })
}

function getServices() {
  let headers = {
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer ' + bearer_token
  }
  ajax('GET', headers, 'https://api.yclients.com/api/v1/book_services/' + partnerId + '?staff_id='
                       + managerId, null)
}

function bookRecord(name, email, phone, comment, services, managerId, city, datetime) {
  let headers = {
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer ' + bearer_token
  }
  
  let date = new Date()
  let userParams = {
    'phone'       : phone,
    'fullname'    : name,
    'email'       : email,
    'comment'     : comment + ' ' + city,
    'appointments': [
      {
        'id'      : date.getTime(),
        'services': services,
        'staff_id': managerId,
        'datetime': datetime
      }
    ]
  }
  ajax('POST', headers, 'https://api.yclients.com/api/v1/book_record/' + partnerId, userParams,
    function (data) {
      let err = processErrors(getData(data))
      if (servicesArr.length === 0) {
        getServices()
      }
      else if (!err) {
        // $('#sendComplex').modal('hide');
        $('.modal').modal('hide')
        // $('#modalServiceListSinugUp').modal('hide');
        $('#thanksPopup').modal('show')
      }
    })
}
