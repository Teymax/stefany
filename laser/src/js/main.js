const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
const bearer_token = "f5wujgx5yn6cagtk9fg2";
const partnerId = 111624;
const managerId = 819601;
let servicesArr = [];
let localization = location.pathname.split('/').find(function (loc) {
  return loc === "ua";
}) || 'ru';
let LocMin = localization==="ru"?" мин":" хв";
let LocHour = localization==="ru"?" ч":" год";


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

function processErrors(data) {
  let msg
  if (!data._error) return false
  msg = data._error.message


  alert(msg)
  return true
}

document.addEventListener('DOMContentLoaded', function () {
  getServices()
  let complexForm = $('#yclient_form')
  if (complexForm) {
    complexForm.on('submit', complexFormSubmit)
  }
  let mainForm = $('.main-form')
  if (mainForm) mainForm.on('submit', mainFormSubmit)
  if (document.URL.includes('payed=true')) bookAfterRecord()
  let payButtons = document.querySelectorAll('.btn-first, .btn-second');
  [...payButtons].forEach(button => {
    button.addEventListener('click', buttonToggle)
  })

  document.querySelectorAll('.check-radio').forEach(function (item) {
    item.addEventListener('click', radioClick)
  })
})

function radioClick() {
  clearTotalPrice()
  let checkedRadio = document.querySelector('input[type="radio"][name="service"]:checked')
  document.querySelector('#yclient_form .c-content-count').innerHTML =
      `
          <p class="paragraph-text text-color-dark text-w-bold mb-0">Вы выбрали: </P>
          <p class="paragraph-text text-color-dark text-w-bold mb-0">${checkedRadio.dataset.name} - ${checkedRadio.dataset.proc} процедур </P>
          <p class="paragraph-text text-color-dark text-w-bold mb-0">Сумма ${checkedRadio.dataset.price} грн </p>
      `
}

function buttonToggle(event) {
  $('#modalServiceListSinugUp').modal('show')
  let payButton = document.querySelector('#yclient_form #pay_button')
  let orderButton = document.querySelector('#yclient_form #order_button')
  let payment = document.querySelector('#yclient_form #payment')
  let check = document.querySelector('#yclient_form #privacy_check')
  let span = document.querySelector('#yclient_form #privacy_link')
  if (event.target.classList.contains('btn-first')) {
    check.setAttribute("required", "true")
    check.classList.remove("hidden")
    span.classList.remove("hidden")
    payButton.classList.remove('hidden')
    orderButton.classList.add('hidden')
    payment.value = 1
  }
  else {
    check.setAttribute("required", "false")
    check.classList.add("hidden")
    span.classList.add("hidden")
    payButton.classList.add('hidden')
    orderButton.classList.remove('hidden')
    payment.value = 0
  }
}

function bookAfterRecord() {

  if (localStorage.email && localStorage.fullName && localStorage.services && localStorage.phone) {
    let services = localStorage.services.split(',')
    let params = [
      localStorage.fullName, localStorage.email, localStorage.phone, localStorage.comment, services, managerId,
      localStorage.city ? localStorage.city : 'unknown'
    ]
    getBookTime(services, 0, bookRecord, params)
    $('#thanksPopupPay').modal('show')
    localStorage.removeItem('name')
    localStorage.removeItem('comment')
    localStorage.removeItem('phone')
    localStorage.removeItem('email')
    localStorage.removeItem('services')
    window.history.replaceState({}, document.title, document.URL.replace('?payed=true', ''))
  }
}

function displayServices(json) {

  let servicesBlock = document.querySelector('div.service-list-group')
  let data = getData(json)
  let servicesAll = data.services
  if (servicesBlock) {
    let mainBlocks = document.getElementsByClassName('checkbox-row')
    let servicesStatic = Array.prototype.map.call(mainBlocks, block => {
      return block.getAttribute('id')
    })
    servicesStatic = servicesStatic.filter(service => !!service)
    for (let i = 0; i < servicesStatic.length; i++) {
      servicesAll.map(function (service) {
        if (+servicesStatic[i] === service.id) {
          let checkbox = mainBlocks[i].querySelector("input");
          if (checkbox.getAttribute("type") === "checkbox")
            checkbox.addEventListener("click", refreshPrice);
          checkbox.value = service.id;
          mainBlocks[i].querySelector("p.item-price").textContent = `${service.price_max} грн`
          mainBlocks[i].querySelector("p.item-time").textContent = `${service.seance_length / 60} ${LocMin}`
          servicesArr[service.id] = {"price": service.price_max, "length": service.seance_length / 60}

        }
      })
    }
  }
  else {
    servicesAll.map(function (service) {
      servicesArr[service.id] = {
        'price' : service.price_max,
        'length': service.seance_length / 60
      }
    })
  }
}

