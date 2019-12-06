$(document).ready(function () {
  let regex = new RegExp("%3c.*%3e", "i");
  let replaceHref = regex.exec(window.location.href);
  if (replaceHref) {
    window.location.replace = "./404.html";
  }
   $('[type="tel"]').mask("+38-(000)-000-00-00")
  var payForm = $('#modalServiceListPay form')
  if (payForm)
    payForm.on('submit', bookRecord)
  var submForm = $('#modalServiceListSinugUp form')
  if (submForm)
    submForm.on('submit', bookRecord)
  var consultForm = $('form.main-form')
  if(consultForm)
    consultForm.on('submit', consultWrite)
  const callbackForm = $('form.feedback-form')[0],
    callbackBtn = $('#sendMail')

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

      let comment = document.querySelector("textarea")
      let phone = document.querySelector('input[name=phone]')
      let name = document.querySelector('input[name=name]')
      let email = document.querySelector('input[name=email]')


      window.mail = {
        Host: 'smtp.gmail.com',
        Username: 'four.progs@gmail.com',
        Password: 'Htndeth0614',
        To: 'malanivvlad@gmail.com',
        From: email.value
      }

      let details = {
        Subject: 'Users questions and proposals',
        Body:
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
    })
  }
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
      $('.list-female').addClass('hidden')
      $('.list-male').addClass('visible')
    } else {
      $('.list-female').removeClass('hidden')
      $('.list-male').removeClass('visible')
    }
  });
});
let mainBlocks, servicesStatic, userParams, servicesBlock;
const bearer_token = "f5wujgx5yn6cagtk9fg2";
const partnerId = 111624;
const managerId = 819601;
let headers;
let contact;
let servicesAll = [];
let servicesArr = [];
let phoneInput;
let fullNameInput;
let emailInput;
let choosenServices = [];
let consult;

const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
window.onload = function () {
  servicesBlock = document.querySelector("div.service-list-group")

  // phoneForm = document.getElementById("contactForm");
  // codeForm = document.getElementById("phoneVerification");
  phoneInput = document.querySelectorAll("#phone");

  fullNameInput = document.querySelectorAll("#fullname");
  emailInput = document.querySelectorAll("#email");

  getServices();

  let checking = document.querySelectorAll('label.service-checkbox-label input');
  [...checking].forEach(box => box.addEventListener("click", refreshPrice));
  consult = document.querySelector('.main-form')
  consult.addEventListener('submit', consultWrite)
  let curUrl = document.URL
  if (curUrl.includes('payed=true')) {
    if (localStorage.email && localStorage.fullName && localStorage.services && localStorage.phone && localStorage.time) {
      headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};

      let date = new Date();
      userParams = {
        "phone": localStorage.phone,
        "fullname": localStorage.fullName,
        "email": localStorage.email,
        "comment": "online order+payment",
        "appointments": [
          {
            "id": date.getTime(),
            "services": localStorage.services,
            "staff_id": managerId,
            "datetime": localStorage.time
          }
        ]
      };

      ajax('POST', headers, 'https://api.yclients.com/api/v1/book_record/' + partnerId, userParams,
        function (data) {
          let err = processErrors(getData(data));
          if (!err) {
            alert("Success");
          }
        });
    }
  }
  localStorage.removeItem('time')
  localStorage.removeItem('fullName')
  localStorage.removeItem('phone')
  localStorage.removeItem('email')
  localStorage.removeItem('services')
};

function refreshPrice(e) {
  const parent = e.target.closest('.checkbox-row');
  let sex = parent.getAttribute('data-sex')
  let id = parent.getAttribute('id')
  let serviceName = parent.querySelector('.paragraph-text').innerHTML;
  let price = parent.querySelector('.item-price').innerHTML;
  let checkbox = parent.querySelector('input[name="service"]');

  if (checkbox.checked) {
    choosenServices.push({
      id,
      serviceName,
      price,
      sex
    });
  } else {
    choosenServices = choosenServices.filter(function (item) {
      return item.id !== id || sex !== item.sex
    })
  }

  $("#choosenServices")[0].innerHTML = '';

  choosenServices.forEach(item => {
    $("#choosenServices")[0].innerHTML += `

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
      `;
  })
  let serviceCheckboxes = document.querySelectorAll(".service-list-group input:checked");

  // modal count
  document.querySelectorAll(".countCheckedService").forEach(function (item) {
    item.textContent = serviceCheckboxes.length
  })

  let genPrice = Array.prototype.reduce.call(serviceCheckboxes, (accum, current, index) => {
    const parent = current.closest('.checkbox-row')
    let id = parent.getAttribute('id')
    let serv = servicesAll.find(service => service.id === +id)

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
      this.textContent = hours + " ч " + minutes / 60 + " мин"
    }

  })
  $('.serviceListSum').each(function (e) {
    this.textContent = genPrice + ' грн';
  })
}

function getServices() {
  headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  ajax('GET', headers, 'https://api.yclients.com/api/v1/book_services/' + partnerId + '?staff_id='
    + managerId/*'https://api.yclients.com/api/v1/book_times/72145/791383/2019'*/, null, displayServices);
}

