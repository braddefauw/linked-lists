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

    // prepend a new node containing a vlaue to the start of the linked list
    this.prepend = function(value){
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
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
console.log(linkedList.toArray()); // Output: [1, 2]
linkedList.prepend(0);
console.log(linkedList.toArray()) // Output: [0, 1, 2]