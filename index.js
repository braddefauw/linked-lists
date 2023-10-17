// Node class
function Node(value){
    this.value = value;
    this.nextNode = null;
}

// LinkedList class
function LinkedList(){
    this.head = null;

    // Append a new node containing a value to the end of the linked list
    this.append = function (value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head;
            while(current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    // display the linked list as an array
    this.toArray = function () {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.nextNode;
        }
        return result
    }
}

// example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
console.log(linkedList.toArray()); 