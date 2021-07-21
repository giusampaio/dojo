module.exports = {

    run: function() {

        let target = 2
        let array = [5, 7, 1, 2, 8, 4, 3]        
        let response = this.target_sum_exists(array, target)
        
        return `The target sum for ${target} is ${response}`
    },
    
    test: function() {
        
        let tests = [3, 20, 1, 2, 7]
        let array = [5, 7, 1, 2, 8, 4, 3]       

        for (const val of tests) {
            
            const output = this.target_sum_exists(array, val)
            
            console.log("target_sum_exists(array, " + val + ") = " + output);
        }
    },

    target_sum_exists: function(array, target) {

        for (let index = 0; index < array.length; index++) {
            
            const pair = target - array[index] 
            const res = array.find(elem => pair == elem && elem != array[index])

            if (res !== undefined) {
                return true
            }
        }        

        return false
    }
}