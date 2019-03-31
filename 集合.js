/**
 * 集合：由一组无序且唯一的项组成的，这个数据结构使用了与有限集合相同的数学概念
 * 
 * 注意：不要简单地使用for-in语句遍历items对象的属性，还需使用hasOwnProperty方法，因为对象的原型包含了额外的属性
 * 
 * es6新增了Set类，和下面的Set方法不一样，es6的Set类的size是属性，es6没有交、并、差、子集
 */
 /**
  * es6前
  */
function Set(){
    let items={};//注意，这里用对象实现，js对象不允许一个键指向两个属性
    this.has=function(value){
        return value in items;//判断是否是对象属性的对象方法
    };
    this.add=function(value){
        if(!this.has(value)){
            items[value]=value;
            return true;
        }
        return false;
    }
    this.delete=function(value){
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    }
    this.clear=function(){
        items={};
    }
    this.size=function(){
        return Object.keys(items).length; //只能在现代浏览器中运行
    }
    this.values=function(){
        let values=[];
        for(let i=0,keys=Object.keys(items);i<keys.length;i++){ //Object.keys(items)返回一个包含给定对象所有属性的数组
            values.push(items[keys[i]]);
        }
        return values;
    }
    //并集
    this.union=function(otherSet){
        let unionSet=new Set();

        let values=this.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        values=otherSet.values();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    }
    //交集
    this.intersection=function(otherSet){
        let intersectionSet=new Set();
        let values=this.values();
        for(let i=0;i<values.length;i++){
            if(this.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    //差集
    this.difference=function(otherSet){
        let differenceSet=new Set();

        let values=this.values();
        for(let i=0;i<values.length;i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
    //子集
    this.subSet=function(otherSet){
        if(this.size()>otherSet.size()){
            return false;
        }else{
            let values=this.values();
            for(let i=0;i<values.length;i++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    }
}

let set=new Set();
set.add(1);
set.add(2);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

console.log(set.delete(1));
set.add(2);
set.add(6);
console.log("set集合的值",set.values());

let setB=new Set();
setB.add(6);
setB.add(3);
console.log("并集",set.union(setB).values())

let setC=new Set();
setC.add(2);
setC.add(3);
setC.add(6);
console.log("交集",set.intersection(setC).values())

let setD=new Set();
setD.add(2);
setD.add(3);
console.log("差集",set.difference(setD).values())

console.log("A是否是B的子集",setD.subSet(setC))