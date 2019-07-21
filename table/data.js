$(function(){
	let films = [
	{genre: "Animation", title: "Wildfood", duration: "3:47", date: "2014-07-16"},
	{genre: "Film", title: "The Deer", duration: "6:24", date: "2014-02-28"},
	{genre: "Animation", title: "The Ghost", duration: "11:40", date: "2012-04-10"},
	{genre: "Film", title: "Animals", duration: "6:40", date: "2005-12-21"},
	{genre: "Animation", title: "Wagons", duration: "21:40", date: "2007-04-12"},
	{genre: "animation", title: "animals", duration: "22:40", date:"2019-04-11"},
	];
	function renderContent(){
	for(var i = 0 ; i < films.length ; i++)
		$("table").append(`
			<tr>
			<td>${films[i].genre}</td>
			<td>${films[i].title}</td>
			<td>${films[i].duration}</td>
			<td>${films[i].date}</td>
			`);
	}
		renderContent();

		function x(a,b){
		let arrayA = a.genre.toUpperCase();
		let arrayB = b.genre.toUpperCase();
		if(arrayA < arrayB){
			return -1; 
		}else if(arrayA>arrayB){
			return 1;
		}else return 0;
	}
	films.sort(x);
			function sort(a,b){
		let arrayA = a.genre.toUpperCase();
		let arrayB = b.genre.toUpperCase();
		if(arrayA < arrayB){
			return 1; 
		}else if(arrayA>arrayB){
			return -1;
		}else return 0;
	}
	films.sort(sort);
	let isSort = false;
	//bien
	var icon = document.getElementById('icon');
	var icon2 = document.getElementById('icon-2');
	var icon3 = document.getElementById('icon-3');
	var icon4 = document.getElementById('icon-4');

		$('th:first').on("click",function(event){
			if(isSort ==false) {
		$('tr:gt(0)').remove();
		films.sort(x);
		renderContent();
		isSort = true;
		icon.classList.remove('fa-sort');
		icon.classList.add('fa-sort-up');
		console.log(isSort)
	} else {
		console.log(isSort + 'else')
		$('tr:gt(0)').remove();
		films.sort(sort);
		renderContent();
		isSort = false
		icon.classList.remove('fa-sort-up');
		icon.classList.add('fa-sort-down')
	}
	});

	//sortTitle
	function sortTitle(a,b){
		let arrayA = a.title.toUpperCase();
		let arrayB = b.title.toUpperCase();
		if(arrayA < arrayB){
			return -1; 
		}else if(arrayA>arrayB){
			return 1;
		}else return 0;
	}
	films.sort(sortTitle);
			function sortTitleAgain(a,b){
		let arrayA = a.title.toUpperCase();
		let arrayB = b.title.toUpperCase();
		if(arrayA < arrayB){
			return 1; 
		}else if(arrayA>arrayB){
			return -1;
		}else return 0;
	}
	films.sort(sortTitleAgain);


		$('th:eq(1)').on("click",function(event){
			if(isSort ==false) {
		$('tr:gt(0)').remove();
		films.sort(sortTitle);
		renderContent();
		isSort = true;
		icon2.classList.remove('fa-sort');
		icon2.classList.add('fa-sort-up');
		console.log(isSort)
	} else {
		console.log(isSort + 'else')
		$('tr:gt(0)').remove();
		films.sort(sortTitleAgain);
		renderContent();
		isSort = false
		icon2.classList.remove('fa-sort-up');
		icon2.classList.add('fa-sort-down')
	}
	});

		//duration

function sortDuration(a,b){
				return new Date('1970/01/01 ' + a.duration) - new Date('1970/01/01 ' + b.duration);
			}
				films.sort(sortDuration);

				function sortDurationAgain(a,b){
					return new Date('1970/01/01 ' + b.duration) - new Date('1970/01/01 ' + a.duration);
				}
				films.sort(sortDurationAgain);


		$('th:eq(2)').on("click",function(event){
			if(isSort ==false) {
		$('tr:gt(0)').remove();
		films.sort(sortDuration);
		renderContent();
		isSort = true;
		icon3.classList.remove('fa-sort');
		icon3.classList.add('fa-sort-up');
		console.log(isSort)
	} else {
		console.log(isSort + 'else')
		$('tr:gt(0)').remove();
		films.sort(sortDurationAgain);
		renderContent();
		isSort = false
		icon3.classList.remove('fa-sort-up');
		icon3.classList.add('fa-sort-down')
	}
	});

		//date
			function sortDate(a,b){
		let arrayA = a.date.toUpperCase();
		let arrayB = b.date.toUpperCase();
		if(arrayA < arrayB){
			return -1; 
		}else if(arrayA>arrayB){
			return 1;
		}else return 0;
	}
	films.sort(sortDate);
			function sortDateAgain(a,b){
		let arrayA = a.date.toUpperCase();
		let arrayB = b.date.toUpperCase();
		if(arrayA < arrayB){
			return 1; 
		}else if(arrayA>arrayB){
			return -1;
		}else return 0;
	}
	films.sort(sortDateAgain);


		$('th:eq(3)').on("click",function(event){
			if(isSort ==false) {
		$('tr:gt(0)').remove();
		films.sort(sortDate);
		renderContent();
		isSort = true;
		icon4.classList.remove('fa-sort');
		icon4.classList.add('fa-sort-up');
		console.log(isSort)
	} else {
		console.log(isSort + 'else')
		$('tr:gt(0)').remove();
		films.sort(sortDateAgain);
		renderContent();
		isSort = false
		icon4.classList.remove('fa-sort-up');
		icon4.classList.add('fa-sort-down')
	}
	});

	})
