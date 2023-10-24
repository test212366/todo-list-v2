const form = document.getElementById('form'),
	input = document.getElementById('input'),
	items = document.getElementById('items')
let itemsLS = localStorage.getItem('items')


if (itemsLS) {
	itemsLS = JSON.parse(itemsLS)
	itemsLS.forEach(item => {
		createElement(item.text)
	})
}

function addToLocalStorage() {
	const itemEl = document.querySelectorAll('.title')
	const itemsEl = []
	itemEl.forEach(item => {
		itemsEl.push({
			text: item.textContent
		})
	})
	localStorage.setItem('items', JSON.stringify(itemsEl))
}



function createElement(textNow) {
	let text = input.value.trim()
	if (textNow) {
		text = textNow
	}


	if (text) {
		const item = document.createElement('div')
		item.classList.add('item')
		item.insertAdjacentHTML('afterbegin', `
			<div class="title">${text}</div>
			<button class="btn delete" id="delete">delete</button>
		`)
		items.appendChild(item)
		addToLocalStorage()
		const delet = item.querySelector('.delete')
		delet.addEventListener('click', () => {
			item.remove()
			addToLocalStorage()
		})
		item.addEventListener('dblclick', () => {
			item.classList.toggle('complete')
			addToLocalStorage()
		})

	} else return



}


form.addEventListener('submit', e => {
	e.preventDefault()
	createElement()
})

