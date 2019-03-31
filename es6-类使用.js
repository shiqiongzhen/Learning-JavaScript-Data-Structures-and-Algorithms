console.log("---------------------集合Set----------------------------")
let set=new Set();
set.add(1);
set.add(2);
console.log(set.values());
console.log(set.has(1));
console.log(set.size);

console.log(set.delete(1));
set.add(2);
set.add(6);
console.log("set集合的值",set.values());

//自模拟并集与其他集运算
let setB=new Set();
setB.add(6);
setB.add(3);
let unionAB=new Set();
for(let x of set) unionAB.add(x);
for(let x of setB) unionAB.add(x);
console.log("并集",unionAB)
console.log("---------------------字典Map----------------------------")
var map=new Map();
map.set('Gandalf','gandalf@qq.com');
map.set('Corrine','Corrine@qq.com');
map.set('John','John@qq.com');

console.log(map.has('Corrine'));
console.log(map.size);

console.log(map.values());
console.log(map.get('John'));
console.log(map.delete('John'));
console.log(map.keys());
console.log(map.values());
console.log(map.clear());
// console.log(dictionary.getItem());
console.log("---------------------弱化集合类WeakSet：无keys,values,entries等方法，没有强引用的键，<<必须使用键才能取出值>>，这印证了栈类做法，用WeakMap类封装es6实现私有属性----------------------------")
var weakMap=new WeakMap();
var obj1={name:'Gandalf'},
obj2={name:'Corrine'},
obj3={name:'John'};
weakMap.set(obj1,'gandalf@qq.com');
weakMap.set(obj2,'Corrine@qq.com');
weakMap.set(obj3,'John@qq.com');
console.log(weakMap.has(obj1))
console.log(weakMap.get(obj3))
console.log(weakMap.delete(obj2))
console.log("---------------------弱化字典类WeakMap：无keys,values,entries等方法----------------------------")
var weakSet=new WeakSet();
var obj1={name:'Gandalf'},
obj2={name:'Corrine'},
obj3={name:'John'};
weakSet.add(obj1,'gandalf@qq.com');
weakSet.add(obj2,'Corrine@qq.com');
weakSet.add(obj3,'John@qq.com');
console.log(weakSet.has(obj1))
console.log("---------------------对象属性的遍历-------------------------")
var obj={'gandalf':'gandalf@qq.com','Corrine': 'Corrine@qq.com', 'John':'John@qq.com'};
for(i in obj) console.log(i)//循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
console.log(Object.keys(obj))//返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
console.log(Object.getOwnPropertyNames(obj))//返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
console.log(Object.getOwnPropertySymbols(obj))//返回一个数组，包含对象自身的所有 Symbol 属性的键名。
console.log(Reflect.ownKeys(obj))