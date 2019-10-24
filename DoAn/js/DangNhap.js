var name = false;
var password = false;
function check(value, x) {
	var span = document.getElementById(x);
	var name = /[A-Za-z0-9_]/;
	var password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
	switch(x) {
			case 'name':
			if(name.test(value) == true) {
				this.name =true;
				span.classList.remove('none');
				$('#name').html('&#10004');
			}else {
				this.name = false;
				span.classList.remove('none');
				$('#name').html(' &#9888 vui lòng nhập đúng');
			}
			break;
			case 'password':
			if(password.test(value) == true) {
				this.password =true;
				span.classList.remove('none');
				$('#password').html('&#10004');
			}else {
				this.password = false;
				span.classList.remove('none');
				$('#password').html(' &#9888 Vui lòng nhập password');
			}
			break;
			default:
		}
		$('form').on('submit', function(event) {
		  if(name == false || password == false) {
		  	if(name ==false) {
		  		document.getElementById('name').classList.remove('none');
	  			$('#name').html('ban sai o day');
		  	}
		  	alert('Vui long nhap thong tin chinh xac');
		  } else { alert('dang ky thanh cong')}
	      event.preventDefault();
	        });



		//
			<script
	src="http://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin="anonymous"></script>

	<script type="text/javascript">
		var name = false;
		var email = false;
		var password = false;
		function check(value, x) {
			var span = document.getElementById(x);
		// var variable = x;
		var name = /[A-Za-z0-9_]/;
		var email = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
		var password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
		// if(x == name)
		switch(x) {
			case 'name':
			if(name.test(value) == true) {
				this.name =true;
				span.classList.remove('none');
				$('#name').html('&#10004');
			}else {
				this.name = false;
				span.classList.remove('none');
				$('#name').html(' &#9888 vui lòng nhập đúng');
			}
			break;
			case 'email':
			if(email.test(value) == true) {
				this.email =true;
				span.classList.remove('none');
				$('#email').html('&#10004');
			}else {
				this.email = false;
				span.classList.remove('none');
				$('#email').html(' &#9888 Vui lòng nhập đúng ký tự @');
			}
			break;
			case 'password':
			if(password.test(value) == true) {
				this.password =true;
				span.classList.remove('none');
				$('#password').html('&#10004');
			}else {
				this.password = false;
				span.classList.remove('none');
				$('#password').html(' &#9888 Vui lòng nhập password');
			}
			break;
			default:
		}
		console.log(this.name + this.email)
	}
	  $('form').on('submit', function(event) {
		  if(name == false || email == false || password == false) {
		  	if(name ==false) {
		  		document.getElementById('name').classList.remove('none');
	  			$('#name').html('ban sai o day');
		  	}
		  	alert('Vui long nhap thong tin chinh xac');
		  } else { alert('dang ky thanh cong')}
	      event.preventDefault();
	    // }

  });
</script>