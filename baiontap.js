
//xử lý object
//bài 3
  var objs = [ 
  {name: 'huy', gender: 'Male', age: 20},
  {name: 'Huy', gender: 'Male', age: 22},
  {name: 'Hưng', gender: 'Male', age: 23},
  {name: 'My', gender: 'Male', age: 19},
  {name: 'hung', gender: 'Male', age: 10},
  ];

function bai3(objs) {
  var compare = function(a, b) {
    if (a.age > b.age) return 1;
    else if (a.age < b.age) return -1;
    else return 0;
  };
  objs.sort(compare);
  return objs;
}
  //bài 4 sắp xếp lại mảng trên theo tên học viên
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
//bai5 lọc sinh viên có chữ cái đầu 'H' hoặc 'h'
var objs = [ 
  {name: 'huy', gender: 'Male', age: 20},
  {name: 'Huy', gender: 'Male', age: 20},
  {name: 'Hưng', gender: 'Male', age: 20},
  {name: 'My', gender: 'Male', age: 20},
  {name: 'hung', gender: 'Male', age: 20},
  ];
  
function getHname() {
var obj =[];
for(var i =0; i< objs.length;i++){
  if ( objs[i].name.toUpperCase().charAt(0)==='H'){
      obj.push(objs[i].name);
    }
  }
  return document.write(obj);
}
getHname();
//bài 6
var obj = [
  { name: 'Huy', gender: 'Male', age: 20 },
  { name: 'Huy', gender: 'Male', age: 26 },
  { name: 'Huy', gender: 'Male', age: 21 },
  { name: 'Huy', gender: 'Male', age: 23 }
]
function age() {
  var trungbinh = 0;
  for(var i = 0;i< obj.length;i++){
    trungbinh += obj[i].age;
  }
  return trungbinh /= obj.length
}
console.log(age())

//xử lý số
//bài 1 viết hàm tính hình cầu
function hinh_cau(R){
  return (hinh_cau = 4/3 * math.PI * (R*R*R));
}
//bài 3 số nguyên tố

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

//bài 2 
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

//bài 5  tổng của ước
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

//bài 6 fibonacci
function fibonacci (n) {
var sum = 0
  if (n===1) {
    return [0, 1];
 }
else {
    var tong = fibonacci(n - 1);
    tong.push(tong[tong.length - 1] + tong[tong.length - 2]);
    return tong;
}      
};
console.log(fibonacci(8));// đoạn này em chưa làm xong

// xử lý chuỗi
//bài 1 viết hoa chữ cái đầu
function titleCase(arr) {
   var newArr = arr.toLowerCase().split(' ');
   for (var i = 0; i < newArr.length; i++) {
       newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substring(1);     
   }
   return newArr.join(' '); 
}
// bài 2
function spinalCase(array) {
array = array.toLowerCase()
return array.replace(/ /g, '-');
//bài 3
function ifEqual(str) {
str = str.toLowerCase().trim();
    return str === str.split("").reverse().join("")
}
document.write(ifEqual("loL  "))

// tổng hợp
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
//phương trình bậc 2

var a=parseFloat (prompt("nhap a",""));
var b=parseFloat (prompt("nhap b",""));
var c=parseFloat (prompt("nhap c",""));
var delta=((b*b)-(4*a*c));
if (delta==0)
{
 alert ("phuong trinh co nghiem kep x1 = x2 = " +(-b/2/a) +" ");
 
}
else
{
 if (delta>0)
 {
 alert ("phuong trinh co nghiem x1 = "+ ((-b-Math.sqrt(delta))/2/a)+", x2 = "+ ((-b+Math.sqrt(delta))/2/a)+" ");
 
 }
 else
 {
 alert ("phuong trinh vo nghiem");
 }
}
