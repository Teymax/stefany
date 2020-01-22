$(document).ready(function () {
  $('.section.discount').click(function (e) {
    if (e.target.classList.contains('discount-radio')) {
      $('.section.discount .discard-sale').addClass('hidden')
      const discountRow = e.target.closest('.discount-row');
      if (discountRow) {
        discountRow.querySelector('.discard-sale').classList.remove('hidden')
      }
    }
  })
})
