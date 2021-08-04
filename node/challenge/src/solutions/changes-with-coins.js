module.exports = {

    run: function() {

    },

    test: function()  {     

        change()
    },

    change: function(amount, coins) {
 
        let result = []    
        let trans_by_user = {}
    
        logs.forEach(elem => {
        
            let pieces = elem.split(' ')
        
            let send_user = pieces[0]
            let recv_user = pieces[1]
            
            trans_by_user[send_user] += 1;
            trans_by_user[recv_user] += 1;
        })
    
    
        trans_by_user.forEach(user => {        
            result.push(user)        
        })
    
        return result

    }
}