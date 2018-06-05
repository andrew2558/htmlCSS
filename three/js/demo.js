// alert("hello world");

// function sum() {
//     var value = 0;
//     if (arguments.length < 1) {
//         alert("参数个数小于1");
//     } else {
//         for (var i = 0; i < arguments.length; i++) {
//             value += arguments[i];
//         }
//     }
//     return value;
// }

// alert(sum(1,2));

// var a='5';
// var b=5;
// var c="5";
// switch (a) {
//     case b:
//     alert("This is a number");
//     break;
//     case c:
//     alert("This is a String");
//     break;

// }


// var box=new Object();
// box.name="Andrew";
// box.age=30;
// box.run=function(){
//     alert(this.name+","+this.age);
// }
// box.run();          //Andrew,30
// //删除box对象的name属性
// delete box.name;    
// box.run();          //undefined,30


// var cat={
//     name:"lyli",
//     age:3,
//     run:function(){
//         alert(this.name+","+this.age);
//     }
// }
// cat.run();          //lyli,3
// //删除cat对象的age属性
// delete cat.age;
// cat.run();          //lyli,undefined


// //使用new Array方法创建Array对象
// var arr=new Array();                    //空的Array对象
// var box=new Array(10);                  //长度为10的Array对象
// var cat=new Array("one",23,"kwkw");     //包含三个元素的Array对象

// //使用字面量的方法创建Array对象
// var arr2=[];                            //空的Array对象
// var box2=["one",22,"skd"];              //包含三个元素的Array对象

// //使用下标访问Array对象内的值
// alert(arr[2]);                          //undefined
// alert(box[0]);                          //undefined
// alert(cat[0]);                          //one

// alert(arr2[0]);                         //undefined
// alert(box2[1]);                         //22

// //使用length属性获取Array元素对象个数
// alert(arr.length);                      //0
// alert(box.length);                      //10
// alert(cat.length);                      //3
// alert(arr2.length);                     //0
// alert(box2.length);                     //3

// box2.length=2;                          //强制修改了box2的长度，将只保留前两个元素
// alert(box2.length);                     //2
// alert(box2);                            //one,22




// //创建一个复杂的Array对象
// var arr = [{
//         name: "Andrew",
//         age: 30,
//         run: function () {
//             alert("hehe");
//         }
//     },
//     ["Welcome", 22, "Set"],
//     "HOME",
//     45,
//     new Array(1, 2, 3, 4, 5)
// ];
// alert(arr[0].name);     //Andrew
// alert(arr[0].run());    //undefined run()是一个没有返回值的方法
// alert(arr[1][1]);       //22    
// alert(arr[3]);          //45
// alert(arr[4][1]);       //2



// var obj = {
//     ele1: {
//         name: "Andrew",
//         age: 30,
//         height: 172
//     },
//     ele2: {
//         name: "Angela",
//         age: 28,
//         height: 166
//     }
// }

// alert(obj.ele1.name);   //Andrew
// alert(obj.ele2.age);    //28
// alert(obj.ele1);        //[object Object]
// alert(obj.ele2);        //[object Object]

// var cat=["mimi",2,"miao"];
// alert(cat.toString());          //mimi,2,miao
// alert(cat.join("-"));           //mimi-2-miao

// alert(cat.pop());               //maio
// alert(cat.toString());          //mimi,2

// alert(cat.push("haha"));        //3
// alert(cat.toString());          //mimi,2,haha

// alert(cat.reverse());           //haha,2,mimi
// alert(cat.toString());          //haha,2,mimi

// alert(cat.sort());

// alert(cat.shift());
// alert(cat.toString());

// alert(cat.unshift("sss"));
// alert(cat.toString());

// alert(cat.slice(0));
// alert(cat.slice(2));


// var house=new Array();
// house.push("desk");
// house.push("television");
// house.push("cat");
// house.push("dog");
// house.push("computer");
// alert(house.toString());
// alert(house.slice(1,2));
// alert(house.splice(0,3,"people"));
// alert(house.toString());


// var house=new Array("3");
// //在Array尾部添加一个元素，并返回Array的新长度
// alert(house.push("cat"));       //2
// alert(house);                   //3,cat
// //在Array头部添加一个元素，并返回Array的新长度      
// alert(house.unshift("dog"));    //3
// alert(house);                   //dog,3,cat

// //从尾部删除一个元素并返回这个元素
// alert(house.pop());             //cat
// alert(house);                   //dog,3
// //从头部删除一人元素并返回这个元素
// alert(house.shift());           //dog
// alert(house);                   //3

