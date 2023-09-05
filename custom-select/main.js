lucide.createIcons()

let selectContainer = document.querySelector('.container')
let selectedValue = document.querySelector('.selected-value')
let optionsViewButton = document.getElementById('options-view-button')
let inputsOptions = document.querySelectorAll('.option input')

inputsOptions.forEach(input => {
  input.addEventListener('click', event => {
    selectedValue.textContent = input.dataset.label

    const isMouseOrTouch = event.pointerType === "mouse" || event.pointerType === "touch"
    isMouseOrTouch && optionsViewButton.click()
  })
})

window.addEventListener('keydown', event => {
  if(!selectContainer.classList.contains('open')) return

  if(event.key === "Escape" || event.key === " ") {
    optionsViewButton.click()
  }
})

optionsViewButton.addEventListener('change', () => {
  selectContainer.classList.toggle('open')

  if(!selectContainer.classList.contains('open')) return

  const input = document.querySelector(".option input:checked") || document.querySelector('.option input')
  input.focus()
})