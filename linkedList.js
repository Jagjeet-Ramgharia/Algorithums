class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //   Insert First Node
  InsertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //   Insert last Node
  InsertLast(data) {
    let node = new Node(data);
    let current;
    // if no head is present , create a new head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  // insert at a desired index

  InsertAtIndex(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    // if index is at first position
    if (index === 0) {
      this.InsertFirst(data);
    }

    const node = new Node(data);
    let current, previous;
    current = this.head;

    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current; // Assign current node to next node
    previous.next = node; // assign the desired to matched index node i.e previous node

    this.size++;
  }

  // Get a node at specific index
  getNodeAtIndex(index) {
    if (!this.head) {
      console.log("List does not have a head!!");
      return null;
    }

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log("value at given Index", current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // remove a value at an Index
  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // print the data of linkedlist
  printData() {
    let current = this.head;

    while (current) {
      console.log("----->", current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.InsertFirst(100);
ll.InsertLast(200);
ll.InsertLast(300);
ll.InsertLast(400);
ll.InsertLast(500);
ll.InsertLast(600);

// ll.InsertAtIndex(450, 3);

// ll.getNodeAtIndex(5);

ll.printData();
console.log("---------- Before Removing ---------------");

ll.removeAtIndex(4);
console.log("--------- After Removing -----------------");
ll.printData();

console.log("--------- After Clearing -----------------");

ll.clearList();
ll.printData();
