let xhr = new XMLHttpRequest();

xhr.open("GET","https://minhducluong.github.io/db.json",true);
xhr.send();
var number = 0;
function x(){

	let data = JSON.parse(xhr.responseText);
	let films = data.films;
	let htmlContent = '';
	if(this.number < films.length -1) {
		htmlContent += `		
			<tr>
			<td>${films[this.number].genre}</td>
			<td>${films[this.number].title}</td>
			<td>${films[this.number].duration}</td>
			<td>${films[this.number].date}</td>
			</tr>
			<tr>
			<td>${films[this.number +1].genre}</td>
			<td>${films[this.number +1].title}</td>
			<td>${films[this.number +1].duration}</td>
			<td>${films[this.number +1].date}</td>
			</tr>
			`;
			this.number+=2
		console.log(this.number)
	} else if(this.number == films.length -1) {
		htmlContent += `<tr>
			<td>${films[this.number].genre}</td>
			<td>${films[this.number].title}</td>
			<td>${films[this.number].duration}</td>
			<td>${films[this.number].date}</td>
			</tr>`
			this.number++
	} else {}
	document.getElementById('table').innerHTML += htmlContent;
		};



