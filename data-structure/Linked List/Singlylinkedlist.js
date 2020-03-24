/**
 * 单项链表
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    
    // 向列表尾部添加一个新的项
    append(element) {
        let node = new Node(element),
            current;
        // 如果当前列表没有数据
        if(this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.length += 1;
    }

    // 向列表的特定位置插入一个新的项
    insert(position, element) {
         // 边界处理
         if(position > -1 && position < this.length) {
            let node = new Node(element),
                current = this.head,
                previous;
            if(position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
         } else {
             return null;
         }
    }

    // 从列表中移除一箱
    remove(element) {}

    // 返回元素在列表中的索引。如果列表中没有该元素则返回-1
    indexOf(element) {}

    // 从列表的特定位置移除一项
    removeAt(position) {
        // 边界处理
        if(position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index = 0;
            if(position === 0) {
                this.head = current.next;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }
    }

}

let testList = new LinkedList();
testList.append('abc');
testList.append('def');
testList.removeAt(1)

console.log(testList);