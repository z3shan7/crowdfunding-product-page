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
const bambooModalBtn = document.getElementById('bambooModalBtn')
const blackEditionModalBtn = document.getElementById('blackEditionModalBtn')


///////////////  Open close modal functionalities ////////////////

const openModal = () => {
    modalContainer.classList.add('modal-container__show-modal')
}
const closeModalBtn = () => {
    modalContainer.classList.remove('modal-container__show-modal')
    modalColumn.forEach(item => item.classList.remove('active'))
}
const thankuPopup = () => {

    thankuModal.classList.add('thanku-modal__show-check-modal')
    modalContainer.classList.remove('modal-container__show-modal')
}
const closePopup = () => {
    thankuModal.classList.remove('thanku-modal__show-check-modal')
}

///////////////  Open close Modal EventListener ////////////////

openModalBtns.addEventListener('click', openModal)
closeImg.addEventListener('click', closeModalBtn)

///////////////  Modal EventListeners ////////////////


pledgeBtn.addEventListener('click', () => {
    addingBackers()
    thankuPopup()

})
thankuBtn.addEventListener('click', closePopup)

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('modal-container__show-modal')) {
        closeModalBtn()
    }
})

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
const fundedAmount = document.getElementById('fundedAmount')
const totalBackers = document.getElementById('totalBackers')
const rewardCount = document.getElementById('reward-count')
const rewardLeftBamboo = document.querySelectorAll('.reward-left-bamboo')
const rewardLeftBlack = document.querySelectorAll('.reward-left-black')
// const rewardLeft = document.querySelectorAll('.reward-left')z
const bambooInput = document.getElementById('bamboo-input')
const blackEditionInput = document.getElementById('blackEdition-input')
const modalInput = document.querySelectorAll('.modal__input')



bambooForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addingBackers()
    checkLength(bambooInput, 24, 25)
    displayRewardLeft()
    addToTotalCount(bambooInput.value)
    // addingReward()


})


blackEditionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addingBackers()
    checkLength(blackEditionInput, 74, 75)
    rewardSub()
})



///////////////  Adding and subtracting Reward ////////////////

// console.log(modalInput)



function checkLength(input, min, max) {
    if (input.value < min) {
        Error('Input cannot empty')

    }
    if (input.value >= max) {

        thankuPopup()
    }
}


// let rewardBacked = 89914;

// console.log(rewardBacked + 400 + 200 + 25)
// const addingReward = () => {
//     modalInput.forEach((input) => {
//         let AmountBacked = rewardBacked + Number(input.value)
//         fundedAmount.innerHTML = `<p class="funds__header--section-heading" id="fundedAmount">$${AmountBacked}</p>`
//         console.log(AmountBacked)

//     })
// }

const addToTotalCount = (count) => {
    let n = fundedAmount.innerHTML;
    n = n.replace(/\,/g, '');
    n = parseInt(n, 10);
    n += Number(count);
    // fundedAmount.innerHTML = n.toLocaleString("en-US");
    console.log(+count + 89914)
    // updateRange();
}


let currentValue = 5007 + 1;
const addingBackers = () => {
    let innerValue = currentValue++
    totalBackers.textContent = parseInt(innerValue)
}


let currentReward = 101 - 1;

const displayRewardLeft = () => {
    if (bambooInput >= 25) {
        let AmountSubs = currentReward--
        rewardLeftBamboo.forEach((btn) => {
            btn.innerHTML = `<p class="rewardLeftBamboo">${AmountSubs} <span class="span">left</span></p>`
        })
    }
}

let rewardBamboo = 64 - 1
const rewardSub = () => {
    if (blackEditionInput >= 75) {
        let AmountSubs = rewardBamboo--
        rewardLeftBlack.forEach((btn) => {
            btn.innerHTML = `<p class="rewardLeftBlack">${AmountSubs} <span class="span">left</span></p>`
        })
    }
}















