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
  $('#checkboxServiceList').click(function () {
    if ($(this).is(':checked')) {
      $('.list-female').toggleClass('hidden')
      $('.list-male').toggleClass('visible')
    } else {
      $('.list-female').toggleClass('hidden')
      $('.list-male').toggleClass('visible')
    }
  });
});
let mainBlocks, servicesStatic, userParams, servicesBlock;
const bearer_token = "f5wujgx5yn6cagtk9fg2";
const partnerId = 111624;
const managerId = 819601;
let headers;
let servicesAll = [];
let servicesArr = [];
let phoneInput;
let fullNameInput;
let emailInput;
let choosenServices = [];

const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
window.onload = function () {
  servicesBlock = document.querySelector("div.service-list-group")

  // phoneForm = document.getElementById("contactForm");
  // codeForm = document.getElementById("phoneVerification");
  phoneInput = document.getElementById("phone");
  console.log(phoneInput)
  fullNameInput = document.getElementById("fullname");
  emailInput = document.getElementById("email");
  let payButtons = document.querySelectorAll(".pay_button");
  [...payButtons].forEach(button => button.addEventListener("click", bookRecord))
  let orderButtons = document.querySelectorAll(".order_button");
  [...orderButtons].forEach(button => button.addEventListener("click", bookRecord))
  getServices();
  let checking = document.querySelectorAll('label.service-checkbox-label input');
  [...checking].forEach(box => box.addEventListener("click", refreshPrice));
};

function refreshPrice(e) {
  // let orderChecked = document.createElement('div')
  // orderChecked.classList.add(['checkbox-row']);
  // $('#choosenServices').append(orderChecked);

  const parent = e.target.closest('.checkbox-row');
  // console.log(parent);
  let id = parent.getAttribute('id')
  let serviceName = parent.querySelector('.paragraph-text').innerHTML;
  let price = parent.querySelector('.item-price').innerHTML;
  let checkbox = parent.querySelector('input[name="service"]');
  console.log(checkbox);
  if(checkbox.checked) {
    choosenServices.push({
      id,
      serviceName,
      price
    });
  } else {
    choosenServices = choosenServices.filter(function(item) {
      return item.id !== id
    })
  }

  // choosenServices = choosenServices.filter(function(item, pos) {
  //   return choosenServices.indexOf(item) == pos;
  // })
  $("#choosenServices")[0].innerHTML = '';
  choosenServices.forEach(item => {
    $("#choosenServices")[0].innerHTML += `
       <div class="">
        <div class="checkbox-row checkbox-row-checked d-flex align-items-start justify-content-between py-2">
<!--          <label class="service-checkbox-label">-->
<!--            <input class="align-self-center" type="checkbox" name="service"/>-->
<!--            <span class="checkmark light"></span>-->
<!--          </label>-->
          <div class="column-right d-flex align-items-start">
              <p class="paragraph-text text-w-light text-color-white ml-3 mb-0">${item.serviceName}</p>
          </div>
          <div class="column-left d-flex justify-content-end">
              <p class="paragraph-text text-w-bold text-color-white mb-0">${item.price}</p>
          </div>
        </div>
      </div>
      `;
  })
  let serviceCheckboxes = document.querySelectorAll(" input:checked");
  let genPrice = Array.prototype.reduce.call(serviceCheckboxes, (accum, current) => {
    const parent = current.closest('.checkbox-row')
    let id = parent.getAttribute('id')
    let serv = servicesAll.find(service => service.id === +id)
    console.log(serv)
    return accum + serv.price_max
  }, 0)
  let genTime = Array.prototype.reduce.call(serviceCheckboxes, (accum, current) => {
    const parent = current.closest('.checkbox-row')
    let id = parent.getAttribute('id')
    let serv = servicesAll.find(service => service.id === +id)
    return accum + serv.seance_length
  }, 0)
  $('.serviceListTime').each(function (e) {
    if (genTime % 3600 === 0)
      this.textContent = genTime / 3600 + ' ч';
    else {
      let minutes = genTime % 3600
      let hours = (genTime - minutes) / 3600
      this.textContent = hours + " ч" + minutes + " мин"
    }

  })
  $('.serviceListSum').each(function (e) {
    this.textContent = genPrice + ' грн';
  })
}

function getServices() {
  headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  ajax('GET', headers, 'https://api.yclients.com/api/v1/book_services/' + partnerId + '?staff_id=' + managerId/*'https://api.yclients.com/api/v1/book_times/72145/791383/2019'*/, null, displayServices);
}

