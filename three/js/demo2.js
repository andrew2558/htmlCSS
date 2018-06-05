// //创建对象对给对象添加属性与方法
// var benzcar={
//     color:"black",
//     brands:"benz",
//     run:function(){
//         return(this.color+" "+this.brands+" Run...");
//     }
// };

// console.log(benzcar.color);
// console.log(benzcar.brands);
// console.log(benzcar.run());


// var bmwcar=new Object();
// bmwcar.color="white";
// bmwcar.brands="BMW";
// bmwcar.run=function(){
//     return this.color+" "+this.brands+" Run...";
// };
// console.log(bmwcar.color);
// console.log(bmwcar.brands);
// console.log(bmwcar.run());

// //解决了相同对象代码重复的问题
// function createCar(color,brands){
//     var car=new Object();
//     car.color=color;
//     car.brands=brands;
//     car.run=function(){
//         return this.color+" "+this.brands+" Run...";
//     };
//     return car;
// }

// var audiCar=createCar("black","Audi");
// var buickCar=createCar("red","Buick");
// console.log(audiCar.run());
// console.log(buickCar.run());
// console.log(typeof audiCar);    //object
// console.log(typeof buickCar);   //object
// //但带来了对象无法区分的问题，都是object

// function Car(color,brands){
//     this.color=color;
//     this.brands=brands;
//     this.run=function(){
//         return this.color+" "+this.brands+" Run...";
//     };
//     console.log(this);
// }

// var benzCar=new Car("Black","BENZ");
// var bmwCar=new Car("white","BMW");
// console.log(benzCar.run());
// console.log(bmwCar.run());
// console.log( benzCar instanceof Car);   //true
// console.log( bmwCar instanceof Car);    //true
// console.log(typeof bmwCar);

//构造函数通用规范：
//1、构造函数名首字母大写，区分普通函数
//2、通过用new创建对象



// var a=["1","a","c","d","e"];
// a.splice(2,3,"hello");
// console.log(a);

// var color="Black";
// var brands="Microsoft";

// function setBrands(color,brands){
//     this.color=color;
//     this.brands=brands;
//     this.run=function(){
//         return this.color+" "+this.brands+" Run...";
//     }
// }

// var a=setBrands("white","BMW");
// //console.log(a.run());     //undefined 

// var b=new setBrands("PINK","BENZ");
// console.log(b.run());

// var animal={
//     name:"animal",
//     eat:function(){
//         console.log(this.name+" is eating");
//     }
// };
// animal.eat();

// animal.color="black";
// console.log(animal.color);

// var dog={
//     name:"dog",
//     __proto__:animal
// };

// var cat={
//     name:"cat",
//     __proto__:animal
// };

// dog.eat();
// cat.eat();
// console.log(dog.color);
// console.log(cat.color);


// function Student(name){
//     this.name=name,
//     this.sayHello=function(){
//         console.log("Hi, I'm "+this.name);
//     }
// }

// var andy=new Student("andy");
// var lisa=new Student("lisa");
// andy.sayHello();
// lisa.sayHello();

// function Student(name){
//     this.name=name;
// }

// Student.prototype={
//     sayHello:function(){
//         console.log("Hi I'm "+this.name);
//     }
// }

// var andy=new Student("andy");
// var lisa=new Student("lisa");
// andy.sayHello();
// lisa.sayHello();

// andy.__proto__={
//     sayHello:function(){
//         console.log("hahahaha");
//     }
// }
// andy.sayHello();
// lisa.sayHello();


// function benz() {
//     // console.log(this);
//     this.user = "BENZ";      //BENZ
//     this.color = "black";    //black
//     user:"BENZ";        //undefined
//     color:"black";      //undefined
//     var user="BENZ";        //undefined
//     var color="black";      //undefined
// }

// var bmw = {
//     user: "BMW",
//     color: "white"
// }

// var user = "animal";
// var color = "gray";

// function say() {
//     console.log(this.user + " " + this.color);
// }

// say(); //animal gray
// say.call(new benz()); //benz undefined
// say.call(bmw); //BMW white

