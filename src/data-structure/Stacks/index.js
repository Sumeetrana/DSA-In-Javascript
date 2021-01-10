export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
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

  print() {
    let curNode = this.head;
    while (curNode !== null) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }
}