function displayServices(json) {
  let data = getData(json);
  servicesAll = data.services
  console.log(servicesAll)
  mainBlocks = document.getElementsByClassName("checkbox-row")
  servicesStatic = Array.prototype.map.call(mainBlocks, block => {
    return block.getAttribute("id")
  })
  servicesStatic = servicesStatic.filter(service => !!service)
  for (let i = 0; i < servicesStatic.length; i++) {
    servicesAll.map(function (service) {
      if (+servicesStatic[i] === service.id) {
        mainBlocks[i].querySelector("p.item-price").textContent = `${service.price_max} грн`
        mainBlocks[i].querySelector("p.item-time").textContent = `${service.seance_length / 60} мин`
        servicesArr[service.id] = {"price": service.price_max, "length": service.seance_length / 60}
      }

    })
  }
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
    let main = service.closest('.checkbox-row');
    let id = main.getAttribute('id');
    return parseInt(id);
  });
  // console.log(services)

  return {
    phone: phoneInput.value.length > 0 ? phoneInput.value : false,
    fullName: fullNameInput.value.length > 0 ? fullNameInput.value : false,
    email: emailInput.value.length > 0 ? emailInput.value : false,
    services: services.length > 0 ? services : false,
    // phone: '+380974724612',
    // fullName: 'Vlad M',
    // email: "malanivvlad@gmail.com",
    // services: services.length > 0 ? services : false
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

function processErrors(data) {
  let msg;
  if (!data.error) return false;
  msg = data.error.message;


  alert(msg)
  return true;
}

var loadJS = function (url, implementationCode, location) {
  //url is URL of external file, implementationCode is the code
  //to be called from the file, location is the location to
  //insert the <script> element

  var scriptTag = document.createElement('script');
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};
var yourCodeToBeCalled = function () {
//your code goes here
}

function bookRecord(event, plusDate = 0) {
  loadJS('https://api.fondy.eu/static_common/v1/checkout/ipsp.js', function () {
    event.preventDefault();
    let date = new Date();
    if (plusDate > 0) date.setDate(date.getDate() + plusDate);
    let dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    let params = getFormParams();
    let url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString;
    url += params.services ? ("?service_ids=" + encodeURIComponent(params.services.join(","))) : '';
    headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
    ajax('GET', headers, url, null,
      function (data) {
        let dataArr = getData(data);
        if (processErrors(dataArr)) return alert("Error");
        if (dataArr.length < params.services.length) return bookRecord(event, ++plusDate);
        else {
          // console.log(dataArr[0]);let outBlock = e.closest(".checkbox-row")
          writeClient(dataArr[0].datetime, event.target.id === "pay_button")
        }
      });
  }, document.body);
}

function writeClient(time, isPayment = false) {
  headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  let params = getFormParams();
  if (!params.phone || !params.fullName || !params.email || !params.services) {
    alert("smth went wrong, please reload the page and try again");
    return;
  }
  let date = new Date();
  userParams = {
    "phone": params.phone,
    "fullname": params.fullName,
    "email": params.email,
    "comment": isPayment ? "online order+payment" : "online order",
    "appointments": [
      {
        "id": date.getTime(),
        "services": params.services,
        "staff_id": managerId,
        "datetime": time
      }
    ]
  };
  ajax('POST', headers, 'https://api.yclients.com/api/v1/book_record/' + partnerId, userParams, function (data) {
    let err = processErrors(getData(data));
    if (!err) {
      alert("Success");
    }
  });
  if (isPayment)
    preparePayButton();
}

function preparePayButton() {
  let params = getFormParams();
  if (!params.phone || !params.fullName || !params.email || !params.services) {
    alert("we haven`t all data for payment");
    return;
  }
  let price = 0;
  // console.log(servicesArr);
  // console.log(params.services);
  for (let i in params.services) {
    price += servicesArr[params.services[i]].price;
  }
  let desc = "User: " + params.phone + " " + params.email + "pay for services: " + params.services.join(",");
  let order = createOrder(price, desc, params.fullName, params.services.join(","), params.email, params.phone);
  console.log(order)
  location.replace(createOrder(price, desc, params.fullName, params.services.join(","), params.email, params.phone));
}

function createOrder(amount, order_desc, name, services, email, phone) {
  var button = $ipsp.get('button');
  button.setMerchantId(1432749);
  button.setAmount(amount, 'UAH');
  button.setResponseUrl('http://stefany.teymax.com/?payed=true');
  button.setHost('api.fondy.eu');
  button.addField({
    label: 'Описание платежа',
    name: 'description',
    value: order_desc,
    readonly: true
  });
  button.addField({
    label: 'name',
    name: 'user_name',
    value: name,
    readonly: true
  });
  button.addField({
    label: 'email',
    name: 'user_email',
    value: email,
    readonly: true
  });
  button.addField({
    label: 'phone',
    name: 'user_phone',
    value: phone,
    readonly: true
  });
  button.addField({
    label: 'services',
    name: 'user_services',
    value: services,
    readonly: true
  });
  console.log(button);
  return button.getUrl();
}


