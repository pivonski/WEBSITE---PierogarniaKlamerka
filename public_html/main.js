//Get elements from the DOM
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')
const counters = document.querySelectorAll('.counter')
const navbar = document.querySelector('.navbar')
const logo = document.getElementById('klamerka_logo')
const button = document.querySelector('order-button')
const footerYear = document.querySelector('.footer-year')
const logolanding = document.getElementById('logo-landing')

const menuBtns = document.querySelectorAll('.btn-menu')
const foodItems = document.querySelectorAll('.box')
const menuBackground = document.querySelectorAll('.objects')

//Menu Filter
let activeBtn = 'box'
showFoodMenu(activeBtn)

menuBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		resetActiveBtn()
		showFoodMenu(btn.id)
		btn.classList.add('active-btn')
	})
})
function resetActiveBtn() {
	menuBtns.forEach(btn => {
		btn.classList.remove('active-btn')
	})
}
function showFoodMenu(newMenuBtn) {
	activeBtn = newMenuBtn
	foodItems.forEach(item => {
		if (item.classList.contains(activeBtn)) {
			item.style.display = 'grid'
		} else {
			item.style.display = 'none'
		}
	})
}
//Toggle open/close menu
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-open')
})

document.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		logo.classList.add('logo_scrolled')
	} else {
		logo.classList.remove('logo_scrolled')
	}
})
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const cards = document.querySelectorAll('.SCcard')

cards.forEach(card => {
	card.addEventListener('click', () => {
		if (!card.hasAttribute('active')) {
			updateActiveCard(card)
		}
	})
})

function updateActiveCard(activeCard) {
	cards.forEach(card => {
		if (card === activeCard) {
			card.setAttribute('active', '')
		} else {
			card.removeAttribute('active')
		}
	})
}

handleCurrentYear()
