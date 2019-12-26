const links         = {
        baba1: '/podology',
        baba2: '/laser',
        baba3: '/beauty'
      },
      getParentBaba = target => target.dataset.baba ? target.dataset.baba : getParentBaba(target.parentElement)

document.body.addEventListener('click', event => {
  location.pathname = links[getParentBaba(event.target)]
})
