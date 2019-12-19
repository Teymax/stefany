const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
const bearer_token = 'f5wujgx5yn6cagtk9fg2';
const partnerId = 72145;
const managerId = 791383;
let servicesArr = [];
window.serviceId = 2495961

const writeClient = (time, data) => {
  var bearer_token = 'f5wujgx5yn6cagtk9fg2'
  var headers = {
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + bearer_token
  }
  var payload = {
    'phone':        data.phone,
    'fullname':     data.name,
    'email':        data.email,
    'appointments': [
      {
        'id':       new Date().getTime(),
        'services': [serviceId],
        'staff_id': managerId,
        'datetime': time
      }
    ]
  }
  var request = $.ajax({
                         url:     'https://api.yclients.com/api/v1/book_record/' + partnerId,
                         type:    'POST',
                         data:    JSON.stringify(payload),
                         headers: headers
                       })

  request.done(function (msg) {
  })

  request.fail(function (jqXHR, textStatus) {
  })
}

$(document).ready(function () {
  $('[type="tel"]').mask('+38-(000)-000-00-00')

  $('.btn-callback').on('click', e => {
    // if(e.target.dataset.serviceId)
    //   window.serviceId = +e.target.dataset.serviceId
    // console.log(window.serviceId)
  })

  // console.log(location.pathname.includes('service'));

  $('.modal form').on('submit', e => {
    e.preventDefault()
    // getBookTime([serviceId], 0, bookRecord)
    e.preventDefault()
    var bearer_token = 'f5wujgx5yn6cagtk9fg2'
    var date = new Date()
    var payload = {
      'phone': '380960000000',
      'name':  'Oleg',
      'email': 'qwe@qwe.qwe'
    }
    date.setDate(date.getDate() + 1)
    var dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    var url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString + '?service_ids=' + serviceId

    $('#callbackModal').modal('hide')

    $('#thanksPopup').modal('show')

    $('#consultPhone').val('')
    $('#consultName').val('')
    $('#consultEmail').val('')

    var headers = {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + bearer_token
    }
    // var request = $.ajax(
    //   {
    //     url:     url,
    //     type:    'GET',
    //     headers: headers
    //   })

    fetch(url, {
      method: 'GET',
      headers
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })

    // request.done(function (msg) {
    //   console.log(msg);
    //   writeClient(msg[0].datetime, payload)
    // })
    //
    // request.fail(function (jqXHR, textStatus) {
    //   // handle
    // })
    // $('.modal').modal('hide')
    // $('#thanksPopup').modal('show')

  })

  $('.modal form .btn-callback').on('click', _ => {
    $('.modal form input[type="submit"]').click()
  })

	$('.city-trigger').click(function(e){
		e.preventDefault();
		var city = '.' + $(this).attr('data-city');
    $('.city-trigger').removeClass('active');
    $('.city-item').removeClass('city-active');
    $(this).addClass('active');
    $(city).addClass('city-active');
  });

  $('.menu-trigger').click(function (e) {
    $(this).toggleClass('open');
    $('header').toggleClass('open');
    $('body').toggleClass('fixed');
  });

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
  });

  $('.questions-item, .program-item .collapse, .program-item  .collapse').on('hide.bs.collapse', function () {
    $(this).closest('.questions-item, .program-item').removeClass('active')
  });

  $('.questions-item, .program-item').each(function (el) {
    if ($(this).find('.collapse-answer').hasClass('show') == true) {
      $(this).addClass('active')
    }
  });

  $('.diploma-slider').owlCarousel(
    {
      loop:       true,
      margin:     35,
      nav:        false,
      dots:       true,
      responsive: {
        0:   {
          items: 1
        },
        575: {
          items: 2
        },
        993: {
          items: 4
        }
      }
    });

  $('.specialists-slider').owlCarousel(
    {
      loop:       true,
      margin:     20,
      nav:        true,
      dots:       false,
      responsive: {
        0:   {
          items: 1
        },
        575: {
          items: 2
        },
        993: {
          items: 4
        }
      }
    });

  var videoSLider = $('.video-slider').owlCarousel(
    {
      loop:          false,
      margin:        0,
      nav:           false,
      dots:          false,
      items:         1,
      dotsContainer: '.video-slider-dots',
      responsive:    {
        0:    {
          nav: true
        },
        541:  {
          nav: false
        },
        1200: {
          nav: false
        }
      }
    });

  $('.video-slider-dots .owl-dot').click(function (e) {
    e.preventDefault()
    var itemPosition = $(this).attr('data-pos');
    videoSLider.trigger('to.owl.carousel', [itemPosition, 300]);
  });

  var videoSliderDots = $('.video-slider-dots').owlCarousel(
    {
      navContainer: '.video-nav-slider-dots',
      loop:         false,
      margin:       0,
      nav:          true,
      dots:         false,
      items:        1
    });

  $('.video-nav-slider-dots .owl-next').click(function () {
    videoSliderDots.trigger('next.owl.carousel');
  })

  $('.video-nav-slider-dots .owl-prev').click(function () {
    videoSliderDots.trigger('prev.owl.carousel', [300]);
  })

});

