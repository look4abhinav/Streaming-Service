document.querySelector('#toggle').addEventListener('click',function(){
	var body = document.querySelector('body')
	var btn = document.querySelector('#toggle')
	if(btn.textContent === 'Dark'){
		body.style.setProperty('color','white')
		body.style.setProperty('background-color','black')
		/*body.style.setProperty('background','url("https://wallpaperaccess.com/full/104483.jpg")')
		body.style.setProperty('background-repeat','no-repeat')*/
		btn.classList.remove('btn-dark')
		btn.classList.add('btn-light')
		btn.textContent = 'Light'
	}
	else{
		body.style.setProperty('color','black')
		body.style.setProperty('background-color','white')
		btn.classList.remove('btn-light')
		btn.classList.add('btn-dark')
		btn.textContent = 'Dark'
	}
})

function stream(episode){
	var play = document.querySelector("#myVideo")
	var isVisible = window.getComputedStyle(play)
	if(isVisible.getPropertyValue('display')==='none'){
		play.style.setProperty('display','block')
		var source = document.querySelector('#episode')
		source.setAttribute('src','files/Steve_Jobs_2015_720p.mp4')
		play.load()
	}
	else{
		play.style.setProperty('display','none')
	}
}