// //上面的例子可以这样理解：
// // 当benz()内直接是var name="BENZ"或 name:"BENZ"时，不管call函数内是call(benz)，还是call(new benz())
// // 这里的call后this对象都是benz，但是函数benz内并未对name与color属性赋值，而上上面的var name="BENZ"或 name:"BENZ"只是函数体的语句，而不是对象的属性。


// var user="周瑜";
// var age=32;
// var obj={
//     user:"诸葛亮",
//     objAge:25,
//     myFun:function(){
//         console.log(this.user+",Age: "+this.age);
//     }
// };

// obj.objAge;         //25
// obj.myFun();        //诸葛亮,Age: undefined


// var user="andy";
// var age=17;
// var obj={
//     user:"lisa",
//     objAge:this.age,
//     myFun:function(fm,t){
//         console.log(this.user+",Age:"+this.age,"来自"+fm+"去往"+t);
//     }
// };

// var db={
//     user:"Lily",
//     age:25
// }

// obj.myFun.call(db,"成都","上海");       //Lily,Age:25 来自成都去往上海
// obj.myFun.apply(db,["成都","上海"]);    //Lily,Age:25 来自成都去往上海
// obj.myFun.bind(db,"成都","上海")();     //Lily,Age:25 来自成都去往上海
// obj.myFun.bind(db,["成都","上海"])();   //Lily,Age:25 来自成都,上海去往undefined


// function Box(){}

// Box.prototype.name="Andrew";
// Box.prototype.age=35;
// Box.prototype.run=function(){
//     return this.name+this.age+"8888";
// }

// var box1=new Box();
// var box2=new Box();

// console.log(box1.run==box2.run);    //true


// function Car(brands,color){
//     // this.brands=brands;
//     // this.color=color;
// }
// Car.prototype={
//     brands:"AllCar",
//     color:"black",
//     run:function(){
//         return this.brands+"'s Car color is "+this.color+" Run...";
//     }
// }


// console.log(new Car().run());
// var benz=new Car();
// benz.brands="BENZ";
// benz.color="gray";

// console.log(benz.run());
// var bmw=new Car();
// benz.__proto__.brands="kkkk";
// console.log(bmw.run());


// function Car(brands,color){
//     this.brands=brands;
//     this.color=color;

// }
// Car.prototype={
//     name:"CarCar",
//     color:"black",
//     run:function(){
//         return this.brands+" "+this.color+" Run...";
//     }
// };

// var Benz=new Car("BENZ","Gray");
// //in  操作符会在通过对象能够访问给定属性时返回 true，无论该属性存在于实例中还是原型中。
// console.log("name" in Benz);    //true
// console.log("color" in Benz);   //true
// //如何判断属性是在构造函数的实例里，还是在原型里？在原型内返回false，在类内返回true
// console.log(Benz.hasOwnProperty("color"));  //true  属性在类里
// console.log(Benz.hasOwnProperty("name"));   //false 属性在原型里
// //那么结合这两种方法，可以判断原型中是否存在指定属性。
// //in 返回true 且 hasOwnProperty返回false那么原型内存在指定属性


// function isPrototype(object, typeName) {
//     return ((typeName in object) && (!object.hasOwnProperty(typeName)))
// }
// console.log("name" in Benz);    //true
// console.log(Benz.hasOwnProperty("name"));   //false
// console.log(isPrototype(Benz,"name"));      //true
// console.log(isPrototype(Benz,"color"));     //false


// function Car(){

// }
// Car.prototype.brands="benz";
// Car.prototype.color="balck";

// var benz=new Car();
// console.log(benz instanceof Car);       //true
// console.log(benz instanceof Object);    //true
// console.log(benz.constructor==Car);     //true
// console.log(benz.constructor==Object);  //false

// function Animal(){

// }
// Animal.prototype={
//     name:"dongwu",
//     color:"white"
// }
// var dog=new Animal();
// console.log(dog instanceof Animal);    //true
// console.log(dog instanceof Object);    //true
// console.log(dog.constructor==Animal);  //false
// console.log(dog.constructor==Object);  //true


// //sort 就是 Array 类型的原型方法
// console.log(Array.prototype.sort);  
// //substring 就是 String 类型的原型方法
// console.log(String.prototype.substring);    

