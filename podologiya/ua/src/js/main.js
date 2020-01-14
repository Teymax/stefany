window.mail = {
  Host    : 'smtp.gmail.com',
  Username: 'four.progs@gmail.com',
  Password: 'Htndeth0614',
  To      : 'pod@steffany.ua'
}

window.chooseDayText = ''

window.patterns = {
  ru: 'podologiya/$1',
  ua: 'podologiya/ua/$1'
}

window.patterns2 = {
  ru: 'podologiya/{{ city }}/$1',
  ua: 'podologiya/{{ city }}/ua/$1'
}

$(document).ready(function () {
  
  $('.close-pp-btn').on('click', e => $('.modal').modal('hide'))
  
  $('[data-choose-text]').on('click', event => {
    window.chooseDayText = event.target.dataset.chooseText
    $('#placeForCourseText')[0].innerText = window.chooseDayText
  })
  
  $('[type="tel"]').mask('+38-(000)-000-00-00')
  
  $('[data-i18n]')
    .on('click',
      e => {
        e.preventDefault()
        const i18n = e.target.dataset.i18n
        const p = location.pathname.split('/').slice(-1)[0]
        const urlCity      = location.pathname.slice(1).split('/')[1],
              filteredCity = ['rv'].find(city => city === urlCity) || 'zt'
        const h = filteredCity !== 'zt' ? window.patterns[i18n].replace('{{ city }}', filteredCity).replace('$1',
          p) : window.patterns[i18n].replace('/{{ city }}', '').replace('$1', p)
        console.log('/' + h)
        if (location.pathname.substr(1) !== h) {
          location.href = '/' + h
        }
      })
  
  const callbackForm = $('#callbackModal form')[0],
        callbackBtn  = $('[data-call-day-callback-btn]')
  
  callbackBtn.on('click', e => {
    e.preventDefault()
    const n = callbackForm.querySelector('[type="text"]').value,
          m = callbackForm.querySelector('[type="email"]').value,
          p = callbackForm.querySelector('[type="tel"]').value
    
    $('[data-call-day-sub-btn]').click()
  })
  
  callbackForm.addEventListener('submit', e => {
    e.preventDefault()
    var bearer_token = 'f5wujgx5yn6cagtk9fg2'
    var partnerId = 240913
    var managerId = 823619
    var date = new Date()
    var payload = {
      'phone': $('#consultPhone').val(),
      'name' : $('#consultName').val(),
      'email': $('#consultEmail').val()
    }
    date.setDate(date.getDate() + 1)
    var dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    var url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString + '?service_ids=3354786'
    
    $('#callbackModal').modal('hide')
    
    $('#thanksPopup').modal('show')
    
    $('#consultPhone').val('')
    $('#consultName').val('')
    $('#consultEmail').val('')
    
    var headers = {
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + bearer_token
    }
    var request = $.ajax(
      {
        url    : url,
        type   : 'GET',
        headers: headers
      })
    
    request.done(function (msg) {
      console.log(msg)
      writeClient(msg[0].datetime, payload)
    })
    
    request.fail(function (jqXHR, textStatus) {
      // handle
    })
  })
  
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
  
  const _toggleMenu = (ta, of) => {
    document.querySelector('html').style.touchAction = ta
    document.querySelector('html').style.overflowY = of
  }
  
  $('.menu-trigger').click(function (e) {
    $(this).toggleClass('open')
    this.classList.contains('open') ? _toggleMenu('none', 'hidden') : _toggleMenu('initial', 'initial')
    $('header').toggleClass('open')
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
  
  $('.questions-item, .program-item .collapse, .program-item  .collapse')
    .on('show.bs.collapse', function () {
      $(this).closest('.questions-item, .program-item').addClass('active')
    })
  
  $('.questions-item, .program-item .collapse, .program-item  .collapse')
    .on('hide.bs.collapse', function () {
      $(this).closest('.questions-item, .program-item')
             .removeClass('active')
    })
  
  $('.questions-item, .program-item').each(function (el) {
    if ($(this).find('.collapse-answer').hasClass('show') == true) {
      $(this).addClass('active')
    }
  })
  
  $('.dilpomas-slider').owlCarousel({
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
  })
  
  $('.podology-service-slider').owlCarousel(
    {
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
    })
  
  const firstDayCourse = $('#firstDayCourse')[0]
  
  if (firstDayCourse) {
    $('[data-f-day-c-btn]')
      .on('click', _ => $('[data-f-day-s-btn]').click())
    
    firstDayCourse.addEventListener('submit', e => {
      e.preventDefault()
      sendEmail(
        {
          Subject: 'Обучение',
          From   : `${firstDayCourse.querySelector('[data-email]').value}`,
          Body   : `Имя: ${firstDayCourse.querySelector('[data-name]').value}<br>Email: ${firstDayCourse.querySelector(
            '[data-email]').value}<br>Телефон: ${firstDayCourse.querySelector(
            '[data-phone]').value}<br>Курс: ${window.chooseDayText}`
        })
    })
  }
  
  const secondDayCourse = $('#secondDayCourse')[0]
  
  
  if (secondDayCourse) {
    $('[data-s-day-c-btn]')
      .on('click', _ => {
        
        $('[data-s-day-s-btn]').click()
      })
    
    secondDayCourse.querySelector('form').addEventListener('submit', e => {
      e.preventDefault()
      sendEmail(
        {
          Subject: 'Обучение',
          From   : secondDayCourse.querySelector('[data-email]').value,
          Body   : `Имя: ${secondDayCourse.querySelector(
            '[data-name]').value}<br>Email: ${secondDayCourse.querySelector(
            '[data-email]').value}<br>Телефон: ${secondDayCourse.querySelector(
            '[data-phone]').value}<br>Курс: ${window.chooseDayText}`
        })
    })
  }
  
  const chooseDayCourse = $('#chooseDayCourse')[0]
  
  if (chooseDayCourse) {
    $('[data-fr-day-c-btn]')
      .first()
      .on('click', _ => {
        const n = chooseDayCourse.querySelector('[data-name]').value,
              e = chooseDayCourse.querySelector('[data-email]').value,
              p = chooseDayCourse.querySelector('[data-phone]').value,
              c = chooseDayCourse.querySelector('select').value
        
        
        $('[data-fr-day-s-btn]').click()
      })
    chooseDayCourse.addEventListener('submit', e => {
      e.preventDefault()
      
      const n  = chooseDayCourse.querySelector('[data-name]'),
            em = chooseDayCourse.querySelector('[data-email]'),
            p  = chooseDayCourse.querySelector('[data-phone]'),
            c  = chooseDayCourse.querySelector('select')
      
      const selectedText = c.options[c.selectedIndex].innerText !== 'Какой курс вы выбираете?' ? c.options[c.selectedIndex].innerText : 'Пользователь не выбрал курс'
      
      $('#chooseDayCourse').modal('hide')
      $('#thanksPopup').modal('show')
      sendEmail(
        {
          Subject: 'Обучение',
          From   : chooseDayCourse.querySelector('[data-email]').value,
          Body   : `Имя: ${chooseDayCourse.querySelector(
            '[data-name]').value}<br>Email: ${chooseDayCourse.querySelector(
            '[data-email]').value}<br>Телефон: ${chooseDayCourse.querySelector(
            '[data-phone]').value}<br>Курс: ${selectedText}`
        })
      p.value = em.value = n.value = ''
      c.selectedIndex = 0
    })
  }
  
  const chooseDayCourseSpecial = $('#chooseDayCourseSpecial')[0]
  
  if (chooseDayCourseSpecial) {
    $('[data-fr-day-c-btn-special]')
      .last()
      .on('click', _ => {
        const n = chooseDayCourseSpecial.querySelector('[data-name]').value,
              e = chooseDayCourseSpecial.querySelector('[data-email]').value,
              p = chooseDayCourseSpecial.querySelector('[data-phone]').value,
              c = window.chooseDayText
        
        $('[data-fr-day-s-btn-special]').click()
      })
    chooseDayCourseSpecial.addEventListener('submit', e => {
      e.preventDefault()
      
      const n  = chooseDayCourseSpecial.querySelector('[data-name]'),
            em = chooseDayCourseSpecial.querySelector('[data-email]'),
            p  = chooseDayCourseSpecial.querySelector('[data-phone]'),
            c  = window.chooseDayText
      
      sendEmail(
        {
          Subject: 'Обучение',
          From   : chooseDayCourseSpecial.querySelector('[data-email]').value,
          Body   : `Имя: ${chooseDayCourseSpecial.querySelector(
            '[data-name]').value}<br>Email: ${chooseDayCourseSpecial.querySelector(
            '[data-email]').value}<br>Телефон: ${chooseDayCourseSpecial.querySelector(
            '[data-phone]').value}<br>Курс: ${window.chooseDayText}`
        })
      window.chooseDayText = p.value = em.value = n.value = ''
      $('#chooseDayCourseSpecial').modal('hide')
      $('#thanksPopup').modal('show')
    })
  }
  
  const contactForm = document.querySelector('.feedback-form')
  
  if (contactForm) {
    $('[data-btn-contact-submit]').on('click', e => {
      $('[data-contact-submit]').click()
    })
    
    contactForm.addEventListener('submit', e => {
      e.preventDefault()
      $('#thanksPopup').modal('show')
      Email.send(
        {
          ...mail,
          Subject: 'Обратная связь',
          From   : $('[data-feedback-email]').val(),
          Body   : `ФИО: ${$('[data-feedback-name]')
            .val()}<br>Email: ${$('[data-feedback-email]')
            .val()}<br>Телефон: ${$('[data-feedback-phone]')
            .val()}<br>Сообщение: ${$('[data-feedback-message]').val()}`
        })
      $('[data-feedback-name]').val('')
      $('[data-feedback-email]').val('')
      $('[data-feedback-phone]').val('')
      $('[data-feedback-message]').val('')
    })
  }
  
  $('.podology-service-slider').owlCarousel(
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
  
  // $('.salon-photos-slider').owlCarousel(
  //   {
  //     center    : true,
  //     items     : 3,
  //     loop      : true,
  //     margin    : 15,
  //     responsive: {
  //       0   : {
  //         items: 1
  //       },
  //       575 : {
  //         items: 1
  //       },
  //       993 : {
  //         items: 1.5
  //       },
  //       1400: {
  //         items: 2
  //       },
  //       2000: {
  //         items: 4
  //       }
  //     }
  //   })
  
  $('.card-header').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active')
  })
  
  $('.reviews-slider').owlCarousel(
    {
      loop  : true,
      margin: 0,
      nav   : true,
      dots  : false,
      items : 1
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
  
  $('#closeOverlay').click(function (e) {
    $('#overlay').fadeOut('fast')
  })
  
  $('#checkbox').change(function (e) {
    $(this).parent().toggleClass('checked')
  })
})

window.writeClient = (time, data) => {
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
        'services': [3354786],
        'staff_id': managerId,
        'datetime': time
      }
    ]
  }
  var request = $.ajax({
    url    : 'https://api.yclients.com/api/v1/book_record/' + partnerId,
    type   : 'POST',
    data   : JSON.stringify(payload),
    headers: headers
  })
  
  request.done(function (msg) {
  })
  
  request.fail(function (jqXHR, textStatus) {
  })
}

