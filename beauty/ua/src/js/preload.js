function preloadFunc() {
  let links = {
    'rv': [
      'manikur',
      'naraschivanie-nogtei',
      'pedikur',
      'about',
      'salon',
      'contact',
      'modelirovanie-i-okrashivanie-brovei',
      'strizhki',
      'okrashivanie-volos',
      'spa-dlya-ruk',
      'policy'
    ]
  }
  let path = location.pathname.split('/')
  let pathArr = path.slice(2)
  if (pathArr.length > 1 && links[pathArr[0]] && pathArr[1] !== '' && pathArr[1] !== 'ua' && !links[pathArr[0]].includes(
    pathArr[1])) {
    let a = path.slice(0, -1).join('/')
    window.location.href = a + '/'
  }
  if (pathArr.length > 1 && links[pathArr[0]] && pathArr[1] !== '' && pathArr[1] === 'ua' && pathArr[2] !== '' && !links[pathArr[0]].includes(
    pathArr[2])) {
    let a = path.slice(0, -1).join('/')
    window.location.href = a + '/'
  }
}

window.onpaint = preloadFunc()