function getServices() {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + bearer_token
  }
  ajax('GET', headers, 'https://api.yclients.com/api/v1/book_services/' + partnerId + '?staff_id='
      + managerId, null, displayServices);
}

function mainFormSubmit(event) {
  event.preventDefault()
  let service = event.target.service.value
  let city = localStorage.city ? localStorage.city : 'unknown'
  let comment = (event.target.id === 'callComplex' ? 'complex ' : 'service consult ')

  let params = [
    event.target.fullname.value,
    event.target.email.value,
    event.target.phone.value,
    comment,
    [+service],
    managerId,
    city
  ]
  getBookTime([+service], 0, bookRecord, params)
}

function complexFormSubmit(event) {
  event.preventDefault()
  let name = event.target.fullname.value
  let email = event.target.email.value
  let phone = event.target.phone.value
  let city = localStorage.city ? localStorage.city : 'unknown'
  let isComplex = document.querySelector('input[type="radio"]:checked')
  let comment = (+event.target.payment.value ? 'payment' : 'online order') + (isComplex ? ' complex' : ' service')
  let serviceCheckboxes = document.querySelectorAll('input[name="service"]:checked')
  let services = [...serviceCheckboxes].map(checkbox => {
    return checkbox.value
  })
  if (+event.target.payment.value) {
    $('#paymentPopup').modal('show')
    let serviceNames = [...serviceCheckboxes].map(checkbox => {
      return checkbox.parentNode.nextElementSibling.textContent
    })
    payment(name, email, phone, comment, services, serviceNames.join(','))
  }
  else {
    let params = [name, email, phone, comment, services, managerId, city]
    getBookTime(services, 0, bookRecord, params)
  }
}

function getBookTime(services, plusDate = 0, callbackFunction, callbackParams) {
  let date = new Date()
  if (plusDate > 0) date.setDate(date.getDate() + plusDate)
  let dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) :
      date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

  let url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString;
  url += services ? ("?service_ids=" + encodeURIComponent(services.join(","))) : '';
  let headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};

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
        let err = processErrors(getData(data));
        if (servicesArr.length === 0) {
          getServices();
        } else if (!err) {
          $('#sendComplex').modal('hide');
          $('#modalServiceListSinugUp').modal('hide');
          $('#thanksPopup').modal('show');
        }
      });

}

function payment(name, email, phone, comment, services, servicesString) {
  localStorage.fullName = name
  localStorage.email = email
  localStorage.phone = phone
  localStorage.comment = comment
  localStorage.services = services
  let order_desc = 'User: ' + phone + ' ' + email + 'pay for services: ' + servicesString
  let amount = 0
  for (let i in services) {
    amount += servicesArr[services[i]].price
  }
  location.href = createOrder(amount, order_desc, name, servicesString, email, phone)
}

function createOrder(amount, order_desc, name, services, email, phone) {
  var button = $ipsp.get('button')
  button.setMerchantId(1397120)
  button.setAmount(amount, 'UAH', true)
  button.setResponseUrl(document.URL + '?payed=true'/*'http://steffany.dotwork.digital/laser/?payed=true'*/)
  button.setHost('api.fondy.eu')
  button.addField({
    label   : 'Описание платежа',
    name    : 'description',
    value   : order_desc,
    readonly: true
  })
  button.addField({
    label   : 'name',
    name    : 'user_name',
    value   : name,
    readonly: true
  })
  button.addField({
    label   : 'email',
    name    : 'user_email',
    value   : email,
    readonly: true
  })
  button.addField({
    label   : 'phone',
    name    : 'user_phone',
    value   : phone,
    readonly: true
  })

  button.addField({
    label   : 'services',
    name    : 'user_services',
    value   : services,
    readonly: true
  })

  return button.getUrl()
}

