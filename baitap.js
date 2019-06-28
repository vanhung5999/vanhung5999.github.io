//bai2 tạo mảng mới chứa số chẵn và sắp xếp giảm dần
bai2([1,2,3,4,5,6])
function bai2(array) {
	var newArr = array.filter(array => array % 2 == 0);
	return newArr.sort(function sapXep(a,b){
		return a-b;
	});
}
//bai 1

bai1 
var arr = ['hung','trung','my','thang','hoa'];
arr.sort();
arr.forEach(sapxep);
function sapxep(item,index){
	console.log(`${index}: ${item}`);
}
//bai 6
 bai6(['hung','trung','my','thang','hoa',"Hao"])
 function hoathuong(arr){
    var ten = arr.filter(x => x.charAt(0)=='h' || x.charAt(0)=='H' );
    return ten;
}
//bai3
bai3([false, false, false, true, false, true, false, true]);
function bai3(arr) {
  var newArr = arr.indexOf(true);
  return newArr;
}
//bai4
function daonguoc(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
//bai5
function tinhtong(array) {
  var total = array.reduce((sum, value) => sum + value);
  return total;
}
//bai8
var students = [
  { name: "Alibaba", id: 1 },
  { name: "Kane", id: 2 },
  { name: "Steven", id: 3 },
  { name: "Mike", id: 4 },
  { name: "Suzy", id: 5 }
];

function bai8(students) {
  var compare = function(a, b) {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    else return 0;
  };
  users.sort(compare);
  return students;
}
//bai7
function mo(arr){
	var open = false;
	for (var i = 1 ; i <= n ; i ++){
		if (arr%i == 0)
			open = 1 - open;
	}return open;
}