// //给 String 类型添加一个方法
// String.prototype.addstring=function(){
//     //this 代表调用的字符串
//     return this+",添加的哈哈";
// }
// var str="abcdef";
// console.log(str.addstring());   //abcdef,添加的哈哈


// //实际项目中的构造函数与原型的组合应用
// //构造函数初始化每个对象独有的特性
// //原型保存所有对象共有的特性与方法
// function Car(brands,color){
//     this.brands=brands;
//     this.color=color;
// }

// Car.prototype={
//     //字面量方式，让constructor属性指向类本身
//     //字面量方式的原型默认constructor是指向Object
//     constructor:Car,
//     run:function(){
//         return this.color+"'s "+this.brands +"'s Car Run...";
//     }
// };

// var benz=new Car("BENZ","black");
// var bmw=new Car("BMW","white");


// //动态原型模式
// //优化了上面的创建方法，更合理
// function Car(brands,color){
//     this.brands=brands;
//     this.color=color;
//     //仅在第一次调用的初始化
//     if(typeof this.run!="function"){
//         Car.prototype.run=function(){
//             return this.color+"'s "+this.brands +"'s Car Run...";
//         };
//     }
// }



// function Car() {
//     this.type = "Car";
// }

// function Benz() {
//     this.brands = "BENZ";
//     this.color = "black";
// }
// Benz.prototype = new Car();
// var bz = new Benz();
// console.log(bz.type); //Car 通过原型继承自Car
// console.log(bz.color);  //black
// function S600() {
//     this.model = "S600";
// }
// S600.prototype = new Benz();
// var s=new S600();
// console.log(s.brands);  //BENZ 通过原型继承自Car
// console.log(s.type);    //Car

// Benz.prototype.color="pink";
// console.log(bz.color);  //black
// console.log(s.color);   //black
// console.log(bz.__proto__.color);    //pink
// console.log(s.__proto__.color);     //black

// console.log(s instanceof Object);   //true
// console.log(bz instanceof S600);  //false
// console.log(s instanceof Benz);  //true
// console.log(s instanceof Car);   //true


// function Car(brands){
//     this.color=["black","white","pink"];
//     this.brands=brands;
// }

// function Benz(brands){
//     Car.call(this,brands);  //对象冒充
// }

// var bz=new Benz("BENZ");
// bz.color.push("blue");
// console.log(bz.color);
// console.log(bz.brands);
// //上面的代码解决了给另一个类传递参数的问题，但没有继承与共享
// //下面的代码解决了继承与共享
// Car.prototype.run=function(){
//     return this.brands+this.color;
// }
// Benz.prototype=new Car();   //原型链继承
// var gls=new Benz("GLS500");
// console.log(gls.run());


// function obj(o){
//     function F(){}
//     F.prototype=o;
//     return new F();
// }

// var box={
//     name:"Andrew",
//     arr:["A","B"]
// };

// var box1=obj(box);
// console.log(box1.name); //Andrew
// box1.name="Li";
// console.log(box1.name); //Li

// console.log(box1.arr);  //A,B
// box1.arr.push("CC");
// console.log(box1.arr);  //A,B,CC

// var box2=obj(box);
// console.log(box2.name); //Andrew
// console.log(box2.arr);  //A,B,CC
// console.log(box1.__proto__.name);   //Andrew
// console.log(box1.name); //Li

//以上代码有两次调用父类

// //普通函数
// function run(){
//     return "Run...";
// }

// // //匿名函数，没有名称，报错
// // function (){
// //     return "a";
// // }

// //通过表达式自我执行的匿名函数
// (function (){
//     console.log("Hello World");
// })()

// //把匿名函数赋值给变量与执行方法
// var f1=function(){
//     return "aa";
// }
// console.log(f1());

// //函数里的匿名函数
// function run(){
//     var user="a";
//     return function(){
//         return user;
//     }
// }
// console.log(run()());


// function Car(){
//     var color="black";
//     return function(){
//         return color;
//     }
// }


// var num=100;
// function add(){
//     num++;
// }
// add();
// console.log(num);   //101
// add();
// console.log(num);   //102

