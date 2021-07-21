module.exports = {
    run: function() {

        let original_list = [1, 5, 9, 7,6, 8, 3]

        let nex_pointer = null;
        let arb_pointer = null;

        return ``
    },
    
    test: function () {

        let original = [1, 5, 9, 7,6, 8, 3]

        let copy = this.make_copy(original)

        copy[0] = 10

        console.log(original, copy)

    },

    make_copy: function(list) {

        let copy = [];

        for (let i = 0; i < list.length; i++) {            
            copy[i] = list[i];                        
        }

        return copy;
    }

}