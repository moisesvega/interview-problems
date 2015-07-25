var Node = require('./singleNode.js');
// Tree is just a simple way to create a binary tree using this logic:
//  if new valor is mayor than the parent leaf then add it to right leaf if not
//  then add it to left leaf

//  This one is not going to create a balance tree. 
function Tree() {
  this.head = null;
  this.add = function (value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      this.insert(this.head, value)
    }
  }

  this.insert = function (node, value) {
    if(node.value > value) {
      if(node.left === null) {
        node.left = new Node(value);
      }
      else {
        this.insert(node.left, value);
      }
    }
    else {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.insert(node.right, value);
      }
    }
  }
}

module.exports = Tree;