// function add2(){
//     var num2=100;
//     num2++;
//     return num2;
// }
// console.log(add2());    //101
// console.log(add2());    //101

// function add3(){
//     var num3=100;
//     return function(){
//         num3++;
//         return num3;
//     }
// }
// var n=add3();
// console.log(n());   //101
// console.log(n());   //102


// function box(){
//     var arr=[];
//     for(var i=0;i<5;i++){
//         arr[i]=(function(){
//             return i;   //这里可以访问到i
//         })();   //让匿名函数自我执行
//     }   
//     return arr;
// }

// var b=box();
// console.log(b.length);  //5
// for(var i=0;i<b.length;i++){
//     console.log(b[i]);    //0 1 2 3 4
// }



// var user="The Window";
// var obj={
//     user:"The Object",
//     getUserFunction:function(){
//         var that=this;
//         return function(){
//             return that.user;
//         }
//     }
// };

// //可以强制指向某个对象
// console.log(obj.getUserFunction().call(obj));   //The Object
// console.log(obj.getUserFunction()());   //The Object


// function box(){
//     var oDiv=document.getElementById("oDiv");
//     oDiv.onclick=function(){
//         alert(oDiv.innerHTML);
//     }
// }
// box();


// function box(count){
//     //这里用自执行函数形成一个假的块级作用域
//     (function(){
//         for(var i=0;i<10;i++){

//         }
//     })();
//     console.log(i); //报错，无法访问
// }
// box(2);


// function Box(){
//     var age=100;    //私有变量，外部无法访问
//     function run(){
//         return "RUN....";
//     }
//     //通过对外公共的特权方法访问内部私有变量
//     this.get=function(){
//         return age+run();
//     }
// }
// var b=new Box();
// console.log(b.get());   //100RUN....



// function Car(brands){
//     var brands=brands;
//     this.getBrands=function(){
//         return brands;
//     }
//     this.setBrands=function(value){
//         brands=value;
//     }
// }

// var benz=new Car("BENZ");
// console.log(benz.getBrands());  //BENZ
// benz.setBrands("B");
// console.log(benz.getBrands());  //B

// (
//     function(){
//         var age=100;
//         function run(){
//             return "Run....";
//         }
//         // var Box=function(){};   //这样为什么不行？
//         Box=function(){};
//         Box.prototype.go=function(){
//             return age+run();
//         };
//     }
// )();

// var b=new Box();
// console.log(b.go());    //100Run....

// var a=100;
// function text(){
//     console.log(a);
//     a=10;
//     console.log(a);
// }
// text();
// console.log(a);

// var b=20;       //声明变量
// (function(){
//     A=100;  //没有var 声明等于给window对象添加一个属性
// })();

// console.log(A); //100
// console.log(b);
// delete A;   //属性可以删除
// delete b;   //变量自带不可删除属性
// // console.log(A); //A is not defined
// console.log(b);     //20


//window对象部分属性
console.log(window.name);   //窗口名
console.log(window.closed);//当窗口闭时为真
console.log(window.defaultStatus);  //窗口底部状态栏显示的默认状态消息
console.log(window.document);   //窗口中当前显示的文档对象
console.log(window.frames); //窗口中的框架对象数组
console.log(window.history);    //保存有窗口最近加载的URL
console.log(window.length); //窗口中的框架数
console.log(window.location);   //当前窗口的URL
console.log(window.offscreenBuffering); //用于绘制新窗口内容并在完成后复制已存在的内容，控制屏幕更新
console.log(window.opener); //打开当前窗口的窗口
console.log(window.parent); //指向包含另一个窗口的窗口（由框架使用）
console.log(window.screen); //显示屏幕相关信息，如高度、宽度（以像素为单位）
console.log(window.self);   //指示当前窗口
console.log(window.status); //描述由用户交互导致的状态栏的临时消息
console.log(window.top);    //包含特定窗口的最顶层窗口（由框架使用）
console.log(window.window); //指示当前窗口，与self等效

// var a=alert("sdf");
// var b= confirm("请确认");
// var c= prompt("输入一个数字")
// console.log(a);
// console.log(b);
// console.log(c);

window.open("subwindow.html","newwindow","width=400,height=400,top=200,left=200");
