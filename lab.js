

// User-constructor
function User(name,age){
	/*user1,user2*/this.x =name;
	/*user1,user2*/this.y =age;
	/*user1,user2*/this.z =10;
	this.foo = function(){
		console.log(this.name,this.age);
		//return true;
	}
}
//kanchum enq user1.foo();
var user1 = new User('hayk',20);
user1.foo2 = function(){};
var user2  = new User('karen',30);
console.log(user1.x);
user1.y
user2.z
//karox enq poxel anun@
user1.name = 'tigran';
//consoleum kanchel user1.constructor
console.log(user1.name);
console.log(user2.name);
console.log(user1.constructor);

var o1 ={};
var o2 = new Object();

if(o1 == o2) console.log('true');
var arr = [];
var arr2 = new Array();