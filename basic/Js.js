//기존 문법 정리
console.log("hi")

let name = "gihyeok";
let age = 17;

let person = {
    name,
    age
}

console.log(person);

let person2 = {
    name2: "기혁",
    age2:20
}

// let name2 = person2.name2
// let age2 = person2['age2']
let {name2,age2} = person2
console.log(name2,age2)

let array = [1,2,3,4]
let [a,b,...rest] = array  //a,b는 배열 0과 1생성 rest는 나머지.

console.log(rest)

let person3 = {name:"ki",age:12}
let person4 = {...person3,address:"incheon",name:"embid"}
let person5 = person3
console.log(person4); // 복사해서 서로 다른 객체
console.log(person5); //서로 같은 객체를 보고있슴

console.log(person4 == person5);
console.log(person3 == person5);

let d = [1,2]
let c = [...d,3]

console.log(c);

//삼항
let pe = {name:"bee",age:23}

if(pe){
    console.log(pe.name)
}else{
    console.log("there is no no no")
}

console.log(pe? pe.name:"no person")