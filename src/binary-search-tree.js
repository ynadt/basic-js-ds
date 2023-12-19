const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this._root) {
      this._root = newNode;
    } else {
      this.insertNode(this._root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return !!this.findNode(this._root, data);
  }

  find(data) {
    return this.findNode(this._root, data);
  }

  findNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this._root = this.removeNode(this._root, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const temp = this.findMinNode(node.right);
      node.data = temp.data;
      node.right = this.removeNode(node.right, temp.data);
    }
    return node;
  }

  min() {
    const minNode = this.findMinNode(this._root);
    return minNode ? minNode.data : null;
  }

  findMinNode(node) {
    return node && node.left ? this.findMinNode(node.left) : node;
  }

  max() {
    const maxNode = this.findMaxNode(this._root);
    return maxNode ? maxNode.data : null;
  }

  findMaxNode(node) {
    return node && node.right ? this.findMaxNode(node.right) : node;
  }
}



module.exports = {
  BinarySearchTree
};