function displayServices(json) {
  let data = getData(json);
  servicesAll = data.services
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


function getFormParams(inputNum) {
  let serviceCheckboxes = servicesBlock.querySelectorAll("input:checked");
  let services = [...serviceCheckboxes].map(function (service) {
    let main = service.closest('.checkbox-row');
    let id = main.getAttribute('id');
    return parseInt(id);
  });


  let phone = [...phoneInput][inputNum].value
  let email = [...emailInput][inputNum].value
  let fullName = [...fullNameInput][inputNum].value
  console.log(fullName)
  // if (!fullName) {
  //   alert("Input correct name");
  //   return;
  // }
  //
  // if (phone.length < 13) {
  //   alert('Input correct phone')
  //   return
  // }
  // if (services.length === 0) {
  //   alert("Yoy didn't choose any service")
  //   return
  // }
  return {
    phone: phone.length > 0 ? phone : false,
    fullName: fullName.length > 0 ? fullName : false,
    email: email.length > 0 ? email : false,
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
  if (!data._error) return false;
  msg = data._error.message;


  alert(msg)
  return true;
}

function bookRecord(event, plusDate = 0) {
  event.preventDefault()
  let inputNum;
  let date = new Date();
  if (plusDate > 0) date.setDate(date.getDate() + plusDate);
  let dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) :
    date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
  let params
  if (event.target.id === "pay_form")
    inputNum = 0
  else
    inputNum = 1
  params = getFormParams(inputNum);

  let url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString;
  url += params.services ? ("?service_ids=" + encodeURIComponent(params.services.join(","))) : '';
  headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  ajax('GET', headers, url, null,
    function (data) {
      let dataArr = getData(data);
      if (processErrors(dataArr)) return alert("Error");
      if (dataArr.length < params.services.length) return bookRecord(event, ++plusDate);
      else {
        if (!inputNum) {
          localStorage.fullName = params.fullName
          localStorage.email = params.email
          localStorage.phone = params.phone
          localStorage.services = params.services
          localStorage.time = dataArr[0].datetime

          preparePayButton(inputNum);

        }
        if (inputNum)
          writeClient(inputNum, dataArr[0].datetime, event.target.id === "pay_form")
      }
    });
}

function writeClient(inputNum, time, isPayment = false) {
  headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  let params = getFormParams(inputNum);

  // if (!params.phone || !params.fullName || !params.email || !params.services) {
  //   alert("smth went wrong, please reload the page and try again");
  //   return;
  // }

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

  ajax('POST', headers, 'https://api.yclients.com/api/v1/book_record/' + partnerId, userParams,
    function (data) {
      let err = processErrors(getData(data));
      if (!err) {
        alert("Success");
      }
    });

}

function preparePayButton(inputNum) {
  let params = getFormParams(inputNum);
  if (!params.services) {
    alert("Please choose service");
    return;
  }
  let price = 0;
  //
  //
  for (let i in params.services) {
    price += servicesArr[params.services[i]].price;
  }
  let desc = "User: " + params.phone + " " + params.email + "pay for services: " + params.services.join(",");
  // let order = createOrder(price, desc, params.fullName, params.services, params.email, params.phone);

  location.replace(createOrder(price, desc, params.fullName, params.services, params.email, params.phone));

}

function createOrder(amount, order_desc, name, services, email, phone) {
  var button = $ipsp.get('button');
  button.setMerchantId(1397120);
  button.setAmount(amount, 'UAH', true);
  //http://steffany.dotwork.digital/laser/
  button.setResponseUrl('http://steffany.dotwork.digital/laser/?payed=true');
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
  let names = services.map(service => {
    const tempService = servicesAll.find(item => item.id === service)
    return tempService.title
  })
  names = names.join(', ')

  button.addField({
    label: 'services',
    name: 'user_services',
    value: names,
    readonly: true
  });

  return button.getUrl();
}


function consultWrite(event, plusDate = 0) {
  event.preventDefault()
  let date = new Date();
  const service = '1415297';
  if (plusDate > 0) date.setDate(date.getDate() + plusDate);
  let dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) :
    date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

  let url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString;
  url += "?service_ids=" + encodeURIComponent(service);
  headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  let phone = document.getElementById("phoneConsult").value
  let email = document.getElementById("emailConsult").value
  let fullName = document.getElementById("fullnameConsult").value




  ajax('GET', headers, url, null,
    function (data) {
      let dataArr = getData(data);
      if (dataArr.length < 1) return consultWrite(event, ++plusDate);
      if (processErrors(dataArr)) return alert("Error");
      else {
        headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};


        let date = new Date();
        userParams = {
          "phone": phone,
          "fullname": fullName,
          "email": email,
          "comment": "consult",
          "appointments": [
            {
              "id": date.getTime(),
              "services": service,
              "staff_id": managerId,
              "datetime": dataArr[0].datetime
            }
          ]
        }
        ajax('POST', headers, 'https://api.yclients.com/api/v1/book_record/' + partnerId, userParams,
          function (data) {
            let err = processErrors(getData(data));
            if (!err) {
              alert("Success");
            }
          });
      }
    })

}

function writeBeauty(event, plusDate = 0) {
  event.preventDefault();
  let box = event.target.closest('form')
  let service = box.getAttribute('id');

}