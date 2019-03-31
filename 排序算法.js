/**
 * 冒泡排序，选择排序，插入排序，归并排序，快速排序，堆排序
 */
//1.冒泡排序法--运行时间最长--O(n^2)
this.bubbleSort=function(){
    var length=array.length;
    for(var i=0;i<length;i++){
        for(var j=0;j<length-1;j++){
            if(array[j]>array[j+1]){
                swap(array,j,j+1);
            }
        }
    }
}
var swap=function(array,index1,index2){
    var aux=array[index1];
    array[index1]=array[index2];
    array[index2]=aux;
}
//1.1改进后的冒泡排序法(跟所有值对比)
this.modifiedBubbleSort=function(){
    var length=array.length;
    for(var i=0;i<length;i++){
        for(var j=0;j<length-1-i;j++){
            if(array[j]>array[j+1]){
                swap(array,j,j+1);
            }
        }
    }
}
//2.选择排序--O(n^2)：找到数据结构中的最小值并将其放在第一位，接着找到第二小的值将其放在第二位，以此类推(跟最小值对比)
this.selectionSort=function(){
    var length=array.length,indexMin;
    for(var i=0;i<length-1;i++){
        indexMin=i;
        for(var j=i;j<length;j++){
            if(array[indexMin]>array[j]){
                indexMin=j;
            }
        }
        if(i!==indexMin){ //!==判断值和类型不一样，是===的非运算
            swap(i,indexMin);
        }
    }
}
//3.插入排序--:要插入的值和已经插入的值做比较，换序
this.insertionSort=function(){
    var length=array.length,j,temp;
    for(var i=1;i<length;i++){
        j=i;
        temp=array[i];
        while(j>0&&array[j-1]>temp){
            array[j]=array[j-1];
            j--;
        }  
        array[j]=temp;
    }
}
//归并排序--O(nlog^n)
this.mergeSort=function(){
    array=mergeSortRect(array);
}

//快速排序--O(nlog^n)

//堆排序--把数组当做二叉树来排序而得名