module.exports = {
    run: function() {

    },

    test: function() {
        
        let phrase;
        let response;        
        let dictionary;

        // phrase = "applepie"
        // dictionary = ["apple", "apple", "pear", "pie"];         
        // response = this.find_string(dictionary, phrase)
        // console.log(response)
        
        // phrase = "applepeer"
        // dictionary = ["apple", "apple", "pear", "pie"];               
        // response = this.find_string(dictionary, phrase)
        // console.log(response)

        
        // phrase = "hellonow"
        // dictionary = ["hello", "hello", "on", "now"];               
        // response = this.find_string(dictionary, phrase)
        // console.log(response)

        // phrase = "leetcode"
        // dictionary = ["leet", "code"];         
        // response = this.find_string(dictionary, phrase)
        // console.log(response)
        
        // phrase = "catsandog"
        // dictionary = ["cats","dog","sand","and","cat"];         
        // response = this.find_string(dictionary, phrase)
        // console.log(response)
        
        phrase = "cars"
        dictionary = ["car","ca","rs"]
        response = this.find_string(dictionary, phrase)
        console.log(response)
    },

    find_string: function(dictionary, string) {

        dictionary = new Set(dictionary)

        for (let i = 1; i < string.length + 1; i++) {

            let word = string.substr(0, i);
            
            if (dictionary.has(word)) {
                
                let left = string.substr(i);
        
                if (left.length === 0) {
                    return true;
                }
                
                if (dictionary.has(left)) {
                    return true;
                }
                
                if (this.find_string(dictionary, left)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}