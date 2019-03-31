//1.递归--斐波那契数列
function fibonacci(num){
    if(num===1||num===2){
        return 1;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}
//2.动态规划-分治思想（把问题分成更小的问题实现，eg归并和快速排序算法，背包问题，...）

//2.1 最少硬币找零问题
function MinCoinChange(coins){
    var coins=coins;
    var cache={};
    this.makeChange=function(amount){
        var me=this;
        if(!amount){
            return [];
        }
        if(cache[amount]){
            return cache[amount];
        }
        var min=[],newMin,newAmount;
        for(var i=0;i<coins.length;i++){ //5
            var coin=coins[i];
            newAmount=amount-coin; //6
            if(newAmount>=0){
                newMin=me.makeChange(newAmount);//7
            }
            if(newAmount>=0&&//8
                (newMin.length<min.length-1||!min.length)//9
                &&(newMin.length||!newAmount)){//10
                min=[coin].concat(newMin);//11
                console.log('new Min'+min+'for'+amount);
            }
        }
        return (cache[amount]=min);//12
    }
}
var m=new MinCoinChange([1,5,10,25]);
console.log(m.makeChange(36));   