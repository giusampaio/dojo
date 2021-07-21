module.exports = {
    run: function() {

        let list_one = [4, 8, 15, 19]

        let list_two = [7, 9, 10, 16]

        let merged = this.merge_lists(list_one, list_two)

        return `The merged list = ${merged}`
    },

    test: function() {
        
        let list_one, list_two, merged = []

        list_one = [4, 8, 15, 19]        
        list_two = [7, 9, 10, 16]        
        merged = this.merge_lists(list_one, list_two)
        console.log('Merge =', merged)
        
        list_one = [1, 3, 5, 6]
        list_two = [2, 4, 6, 20, 34]
        merged = this.merge_lists(list_one, list_two)
        console.log('Merge =', merged)
    },

    merge_lists: function(list_one, list_two) {
        return list_one.concat(list_two).sort((a, b) => a - b)
    },
}