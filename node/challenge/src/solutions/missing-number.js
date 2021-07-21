module.exports = {

    run: function() {  
        
        let arr = [3, 7, 1, 6, 8, 4, 5, 9]
                
        let number = this.get_missing_number(arr)

        return `The missing number is ${number}`;
    },    

    get_missing_number: function(arr) {

        for (let index = 1; index < arr.length; index++) {

            let exists = arr.find(elem => elem == index)
            
            if (exists == undefined) {
                return index
            }
        }
    }


}