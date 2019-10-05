/*first*/
class Author {
    constructor(name, email, gender){
        this._name = name;
        this._email = email;
        this._gender = gender;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    toString();
}

class Book extends Author {
    constructor(title, author, price, quantity){
        super(author = name);
        this._title = title;
        this._price = price;
        this._quantity = quantity;
    }
    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    getProfit(){
       return  this.price * this.quantity;
    }
}

/*second*/

class Account {


    constructor(id, name, balance){
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get id(){
        return this._id;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }
    set balance(value){
        this._balance = value;
    }
    credit(amount){
        return amount + this.balance;
    }
    debit(amount){
        if (amount < this.balance){
            return this.balance - amount;
        }else {
            return "Amount exceeded balance.";
        }
    }
    transferTo(anotherAccount, amount) {
        if (amount < this.balance){
            let subtractFromBalance =  this.balance - amount;
            anotherAccount += subtractFromBalance;
            return this.balance;
        }else {
            return "Amount exceeded balance.";
        }
    }
    static identifyAccounts(accountFirst, accountSecond){
        const propsOfAccountFirst = [];
        const propsOfAccountSecond = [];
        for (let i in accountFirst){
            if (accountFirst.hasOwnProperty(i)){
                propsOfAccountFirst.push(i);
            }
        }
        for (let j in accountSecond){
            if (accountSecond.hasOwnProperty(j)){
                propsOfAccountSecond.push(j);
            }
        }
        return propsOfAccountFirst === propsOfAccountSecond;
    }
    toString();
}

/*third*/

class Person {
    constructor(firstName, lastName,age, gender){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._gender = gender;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    toString();

}

class Student extends Person {
    constructor(firstName, lastName,age, gender, program, year, fee ){
     super(firstName, lastName, age, gender);
     this._program = program;
     this._year = year;
     this._fee = fee;
    }

    get program() {
        return this._program;
    }

    set program(value) {
        this._program = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        this._fee = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    passExam(program, grade){
        if (grade >= 50){
            ++this.year;
            this.data = "Graduated";
        }
    }

    toString() {
        super.toString();
    }
}

class Teacher extends Person{
    constructor(firstName, lastName,age, gender, program, pay){
        super(firstName, lastName, age, gender);
        this._program = program;
        this._pay = pay;

    }
    get program() {
        return this._program;
    }

    set program(value) {
        this._program = value;
    }

    get pay() {
        return this._pay;
    }

    set pay(value) {
        this._pay = value;
    }
    toString() {
        super.toString();
    }
}