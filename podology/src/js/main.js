function initMap ( node ) {
  google.maps.event.addDomListener( window, 'load', function () {
    var coords = new google.maps.LatLng( 50.2479782, 28.6852178 )
    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map( node, {
      zoom            : 15,
      center          : coords,
      styles          : [
        {
          'featureType': 'all',
          'elementType': 'labels.text.fill',
          'stylers'    : [
            {
              'saturation': 36
            },
            {
              'color': '#333'
            },
            {
              'lightness': 40
            }
          ]
        },
        {
          'featureType': 'all',
          'elementType': 'labels.text.stroke',
          'stylers'    : [
            {
              'visibility': 'on'
            },
            {
              'color': '#FFF'
            },
            {
              'lightness': 16
            }
          ]
        },
        {
          'featureType': 'all',
          'elementType': 'labels.icon',
          'stylers'    : [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry.fill',
          'stylers'    : [
            {
              'color': '#FEFEFE'
            },
            {
              'lightness': 20
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'geometry.stroke',
          'stylers'    : [
            {
              'color': '#FEFEFE'
            },
            {
              'lightness': 17
            },
            {
              'weight': 1.2
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers'    : [
            {
              'lightness': 20
            },
            {
              'color': '#ECECEC'
            }
          ]
        },
        {
          'featureType': 'landscape.man_made',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            },
            {
              'color': '#F0F0EF'
            }
          ]
        },
        {
          'featureType': 'landscape.man_made',
          'elementType': 'geometry.fill',
          'stylers'    : [
            {
              'visibility': 'on'
            },
            {
              'color': '#F0F0EF'
            }
          ]
        },
        {
          'featureType': 'landscape.man_made',
          'elementType': 'geometry.stroke',
          'stylers'    : [
            {
              'visibility': 'on'
            },
            {
              'color': '#D4D4D4'
            }
          ]
        },
        {
          'featureType': 'landscape.natural',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            },
            {
              'color': '#ECECEC'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers'    : [
            {
              'lightness': 21
            },
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry.fill',
          'stylers'    : [
            {
              'visibility': 'on'
            },
            {
              'color': '#D4D4D4'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text.fill',
          'stylers'    : [
            {
              'color': '#303030'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.icon',
          'stylers'    : [
            {
              'saturation': '-100'
            }
          ]
        },
        {
          'featureType': 'poi.attraction',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.business',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.government',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.medical',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.park',
          'elementType': 'geometry',
          'stylers'    : [
            {
              'color': '#DEDEDE'
            },
            {
              'lightness': 21
            }
          ]
        },
        {
          'featureType': 'poi.place_of_worship',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.school',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'poi.school',
          'elementType': 'geometry.stroke',
          'stylers'    : [
            {
              'lightness': '-61'
            },
            {
              'gamma': '0.00'
            },
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi.sports_complex',
          'elementType': 'all',
          'stylers'    : [
            {
              'visibility': 'on'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry.fill',
          'stylers'    : [
            {
              'color': '#FFF'
            },
            {
              'lightness': 17
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry.stroke',
          'stylers'    : [
            {
              'color': '#FFF'
            },
            {
              'lightness': 29
            },
            {
              'weight': 0.2
            }
          ]
        },
        {
          'featureType': 'road.arterial',
          'elementType': 'geometry',
          'stylers'    : [
            {
              'color': '#FFF'
            },
            {
              'lightness': 18
            }
          ]
        },
        {
          'featureType': 'road.local',
          'elementType': 'geometry',
          'stylers'    : [
            {
              'color': '#FFF'
            },
            {
              'lightness': 16
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'geometry',
          'stylers'    : [
            {
              'color': '#F2F2F2'
            },
            {
              'lightness': 19
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers'    : [
            {
              'color': '#DADADA'
            },
            {
              'lightness': 17
            }
          ]
        }
      ],
      disableDefaultUI: true
    } )

    var marker = new google.maps.Marker( {
      position: coords,
      map     : map,
      title   : 'Steffany',
      icon    : {
        url: 'assets/icon/vector.png'
      }
    } )
  } )
}

$( document ).ready( function () {
  var maps = document.querySelectorAll( '.g-map' )
  Array.prototype.forEach.call( maps, function ( item ) { initMap( item )} )
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
    $( '#overlay' ).hide()
  } )

  $( '#checkbox' ).change( function ( e ) {
    $( this ).parent().toggleClass( 'checked' )
  } )
} )
