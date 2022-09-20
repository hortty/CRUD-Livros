// open-source by Microsoft
// Typed JS

// node 

// -Typescript compiler
// npm install -g typescript

// ts-node example

// npm run start

// tsconfig.json (languages, target)

// tsc (compilation dist folder [.js])

// const name: string = "Nome"
// const age: number = 13

// let array: string[] = ["java", "c#", "c++"]

// es5 Javascript
// interface Person {
// id: number;
// name: string;
// age: number;
// imageUrl?: string; //optional field
// }

// interface Image {
// url: string;
// size: {width:number; height: number}; //obj inside interface
// }

// interface Product {
// id:string;
// image: Image //interface inside interface
// }

// const user: User = {
// id: 2,
// name: "Bob",
// email: "bob@gmail.com"
// }

// //2 ways
// const users: User[] = [];
// const users: Array<User> = [];
 
// const user: User | null = null
//  		 | undefined

// 			param	   return type expected
// function getActive(count: number): User[] {
// 	return users;
// }

// every object needs an interface

// interface IProgramming {
// name:string;
// people: number;
// age?: number;
// }

// const typeScript: IProgramming = {
// name: "typescript",
// people: 25
// }

// enum Cheese {
// cheddar = "cheddar",
// goat = "goat"
// }

// cheeseType: Cheese

// let random: any = 10;
// (myVariable as string).toUpperCase();

// function sum(num1: number, num2?: number): number {
// return num1+num2;
// }

// interface Person {
// name: string;
// age: number;
// }

// function listarPessoa(pessoa: Person) {
// console.log(`${pessoa.name} ${pessoa.age}`)
// }

// class Animal {
// nameAnimal: string;

// constructor(name: string) {
// this.nameAnimal = name;
// }

// greet() {
// console.log(`test ${this.nameAnimal}`);
// }
// }

// let ani1 = new Animal("leao");
// ani1.greet();

// extends
// //super (em constructor)

// public, private, protected


const anExampleVariable: string[] = ["java", "c++", "C#"];
anExampleVariable.push("python");
anExampleVariable.reverse();
anExampleVariable.pop();
console.log(anExampleVariable[0], anExampleVariable.lastIndexOf("c++"));

class Person {
    nome: string;
    age: number;
    constructor(nome: string, age:number) {
        this.nome = nome;
        this.age = age;
    }

    showInfo() {
        console.log(`\nnome: ${this.nome} \nidade: ${this.age}`);
    }

}

const p1 = new Person("Jose", 23);
p1.showInfo();

function multNumber(x: number, y: number): number {
return x*y;
}
console.log(multNumber(3,5));