$(document).ready(function () {
  let regex = new RegExp('%3c.*%3e', 'i')
  let replaceHref = regex.exec(window.location.href)
  if (replaceHref) {
    window.location.replace = './404.html'
  }
  $('[type="tel"]').mask('+38-(000)-000-00-00')

  const callbackForm = $('form.feedback-form')[0],
        callbackBtn  = $('#sendMail')
  if (callbackBtn) {
    callbackBtn.on('click', e => {
      e.stopPropagation()
      e.preventDefault()
      $('[data-contact-submit]').click()
    })
  }
  if (callbackForm) {
    callbackForm.addEventListener('submit', e => {
      e.preventDefault()
      e.stopPropagation()

      let comment = document.querySelector('textarea')
      let phone = document.querySelector('input[name=phoneCons]')
      let name = document.querySelector('input[name=nameCons]')
      let email = document.querySelector('input[name=emailCons]')


      window.mail = {
        Host    : 'smtp.gmail.com',
        Username: 'four.progs@gmail.com',
        Password: 'Htndeth0614',
        To      : 'help@steffany.ua',
        From    : email.value
      }

      let details = {
        Subject: 'Users questions and proposals',
        Body   :
          `Имя: ${name.value}
<br>Email: ${email.value}
<br>Телефон:  ${phone.value}
<br>Сообщение:  ${comment.value}`
      }

      Email.send({
        ...mail,
        ...details
      })
      name.value = ''
      email.value = ''
      phone.value = ''
      comment.value = ''
       $('#thanksPopup').modal('show')
    })
  }
  $('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget)
    var idx = $e.index()
    var itemsPerSlide = 4
    var totalItems = $('.carousel-item').length

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx)
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == 'left') {
          $('.carousel-item').eq(i).appendTo('.carousel-inner')
        }
        else {
          $('.carousel-item').eq(0).appendTo('.carousel-inner')
        }
      }
    }
  })

  $('.city-trigger').click(function (e) {
    e.preventDefault()
    var city = '.' + $(this).attr('data-city')
    $('.city-trigger').removeClass('active')
    $('.city-item').removeClass('city-active')
    $(this).addClass('active')
    $(city).addClass('city-active')
  })


  $('.diploma-slider').owlCarousel({
    loop      : true,
    margin    : 35,
    nav       : false,
    dots      : true,
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

  $('#closeOverlay').click(function (e) {
    $('#overlay').hide()
  })

  // accordion
  $('.card-header').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active')
  })
  //menu-trigger
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
    var dropMenuClosest = event.target.closest('.drop-menu')
    if (dropMenuClosest) {
      $('.drop-menu').not(dropMenuClosest).removeClass('open')
      dropMenuClosest.classList.toggle('open')
    }
    else {
      $('.drop-menu').removeClass('open')
    }
  })

  //checkbox
  $('.checkbox').change(function (e) {
    $(this).parent().toggleClass('checked')
  })
  //checkbox service list male/female
  //   $('#checkboxServiceList').click(function () {
  //     if ($('.checkbox').hasClass('checked')) {
  //       // $('.list-female').toggleClass('hidden')
  //       $('.custom-py-services-price').toggleClass('man-symbol-bg')
  //     } else {
  //       // $('.list-female').toggleClass('visible')
  //       // $('.custom-py-services-price').toggleClass('')
  //     }
  $(function () {
    $('#checkboxServiceList').change(function () {
      $('.custom-py-services-price').toggleClass('man-symbol-bg', this.checked)
      $('.list-female').toggleClass('hidden', this.checked)
      $('.list-male').toggleClass('visible', this.checked)

    }).change()
  })

  //srevice drop menu tablet
  $('.drop-menu').on('click', hidden)

  function hidden() {
    $('.drop-content').toggleClass('hidden')
    setTimeout(function () {
      $('.drop-content').toggleClass('scaleY')
    }, 200)

  }
})
