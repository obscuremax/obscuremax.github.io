const ConsultationButton = document.querySelector('.header-search-button')
const CloseMessageButton = document.querySelector('.message-btn')
const PopupBackground = document.getElementById('popup')
const PopupForm = document.getElementById('form')
const PopupMessage = document.getElementById('message')
const CertificationButton = document.querySelectorAll('.certification-btn')

PopupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('/')
    .then((res) => {
      if (res.ok) {
        closeModalWindow()
      }
    })
    .then(openPopupMessageWindow(), cleanInputName(), cleanInputPhone())
})

ConsultationButton.addEventListener('click', () => {
  openModalWindow()
})

PopupBackground.addEventListener('click', () => {
  closeModalWindow()
})

CloseMessageButton.addEventListener('click', () => {
  closePopupMessageWindow()
})

CertificationButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('certification-btn-rotate')
    let collections = e.currentTarget.parentNode.children

    for (let el of collections) {
      if (el.classList.contains('certification-subtitle')) {
        el.classList.toggle('none')
      }
    }
  })
})


function cleanInputName() {
  document.querySelector('.input-name').value = ''
}
function cleanInputPhone() {
  document.querySelector('.input-phone').value = ''
}

function openModalWindow() {
  PopupBackground.classList.remove('none')
  PopupForm.classList.add('form-popup')
}

function closeModalWindow() {
  PopupBackground.classList.add('none')
  PopupForm.classList.remove('form-popup')
}

function openPopupMessageWindow() {
  PopupMessage.classList.remove('none')
}

function closePopupMessageWindow() {
  PopupMessage.classList.add('none')
}