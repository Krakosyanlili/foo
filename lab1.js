


/*es User@ konstruktra*/function User(name,age){
	this.name = name;
	this.age = age;
	this.isAdmin = false;
	this.say = function(w){console.log(w+this.name);};

}
var u1 = new User('hayk',20);
var u2 = new User('karen',21);
u1.say('Hello ');
u2.say('Hello ');
User.prototype.x = 5;//kpcrec konkret Userin//

User.x //es depqum u1 x chuni
console.log(u1.x);//ktpi 5
console.log(u1); //aystex chi tpi x@