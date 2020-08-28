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

    addToTail(val) {
        let newNode = new Node(val);
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        // if (!this.head) {
        //     return undefined;
        // }

        // let currentNode = this.head;
        // if (this.length === 2) {
        //     currentNode.next = null;
        // } else if (this.length > 2) {
        //     while (currentNode.next) {
        //         currentNode = currentNode.next;
        //     }
        // }
        let currentNode = get(this.length);
        console.log(3)
        console.log(currentNode);

        this.length--;
        if (this.length === 1) {
            currentNode.next = null;
        }
        if (this.length === 0) {
            this.head, this.tail = null;
        }

        let removed = this.tail;
        this.tail = currentNode;
        this.tail.next = null
        return removed;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let something = new Node(val);

        if (!this.head) {
            this.head, this.tail = something;
        }
        something.next = this.head
        this.head = something

        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) {
            return undefined;
        }
        let removed = this.head
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head, this.tail = null;
        }
        return removed;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === target) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let currentNode = this.head;
        let counter = 0;
        while (currentNode) {
            if (counter === index) {
                return currentNode;
            }
            currentNode = currentNode.next
            counter++;
        }
        return null;
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

// let test = new LinkedList();
// LinkedList.listLength(test.getHead)

exports.Node = Node;
exports.LinkedList = LinkedList;
