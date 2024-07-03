class Queue{
    constructor(){
        this.items = []
    }
    enqueue(element){
    this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length() === 0
    }
    peek(){
        if(this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString())
    }
}
class Queue{
    constructor(){
        this.items = []
        this.rear = 0
        this.front = 0
    }
    enqueue(element){
        this.items[this.rear++] = element
    }
    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front++]
        return item
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.items[rear]-this.items[front]
    }
    print(){
        console.log(this.items)
    }
}
const queue = new Queue
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
console.log(queue.peek())
queue.print()