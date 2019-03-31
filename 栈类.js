console.log("-------以下用es5和stack类来实现栈：每一个实例都创建一个items变量的副本(内存占用较大)-------------------------------------------------")
function Stack(){
    let items=[];
    this.push=function(element){
        items.push(element);
    }
    this.pop=function(){
        return items.pop()
    }
    this.peek=function(){
        return items[items.length-1]
    }
    this.isEmpty=function(){
        return items.length==0
    }
    this.size=function(){
        return items.length;
    }
    this.clear=function(){
        items=[];
    }
    this.print=function(){
        console.log(items.toString())
    }
}

let stack=new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
console.log(stack.peek());
stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());
stack.push(15);
console.log(stack.pop());
console.log(stack.size());
stack.print();
console.log("-------以下用es6和stack类来实现栈, 变量items是公共的(故不能声明私有属性)-------------------------------------------")
class EStack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length==0
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items=[];
    }
    print(){
        console.log(this.items.toString())
    }
}

let Estack=new EStack();
let Fstack=new EStack();
console.log(Estack.isEmpty());
Estack.push(5);
Estack.push(8);
console.log("不能声明私有属性,原型找不到会往实例对象找，向上搜索：",Estack.items,Fstack.items)
console.log("Estack.size()",Estack.size());
console.log(Estack.peek());
Estack.push(11);
console.log(Estack.size());
console.log(Estack.isEmpty());
Estack.push(15);
console.log(Estack.pop());
console.log(Estack.size());
Estack.print();
console.log("----------以下用es6的限定作用域Symbol实现类(可以声明假的私有变量)-----------------------------------------------------")
let _items=Symbol();
class AStack{
    constructor(){
        this[_items]=[];
    }
    push(element){
        this[_items].push(element);
    }
    pop(){
        return this[_items].pop()
    }
    peek(){
        return this[_items][this[_items].length-1]
    }
    isEmpty(){
        return this[_items].length==0
    }
    size(){
        return this[_items].length;
    }
    clear(){
        this[_items]=[];
    }
    print(){
        console.log(this[_items].toString())
    }
}

let Astack=new AStack();
let Bstack=new AStack();
console.log(Astack.isEmpty());
Astack.push(5);
Astack.push(8);
console.log("属性是唯一的，实现假的私有属性，无法访问：",Astack._items,Bstack._items)
// console.log("symbol的bug，在类外可以访问该Symbol，还是可以拿到这个私有属性：",Astack[_items],Bstack[_items])
console.log("Astack.size()",Astack.size());
console.log(Astack.peek());
Astack.push(11);
console.log(Astack.size());7
console.log(Astack.isEmpty());
Astack.push(15);
console.log(Astack.pop());
console.log(Astack.size());
Astack.print();
console.log("----------以下用es6的WeakMap实现类,并用闭包封装，真正实现私有属性(但此法使得扩展类无法继承私有属性)-------------------------------------")
let WStack = (function(){
    const items=new WeakMap(); //WeakMap可以存储键值对
    class WStack{
        constructor(){
            items.set(this,[]);
        }
        push(element){
            let s=items.get(this);
            s.push(element);
        }
        pop(){
            let s=items.get(this);
            return s.pop()
        }
        peek(){
            let s=items.get(this);
            return s[s.length-1]
        }
        isEmpty(){
            let s=items.get(this);
            return s.length==0
        }
        size(){
            let s=items.get(this);
            return s.length;
        }
        clear(){
            let s=items.get(this);
            s=[];
        }
        print(){
            let s=items.get(this);
            console.log(s.toString())
        }
    }
    return WStack;
})()


let Wstack=new WStack();
let Xstack=new WStack();
console.log(Wstack.isEmpty());
Wstack.push(5);
Wstack.push(8);
console.log("实现私有属性，无法访问：",Wstack.items,Xstack.items);
console.log("Wstack.size()",Wstack.size());
console.log(Wstack.peek());
Wstack.push(11);
console.log(Wstack.size());7
console.log(Wstack.isEmpty());
Wstack.push(15);
console.log(Wstack.pop());
console.log(Wstack.size());
Wstack.print();