const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
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
        if (this._head === null) {
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (this._tail === null) {
            return null;
        } else {
            return this._tail.data;
        } 
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
        for (var i = 0; i < index - 1; i++) {
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

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        var prevNode = this._head;
        for (var i = 0; i < index - 1; i++) {
            prevNode = prevNode.next;
        }
        var currentNode = prevNode.next;
        var nextNode = currentNode.next;
        
        currentNode.prev = null;
        currentNode.next = null;
        currentNode.data = 0;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length -= 1;
    }

    reverse() {
        var currentNode = this._head;
        for (var i = 0; i < this.length ; i++) {
            var temp = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = temp;
            currentNode = temp;
        }

        var temp = this._head;
        this._head = this._tail;
        this._tail = temp;
    }

    indexOf(data) {
        var currentNode = this._head;
        for (var i = 0; i < this.length ; i++) {
            if (currentNode.data == data) {
                return i;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
