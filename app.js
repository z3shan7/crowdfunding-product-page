
// Navbar
const openBtn = document.querySelector('.logo-icons .ham-img');
const closeBtn = document.querySelector('.logo-icons .close-img');
const anchorLinks = document.querySelector('.anchor-links')


openBtn.addEventListener('click', () => {
    anchorLinks.classList.add('show-links')
    if (anchorLinks.classList.contains('show-links')) {
        openBtn.style.display = 'none'
        closeBtn.style.display = 'block'
    }
    if (closeBtn.style.display = 'block') {
        closeBtn.addEventListener('click', function () {
            anchorLinks.classList.remove('show-links')
            closeBtn.style.display = 'none'
            openBtn.style.display = 'block'
        })
    }


})


// bookmark button

const btn2 = document.querySelector('#bookmark-btn')
const btnText = document.querySelector('.button-text')


btn2.addEventListener('click', () => {
    btn2.classList.add('active-btn')
    btnText.textContent = 'Bookmarked'

})


//  Modal Section

const modalContainer = document.querySelector('.modal-container')
const openModalBtns = document.querySelectorAll('.modal-open')
const closeImg = document.getElementById('closeImg')
console.log(modalContainer)
console.log(openModalBtns)
console.log(closeImg)

openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        console.log('first')
        modalContainer.classList.add('modal-container__show-modal')
    })
})

closeImg.addEventListener('click', () => {
    modalContainer.classList.remove('modal-container__show-modal')

})



