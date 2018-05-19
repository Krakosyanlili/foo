Object.prototype.y =10;
Number.prototype.z =10;


function User(name,age){//sa konstructon e
	this.name = name;
	this.age = age;
	this.foo = function(){console.log('FOO');};

}
User.prototype.foo = 5;
//delete user1.foo => user1.foo berec 5
user1 = new User('hayk',20);

//ete kanchenq foon user1i mej kberi function
//ete delet anenq kberi popoxvac foon;

//sra jamanak berum e inchqan el vor krknvox lini
for(var item in user1){
	console.log(item, user1[item]);
}

//x berum e
User.prototype.x = 6;
for(var item in user1){
	if(user1.hasOwnProperty(item))
		console.log(item);
}
//aranc if paymani amboxj@ berec isk owni jamanak miayn irann e berum