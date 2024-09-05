document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('my-form')
	form.addEventListener('submit', (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		console.log('kd e:', e)
		console.log('kd formData:', formData['first_name'])
	})
})
