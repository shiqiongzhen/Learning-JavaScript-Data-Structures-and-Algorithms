/**
 * 字典（Map类）和散列表也能像集合一样储存唯一值
 * Map类：与set类很像，但不同于[值，值]对的形式，我们将要储存的是[键，值]对
 */
function Dictionary(){
    var items={};
    this.has=function(key){
        return items.hasOwnProperty(key);
    }
    this.set=function(key,value){
        items[key]=value;
    }
    this.delete=function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    }
    this.get=function(key){
        return this.has(key)?items[key]:undefined;
    }
    this.values=function(){
        var values=[];
        for(var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    }
    this.keys=function(){
        return Object.keys(items);
    }
    this.getItem=function(){
        return items;
    }
    //以下和set方法完全一样
    this.clear=function(){
        items={};
    }
    this.size=function(){
        return Object.keys(items).length; //只能在现代浏览器中运行
    }
}
var dictionary=new Dictionary();
dictionary.set('Gandalf','gandalf@qq.com');
dictionary.set('Corrine','Corrine@qq.com');
dictionary.set('John','John@qq.com');

console.log(dictionary.has('Corrine'));
console.log(dictionary.values());
console.log(dictionary.get('John'));
console.log(dictionary.delete('John'));
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItem());
console.log("------------------------------------------------------------");
/**
 * 散列表HashMap(HashTable)
 * 散列函数：方法是简单地将每个键值中的每个字母的ASCII值相加，再通过这些散列值（key的ASCII相加值）在散列表中找到对应的value
 * 问题：散列值一样的时候，后面添加的会覆盖前面添加的，解决方法：分离链接，线性探查，双散列法
 */
function HashTable(){
    var table=[];//散列表
    var loseloseHashCode=function(key){ //散列函数
        var hash=0;
        for(var i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash%37;
    }
    this.put=function(key,value){
        var position=loseloseHashCode(key);
        console.log(position+'-'+key);//方便我们查看，可删除
        table[position]=value;
    }
    this.get=function(key){
        return table[loseloseHashCode(key)];
    }
    this.remove=function(key){
        table[loseloseHashCode(key)]=undefined;//这里不需要想ArrayList类一样从table数组中将位置移除，..
    }
    this.print=function(){
        for(var i=0;i<table.length;i++){
            if(table[i]!=undefined){
                console.log(i+":"+table[i])
            }
        }
    }
}
var hash=new HashTable();
hash.put('Gandalf','gandalf@qq.com');
hash.put('Corrine','Corrine@qq.com');
hash.put('John','John@qq.com');
console.log(hash.get('John'));
hash.remove('John');
console.log(hash.get('John'))
/**
 * 散列表冲突问题解决法1--分离链接
 */
var ValuePair=function(key,value){
    this.key=key;
    this.value=value;
    var loseloseHashCode=function(key){ //散列函数
        var hash=0;
        for(var i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash%37;
    }
    this.toString=function(){
        return '['+this.key+'-'+this.value+']';
    }
    this.put=function(key,value){
        var position=loseloseHashCode(key);
        if(table[position]==undefined){
            table[position]=new LinkedList();
        }
        table[position].append(new ValuePair(key,value));
    }
    this.get=function(key){
        //省略
    }
    //省略
}