let Queue2=(function(){
    const items=new WeakMap();
    class Queue2{
        constructor(){
            items.set(this,[]);
        }
        enqueue(element){
            let q=items.get(this);
            q.push(element);
        }
        dequeue(){
            let q=items.get(this);
            return q.shift();
        }
    }
    return Queue2;
})()

let queue=new Queue2();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue())
console.log(queue.items)