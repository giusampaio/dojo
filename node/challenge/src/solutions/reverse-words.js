module.exports = {
    run: function() {

    },

    test: function() {

        // input = "the sky is blue"
        input = "  Bob    Loves  Alice   "

        this.reverse_string(input)

    },

    reverse_string: function(phrase) {

        reverse = ''

        words = phrase.split(' ');

        for (let i = words.length - 1; i >= 0; i--) {
            
            let word = words[i];

            if (word == '') {
                continue
            }
            
            reverse += (reverse.length == 0) ? word : ' '+word;
        }

        return reverse
    }
}