window.patterns = {
  ru: 'beauty/$1',
  ua: 'beauty/ua/$1'
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
    const h = window.patterns[i18n].replace('$1', p)
    if (location.pathname.substr(1) !== h) {
      location.href = '/' + h
    }
  })
});
