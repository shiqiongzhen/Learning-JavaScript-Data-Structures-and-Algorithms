/**
 * 在回溯问题中，栈可以存储访问过的任务或路径、撤销的操作
 */
console.log("--------------------------十进制转二进制问题---------------------------------");
/**
 * 1.十进制转二进制问题
 */
function divideBy2(deNumber){
    var remStack = [];
    var rem;
    var str='';
    while(deNumber>0){
        rem = Math.floor(deNumber%2);
        remStack.push(rem);
        deNumber=Math.floor(deNumber/2);
    }
    while(remStack.length!=0){
        str+=remStack.pop().toString();
    }
    return Number.parseInt(str);
}
console.log(divideBy2(10));
console.log("--------------------------任意进制转换的算法---------------------------------");
 /**
  * 2.任意进制转换的算法
  */
 function baseConverter(deNumber,base){
    var remStack = [];
    var rem;
    var str='';
    while(deNumber>0){
        rem = Math.floor(deNumber%base);
        remStack.push(rem);
        deNumber=Math.floor(deNumber/base);
    }
    while(remStack.length!=0){
        str+=remStack.pop().toString();
    }
    return Number.parseInt(str);
}
console.log(baseConverter(10,2));
console.log(baseConverter(20,8));
  /**
   * 3.平衡圆括号问题
   */

   /**
    * 4.解决汉诺塔问题
    */