function refreshPrice(event) {


  let radioBtns = document.querySelectorAll('input[type="radio"]:checked');
  [...radioBtns].forEach(radio => {
    radio.checked = false
  })
  let checkbox = event.target
  let name = checkbox.parentNode.nextElementSibling.textContent
  let totalPriceElem = document.querySelectorAll('.serviceListSum')
  let temp = totalPriceElem[0].textContent.replace(' грн.', '')
  let totalPrice = checkbox.checked ? +temp + servicesArr[+checkbox.value].price : +temp - servicesArr[+checkbox.value].price
  totalPriceElem.forEach(elem => {
    if (totalPrice < 0)
      elem.textContent = "0 грн."
    else
      elem.textContent = totalPrice + " грн."
  })
  let totalTimeElem = document.querySelectorAll(".serviceListTime");
  temp = totalTimeElem[0].textContent.replace(LocMin, "");
  let totalTime = checkbox.checked ? +temp + servicesArr[+checkbox.value].length : +temp - servicesArr[+checkbox.value].length
  totalTimeElem.forEach(elem => {
    if (totalTime < 0)
      elem.textContent = '0'+LocHour;
    if (totalTime % 60 === 0 && totalTime > 0)
      elem.textContent = totalTime / 60 + LocHour;
    else {
      let minutes = totalTime % 60
      let hours = (totalTime - minutes) / 60
      if (hours === 0)
        elem.textContent = minutes + LocMin
      else
        elem.textContent = hours + LocHour+" " + minutes + LocMin

    }
  })
  let count = document.querySelectorAll('input[type="checkbox"][name="service"]:checked').length
  document.querySelector('#yclient_form .c-content-count').innerHTML = `
      <div class="d-flex justify-content-between"><span class="paragraph-text text-color-dark line-height">Выбрано услуг</span>
      <span class="paragraph-text text-w-bold text-color-dark ml-2 countCheckedService">${count}</span></div>
      <div class="d-flex justify-content-between"><span class="paragraph-text text-color-dark line-height">Общее время</span>
      <span class="paragraph-text text-w-bold text-color-dark ml-2 serviceListTime">${totalTime + LocMin}</span></div>
      <div class="d-flex justify-content-between"><span class="paragraph-text text-color-dark line-height">Общая сумма</span>
      <span class="paragraph-text text-w-bold text-color-dark ml-2 serviceListSum">${totalPrice} грн.</span></div>
      `
  let servicesContainer = document.querySelectorAll('.choosenServices');
  [...servicesContainer].forEach(container => {
    let elem = `
          <div class="checkbox-row checkbox-row-checked d-flex align-items-start justify-content-between py-2">
              <div class="column-right d-flex align-items-start">
                  <img src="./assets/icon/svg/checkbox.svg" class="mt-1 mr-2">
                  <p class="paragraph-text text-w-light text-color-white mb-0">${name}</p>
              </div>
              <div class="column-left d-flex justify-content-end">
                  <p class="paragraph-text text-w-bold text-color-white mb-0">${servicesArr[+checkbox.value].price} грн</p>
              </div>
        </div>
    `
    if (checkbox.checked) {
      container.innerHTML += elem
    }
    else {
      container.innerHTML = container.innerHTML.replace(elem, '')
    }
  })
}

function clearTotalPrice() {
  let checkBtns = document.querySelectorAll('input[type="checkbox"]:checked');
  [...checkBtns].forEach(check => {
    check.checked = false
  })
  let servicesContainer = document.querySelectorAll('.choosenServices');
  [...servicesContainer].forEach(container => {
    container.innerHTML = ''
  })
  let serviceListTime = document.querySelectorAll('.serviceListTime');
  [...serviceListTime].forEach(container => {
    container.innerHTML = "0"+LocMin+".";
  });

  let serviceListSum = document.querySelectorAll('.serviceListSum');
  [...serviceListSum].forEach(container => {
    container.innerHTML = '0 грн.'
  })
}
