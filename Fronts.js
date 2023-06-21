// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   class SLL {
//     constructor() {
//       this.head = null;
//     }
  
//     // Method to add a new node to the front of the linked list
//     addFront(value) {
//       const newNode = new Node(value); // To create a new node with the given value
//       newNode.next = this.head; // to set the next pointer of the new node to the current head
//       this.head = newNode; // will update the head to point to the new node
//       return this.head; // Return the new head node
//     }
//   }
  

//   const SLL1 = new SLL();
//   console.log(SLL1.addFront(18));
//   console.log(SLL1.addFront(5)); 
//   console.log(SLL1.addFront(73));


// Remove Front
// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
//   class SLL {
//     constructor() {
//       this.head = null;
//     }
  
//     // Method to add a new node to the front of the linked list
//     addFront(value) {
//       const newNode = new Node(value); // Create a new node with the given value
//       newNode.next = this.head; // Set the next pointer of the new node to the current head
//       this.head = newNode; // Update the head to point to the new node
//       return this.head; // Return the new head node
//     }
  
//     // Method to remove the head node from the linked list
//     removeFront() {
//       if (this.head === null) {
//         // If the list is empty, return null
//         return null;
//       }
  
//       const removedNode = this.head; // Storing the removed head node
//       this.head = this.head.next; // Updating the head to the next node
//       return removedNode; // Returning the removed head node
//     }
//   }

//   const SLL1 = new SLL();
//   SLL1.addFront(18);
//   SLL1.addFront(5);
//   console.log(SLL1.removeFront()); 
//   console.log(SLL1.removeFront()); 
  


//   Front
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    // Method to add a new node to the front of the linked list
    addFront(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
  
    // Method to remove the head node from the linked list
    removeFront() {
      if (this.head === null) {
        return null;
      }
  
      const removedNode = this.head;
      this.head = this.head.next;
      return removedNode;
    }
  
    // Method to return the value at the head of the list
    front() {
      if (this.head === null) {
        return null;
      }
  
      return this.head.data;
    }
  }
  

  const SLL1 = new SLL();
  SLL1.addFront(18);
  console.log(SLL1.front());
  console.log(SLL1.removeFront());
  console.log(SLL1.front()); 
  