// house=new Array(2,6,8,7,5);
// alert(house);                   //2,6,8,7,5
// //对数组进行排序
// alert(house.sort());            //2,5,6,7,8
// alert(house);                   //2,5,6,7,8
// //反转数组
// alert(house.reverse());         //8,7,6,5,2
// alert(house);                   //8,7,6,5,2

// //取指定范围的子串，没有修改原数组(包含前下标，不包含后下标)
// alert(house.slice(1,2));        //7
// alert(house.slice(2));          //6,5,2
// alert(house.slice(1,3));        //7,6
// alert(house);                   //8,7,6,5,2

// //替换与删除数组内的指定元素(修改了原数组)
// //第一个为下标，第二个为个数，0则表示，在下标前插入，第三个为替换或插入的元素
// //前两个参数必需
// alert(house.splice(1,0,'dog')); //空
// alert(house);                   //8,dog,7,6,5,2
// alert(house.splice(1,1,"dog","cat"));   //dog 返回被替换的元素
// alert(house);                   //8,dog,cat,7,6,5,2
// alert(house.splice(2,2));       //cat,7 返回被替换的元素
// alert(house);                   //8,dog,6,5,2


// var d=new Date();
// alert(d);
// alert(d.getFullYear());
// alert(d.getMonth());
// alert(d.getDay());
// alert(d.getDate());
// alert(d.getHours());
// alert(d.getMinutes());
// alert(d.getSeconds());
// alert(d.getMilliseconds());

// d.setDate(28);
// alert(d.toLocaleDateString());

// var pattern=new RegExp("a");
// var pattern2=new RegExp("aa","ig");
// var pattern3=/a/;
// var pattern4=/ad/ig;


// var pattern =new RegExp("box");
// var str="This is a box";
// alert(pattern.test(str));       //true
// alert(pattern.exec(str));       //box
// var str="This is a Box";
// //没有区分大小写，所以返回false和null
// alert(pattern.test(str));       //false
// alert(pattern.exec(str));       //null
// pattern=/box/i;
// //RegExp对象加上了忽略大小写，所以返回true和Box
// alert(pattern.test(str));       //true
// alert(pattern.exec(str));       //Box

// var pattern=/box/ig;
// var str="This is a box,That's a box too";
// //match方法用于决断字符串中是否有符合正则要求的部分，并返回符合正则的字符串数组，无则返加null
// alert(str.match(pattern));      //box,box
// pattern=/aaa/ig;
// alert(str.match(pattern));      //null

// //replace方法用于检查字符串内是否有符合正则的部分，有则用给定的字符串替代符合正则的部分
// //replace并没有修改源字符串
// pattern=/box/ig;
// alert(str);                     //This is a box,That's a box too
// alert(str.replace(pattern,"Cat"));  //This is a Cat,That's a Cat too
// alert(str);                     //This is a box,That's a box too

// //search方法用于查找在字符串中符合正则的第一次出现的位置,并返回下标
// //没有找到则返回-1
// alert(str.search(pattern));     //10
// pattern=/2/ig;
// alert(str.search(pattern));     //-1

// //split方法用分割字符串为数组，分割符为符合正则表达式的部分
// alert(str.split(pattern));      //This is a box,That's a box too
// pattern=/box/ig;
// var arr=str.split(pattern);     //arr[0]="This is a " arr[1]=",That's a " arr[2]=" too"
// alert(str.split(pattern));      //This is a ,,That's a , too
// alert(str);


// var pattern=/(g)oogle/;
// var str="This is google! ";
// pattern.test(str);
// alert(RegExp.input);        //This is google! 
// alert(RegExp.lastMatch);    //google
// alert(RegExp.lastParen);    //g
// alert(RegExp.leftContext);  //This is
// alert(RegExp.multiline);    //undefined
// alert(RegExp.rightContext); //! 


// var pattern=/8[a-zA-Z0-9]*7/ig;
// var str="abc8defghij7klngon8qrstwxy7";
// // alert(pattern.exec(str));

// var pattern2=/8[a-zA-Z0-9]*?7/ig;
// // alert(pattern2.exec(str));
// alert(str.match(pattern2));
// alert(str.match(pattern));


// var pattern=/box/ig;
// var str="this is a box,That's a box too!";
// alert(pattern.exec(str));
// alert(str.match(pattern));



// var pattern=/g..gle/;
// var str="google";
// alert(pattern.test(str));


// var pattern =/g.*gle/;
// var str="google";
// var str2="ggle";
// alert(pattern.test(str2));


// var pattern=/g[a-zA-Z_]*gle/
// var str="google";
// alert(pattern.test(str));


