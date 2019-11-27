window.mail = {
  Host    : 'smtp.gmail.com',
  Username: 'four.progs@gmail.com',
  Password: 'Htndeth0614',
  To      : 'help@steffany.ua',
  From    : 'help@steffany.ua'
}

$( document ).ready( function () {
  const callbackForm = $( '#callbackModal form' )[ 0 ],
        callbackBtn  = $( '[data-call-day-callback-btn]' )

  callbackBtn.on( 'click', e => {
    e.stopPropagation()
    e.preventDefault()
    $( '[data-call-day-sub-btn]' ).click()
  } )

  callbackForm.addEventListener( 'submit', e => {
    e.preventDefault()
    e.stopPropagation()
    console.log( 'sub' )
    var bearer_token = 'f5wujgx5yn6cagtk9fg2'
    var partnerId = 240913
    var managerId = 823619
    var date = new Date()
    var payload = {
      'phone': $( '#consultPhone' ).val(),
      'name' : $( '#consultName' ).val(),
      'email': $( '#consultEmail' ).val()
    }
    date.setDate( date.getDate() + 1 )
    var dateString = date.getFullYear() + '-' + ( ( date.getMonth() ) + 1 < 10 ? '0' + ( date.getMonth() + 1 ) : date.getMonth() + 1 ) + '-' + ( date.getDate() < 10 ? '0' + date.getDate() : date.getDate() )
    var url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString + '?service_ids=3354786'

    $( '#callbackModal' ).modal( 'hide' )

    $( '#thanksPopup' ).modal( 'show' )

    var headers = {
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + bearer_token
    }
    var request = $.ajax( {
      url    : url,
      type   : 'GET',
      headers: headers
    } )

    request.done( function ( msg ) {
      console.log( 'Time: ', msg[ 0 ].datetime )
      writeClient( msg[ 0 ].datetime, payload )
    } )

    request.fail( function ( jqXHR, textStatus ) {
      alert( 'Request failed: ' + textStatus )
    } )
  } )

  $( '#carouselExample' ).on( 'slide.bs.carousel', function ( e ) {
    var $e = $( e.relatedTarget )
    var idx = $e.index()
    var itemsPerSlide = 4
    var totalItems = $( '.carousel-item' ).length
    if ( idx >= totalItems - ( itemsPerSlide - 1 ) ) {
      var it = itemsPerSlide - ( totalItems - idx )
      for ( var i = 0; i < it; i++ ) {
        // append slides to end
        if ( e.direction == 'left' ) {
          $( '.carousel-item' ).eq( i ).appendTo( '.carousel-inner' )
        } else {
          $( '.carousel-item' ).eq( 0 ).appendTo( '.carousel-inner' )
        }
      }
    }

  } )


  $( '.city-trigger' ).click( function ( e ) {
    e.preventDefault()
    var city = '.' + $( this ).attr( 'data-city' )
    $( '.city-trigger' ).removeClass( 'active' )
    $( '.city-item' ).removeClass( 'city-active' )
    $( this ).addClass( 'active' )
    $( city ).addClass( 'city-active' )
  } )

  $( '.menu-trigger' ).click( function ( e ) {
    $( this ).toggleClass( 'open' )
    $( 'header' ).toggleClass( 'open' )
  } )

  $( 'body' ).click( function ( event ) {
    var t = event.target

    if ( t.hasAttribute( 'data-role' ) && t.dataset.role === 'href' ) {
      location.href = t.dataset.link
    }

    var dropMenuClosest = t.closest( '.drop-menu' )
    if ( dropMenuClosest ) {
      $( '.drop-menu' ).not( dropMenuClosest ).removeClass( 'open' )
      dropMenuClosest.classList.toggle( 'open' )
    } else {
      $( '.drop-menu' ).removeClass( 'open' )
    }
  } )

  $( '.questions-item, .program-item .collapse, .program-item  .collapse' )
    .on( 'show.bs.collapse', function () {
      $( this ).closest( '.questions-item, .program-item' ).addClass( 'active' )
    } )

  $( '.questions-item, .program-item .collapse, .program-item  .collapse' )
    .on( 'hide.bs.collapse', function () {
      $( this ).closest( '.questions-item, .program-item' )
               .removeClass( 'active' )
    } )

  $( '.questions-item, .program-item' ).each( function ( el ) {
    if ( $( this ).find( '.collapse-answer' ).hasClass( 'show' ) == true ) {
      $( this ).addClass( 'active' )
    }
  } )

  $( '.dilpomas-slider' ).owlCarousel( {
    loop      : true,
    margin    : 20,
    nav       : false,
    dots      : true,
    // FIXME: need to be fixed
    responsive: {
      0   : {
        items   : 1,
        dotsEach: 3
      },
      575 : {
        items   : 2,
        dotsEach: 2
      },
      1200: {
        items   : 4,
        dotsEach: 1
      }
    }
  } )

  $( '.podology-service-slider' ).owlCarousel( {
    loop      : true,
    margin    : 35,
    nav       : false,
    dots      : true,
    responsive: {
      0   : {
        items: 1
      },
      768 : {
        items: 2
      },
      1200: {
        items: 4
      }
    }
  } )

  const firstDayCourse = $( '#firstDayCourse' )[ 0 ]

  if ( firstDayCourse ) {
    $( '[data-f-day-c-btn]' )
      .on( 'click', _ => $( '[data-f-day-s-btn]' ).click() )

    firstDayCourse.addEventListener( 'submit', e => {
      e.preventDefault()
      sendEmail( {
        Subject: 'Обучение',
        Body   : `Имя: ${ firstDayCourse.querySelector( '[data-name]' ).value }<br>Email: ${ firstDayCourse.querySelector( '[data-email]' ).value }<br>Телефон: ${ firstDayCourse.querySelector( '[data-phone]' ).value }<br>Курс: ${ firstDayCourse.querySelector( 'select' ).selectedOptions[ 0 ].innerText }`
      } )
    } )
  }

  const secondDayCourse = $( '#secondDayCourse' )[ 0 ]

  if ( secondDayCourse ) {
    $( '[data-s-day-c-btn]' )
      .on( 'click', _ => $( '[data-s-day-s-btn]' ).click() )

    secondDayCourse.addEventListener( 'submit', e => {
      e.preventDefault()
      sendEmail( {
        Subject: 'Обучение',
        Body   : `Имя: ${ secondDayCourse.querySelector( '[data-name]' ).value }<br>Email: ${ secondDayCourse.querySelector( '[data-email]' ).value }<br>Телефон: ${ secondDayCourse.querySelector( '[data-phone]' ).value }<br>Курс: ${ secondDayCourse.querySelector( 'select' ).selectedOptions[ 0 ].innerText }`
      } )
    } )
  }

  const chooseDayCourse = $( '#chooseDayCourse' )[ 0 ]

  if ( chooseDayCourse ) {
    $( '[data-fr-day-c-btn]' )
      .on( 'click', _ => $( '[data-fr-day-s-btn]' ).click() )
    chooseDayCourse.addEventListener( 'submit', e => {
      e.preventDefault()
      sendEmail( {
        Subject: 'Обучение',
        Body   : `Имя: ${ chooseDayCourse.querySelector( '[data-name]' ).value }<br>Email: ${ chooseDayCourse.querySelector( '[data-email]' ).value }<br>Телефон: ${ chooseDayCourse.querySelector( '[data-phone]' ).value }<br>Курс: ${ chooseDayCourse.querySelector( 'select' ).selectedOptions[ 0 ].innerText }`
      } )
    } )
  }

  const contactForm = document.querySelector( '.feedback-form' )

  if ( contactForm ) {
    $( '[data-btn-contact-submit]' ).on( 'click', e => {
      $( '[data-contact-submit]' ).click()
    } )

    contactForm.addEventListener( 'submit', e => {
      e.preventDefault()
      Email.send( {
        ...mail,
        Subject: 'Обратная связь',
        Body   : `Имя: ${ $( '[data-feedback-name]' )
          .val() }<br>Email: ${ $( '[data-feedback-email]' )
          .val() }<br>Телефон: ${ $( '[data-feedback-phone]' )
          .val() }<br>Сообщение: ${ $( '[data-feedback-message]' ).val() }`
      } )
      $( '[data-feedback-name]' ).val( '' )
      $( '[data-feedback-email]' ).val( '' )
      $( '[data-feedback-phone]' ).val( '' )
      $( '[data-feedback-message]' ).val( '' )
    } )
  }

  $( '.podology-service-slider' ).owlCarousel( {
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
  } )

  $( '.salon-photos-slider' ).owlCarousel( {
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
  } )

  $( '.card-header' ).on( 'click', function () {
    $( this ).toggleClass( 'active' ).siblings().removeClass( 'active' )
  } )

  $( '.reviews-slider' ).owlCarousel( {
    loop  : true,
    margin: 0,
    nav   : true,
    dots  : false,
    items : 1
  } )

  $( '.specialists-slider' ).owlCarousel( {
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
  } )

  var videoSLider = $( '.video-slider' ).owlCarousel( {
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
  } )

  $( '.video-slider-dots .owl-dot' ).click( function ( e ) {
    e.preventDefault()
    var itemPosition = $( this ).attr( 'data-pos' )
    videoSLider.trigger( 'to.owl.carousel', [ itemPosition, 300 ] )
  } )

  var videoSliderDots = $( '.video-slider-dots' ).owlCarousel( {
    navContainer: '.video-nav-slider-dots',
    loop        : false,
    margin      : 0,
    nav         : true,
    dots        : false,
    items       : 1
  } )

  $( '.video-nav-slider-dots .owl-next' ).click( function () {
    videoSliderDots.trigger( 'next.owl.carousel' )
  } )

  $( '.video-nav-slider-dots .owl-prev' ).click( function () {
    videoSliderDots.trigger( 'prev.owl.carousel', [ 300 ] )
  } )

  $( '#closeOverlay' ).click( function ( e ) {
    $( '#overlay' ).fadeOut( 'fast' )
  } )

  $( '#checkbox' ).change( function ( e ) {
    $( this ).parent().toggleClass( 'checked' )
  } )
  // $( '#sendConsultation' ).click( function () {
  //   var bearer_token = 'f5wujgx5yn6cagtk9fg2'
  //   var partnerId = 240913
  //   var managerId = 823619
  //   var date = new Date()
  //   var payload = {
  //     'phone': $( '#consultPhone' ).val(),
  //     'name' : $( '#consultName' ).val(),
  //     'email': $( '#consultEmail' ).val()
  //   }
  //   date.setDate( date.getDate() + 1 )
  //   var dateString = date.getFullYear() + '-' + ( ( date.getMonth() ) + 1 <
  // 10 ? '0' + ( date.getMonth() + 1 ) : date.getMonth() + 1 ) + '-' + (
  // date.getDate() < 10 ? '0' + date.getDate() : date.getDate() ) var url =
  // 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' +
  // managerId + '/' + dateString + '?service_ids=3354786' var headers = {
  // 'Content-Type' : 'application/json', 'Authorization': 'Bearer ' +
  // bearer_token } var request = $.ajax( { url    : url, type   : 'GET',
  // headers: headers } )  request.done( function ( msg ) { console.log( 'Time:
  // ', msg[ 0 ].datetime ) writeClient( msg[ 0 ].datetime, payload ) } )
  // request.fail( function ( jqXHR, textStatus ) { alert( 'Request failed: ' +
  // textStatus ) } ) } )
} )

window.writeClient = ( time, data ) => {
  var bearer_token = 'f5wujgx5yn6cagtk9fg2'
  var partnerId = 240913
  var managerId = 823619
  var headers = {
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer ' + bearer_token
  }
  var payload = {
    'phone'       : data.phone,
    'fullname'    : data.name,
    'email'       : data.email,
    'appointments': [
      {
        'id'      : new Date().getTime(),
        'services': [ 3354786 ],
        'staff_id': managerId,
        'datetime': time
      }
    ]
  }
  console.log( 'Payload: ', payload.appointments )
  var request = $.ajax( {
    url    : 'https://api.yclients.com/api/v1/book_record/' + partnerId,
    type   : 'POST',
    data   : JSON.stringify( payload ),
    headers: headers
  } )

  request.done( function ( msg ) {
    console.log( 'Send: ', msg )
  } )

  request.fail( function ( jqXHR, textStatus ) {
    alert( 'Request failed: ' + textStatus )
  } )
}

function sendEmail ( details ) {
  Email.send( {
    ...mail,
    ...details
  } )
  closeAllModals()
}

function closeAllModals () {
  setTimeout( () => {
    $( '.modal' ).modal( 'hide' )
  }, 3000 )
}
