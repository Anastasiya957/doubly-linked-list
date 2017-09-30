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
        return this;
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
        if (index == 0) {
            if (this.length == 0) {
                var newNode = new Node(data);
                this._head = newNode;
                this._tail = newNode;
            } else {
                var newNode = new Node(data);
                newNode.next = this._head;
                this._head.prev = newNode;
                this._head = newNode;
            }
        } else {
            var newNode = new Node(data);
            var currentNode = this._head;
            for (var i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next;
            newNode.prev = currentNode;
            currentNode.next = newNode;
        }
        this.length += 1;
        return this;
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
        return this;
    }

    deleteAt(index) {
        if (index == 0) {
            if (this.length == 1) {
                this._head = null;
                this._tail = null;
            } else {
                var node = this._head.next;
                node.prev = null;
            }
        } else {
            var prevNode = this._head;
            for (var i = 0; i < index - 1; i++) {
                prevNode = prevNode.next;
            }
            var currentNode = prevNode.next;
            prevNode.next = currentNode.next;

            if (currentNode.next !== null) {
                currentNode.next.prev = prevNode;
            } 
        }     
        this.length -= 1;
        return this;
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
        return this;
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
