/**
 * 优先队列
 */
console.log("--------------------优先队列--------------------------")
function PriorityQueue(){
    let items=[];
    function QueueElement(element,priority){
        this.element=element;
        this.priority=priority;
    }
    this.enqueue=function(element,priority){
        let queueElement=new QueueElement(element,priority);

        let added=false;
        for(let i=0;i<items.length;i++){
            if(queueElement.priority<items[i].priority){
                items.splice(i,0,queueElement);
                added=true;
                break;
            }
        }
        if(!added){
            items.push(queueElement);
        }
    }
    this.print=function(){
        for(let i=0;i<items.length;i++){
            console.log(items[i].element,'-',items[i].priority)
        }
    }
}

let p=new PriorityQueue();
p.enqueue("John",2);
p.enqueue("Jack",1);
p.enqueue("Corrine",3);
p.enqueue("Corrine",0);
p.print();
/**
 *  循环队列
 */
console.log("--------------------循环队列--------------------------")
function hotPotato(nameList,num){
    while(nameList.length>1){
        for(let i=0;i<num;i++){
            nameList.push(nameList.shift());
        }
        console.log(nameList.shift()+"在击鼓游戏中被淘汰")
    }
    return nameList.shift();
}

let names=['John','Jack','Camila','Ingrid','Carl'];
console.log("胜利者是",hotPotato(names,7))

/**
 * 
 */