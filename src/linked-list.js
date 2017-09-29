const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head;
        this._tail;
        this.head;
        this.tail;
    }

    append(data) {
        var newNode = new Node(data);
        if (this.length == 0) {  
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this.length += 1;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data; 
    }

    at(index) {
        var currentNode = this._head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var newNode = new Node(data);
        var currentNode = this._head;
        for (var i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }

        newNode.next = currentNode.next;
        newNode.prev = currentNode;
        currentNode.next = newNode;

        this.length += 1;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
