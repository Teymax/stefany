window.patterns = {
  ru: 'lazernaya-epilyatsiya/{{ city }}/$1',
  ua: 'lazernaya-epilyatsiya/ua/{{ city }}/$1'
}

window.nav = {
  podologiya: {
    zt: '/{{ i18n }}/laser'
  },
  edu       : {
    zt: '/{{ i18n }}/edu'
  }
}
$(document).ready(function () {
  $('[data-i18n]').on('click', e => {
    e.preventDefault()
    const i18n = e.target.dataset.i18n
    const p = location.pathname.split('/').slice(-1)[0]
    const urlCity      = location.pathname.slice(1).split('/')[2],
          filteredCity = ['rv', 'if', 'lv', 'lt'].find(city => city === urlCity) || 'zt'
    const h = window.patterns[i18n].replace('$1', p).replace('{{ city }}', filteredCity)
    if (location.pathname.substr(1) !== h) {
      location.href = '/' + h
    }
  })
})
