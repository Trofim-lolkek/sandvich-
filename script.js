let score = 0
let talk = document.querySelector('.talk')
let tomato = document.querySelector('.tomato') 
let bread = document.querySelector('.bread') 
let meat = document.querySelector('.meat') 
let chese = document.querySelector('.chese')

let location1 = document.querySelector('.location1')
let location2 = document.querySelector('.location2')
let location3 = document.querySelector('.location3')


let to = document.querySelector('.to') 
let br = document.querySelector('.br') 
let me = document.querySelector('.me') 
let ch = document.querySelector('.ch') 

let sum = 0
let y = [200, 400, 600]
let button = document.querySelector('.btn')
let thief = document.querySelector('.thief')
let types = ['rock', 'good']
let t = 9



tomato.onclick = function(){
	tomato.style.display = "none"
	score = score + 1000;
	to.style.textDecoration = "line-through"
	if (score == 4000){
		let smena1 = function(){
		location1.style.display = "none"
		location2.style.display = "block"
      }
      setTimeout(smena1, 1000)
	}
}
bread.onclick = function(){
	bread.style.display = "none"
	score = score + 1000;
	br.style.textDecoration = "line-through"
	if (score == 4000){
		let smena1 = function(){
		location1.style.display = "none"
		location2.style.display = "block"
      }
      setTimeout(smena1, 1000)
	}
}
meat.onclick = function(){
	meat.style.display = "none"
	score = score + 1000;
	me.style.textDecoration = "line-through"
	if (score == 4000){
		let smena1 = function(){
		location1.style.display = "none"
		location2.style.display = "block"
      }
      setTimeout(smena1, 1000)
	}
}
chese.onclick = function(){
	chese.style.display = "none"
	score = score + 1000;
	ch.style.textDecoration = "line-through"
	if (score == 4000){
		let smena1 = function(){
		location1.style.display = "none"
		location2.style.display = "block"
      }
      setTimeout(smena1, 1000)
	}
}

let trash = document.querySelectorAll(".trash")  
    for(let i=0; i<11; i=i+1){ 
      trash[i].onclick = function(){
      trash[i].style.background = "red";
      trash[i].style.backgroundImage = "url(trash.png)";
      trash[i].style.backgroundSize = "100% 100%";
    	}
    }

let treasure = document.querySelectorAll(".treasure")
    for(let i=0; i<1; i=i+1){ 
    treasure[i].onclick = function(){
    	score = score + 1000;
    	document.querySelector(".score").innerHTML = score;
    	if (score == 5000){
      treasure[i].style.background = "green";
      treasure[i].style.backgroundImage = "url(Treasure-Chest.png)";
      treasure[i].style.backgroundSize = "100% 100%";
      let smena2 = function(){
		location2.style.display = "none"
		location3.style.display = "block"
      }
      setTimeout(smena2, 1000)
	}
    }
}


let createDuck = function() {
			let thief = document.createElement('div');
			document.body.appendChild(thief);
			thief.classList.add('thief')
			randomX = Math.round(Math.random()*1400+200)
			thief.style.left = randomX + 'px'
			randomY = Math.round(Math.random()*2)
			thief.style.top = y[randomY]+ 'px'

			let typeIndex = Math.round(Math.random()*1);
			thief.myType = types[typeIndex]
			if(thief.myType=='good') {
				thief.style.backgroundImage = "url(5.png)";
				thief.style.backgroundSize = "100% 100%"
			}else if (thief.myType=='rock'){
				thief.style.backgroundImage = "url(rock.png)";
				thief.style.backgroundSize = "100% 100%"
			} 

			thief.onclick = function() {
				thief.style.display = 'none';
				thief.myType = types[typeIndex]
				if(thief.myType=='good') {
				sum = sum + 1;
				document.querySelector(".sum").innerHTML = sum;
			}else if (thief.myType=='rock'){
				sum = sum + 0;
				document.querySelector(".sum").innerHTML = sum;
			}
			}
			}
		
		
		let endGame = function(){
			clearInterval(interval1)
			clearInterval(interval2)
			if (sum>=6) {
				alert ('ура ты спас бутерброд')
		}else {
			alert('АХАХА ТЫ ОПОЗДАЛ ОНИ СЪЕЛИ ТВОЙ ВОЗМОЖНО ПОСЛЕДНЫЙ СЭНДВИЧ')
			setTimeout(createDuck, 10000)
		}
}
		button.onclick = function() {
			interval1 = setInterval(createDuck, 250)
			setTimeout(endGame,10000)
			let timer = function() {
        t = t - 1
        document.querySelector(".timer").innerHTML = t
        }
        interval2= setInterval(timer, 1000)
		}


location2.style.display = "none"