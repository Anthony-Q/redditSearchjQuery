$(document).ready(function() {
    let topic = 'nba';
    let limit = 25;
    let sortBy = "relevance"
    let storage = [];
    let result = "";
    
    
    // $.ajax({
    //   url: `http://www.reddit.com/search.json?q=${topic}&sort=${sortBy}&limit=${limit}`,
    //   success: function(results) {
    //       console.log(results.children);
    //       $('.topic-search').click(function() {
    //         //   console.log("data.data.children", data.data.children)
    //         $.each(results, function(i, item) {
    //             console.log("item", item);
    //             console.log("i", i);
    //           result += "<div>" + item + "</div>";
    //           $("#feed").append(result);
    //         })
    //       });
    //   }
    // })


      //triggers search
    $(".topic-search").click(function() {
        $.ajax({
            url: `http://www.reddit.com/search.json?q=${topic}&sort=${sortBy}&limit=${limit}`,
        }).then(function(data) {
            let results = data.data.children;
            // console.log(data.data.children);
           for (var i = 0; i < results.length; i++) {
               console.log(results[i].data.title);
               let submission = `<div class="submission-con">${results[i].data.title}</div>`;
               $("#feed").append(submission);
           }
        }).done(function(data) {
            console.log("finished");
        })
    })
});