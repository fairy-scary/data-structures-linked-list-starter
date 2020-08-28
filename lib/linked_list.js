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
        let beforeTail = this.get(this.length - 2);
        if (this.length === 0) {
            return undefined;
        }

        this.length--;
        if (this.length === 1) {
            beforeTail.next = null;
        }
        if (this.length === 0) {
            let removed = this.tail
            this.head = null;
            this.tail = null;
            return removed;

        }

        let removed = this.tail;
        this.tail = beforeTail;
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
        if (this.get(index) !== null) {
            this.get(index).value = val;
            return true;
        } else {
            return false;
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        let newNode = new Node(val);

        if (index === 0) {
            this.addToHead(val)
            return true;
        }

        if (index > 0 && index < this.length) {
            let nextIndex = this.get(index);
            let previousIndex = this.get(index - 1);
            previousIndex.next = newNode;
            newNode.next = nextIndex;
            this.length++;
            return true;
        }
        return false;
    }


    // TODO: Implement the remove method here
    remove(index) {
        if (index >= 0 && index < this.length) {
            if (index === 0) {
                return this.removeHead()
            }
            let previousIndex = this.get(index - 1)
            let currentIndex = this.get(index)
            let nextIndex = this.get(index + 1)

            previousIndex.next = nextIndex;
            // currentIndex.next = null;
            this.length--;

            return currentIndex;
        }
        return undefined;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

// let test = new LinkedList();
// LinkedList.listLength(test.getHead)

exports.Node = Node;
exports.LinkedList = LinkedList;
