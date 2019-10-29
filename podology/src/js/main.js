$( document ).ready( function () {
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

  $( '.drop-menu' ).click( function ( e ) {
    e.preventDefault()
    $( '.drop-menu:not(.open)' ).removeClass( 'open' )
    $( this ).toggleClass( 'open' )
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

  $( '.diploma-slider' ).owlCarousel( {
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
    $( '#overlay' ).hide()
  } )
} )
