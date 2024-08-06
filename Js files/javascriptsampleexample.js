// Note : Intreview questions 

// Note :-its take like zero
console.log(false==0); // true 
console.log(false>0); // false
console.log(false>=0); // true 

// hello world l count 

const hel= "Hello World";
let  count=0;
for(var i=0;i<hel.length;i++){
    
    if(hel[i]=="l"){
        count++;
    }
}
console.log(count);// 3

//Answer 6
console.log(true+5); 

//loops types in javascript 
//for loop for(var i=0;i<hel.length;i++){}
// let i=0; while(i<6) 
/* do{
    console.log("hello")
}
while(i>2){
    console.log("while");
}*/

const obj= {a:1,b:2,c:3};
for(let key in obj){
    console.log(key,obj[key]);
}
const arr= [1,2,4,5,6];
for(let value of arr){
    console.log(value);
}

//promises 

const prom1 = new Promise(
    (resolve,rejected)=>setTimeout(resolve,4000)
);
const prom2 = new Promise(
    (resolve,rejected)=>setTimeout(rejected,4000)
);
// code will excuted then next code not will excuted 

/*Promise.all(
    [prom1,prom2]
).then((data)=>console.log( "promise data "+data));*/

// -----end code 


//erro like : uncaught(in promise)
// Note:- promise all it was one rejected then then all rejected 
// so we can use 
//Promise.allSettled

Promise.allSettled(
    [prom1,prom2]
).then((data)=>console.log( "promise data "+data));

if(true){
    var isvar_functionScope="isvar_functionScope";
    let islet_functionScope="islet_functionScope";
    const isconst_functionScope="isconst_functionScope";
}
console.log(isvar_functionScope);
// console.log(islet_functionScope);   //ReferenceError: islet_functionScope is not defined 
// console.log(isconst_functionScope); //ReferenceError: islet_functionScope is not defined

const object={};
console.log(object) // undefined
console.log(object.a)  //answer :-  undefined but i need to show 1 2 3
// then i can manage code 
const obj1 ={
    val:1,
    get a(){
        return this.val++
    }
} 
console.log(obj1.a)// 1
console.log(obj1.a)// 2
console.log(obj1.a)// 3

//  ways of create object in javscript 
// first
 const obj2={
    name: "romesh"
 }
 // second
 const obj3=new Object();
 obj3.name="romesh";
// third
const obj4=Object.create(
    {
    name: "romesh"
    });
    const obj5=Object.assign(
        {
        name: "romesh"
        },
        {
        coutry: "India"
        });

    const obj6=Object.fromEntries([["name","romesh"],["newval","new value"]])
// all stidents get passed then true or else false 


    const exaimMarks=[
        {roll:1,marks:10},
        {roll:2,marks:90},
        {roll:3,marks:100}

    ]
    console.log(exaimMarks.every(_=>_.marks>=35)); // false 

    //hoisting 
 // line by line excution 
 // memeory alocation then we can access let and const
    let d=10;
    console.log(d);
    // its works fine 
    console.log(a);
    var a =20; // undefined

    var func= function(){
        return "hey function"
    }
    console.log(func());

    // exception handeling 
   function checkNumber(val){
    debugger 
    if(typeof val!== 'number'){
        throw new Error('invalid error : expected number ')
    }
    else 
    {
        console.log('this is number :'+val)
    }

   }
   checkNumber(123);

   // this key word 
   // refrence to immdetaily object or global object

   function showtime(){
    console.log(this);
   }
   showtime();   // Object[global]
   // if use crome browser then get window object
   /*
   <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },*/
    const hero ={
        name : "ganeeth",
        showthis: function(){
            console.log(this)
        }
    }
    hero.showthis(); //{ name: 'ganeeth', showthis: [Function: showthis] }

    //nested function

const hero_darling ={
        name : "ganeeth",
        showthis: function(){
           function innerfunction(){
            console.log("in side innerfunction this keyword :"+this)
           }
           innerfunction();
        }
    }
    hero_darling.showthis();  //in side innerfunction this keyword :[object global]

    // arraty function here this not there so immdetaly object printed 
    const instructor ={
        name : "instructor",
        interduce: function(){
            console.log(this.name)
           },
          nested:{
            name:"instructor nested",
            interduce: function(){
                console.log(this.name)
            }
          }
        }
        instructor.interduce();
        instructor.nested.interduce();

        /// how many was to call function in javascript 
        
        function myfun(val){
            console.log(val);
        }

        myfun("sample and normal calling finction");
        myfun.call(this,"call method through");
        myfun.apply(this,["array through inside array its taken normal string "]);
       const func2= myfun.bind(this,'bind methos through ');
       func2();
       myfun `hello this is called to  with back tick `;
// paramater mandtory how can say TCS Question 

  function show(name =check() ){
    console.log("Hey "+name)
  }
  show('romesh');
  function check(){
    throw new Error("params required ");
  }
  // spread operater 
  // using like ...data its called 
