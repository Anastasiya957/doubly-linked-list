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

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
