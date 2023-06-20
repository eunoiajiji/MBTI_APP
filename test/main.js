const itemEls = document.querySelectorAll('.item')
const btnEl = document.querySelector('.btn')
const colors = ["rotalblue","orange","tomato","skyblue"]

btnEl.addEventListener('click', function () {
  itemEls.forEach(function (itemEl) {
    console.log(itemEl)
    itemEl.computedStyleMap.backgroundColor="royalblue"

  })

})