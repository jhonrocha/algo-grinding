const ListNode = function (val = null, next = null, prev = null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
};
var MyLinkedList = function () {
  this.head = null; // ListNode
  this.tail = null; // ListNode
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let n = this.head;
  for (let i = 0; n != null && i <= index; i++) {
    n = n.next;
  }
  return n === null ? -1 : n.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (!this.head) {
    this.head = new ListNode(val);
    this.tail = this.head;
  } else {
    this.head = new ListNode(val, this.head);
    this.head.next.prev = this.head;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.tail) this.addAtHead(val);
  else {
    this.tail.next = new ListNode(val, null, this.tail);
    this.tail = this.tail.next;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let n = this.head;
  for (let i = 0; n != null && i < index; i++) {
    n = n.next;
  }
  if (n !== null) {
    n.next = new ListNode(val, n.next, n);
    if (n.next.next === null) this.tail = n.next;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index == 0) {
    this.head = this.head.next;
    this.head.prev = null;
  } else {
    let n = this.head;
    for (let i = 0; n != null && i < index; i++) {
      n = n.next;
    }
    if (n !== null) {
      const prev = n.prev;
      prev.next = n.next;
      if (n.next) n.next.prev = prev;
    }
  }
};

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
  m.addAtIndex(1,2);
  m.deleteAtIndex(1);
  console.log(m.get(1));
});
