const links         = {
        baba1: '/podologiya/',
        baba2: '/lazernaya-epilyatsiya/',
        baba3: '/beauty/'
      },
      getParentBaba = target => target.dataset.baba ? target.dataset.baba : getParentBaba(target.parentElement)

document.body.addEventListener('click', event => {
  location.pathname = links[getParentBaba(event.target)]
})
