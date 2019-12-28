window.patterns = {
  ru: 'beauty/{{ city }}/$1',
  ua: 'beauty/ua/{{ city }}/$1'
}

$(document).ready(function () {
  $('[data-i18n]').on('click', e => {
    e.preventDefault()
    const i18n = e.target.dataset.i18n
    const p = location.pathname.split('/').slice(-1)[0]
    const urlCity      = location.pathname.slice(1).split('/')[2],
          filteredCity = ['rv'].find(city => city === urlCity) || 'zt'
    const h = window.patterns[i18n].replace('{{ city }}', filteredCity).replace('$1', p)
    if (location.pathname.substr(1) !== h) {
      location.href = '/' + h
    }
  })
})
