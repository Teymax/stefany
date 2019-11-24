$(document).ready(function () {


  $('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $('.carousel-item').eq(i).appendTo('.carousel-inner');
        } else {
          $('.carousel-item').eq(0).appendTo('.carousel-inner');
        }
      }
    }
  });

  $('.city-trigger').click(function (e) {
    e.preventDefault();
    var city = "." + $(this).attr('data-city');
    $('.city-trigger').removeClass('active');
    $('.city-item').removeClass('city-active');
    $(this).addClass('active');
    $(city).addClass('city-active');
  });


  $('.diploma-slider').owlCarousel({
    loop: true,
    margin: 35,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      731: {
        items: 2
      },
      1200: {
        items: 4
      }
    }
  });

  $('.specialists-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      731: {
        items: 2
      },
      1200: {
        items: 4
      }
    }
  });

  var videoSLider = $('.video-slider').owlCarousel({
    loop: false,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    dotsContainer: '.video-slider-dots',
    responsive: {
      0: {
        nav: true
      },
      541: {
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

  var videoSliderDots = $('.video-slider-dots').owlCarousel({
    navContainer: '.video-nav-slider-dots',
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    items: 1
  })

  $('.video-nav-slider-dots .owl-next').click(function () {
    videoSliderDots.trigger('next.owl.carousel')
  })

  $('.video-nav-slider-dots .owl-prev').click(function () {
    videoSliderDots.trigger('prev.owl.carousel', [300])
  })

  $('#closeOverlay').click(function (e) {
    $('#overlay').hide()
  })

// accordion
  $(".card-header").on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active')
  });
//menu-trigger
  $('.menu-trigger').click(function (e) {
    $(this).toggleClass('open');
    $('header').toggleClass('open');
    $('body').toggleClass('fixed');
  });

  $('body').click(function (event) {
    var dropMenuClosest = event.target.closest('.drop-menu')
    if (dropMenuClosest) {
      $('.drop-menu').not(dropMenuClosest).removeClass('open');
      dropMenuClosest.classList.toggle('open');
    } else {
      $('.drop-menu').removeClass('open');
    }
  });

//checkbox
  $('.checkbox').change(function (e) {
    $(this).parent().toggleClass('checked')
  });
//checkbox service list male/female
  $('#checkboxServiceList').click(function(){
    if ($(this).is(':checked')) {
      $('.list-female').toggleClass('hidden')
      $('.list-male').toggleClass('visible')
    } else {
      $('.list-female').toggleClass('hidden')
      $('.list-male').toggleClass('visible')
    }
  });
});
let phoneInput, fullNameInput, emailInput, phoneForm, codeForm, servicesBlock, codeInput, payButton, mainBlocks,
  servicesStat;
const bearer_token = "f5wujgx5yn6cagtk9fg2";
const partnerId = 111624;
const managerId = 819601;
let headers;
const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
window.onload = function () {
  // phoneForm = document.getElementById("contactForm");
  // codeForm = document.getElementById("phoneVerification");
  // phoneInput = document.getElementById("phone");
  // fullNameInput = document.getElementById("fullname");
  // emailInput = document.getElementById("email");
  // servicesBlock = document.getElementById("services");
  // codeInput = document.getElementById("code");
  // payButton = document.getElementById("pay_button");
  // payButton.addEventListener("click", bookRecord);
  getServices();
};

function getServices() {
  headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  ajax('GET', headers, 'https://api.yclients.com/api/v1/book_services/' + partnerId + '?staff_id=' + managerId/*'https://api.yclients.com/api/v1/book_times/72145/791383/2019'*/, null, displayServices);
}

function displayServices(json) {
  let data = getData(json);
  //console.log(data.services);
  mainBlocks = document.getElementsByClassName("checkbox-row")
  servicesStat = Array.prototype.map.call(mainBlocks, block => {
    return block.getAttribute("id")
  })
  servicesStat = servicesStat.filter(service => !!service)
  for (let i = 0; i < servicesStat.length; i++) {
    data.services.map(function (service) {
      console.log(service.id)
      if(+servicesStat[i]===service.id)
        mainBlocks[i].querySelector("p.item-price").textContent = service.price_max;
      mainBlocks[i].querySelector("p.item-time").textContent = service.seance_length/60;

    })
  }
  // let services = data.services.map(function (service) {
  //   let obj = servicesStat.find(function (serviceName) {
  //     return serviceName.id === service.id;
  //   });
  //   console.log(obj)
  //   return {
  //     id: service.id,
  //     price_max: service.price_max,
  //     seance_length: service.seance_length,
  //     // title: name ? name.name : service.title,
  //     // sex: name ? name.sex : null,
  //     // category: service.category_id
  //   };
  // });
  // console.log(JSON.stringify(services))
  // services.forEach(function (service) {
  //   servicesArr[service.id] = {"price": service.price_max, "length": service.seance_length / 3600};
  //   // let tr = document.createElement("TR");
  //   // let idTd = document.createElement("td");
  //   // idTd.textContent = service.id;
  //   // let nameTd = document.createElement("td");
  //   // nameTd.textContent = service.title;
  //   // let priceTd = document.createElement("td");
  //   // priceTd.textContent = service.price_min + "-" + service.price_max;
  //   // let timeTd = document.createElement("td");
  //   // timeTd.textContent = service.seance_length / 60;
  //   // tr.appendChild(idTd)
  //   // tr.appendChild(nameTd)
  //   // tr.appendChild(priceTd)
  //   // tr.appendChild(timeTd)
  //   //
  //   // document.getElementById("table").appendChild(tr);
  //   let label = document.createElement("LABEL");
  //   label.setAttribute("for", "service-" + service.id);
  //   label.textContent = service.title + "(price: " + service.price_max + " UAH, duration: " + parseFloat(service.seance_length) / 60 + " mins)";
  //   let checkbox = document.createElement("INPUT");
  //   checkbox.setAttribute("type", "checkbox");
  //   checkbox.setAttribute("name", service.id);
  //   checkbox.setAttribute("id", "service-" + service.id);
  //
  //
  // });
}

function getData(data) {
  let answer;
  try {
    answer = JSON.parse(data);
  } catch (err) {
    console.log(err.message + " in " + xmlhttp.responseText);
    return {error: err.message, status: answer['errors']['code']};
  }
  if (answer["errors"]) {
    if (answer["errors"].length > 1) return {
      error: answer['errors'][0]['message'],
      status: answer['errors'][0]['code']
    };
    else return {error: answer['errors']['message'], status: answer['errors']['code']};
  }
  return answer;
}

function getFormParams() {
  let serviceCheckboxes = servicesBlock.querySelectorAll("input:checked");
  let services = [...serviceCheckboxes].map(function (service) {
    return parseInt(service.name);
  });
  return {
    phone: phoneInput.value.length > 0 ? phoneInput.value : false,
    fullName: fullNameInput.value.length > 0 ? fullNameInput.value : false,
    email: emailInput.value.length > 0 ? emailInput.value : false,
    services: services.length > 0 ? services : false
  }
}

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



