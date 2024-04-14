//https://rapidapi.com/jakash1997/api/superhero-search
//it is from rapidapi and did not realy have a documentation page but with the code snippet, example responses and results did what the documentation would do
//also got the sourse code (strt with try catch) from the code snippet
let base='https://superhero-search.p.rapidapi.com/api/?hero=';

let url;

// Get info from user
const studentInfo = document.getElementById('student-info');
const searchBtt=document.getElementById('searchBtt');
const hero=	document.getElementById('search-input');
const supperInfo=document.getElementById('superhero-info');
const size=document.getElementById('image-size');

// Replace the content with your student ID and name
async function fetchData(){
	//from the code snippet
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '00e595db80mshd049170895809cep161b91jsn55593ddd528a',//key (do not replicate or over use plase!)
			'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'//from source code - connect to the host
		}
	};
	try {//try to get hero info
		//if they dont enter anything
		if(hero.value===''){
			supperInfo.textContent='Please enter a superhero name';
			return;
		}		//check if the user entered a superhero name
		studentInfo.textContent = 'Student ID: 200560972 | Name: Rebecca Mazzocco';
		supperInfo.textContent='';//clear the previous search
		const url = `${base}${hero.value}`;//get full url to for the fetch
		const response = await fetch(url, options);
		const result=await response.json();
		console.log(result);//just to see what is in the result in console
		//create the elements that will hold the info
		const name=document.createElement('h2');
		const intelligence=document.createElement('p');
		const strength=document.createElement('p');
		const speed=document.createElement('p');
		const goodBad=document.createElement('p');
		const madeBy=document.createElement('p');
		const image=document.createElement('img');
		
		//get info from the result(api)
		name.textContent=result.name;
		intelligence.textContent=`Intelligence: ${result.powerstats.intelligence}`;
		strength.textContent=`Strength: ${result.powerstats.strength}`;
		speed.textContent=`Speed: ${result.powerstats.speed}`;
		goodBad.textContent=`Alignment: ${result.biography.alignment}`;
		madeBy.textContent=`Made by: ${result.biography.publisher}`;
		image.src=`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/${size.value}/${result.slug}.jpg`;
		image.alt=result.name;

		//add all the info to the page through the supperInfo div
		supperInfo.appendChild(name);
		supperInfo.appendChild(intelligence);
		supperInfo.appendChild(strength);
		supperInfo.appendChild(speed);
		supperInfo.appendChild(goodBad);
		supperInfo.appendChild(madeBy);
		supperInfo.appendChild(image);
		
	} catch (error) {//get error message if hero is not found
		console.error(error);
		supperInfo.innerHTML = `<h2>Hero not found</h2>`;
	}
}
searchBtt.addEventListener('click', fetchData);//when the search button is clicked, get the data