
//////////////// Navbar ///////////////

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

//////////////// Bookmark Button ///////////////

const btn2 = document.querySelector('#bookmark-btn')
const btnText = document.querySelector('.button-text')


btn2.addEventListener('click', () => {
    btn2.classList.add('active-btn')
    btnText.textContent = 'Bookmarked'
})


///////////////  Modal Section ////////////////

const modalContainer = document.querySelector('.modal-container')
const openModalBtns = document.querySelector('.modal-open')
const closeImg = document.getElementById('closeImg')


///////////////  Adding active class ////////////////

const modalColumn = document.querySelectorAll('.modal__column')

modalColumn.forEach((column) => {
    column.addEventListener('click', () => {
        modalColumn.forEach((element) => element.classList.remove('active'))
        column.classList.add('active')

    })
})


///////////////  Selected Reward Section ////////////////

const bambooBtn = document.getElementById('bambooBtn')
const blackEditionBtn = document.getElementById('blackEditionBtn')
const bambooStand = document.querySelector('.modal__bamboo-Stand');
const blackEdition = document.querySelector('.modal__black-Edition');


bambooBtn.addEventListener('click', () => {
    openModal()
    bambooStand.classList.add('active')

})

blackEditionBtn.addEventListener('click', () => {
    openModal()
    blackEdition.classList.add('active')

})

///////////////  Open close modal functionalities ////////////////

const openModal = () => {
    modalContainer.classList.add('modal-container__show-modal')
}


const closeModalBtn = () => {
    modalContainer.classList.remove('modal-container__show-modal')
    modalColumn.forEach(item => item.classList.remove('active'))

}


///////////////  Open close Modal EventListener ////////////////

openModalBtns.addEventListener('click', openModal)
closeImg.addEventListener('click', closeModalBtn)









