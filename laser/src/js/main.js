const xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
const bearer_token = "f5wujgx5yn6cagtk9fg2";
const partnerId = 111624;
const managerId = 819601;
let servicesArr = [];

function getData(data) {
  let answer;
  // try {
  answer = JSON.parse(data);
  // } catch (err) {
  //   return {error: err.message, status: answer['errors']['code']};
  // }
  if (answer["errors"]) {
    if (answer["errors"].length > 1) return {
      error: answer['errors'][0]['message'],
      status: answer['errors'][0]['code']
    };
    else return {error: answer['errors']['message'], status: answer['errors']['code']};
  }
  return answer;
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

document.addEventListener('DOMContentLoaded', function () {
  getServices();
  let complexForm = $('#yclient_form');
  if (complexForm)
    complexForm.on('submit', complexFormSubmit);
  if (document.URL.includes('payed=true')) bookAfterRecord();
  console.log(servicesArr)
  // var consultForm = $('form.main-form')
  // if (consultForm)
  //   consultForm.on('submit', consultWrite)

});

function bookAfterRecord() {

  if (localStorage.email && localStorage.fullName && localStorage.services && localStorage.phone) {
    let services = localStorage.services.split(",");
    let params = [localStorage.fullName, localStorage.email, localStorage.phone, localStorage.comment, services, managerId, localStorage.city ? localStorage.city : "unknown"]
    getBookTime(services, 0, bookRecord, params);
    $('#thanksPopupPay').modal('show');
    localStorage.removeItem('name')
    localStorage.removeItem('comment')
    localStorage.removeItem('phone')
    localStorage.removeItem('email')
    localStorage.removeItem('services')
    window.history.replaceState({}, document.title, document.URL.replace("?payed=true", ""));
  }
}

function displayServices(json) {

  let servicesBlock = document.querySelector("div.service-list-group");
  let data = getData(json);
  let servicesAll = data.services
  if (servicesBlock) {
    let mainBlocks = document.getElementsByClassName("checkbox-row")
    let servicesStatic = Array.prototype.map.call(mainBlocks, block => {
      return block.getAttribute("id");
    })
    servicesStatic = servicesStatic.filter(service => !!service)
    for (let i = 0; i < servicesStatic.length; i++) {
      servicesAll.map(function (service) {
        if (+servicesStatic[i] === service.id) {
          mainBlocks[i].querySelector("input").value = service.id;
          mainBlocks[i].querySelector("p.item-price").textContent = `${service.price_max} грн`
          mainBlocks[i].querySelector("p.item-time").textContent = `${service.seance_length / 60} мин`
          servicesArr[service.id] = {"price": service.price_max, "length": service.seance_length / 60}
        }
      })
    }
  } else {
    servicesAll.map(function (service) {
      servicesArr[service.id] = {"price": service.price_max, "length": service.seance_length / 60}
    })
  }
}

function getServices() {
  let headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  ajax('GET', headers, 'https://api.yclients.com/api/v1/book_services/' + partnerId + '?staff_id='
    + managerId, null, displayServices);
}

function complexFormSubmit(event) {
  event.preventDefault();
  let name = event.target.fullname.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;
  let comment = +event.target.payment.value ? "payment" : "online order";
  let serviceCheckboxes = document.querySelectorAll('input[name="service"]:checked');
  let city = localStorage.city ? localStorage.city : "unknown";
  let services = [...serviceCheckboxes].map(checkbox => {
    return checkbox.value;
  });
  if (+event.target.payment.value) {
    let serviceNames = [...serviceCheckboxes].map(checkbox => {
      console.log(checkbox.parentNode)
      console.log(checkbox.parentNode.closest(".paragraph-text"))
      return checkbox.parentNode.nextElementSibling.textContent;
    });
    payment(name, email, phone, comment, services, serviceNames.join(","))
  } else {
    let params = [name, email, phone, comment, services, managerId, city]
    getBookTime(services, 0, bookRecord, params);
  }
}

function getBookTime(services, plusDate = 0, callbackFunction, callbackParams) {
  let date = new Date();
  if (plusDate > 0) date.setDate(date.getDate() + plusDate);
  let dateString = date.getFullYear() + '-' + ((date.getMonth()) + 1 < 10 ? '0' + (date.getMonth() + 1) :
    date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

  let url = 'https://api.yclients.com/api/v1/book_times/' + partnerId + '/' + managerId + '/' + dateString;
  url += services ? ("?service_ids=" + encodeURIComponent(services.join(","))) : '';
  let headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};
  ajax('GET', headers, url, null, function (data) {
    console.log("nicce")
    let dataArr = getData(data);
    if (processErrors(dataArr)) return alert("Error");
    if (dataArr.length < services.length) return bookRecord(++plusDate);
    else {
      callbackParams.push(dataArr[0].datetime);
      callbackFunction(...callbackParams)
    }
  });
}

function bookRecord(name, email, phone, comment, services, managerId, city, datetime) {
  let headers = {"Content-Type": "application/json", "Authorization": "Bearer " + bearer_token};

  let date = new Date();
  let userParams = {
    "phone": phone,
    "fullname": name,
    "email": email,
    "comment": 'online order' + ' ' + city + " " + comment,
    "appointments": [
      {
        "id": date.getTime(),
        "services": services,
        "staff_id": managerId,
        "datetime": datetime
      }
    ]
  };

  console.log(userParams)
  ajax('POST', headers, 'https://api.yclients.com/api/v1/book_record/' + partnerId, userParams,
    function (data) {
      let err = processErrors(getData(data));
      if (servicesArr.length===0 ) {
        getServices();
      }
    });
}

function payment(name, email, phone, comment, services, servicesString) {
  localStorage.fullName = name;
  localStorage.email = email;
  localStorage.phone = phone;
  localStorage.comment = comment;
  localStorage.services = services;
  let order_desc = "User: " + phone + " " + email + "pay for services: " + servicesString;
  let amount = 0;
  for (let i in services) {
    amount += servicesArr[services[i]].price;
  }
  location.href = createOrder(amount, order_desc, name, servicesString, email, phone);
}

function createOrder(amount, order_desc, name, services, email, phone) {
  var button = $ipsp.get('button');
  button.setMerchantId(1397120);
  button.setAmount(amount, 'UAH', true);
  button.setResponseUrl(document.URL + "?payed=true"/*'http://steffany.dotwork.digital/laser/?payed=true'*/);
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

  return button.getUrl();
}
