// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    static listLength(current) {
        if (current.next === undefined) {
            console.log(0) ;
            return 0
        }

        return 1 + this.listLength(current.next);
    }
    

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // if (this.listLength === 0) {
        //     this.head = newNode;
        // }
        // if (this.tail !== null) {
        //     this.tail.next = newNode;
        // }
        // this.tail = newNode;
    }

    // TODO: Implement the removeTail method here
    removeTail() {

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {

    }

    // TODO: Implement the removeHead method here
    removeHead() {

    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }

    getHead() {
        return this.head 
     }
}

let test = new LinkedList();
LinkedList.listLength(test.getHead)

exports.Node = Node;
exports.LinkedList = LinkedList;
