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

window.onload = function () {
  getServices();
  var complexForm = $('#yclient_form')
  if (complexForm)
    complexForm.on('submit', complexFormSubmit)
  // var consultForm = $('form.main-form')
  // if (consultForm)
  //   consultForm.on('submit', consultWrite)

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
  let services = [...serviceCheckboxes].map(checkbox => {
    return checkbox.value;
  });
  let city = localStorage.city ? localStorage.city : "unknown";
  let params = [name, email, phone, comment, services, city, managerId]
  let date = getBookTime(services, 0, bookRecord, params);
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
    let dataArr = getData(data);
    if (processErrors(dataArr)) return alert("Error");
    if (dataArr.length < services.length) return bookRecord(event, ++plusDate);
    else {
      callbackParams.push(dataArr[0].datetime);
      callbackFunction(...callbackParams)
    }
  });
}

function bookRecord(name, email, phone, comment, services, city, managerId, datetime) {
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
      if (!err) {
      }
    });
}