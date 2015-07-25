var Node = require('./singleNode.js');
var Tree = require('./tree.js');

var binarySearch = function(tree, valueToSearch) {
  var root = tree;
  if (root === null || root === undefined) { return false;}
  if (root.value === valueToSearch) {
    return true;
  }else {
    if( binarySearch(tree.left, valueToSearch) ) {
      return true;
    }else if(binarySearch(tree.right, valueToSearch)) {
      return true;
    }else {
      return false;
    }
  }
}

var tree = new Tree();

tree.add(4);
tree.add(6);
tree.add(3);
tree.add(5);
tree.add(1);
tree.add(2);
console.log(tree.head);
console.log(binarySearch(tree.head, 4));