function ajax(method, headers, url, params, callback) {
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      callback(xmlhttp.responseText);
    }
  };
  xmlhttp.open(method, url, true/*, login, password*/);
  for (let key in headers) {
    xmlhttp.setRequestHeader(key, headers[key])
  }
  xmlhttp.send(JSON.stringify(params));
}

function getData(data) {
  let answer;
  // try {
  answer = JSON.parse(data);
  // } catch (err) {
  //   return {error: err.message, status: answer['errors']['code']};
  // }
  if (answer['errors']) {
    if (answer['errors'].length > 1) return {
      error:  answer['errors'][0]['message'],
      status: answer['errors'][0]['code']
    };
    else return {
      error:  answer['errors']['message'],
      status: answer['errors']['code']
    };
  }
  return answer;
}

function processErrors(data) {
  let msg;
  if (!data._error) return false;
  msg = data._error.message;

  alert(msg)
  return true;
}

function getBookTime(services, plusDate = 0, callbackFunction, callbackParams) {
  let date = new Date();
  if (plusDate > 0) date.setDate(date.getDate() + plusDate);
  let dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) :
                                               date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

  let url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString;
  url += services ? ('?service_ids=' + encodeURIComponent(services.join(','))) : '';
  let headers = {
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + bearer_token
  };
  ajax('GET', headers, url, null, function (data) {
    let dataArr = getData(data);
    if (processErrors(dataArr)) return alert('Error');
    if (dataArr.length < services.length) return getBookTime(services, ++plusDate, callbackFunction, callbackParams);
    else {
      callbackParams.push(dataArr[0].datetime);
      callbackFunction(...callbackParams)
    }
  });
}

function getServices() {
  let headers = {
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + bearer_token
  };
  ajax('GET', headers, 'https://api.yclients.com/api/v1/book_services/' + partnerId + '?staff_id='
    + managerId, null);
}

function bookRecord(name, email, phone, comment, services, managerId, city, datetime) {
  let headers = {
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + bearer_token
  };

  let date = new Date();
  let userParams = {
    'phone':        phone,
    'fullname':     name,
    'email':        email,
    'comment':      comment + ' ' + city,
    'appointments': [
      {
        'id':       date.getTime(),
        'services': services,
        'staff_id': managerId,
        'datetime': datetime
      }
    ]
  };
  ajax('POST', headers, 'https://api.yclients.com/api/v1/book_record/' + partnerId, userParams,
       function (data) {
         let err = processErrors(getData(data));
         if (servicesArr.length === 0) {
           getServices();
         }
         else if (!err) {
           // $('#sendComplex').modal('hide');
           $('.modal').modal('hide')
           // $('#modalServiceListSinugUp').modal('hide');
           $('#thanksPopup').modal('show');
         }
       });
}
