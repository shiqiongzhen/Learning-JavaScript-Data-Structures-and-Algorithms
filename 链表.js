/**
 * head===null意味着列表为空,此头结点为实头结点
 * 
 * 了解链表的底层实现，有助于我们对API提供的封装方法的选择
 * 
 * 链表的随机查找相对数组麻烦很多，而删除和插入元素相对数组则简易很多
 */
function LinkedList(){
    let Node=function(element){
        this.element=element;
        this.next=null;
    }
    let length=0;
    let head=null; //节点引用指向空
    this.append=function(element){
        let node =new Node(element),current;
        if(head===null){
            head=node;
        }else{
            current=head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        length++;//更新列表长度
    }
    this.removeAt=function(position){
        //检查越界
        if(position>-1&&position<length){
            let current=head,previous,index=0;
            //移除第一项
            if(position===0){
                head=head.next;
            // 移除非第一项
            }else{
                while(index++<position){ //1，2，再判断符不符合(假设position是2)
                    previous=current;
                    current=current.next;//2
                }
                previous.next=current.next;
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    }
    this.insert=function(position,element){
        if(position>=0&&position<=length){
            let node=new Node(element);
            let current=head,previous,index=0;
            if(position===0){
                node.next=current;
                head=node;
            }else{
                while(index++<position){//1，2，再判断符不符合(假设position是2)
                    previous=current;
                    current=current.next;//2
                }
                node.next=current;
                previous.next=node;
            }
            length++;
            return true;
        }else{
            return null
        }
    }
    this.toString=function(){
        let current=head;
        str='';
        while(current){
            str+=current.element+(current.next?'n':'');
            current=current.next;
        }
        return str;
    }
    this.indexOf=function(element){
        let current=head,index=0;
        while(current){
            if(current.element==element){
                return index;
            }else{
                index++;
                current=current.next;
            }
        }
        return -1;
    }
    this.remove=function(element){
        let index=this.indexOf(element);
        return this.removeAt(index);
    }
    this.isEmpty=function(){
        return length===0;
    }
    this.size=function(){
        return length;
    }
    this.getHead=function(){
        return head;
    }
}
/**
 * 双向链表
 * 
 */
function DoublyLinkedList(){
    let Node=function(element){
        this.element=element;
        this.prev=null;
        this.next=null;
    }
    let length=0;
    let head=0;
    let tail=null;
    this.insert=function(position,element){
        //检查越界值
        if(position>=0&&position<=length){
            let node =new Node(element),current=head,previous,index=0;
            if(position===0){
                if(!head){
                    head=node;
                    tail=node;
                }else{
                    node.next=current;
                    current.prev=node;
                    head=node;
                }
            }else if(position===length){
                current=tail;
                current.next=node;
                node.prev=current;
                tail=node;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
                node.prev=previous;
                current.prev=node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    }
    this.removeAt=function(position){
        //检查越界
        if(position>-1&&position<length){
            let current=head,previous,index=0;
            //移除第一项
            if(position===0){
                head=current.next;
                if(length===1){
                    tail=null;
                }else{
                    head.prev=null;
                }
            // 移除非第一项
            }else if(position===length-1){
                current=tail;
                tail=current.prev;
                tail.next=null;
            }else{
                while(index++<position){ //1，2，再判断符不符合(假设position是2)
                    previous=current;
                    current=current.next;//2
                }
                previous.next=current.next;
                current.next.prev=previous;
            }
            length--;
            return current.element;
        }else{
            return null;
        }
    }
}
/**
 * 循环链表
 */
function CircularLinkedList(){
    
}