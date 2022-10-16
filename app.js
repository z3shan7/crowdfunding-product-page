//////////////// Navbar ///////////////

const openBtn = document.querySelector('.logo-icons .ham-img');
const closeBtn = document.querySelector('.logo-icons .close-img');
const anchorLinks = document.querySelector('.anchor-links');

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
const thankuModal = document.querySelector('.thanku-modal')
const modalBtn = document.querySelectorAll('.modal__btn')
const pledgeBtn = document.getElementById('pledgeBtn')
const thankuBtn = document.getElementById('thankuBtn')
console.log(pledgeBtn)

///////////////  Open close modal functionalities ////////////////

const openModal = () => {
    modalContainer.classList.add('modal-container__show-modal')
}
const closeModalBtn = () => {
    modalContainer.classList.remove('modal-container__show-modal')
    modalColumn.forEach(item => item.classList.remove('active'))
}
const thankuPopup = () => {
    // const modalBtn = [...document.querySelectorAll('.modal__btn')].disabled = false

    thankuModal.classList.add('thanku-modal__show-check-modal')
    modalContainer.classList.remove('modal-container__show-modal')
}
const closePopup = () => {
    thankuModal.classList.remove('thanku-modal__show-check-modal')
}

///////////////  Open close Modal EventListener ////////////////

openModalBtns.addEventListener('click', openModal)
closeImg.addEventListener('click', closeModalBtn)
modalBtn.forEach(btn => btn.addEventListener('submit', thankuPopup))
pledgeBtn.addEventListener('click', () => {
    thankuPopup()
    // console.log('backed')
    addingReward()
})
thankuBtn.addEventListener('click', closePopup)

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

///////////////  form Input Section ////////////////


const bambooForm = document.getElementById('bamboo-form')
const blackEditionForm = document.getElementById('black-edition-form')
const bambooInput = document.getElementById('bamboo-input')
const blackEditionInput = document.getElementById('blackEdition-input')

console.log(bambooForm)
console.log(blackEditionInput.value)

// modalBtn.disabled = true

function checkLength(input, min, max) {
    if (input.value < min || input.value.contains === 'aaaa') {
        const modalBtn = document.querySelectorAll('.modal__btn').disabled = true
        console.log('working')
    }
    else {
        (input.value >= max)
        addingReward()
        closeModalBtn()

    }
}

bambooForm.addEventListener('submit', (e) => {
    e.preventDefault()
    checkLength(bambooInput, 25, 26)

})

blackEditionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    checkLength(blackEditionInput, 75, 76)
})
bambooInput.addEventListener('keydown', (e) => {
    inputInNumb(e)
})
blackEditionInput.addEventListener('keydown', (e) => {
    inputInNumb(e)
})

const inputInNumb = (e) => {
    let char = String.fromCharCode(e.which);
    if (!(/[0-9]/.test(char))) {
        e.preventDefault()
    }

}


///////////////  Adding Reward ////////////////
const fundedAmount = document.getElementById('fundedAmount')
const totalBackers = document.getElementById('totalBackers')
const rewardCount = document.getElementById('reward-count')

// console.log('fundedAmount')
console.log('rewardCount')


let currentValue = 5008
const addingReward = () => {
    let innerValue = currentValue++
    totalBackers.innerHTML = parseInt(innerValue)
}

const rewardLeft = () => {

}













