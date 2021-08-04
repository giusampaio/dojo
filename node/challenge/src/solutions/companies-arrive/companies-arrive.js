module.exports = {

    max_events: function(arrival, duration) {

        let total = 0;

        // for (let i = 0; i < arrival.length; i++) {
        //     for(j = 0; j < arrival.length; j++) {               
        //         if (arrival[j] > arrival[j+1]) {
        //             let tmp1 = arrival[j]
        //             arrival[j] = arrival[j+1];
        //             arrival[j + 1] = tmp1;

        //             let tmp2 = duration[j]
        //             duration[j] = duration[j+1];
        //             duration[j + 1] = tmp2;
        //         }
        //     }
        // }

        for (let i = 0; i < arrival.length; i++) {            
            if (arrival[i] + duration[i] <= arrival[i+1] || arrival[i+1] == undefined) {
                total++;
            }            
        }

        return total;
    },

    sort: function(arr) {

        for (let i = 0; i < arr.length; i++) {
            for(j = 0; j < arr.length; j++) {               
                if (arr[j] > arr[j+1]) {
                    let tmp = arr[j]
                    arr[j] = arr[j+1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr
    }
}