function sendEmail(details) {
  Email.send(
    {
      ...mail,
      ...details
    })
  closeAllModals()
}

function closeAllModals() {
  setTimeout(() => {
    $('.modal').modal('hide')
  }, 3000)
}

'use strict';

(function (factory, jQuery, Zepto) {
  
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory)
  }
  else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'))
  }
  else {
    factory(jQuery || Zepto)
  }
  
}(function ($) {
  
  var Mask = function (el, mask, options) {
    
    var p = {
      invalid               : [],
      getCaret              : function () {
        try {
          var sel,
              pos       = 0,
              ctrl      = el.get(0),
              dSel      = document.selection,
              cSelStart = ctrl.selectionStart
          
          // IE Support
          if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
            sel = dSel.createRange()
            sel.moveStart('character', -p.val().length)
            pos = sel.text.length
          }
          // Firefox support
          else if (cSelStart || cSelStart === '0') {
            pos = cSelStart
          }
          
          return pos
        }
        catch (e) {}
      },
      setCaret              : function (pos) {
        try {
          if (el.is(':focus')) {
            var range,
                ctrl = el.get(0)
            
            if (ctrl.setSelectionRange) {
              ctrl.setSelectionRange(pos, pos)
            }
            else { // IE
              range = ctrl.createTextRange()
              range.collapse(true)
              range.moveEnd('character', pos)
              range.moveStart('character', pos)
              range.select()
            }
          }
        }
        catch (e) {}
      },
      events                : function () {
        el
          .on('keydown.mask', function (e) {
            el.data('mask-keycode', e.keyCode || e.which)
            el.data('mask-previus-value', el.val())
          })
          .on($.jMaskGlobals.useInput ? 'input.mask' : 'keyup.mask', p.behaviour)
          .on('paste.mask drop.mask', function () {
            setTimeout(function () {
              el.keydown().keyup()
            }, 100)
          })
          .on('change.mask', function () {
            el.data('changed', true)
          })
          .on('blur.mask', function () {
            if (oldValue !== p.val() && !el.data('changed')) {
              el.trigger('change')
            }
            el.data('changed', false)
          })
          .on('blur.mask', function () {
            oldValue = p.val()
          })
          .on('focus.mask', function (e) {
            if (options.selectOnFocus === true) {
              $(e.target).select()
            }
          })
          .on('focusout.mask', function () {
            if (options.clearIfNotMatch && !regexMask.test(p.val())) {
              p.val('')
            }
          })
      },
      getRegexMask          : function () {
        var maskChunks = [],
            translation,
            pattern,
            optional,
            recursive,
            oRecursive,
            r
        
        for (var i = 0; i < mask.length; i++) {
          translation = jMask.translation[mask.charAt(i)]
          
          if (translation) {
            
            pattern = translation.pattern.toString()
                                 .replace(/.{1}$|^.{1}/g, '')
            optional = translation.optional
            recursive = translation.recursive
            
            if (recursive) {
              maskChunks.push(mask.charAt(i))
              oRecursive = {
                digit  : mask.charAt(i),
                pattern: pattern
              }
            }
            else {
              maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'))
            }
            
          }
          else {
            maskChunks.push(mask.charAt(i)
                                .replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
          }
        }
        
        r = maskChunks.join('')
        
        if (oRecursive) {
          r = r.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
               .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern)
        }
        
        return new RegExp(r)
      },
      destroyEvents         : function () {
        el.off([
          'input', 'keydown', 'keyup', 'paste', 'drop', 'blur', 'focusout', ''
        ].join('.mask '))
      },
      val                   : function (v) {
        var isInput = el.is('input'),
            method  = isInput ? 'val' : 'text',
            r
        
        if (arguments.length > 0) {
          if (el[method]() !== v) {
            el[method](v)
          }
          r = el
        }
        else {
          r = el[method]()
        }
        
        return r
      },
      calculateCaretPosition: function (caretPos, newVal) {
        var newValL = newVal.length,
            oValue  = el.data('mask-previus-value') || '',
            oValueL = oValue.length
        
        if (el.data('mask-keycode') === 8 && oValue !== newVal) {
          caretPos = caretPos - (newVal.slice(0, caretPos).length - oValue.slice(0, caretPos).length)
          
        }
        else if (oValue !== newVal) {
          if (caretPos >= oValueL) {
            caretPos = newValL
          }
          else {
            caretPos = caretPos + (newVal.slice(0, caretPos).length - oValue.slice(0, caretPos).length)
          }
        }
        
        return caretPos
      },
      behaviour             : function (e) {
        e = e || window.event
        p.invalid = []
        
        var keyCode = el.data('mask-keycode')
        
        if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
          var newVal   = p.getMasked(),
              caretPos = p.getCaret()
          
          setTimeout(function (caretPos, newVal) {
            p.setCaret(p.calculateCaretPosition(caretPos, newVal))
          }, 10, caretPos, newVal)
          
          p.val(newVal)
          p.setCaret(caretPos)
          return p.callbacks(e)
        }
      },
      getMasked             : function (skipMaskChars, val) {
        var buf       = [],
            value     = val === undefined ? p.val() : val + '',
            m         = 0,
            maskLen   = mask.length,
            v         = 0,
            valLen    = value.length,
            offset    = 1,
            addMethod = 'push',
            resetPos  = -1,
            lastMaskChar,
            check
        
        if (options.reverse) {
          addMethod = 'unshift'
          offset = -1
          lastMaskChar = 0
          m = maskLen - 1
          v = valLen - 1
          check = function () {
            return m > -1 && v > -1
          }
        }
        else {
          lastMaskChar = maskLen - 1
          check = function () {
            return m < maskLen && v < valLen
          }
        }
        
        var lastUntranslatedMaskChar
        while (check()) {
          var maskDigit   = mask.charAt(m),
              valDigit    = value.charAt(v),
              translation = jMask.translation[maskDigit]
          
          if (translation) {
            if (valDigit.match(translation.pattern)) {
              buf[addMethod](valDigit)
              if (translation.recursive) {
                if (resetPos === -1) {
                  resetPos = m
                }
                else if (m === lastMaskChar) {
                  m = resetPos - offset
                }
                
                if (lastMaskChar === resetPos) {
                  m -= offset
                }
              }
              m += offset
            }
            else if (valDigit === lastUntranslatedMaskChar) {
              lastUntranslatedMaskChar = undefined
            }
            else if (translation.optional) {
              m += offset
              v -= offset
            }
            else if (translation.fallback) {
              buf[addMethod](translation.fallback)
              m += offset
              v -= offset
            }
            else {
              p.invalid.push({
                p: v,
                v: valDigit,
                e: translation.pattern
              })
            }
            v += offset
          }
          else {
            if (!skipMaskChars) {
              buf[addMethod](maskDigit)
            }
            
            if (valDigit === maskDigit) {
              v += offset
            }
            else {
              lastUntranslatedMaskChar = maskDigit
            }
            
            m += offset
          }
        }
        
        var lastMaskCharDigit = mask.charAt(lastMaskChar)
        if (maskLen === valLen + 1 && !jMask.translation[lastMaskCharDigit]) {
          buf.push(lastMaskCharDigit)
        }
        
        return buf.join('')
      },
      callbacks             : function (e) {
        var val         = p.val(),
            changed     = val !== oldValue,
            defaultArgs = [val, e, el, options],
            callback    = function (name, criteria, args) {
              if (typeof options[name] === 'function' && criteria) {
                options[name].apply(this, args)
              }
            }
        
        callback('onChange', changed === true, defaultArgs)
        callback('onKeyPress', changed === true, defaultArgs)
        callback('onComplete', val.length === mask.length, defaultArgs)
        callback('onInvalid', p.invalid.length > 0, [
          val, e, el, p.invalid, options
        ])
      }
    }
    
    el = $(el)
    var jMask    = this,
        oldValue = p.val(),
        regexMask
    
    mask = typeof mask === 'function' ? mask(p.val(), undefined, el, options) : mask
    
    jMask.mask = mask
    jMask.options = options
    jMask.remove = function () {
      var caret = p.getCaret()
      p.destroyEvents()
      p.val(jMask.getCleanVal())
      p.setCaret(caret)
      return el
    }
    
    jMask.getCleanVal = function () {
      return p.getMasked(true)
    }
    
    jMask.getMaskedVal = function (val) {
      return p.getMasked(false, val)
    }
    
    jMask.init = function (onlyMask) {
      onlyMask = onlyMask || false
      options = options || {}
      
      jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch
      jMask.byPassKeys = $.jMaskGlobals.byPassKeys
      jMask.translation = $.extend({}, $.jMaskGlobals.translation, options.translation)
      
      jMask = $.extend(true, {}, jMask, options)
      
      regexMask = p.getRegexMask()
      
      if (onlyMask) {
        p.events()
        p.val(p.getMasked())
      }
      else {
        if (options.placeholder) {
          el.attr('placeholder', options.placeholder)
        }
        
        if (el.data('mask')) {
          el.attr('autocomplete', 'off')
        }
        
        for (var i = 0, maxlength = true; i < mask.length; i++) {
          var translation = jMask.translation[mask.charAt(i)]
          if (translation && translation.recursive) {
            maxlength = false
            break
          }
        }
        
        if (maxlength) {
          el.attr('maxlength', mask.length)
        }
        
        p.destroyEvents()
        p.events()
        
        var caret = p.getCaret()
        p.val(p.getMasked())
        p.setCaret(caret)
      }
    }
    
    jMask.init(!el.is('input'))
  }
  
  $.maskWatchers = {}
  var HTMLAttributes    = function () {
        var input   = $(this),
            options = {},
            prefix  = 'data-mask-',
            mask    = input.attr('data-mask')
    
        if (input.attr(prefix + 'reverse')) {
          options.reverse = true
        }
    
        if (input.attr(prefix + 'clearifnotmatch')) {
          options.clearIfNotMatch = true
        }
    
        if (input.attr(prefix + 'selectonfocus') === 'true') {
          options.selectOnFocus = true
        }
    
        if (notSameMaskObject(input, mask, options)) {
          return input.data('mask', new Mask(this, mask, options))
        }
      },
      notSameMaskObject = function (field, mask, options) {
        options = options || {}
        var maskObject = $(field).data('mask'),
            stringify  = JSON.stringify,
            value      = $(field).val() || $(field).text()
        try {
          if (typeof mask === 'function') {
            mask = mask(value)
          }
          return typeof maskObject !== 'object' || stringify(maskObject.options) !== stringify(
            options) || maskObject.mask !== mask
        }
        catch (e) {}
      },
      eventSupported    = function (eventName) {
        var el = document.createElement('div'),
            isSupported
    
        eventName = 'on' + eventName
        isSupported = (eventName in el)
    
        if (!isSupported) {
          el.setAttribute(eventName, 'return;')
          isSupported = typeof el[eventName] === 'function'
        }
        el = null
    
        return isSupported
      }
  
  $.fn.mask = function (mask, options) {
    options = options || {}
    var selector     = this.selector,
        globals      = $.jMaskGlobals,
        interval     = globals.watchInterval,
        watchInputs  = options.watchInputs || globals.watchInputs,
        maskFunction = function () {
          if (notSameMaskObject(this, mask, options)) {
            return $(this).data('mask', new Mask(this, mask, options))
          }
        }
    
    $(this).each(maskFunction)
    
    if (selector && selector !== '' && watchInputs) {
      clearInterval($.maskWatchers[selector])
      $.maskWatchers[selector] = setInterval(function () {
        $(document).find(selector).each(maskFunction)
      }, interval)
    }
    return this
  }
  
  $.fn.masked = function (val) {
    return this.data('mask').getMaskedVal(val)
  }
  
  $.fn.unmask = function () {
    clearInterval($.maskWatchers[this.selector])
    delete $.maskWatchers[this.selector]
    return this.each(function () {
      var dataMask = $(this).data('mask')
      if (dataMask) {
        dataMask.remove().removeData('mask')
      }
    })
  }
  
  $.fn.cleanVal = function () {
    return this.data('mask').getCleanVal()
  }
  
  $.applyDataMask = function (selector) {
    selector = selector || $.jMaskGlobals.maskElements
    var $selector = (selector instanceof $) ? selector : $(selector)
    $selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes)
  }
  
  var globals = {
    maskElements : 'input,td,span,div',
    dataMaskAttr : '*[data-mask]',
    dataMask     : true,
    watchInterval: 300,
    watchInputs  : true,
    useInput     : !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && eventSupported('input'),
    watchDataMask: false,
    byPassKeys   : [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
    translation  : {
      '0': {pattern: /\d/},
      '9': {
        pattern : /\d/,
        optional: true
      },
      '#': {
        pattern  : /\d/,
        recursive: true
      },
      'A': {pattern: /[a-zA-Z0-9]/},
      'S': {pattern: /[a-zA-Z]/}
    }
  }
  
  $.jMaskGlobals = $.jMaskGlobals || {}
  globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals)
  
  if (globals.dataMask) {
    $.applyDataMask()
  }
  
  setInterval(function () {
    if ($.jMaskGlobals.watchDataMask) {
      $.applyDataMask()
    }
  }, globals.watchInterval)
}, window.jQuery, window.Zepto))
