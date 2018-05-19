function User(name,age){
	this.name = name;
	this.age = age;
}
User.prototype.foo = function(){
	return new User(this.name, this.age);
}
var user1 = new User('hayk',21);

//console
//user1.foo
//user1.foo().name

//add n anun e

function Book(title,pubYear,price){
	this.title = title
	this.pubYear = pubYear
	this.price = price

}
var book1 = new Book('good',1945,25);

Book.prototype.show = function(){
	return (this.title,this.pubYear);
}
console.log(book1.show());