const firArr=[1,2,4,5];
const secArr=['a','b','c']
console.log(...firArr,secArr); //1 2 4 5 [ 'a', 'b', 'c' ]
console.log(...firArr,...secArr) //1 2 4 5  a, b, c
console.log([...firArr,...secArr]) 
console.log([...firArr,...secArr,'a','b']) 
 /* [
    1,   2,   4,   5,
    'a', 'b', 'c'
  ]*/

    // Rest operater 

   // function gatherArray(getarray){       // direct use so one value will get rest operater 1,2,4,5
        function gatherArray(...getarray){     //rest operater 1,2,4,5,a,b,c
        return getarray;
    }

    console.log("rest operater "+gatherArray(firArr,secArr));  
  
    //function sumnumber(number){   // number.reduce is not a function
    function sumnumber(...number){  // 15
        return number.reduce((a,c)=>a+c);
    }
    console.log(sumnumber(1,2,3,4,5));
    // join and concate 
    // join: The `join` method in JavaScript is used to join all elements of an array into a string. By default, the elements are separated by commas, but a custom separator can be specified.
    // concat :- The `concat` method in JavaScript is used to combine two or more arrays or strings into one new array or string. 
    //The `join` method operates on an existing array and does not create a new array, but rather returns a string representation of the array.
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const trees = ["Banana Tree", "Mango tree"];
    console.log(fruits.join(',')); //Banana,Orange,Apple,Mango
    console.log(fruits.concat(trees));//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Banana Tree', 'Mango tree' ]
    trees.push("new tree"); 
    console.log(trees);//[ 'Banana Tree', 'Mango tree', 'new tree' ]  add last
    trees.pop();
    console.log(trees);//[ 'Banana Tree', 'Mango tree' ]  remove last one 

trees.shift();
console.log(trees);  //[ 'Mango tree' ] remove first one  
trees.unshift(...fruits);
console.log(trees);// [ 'Banana', 'Orange', 'Apple', 'Mango', 'Mango tree' ] add first 
delete trees[1] // value deletd index not changed 

console.log(trees);
trees.slice(1);// fetch first one  
trees.slice(1,3);// fetch start : number 1 end : number 3  
console.log(trees);
trees.splice(3, 0, "Lemon", "Kiwi","grap"); //  (start:number 3,deleteCount : number 0 (right to left),..items:strig[])
console.log( "splice result "+trees)
trees.toSpliced(0,1) // remove start to end single element remove 


function showMessage(marks){
    const mess= marks|| "Absent";
    console.log(mess)
}
function showMessage_new(marks){
    const mess= marks ?? "Absent";
    console.log(mess)
}

showMessage(45)// 45
showMessage(35)// 35 
showMessage(0)// Absent     becz zero is take like false if need to rectify then ?? use 
//nullish coalescing operater ??
// ?? operater null or undefined values only not accepted then get 0

showMessage_new(0) // 0

// browser throttling 
///------------------------------------------BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
/*
let num =0;
setInterval(()=>{  // set timeout 
    console.log(num++);
},100);*/


/////------------------------------------------------------GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG


// keep running 1 2 3 4 ......its runnig
// question once browser move to another tab then its runnning or not?
// not running once its come back then its autometically running 


//clousers
// allow the inner function access the outer scope of function even it is after returned 

function counter(){
    let count=0;
    return function(){  //  anonymous function is to immediately call (or self-call) it:
        count++;
        return count;
    }
}
c12=counter();//[Function (anonymous)]
c22=counter();//[Function (anonymous)]

let c1=counter();
let c2=counter();

console.log(c1());
console.log(c1());
console.log(c2());
console.log(c2());

console.log(2==2);// true
console.log(2==2==2);// false 2==2 result value true then converted 1 then 1==2 false 

function  retrun_val(){
    val=7;
    console.log(val);
}
let val;
retrun_val();// its getting value 7 beacse start let val;


// find the even number and sum even number 

let evenArray=[2,5,7,8,9,10,12,15,4];
console.log(evenArray);
let addEvennum=evenArray.filter(_=>_%2===0).reduce((a,c)=>(a*c),1);  // here 1 is intial value 
console.log(addEvennum);
// add first element in one veriable array previous all element move to another veriable 
const newArray=["1",'2','3','4'];
const [f,...rest]=newArray
console.log(f);
console.log(rest);
// if need first and last only not for middle 
const [fs,,,last]=newArray;
console.log(fs);
console.log(last);

//without orginal modification then add new element in array 

const new_array=[...newArray,...evenArray];  // created new array with 
const new_array2=newArray.concat(...evenArray); 
console.log(new_array)
console.log(new_array2)
console.log(newArray)
console.log(evenArray)

// find method this is all so callback function excuted where we are use like filter and resduce
//but here get match single value only if existed then undefined 

//resuce method

const acters=[
    'rajini',
    'nani',
    'praba',
    'rana',
    'ram',
    'siddu',
    'Adhi'
];

let act=acters.reduce((a,c)=>{
var first=c[0];
if(!a[first]){
    a[first]=[];
}
a[first].push(c);
return a;
},{});
console.log(act);
console.log(acters);
let acttesting=acters.reduce((a,c)=>{
    console.log('-----------------------------------')
    console.log('fst value  '+c[0])
    console.log(" a value "+a);
    console.log(' c value '+c);
    },{});


 