// var pattern=/g[^0-9]*gle/;
// var str="google";
// alert(pattern.test(str));


// var pattern=/[a-z][A-Z]+/;
// var str="gooGle";
// alert(pattern.test(str));
// alert(str.match(pattern));

// var pattern=/g\w*gle/;  //匹配字母和数字及_
// var str="google";
// alert(pattern.test(str));
// alert(str.match(pattern));

// var pattern=/google\d*/;    //匹配数字
// var str="google55";
// alert(pattern.test(str));
// alert(str.match(pattern));


// var pattern=/\D{7,}/;       //匹配至少7次非匹配非数字，同[^0-9]相同
// var str="googlee8";
// alert(pattern.test(str));
// alert(pattern.exec(str));
// alert(str.match(pattern));


// var pattern=/^google$/;
// var str="google";
// alert(pattern.test(str));
// alert(pattern.exec(str));
// alert(str.match(pattern));

// var pattern=/goo\sgle/;     //\s为匹配一个空格
// var str="goo gle";
// alert(pattern.test(str));
// alert(pattern.exec(str));
// alert(str.match(pattern));


// var pattern=/google\b/;     //\b可以判断e后面是否是空格或行的末尾
// var str="googlea";          
// alert(pattern.test(str));   //google true   google a true googlea false
// alert(pattern.exec(str));
// alert(str.match(pattern));

// var pattern=/google|baidu|bing/      //|为或的判断
// var str="baidu";
// alert(pattern.test(str));
// alert(pattern.exec(str));
// alert(str.match(pattern));


// var pattern=/(google){2,8}/;
// var str="googlegoogle";
// alert(pattern.test(str));
// alert(pattern.exec(str));
// alert(str.match(pattern));


// var pattern=/8(.*)8/;
// var str="This is 8google8";
// console.log(pattern.test(str));
// console.log(pattern.exec(str));
// console.log(str.match(pattern));
// alert(pattern.test(str));
// alert(pattern.exec(str));
// alert(str.match(pattern));


// var pattern=/(.*)\s(.*)/;
// var str="google baidu";
// var result=str.replace(pattern,"$2 $1");
// console.log(result);


// var pattern=/[a-z]+?/;
// var str="abcdefjhijklmnopqrstuvwxyz";
// var result=str.replace(pattern,"xxx##");
// console.log(str.match(pattern));
// console.log(result);

// var pattern=/8(.+?)8/g;
// var str="This is 8google8, That is 8google8, There is 8google8";
// var result=str.replace(pattern,"<strong>$1</strong>");
// console.log(result);
// document.write(result);


// var pattern=/8([^8]*)8/g;
// var str="This is 8google8, That is 8google8,There is 8google8";
// var result=str.replace(pattern,"<strong>$1</strong>");
// console.log(pattern.exec(str));
// console.log(str.match(pattern));
// console.log(result);
// document.write(result);

// //直接定义的方式
// function sum(i,j){
//     return i+j;
// }
// //使用变量赋值的方式，调用时用: 变量名（参数列表调用）
// var he=function sum(x,y){
//     return x+y;
// }
// // 使用 Function 构造函数，调用方法：变量名（参数列表调用）
// var kk=new Function("m","n","return n+m");

// console.log(sum(2,2));      //4
// console.log(he(5,5));       //10
// console.log(kk(5,2));       //7


// function box(sumFunction,num){
//     return sumFunction(num);
// }
// function aa(sum){
//     return sum+5;
// }

// console.log(box(aa,5));     //10

// function box(num){
//     if(num<1){
//         return 1;
//     }else{
//         return num*box(num-1);
//     }
// }

// console.log(box(3));    //6



// sum(2,3);
// function sum(x,y){
//     var he=x+y;
//     console.log(arguments);     //2,3

// }





// function sum(m,n){
//     return m+n;
// }

// console.log(sum.length);    //2
// console.log(sum.prototype)

// //求阶乘
// function jiecheng(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         //使用arguments.callee来执行自身
//         //这样做的好处是，当函数更名时而函数体内部不需要改动
//         return num * arguments.callee(num - 1);
//     }
// }

// console.log(jiecheng(5));   //120


// window.color="red";
// console.log(this.color);        //red
// color="blue";
// console.log(this.color);        //blue

// var say={
//     color:"pink",
//     sayColor:function(){
//         console.log(this.color);
//     }
// };
// say.sayColor();                 //pink
// console.log(this.color);        //blue

// function sum(x,y){
//     return x+y;
// }

