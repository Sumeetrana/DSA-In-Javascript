class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return;
    }
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }

  deleteHead() {
    if (!this.head) {
      return;
    }
    const deleteItem = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deleteItem;
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    // updating the value of head after deleting if the value is head
    if (this.head && this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let curNode = this.head;
    while (curNode.next && curNode.next.value !== value) {
      curNode = curNode.next;
    }
    // updating the value of tail after deleting if the value is tail
    if (this.tail.value === value) {
      this.tail = curNode;
    }
    curNode.next = curNode.next.next;
  }

  print() {
    let curNode = this.head;
    while (curNode !== null) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.prepend(0);
linkedList.delete(0);
// console.log(linkedList.head.value);
linkedList.delete(5);
// console.log(linkedList.tail.value);
console.log(linkedList.find(0));
console.log(linkedList.find(1));
linkedList.print();
