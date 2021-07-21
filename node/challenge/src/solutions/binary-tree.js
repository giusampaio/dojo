module.exports = {
    run: function() {
        
    },
    test: function() {
        
        let root = [100, 50, 200, 25, 75, 350]

        let binary_tree = this.get_binary_tree(root)

        // this.print_tree(binary_tree)
    },

    get_binary_tree: function(array) {

        let tree = [];
        let node = [];
        
        for (let i = 0; i < array.length; i++) {
            
            const elem = array[i];
            
            let node = new TreeNode(elem)

            if (array[i+1] != undefined) {
                node.left = array[i+1];
            }

            if (array[i+2] != undefined) {
                node.right = array[i+2];
            }

            tree.push(node)
        }

        console.log(tree)
    },

    get_left_index(index) {
        return index
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null
        this.left  = null;
    }
}

        // let limit    = 1;
        // let inserted = 0;
        // let level    = 0;
        // let message  = ' ';
        
        // for (let i = 0; i < array.length; i++) {     
            
        //     const elem = array[i]
                        
        //     message += elem +' ';
        //     inserted++
            
        //     if (inserted == limit) {
        //         level++
        //         limit = Math.pow(2, level)
        //         inserted = 0;
        //         message += '; '
        //     }            
        // }

        // console.log(message)