// function getsum(i,j){
//     var a=sum(i,j);
//     console.log(this);          //window
//     var b=sum.apply(this,[i,j]);
//     var c=sum.apply(this,arguments)
//     var d=sum.call(this,i,j);
//     //call不能直接用arguments传递，需一个一个对应的传递
//     var e=sum.call(this,arguments);
//     // return sum.apple(this,[i,j]);
//     console.log(a);             //8
//     console.log(b);             //8
//     console.log(c);             //8
//     console.log(d);             //8
//     console.log(e);             //[object Arguments]undefined

// }

// getsum(3,5);


// var color="red";
// var box={
//     color:"blue"
// };
// function sayColor(){
//     console.log(this.color);
// }

// //没有参数时，sayColor里的this代表当前作用域，即window
// sayColor();             //red
// // this==window
// sayColor.call(this);    //red
// // this==window
// sayColor.call(window);  //red
// // this==box
// sayColor.call(box);     //blue



// var user={
//     name:"lisifeng",
//     age:22,
//     action:"ML",
//     love:"hjl"
// }

// function setLove(user){
//     user.love="andrew";
//     return user;
// }

// var a= setLove(user);
// console.log(a.love);
// console.log(user.love);



// var box=[1,2,3];
// console.log(box instanceof Array);      //true
// console.log(typeof box);                //object
// var box2={};
// console.log(box2 instanceof Object);    //true
// console.log(typeof box2);               //object
// var box3=/g/;
// console.log(box3 instanceof RegExp);    //true
// console.log(typeof box3);               //object
// var box4=new String("Lee");
// console.log(box4 instanceof String);    //true
// console.log(typeof box4);               //object
// var box5=true;
// console.log(box5 instanceof Boolean);   //false
// console.log(typeof box5);               //boolean
// var box6="aaa";
// console.log(box6 instanceof String);    //false
// console.log(typeof box6);               //string

// //string is not defined
// // console.log(box6 instanceof string);    
// //boolean is not defined
// // console.log(box5 instanceof boolean);   


// function sum(x,y){
//     if(x>3){
//         var a=x*y;
//     }else{
//         var b=x+y;
//     }
//     console.log(a);     //30            undefined
//     console.log(b);     //undefined     7
// }
// sum(5,6);
// sum(2,5);


// //str的类型为string
// var str="andrew";
// //s的类型为Object
// var s=new String("andrew");
// console.log(typeof str);    //string
// console.log(typeof s);      //object
// console.log(str==s);        //true
// console.log(str===s);       //false

// //相同之处，都可以调用内置方法
// console.log(str.substring(2));  //drew
// console.log(s.substring(2));    //drew

// str.name="lily";
// s.name="lily";
// console.log(str.name);      //undefined
// console.log(s.name);        //lily


// //银行家舍入：所谓银行家舍入法，
// //其实质是一种四舍六入五取偶（又称四舍六入五留双）法。具体规则如下：
// //简单来说就是：四舍六入五考虑，五后非零就进一，
// //五后为零看奇偶，五前为偶应舍去，五前为奇要进一。
// var num=3.43423425;
// var num1=3.43450425;
// var num2=3.43451425;
// var num3=3.43351425;
// var num4=3.43361425;
// console.log(num.toFixed(3));    //3.434 四舍
// console.log(num1.toFixed(3));   //3.435 五后为零舍
// console.log(num2.toFixed(3));   //3.435 五后非零看五前为偶则舍
// console.log(num3.toFixed(3));   //3.434 五后非零看五前为奇则入
// console.log(num4.toFixed(3));   //3.434 六入

// var str="abcdefghijklmn123456890";

// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.LN2);
// console.log(Math.PI);



//Math常用方法练习：
console.log(Math.min(2,4,0,88,23,-1,26));   //-1
console.log(Math.max(2,4,0,88,23,-1,26));   //88

//舍入方法
// Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
// Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；
// Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数；
// console.log(Math.ceil(25.8));       //26
// console.log(Math.ceil(25.5));       //26
// console.log(Math.ceil(25.2));       //26

// console.log(Math.floor(25.8));      //25
// console.log(Math.floor(25.5));      //25
// console.log(Math.floor(25.2));      //25

// console.log(Math.round(25.8));      //26
// console.log(Math.round(25.5));      //26
// console.log(Math.round(25.2));      //25

// //Math.random()方法返回介于 0 到 1 之间一个随机数，不包括 0 和 1。如果想大于这个范围的话，可以套用一下公式：
// // 值 = Math.floor(Math.random() * 总数 + 第一个值)

// //取2~15之间的随机数（包含2,15）
// console.log(Math.floor(Math.random()*(15-2+1)+2));