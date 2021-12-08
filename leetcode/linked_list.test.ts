class LNode {
  val: number;
  next: LNode | null;
  constructor(val: number, next?: LNode | null) {
    this.val = val;
    this.next = next || null;
  }
}

class MyLinkedList {
  head: LNode | null;
  constructor() {
    this.head = null;
  }

  get(index: number): number {
    let aux = this.head;
    for (let i = 0; i < index && aux; i++) {
      aux = aux.next;
    }
    return aux ? aux.val : -1;
  }

  addAtHead(val: number): void {
    this.head = new LNode(val, this.head);
  }

  addAtTail(val: number): void {
    if (this.head) {
      let aux = this.head;
      while (aux.next) {
        aux = aux.next;
      }
      aux.next = new LNode(val);
    } else {
      this.head = new LNode(val);
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index == 0) this.head = new LNode(val, this.head);
    else {
      let aux: LNode | null = this.head;
      for (let i = 0; i < index-1 && aux; i++) {
        aux = aux.next;
      }
      console.log("AUX", aux);
      if (aux) {
        aux.next = new LNode(val, aux.next);
      }
    }
  }

  deleteAtIndex(index: number): void {
    if (index == 0) this.head = this.head && this.head.next;
    else {
      let aux: LNode | null = this.head;
      for (let i = 0; i < index-1 && aux; i++) {
        aux = aux.next;
      }
      if (aux && aux.next) {
        aux.next = aux.next.next;
      }
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

test("Check examples", () => {
  const m = new MyLinkedList();
  m.addAtHead(1);
  m.addAtTail(3);
  m.addAtIndex(1, 2);
  console.log(m);
  console.log(m.get(1));
  m.deleteAtIndex(1);
  console.log('After Delete', m);
  console.log(m.get(1));
});
