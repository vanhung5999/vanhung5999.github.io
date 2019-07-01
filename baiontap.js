

  //
  var objs = [ 
  {name: 'huy', gender: 'Male', age: 20},
  {name: 'Huy', gender: 'Male', age: 20},
  {name: 'Hưng', gender: 'Male', age: 20},
  {name: 'My', gender: 'Male', age: 20},
  {name: 'hung', gender: 'Male', age: 20},
  ];
  
function compare( a, b ) {
  if ( a.name.toUpperCase() < b.name.toUpperCase() ){
    return -1;
  }
  if ( a.name.toUpperCase() > b.name.toUpperCase() ){
    return 1;
  }
  return 0;
}

objs.sort( compare );
//bai5
  var objs = [ 
  {name: 'huy', gender: 'Male', age: 20},
  {name: 'Huy', gender: 'Male', age: 20},
  {name: 'Hưng', gender: 'Male', age: 20},
  {name: 'My', gender: 'Male', age: 20},
  {name: 'hung', gender: 'Male', age: 20},
  ];
  
function getHname( x ) {
  if ( x.name.toUpperCase().charAt(0)==='H')
  return objs(getHname);
}

// số nguyên tố

function kiem_tra_snt(n)
{
    var arr = true;
 
    if (n < 2){
        arr = false;
    }
    else if (n == 2){
        arr = true;
    }
    else if (n % 2 == 0){
      arr = false;
    }
    else{
 
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                arr = false;
                break;
            }
        }
    }
    if (arr == true){
        document.write(true);
    }
    else{
        document.write(false);
    }
}

//
function sumNumber (num1, num2) {
  var tong = 0;
  if(num1 < 0 || num2 < 0) {
    alert(' khong phải số nguyên')
  } else {
  for(num1+=1;num1<num2;num1++){
    tong+=num1;
  }
  return tong;
    }
}
document.write(sumNumber(3,8))

// tổng của ước
function uoc(number) {
  var tong = 0;
  if( number >= 0) {
    for(var i =1;i<= number;i++){
      if(number % i === 0){
        tong += i;
      }
    }
  } else (console.log('k phai so nguyen duong'))
  return tong;
}
console.log(uoc(6))

//
function fibonacci (n) {
var sum = 0
  if (n===1) {
    return [0, 1];
 }
else {
    var tong = fibonacci(n - 1);
    tong.push(tong[tong.length - 1] + tong[tong.length - 2]);
    return tong;
}  if (n % 2 ==0 ){
for (var i = 0; i < tong; i ++){
                sum += i; 
            }
        }return sum;           
};
console.log(fibonacci(8));

// xử lý chuỗi
//bài 1 viết hoa chữ cái đầu
function titleCase(arr) {
   var newArr = arr.toLowerCase().split(' ');
   for (var i = 0; i < newArr.length; i++) {
       newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substring(1);     
   }
   return newArr.join(' '); 
}
//
function spinalCase(array) {
  var newArr = '';
  var arr = array.split('');
  for (var i = 0; i < arr.length; i += 1) {
    if (i > 0) {
      if (arr[i] >= 'A' && arr[i] <= 'Z') {
        if (arr[i - 1] >= 'a' && arr[i - 1] <= 'z') {
          newArr += '-';
          newArr += arr[i].toLowerCase();
          continue;
        }
      }
      else if (arr[i] === ' ' || arr[i] === '_') {
        newArr += '-';
        continue;
      }
    }
    newArr += arr[i].toLowerCase();
  }
  return newArr;
}
spinalCase("'to la hung");
// phương trình bậc nhất
function giai_pt_bac_nhat(a, b)
{
    if (a == 0 && b == 0){
        alert('Phương trình vô số nghiệm');
    }
    else if (a != 0 && b == 0){
        alert('Phương trình có nghiệm x = 0');
    }
    else if (a == 0 && b != 0){
        alert("Phương trình vô nghiệm");
    }
    else {
        alert('Phương trình có nghiệm x = ' + (-b/a));
    }
}
//
function ptbh()
{
var a, b, c, delta, x, x1, x2;
a = document.nhap.a.value;
b = document.nhap.b.value;
c = document.nhap.c.value;
delta = b*b - 4*a*c;
if (delta < 0)
{
document.write(" Phương trình vô nghiệm ");
}
else if (delta ==0)
{
x = -b/2*a;
document.nhap.f.value =x;
}
else if (delta > 0)
{
x1 = (-b + Math.sqrt(delta))/(2*a);
document.nhap.d.value =x1;
x2 = (-b - Math.sqrt(delta))/(2*a);
document.nhap.e.value =x2;
}
}