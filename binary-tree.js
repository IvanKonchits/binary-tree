'use strict';

class BinaryTree {
	constructor() {
		this.root = null;

	}

	insert(data) {
		var node = {
            data: data,
            left: null,
            right: null
        };
		var current;
		if (this.root === null) {
			this.root = node;
		} else {
			current = this.root;
			while (true) {
				//if the new value is less than this node's value, go left
				if (data < current.data) {
					if (current.left === null) {
						current.left = node;
						break;
					} else {
						current = current.left;
					}
				//if the new value is greater than this node's value, go right
				} else if (data > current.data) {
					if (current.right === null) {
						current.right = node;
						break;
					} else {
						current = current.right;
					}
				//if the new value is equal to the current one, just ignore
				} else {
					break;
				}
			}
		}

	}

	contains(data) {
		var found = false;
        var current = this.root;
        while(!found && current){
        	//if the new value is equal to the current one, we found it
        	if (data == current.data){
        		found = true;
        	//if the new value is less than this node's value, go left, else go right 
            } else {
        		current = data < current.data ? current.left : current.right;
        	}
        }
        return found;
	}

	remove(data) {
		this.root = removeNode(this.root, data);
		function removeNode(current, data) {
			if(current === null) return null;
			if(data == current.data) {
				if(current.left === null && current.right === null)
					return null;
				else if(current.left === null && current.right != null) 
					return current.right;
				else if(current.right === null && current.left != null)
					return current.left;
				else {
					var temp = current.right;
					while (temp.left)
						temp = temp.left;
					current.data = temp.data;
					current.right = removeNode(current.right, temp.data);
					return current;
				}
			}
			else if (data < current.data) {
				current.left = removeNode(current.left, data);
				return current;
			}
			else if (data > current.data) {
				current.right = removeNode(current.right, data);
				return current;
			}
		}
	}

	size() {
		var count = 0;
		if (this.root) {
			count++;
			countingNodes(this.root);
		}
		function countingNodes(current) {
			if (current.left) {
				count++;
				countingNodes(current.left);
			}
			if (current.right) {
				count++;
				countingNodes(current.right);
			}
		}
		return count;
	}

	isEmpty() {
		//if tree is empty returns true, else false 
		return this.root == null;
	}
}
