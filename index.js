$(document).ready(function() {
    let topic = '';
    let limit = 25;
    let sortBy = "relevance"
    let storage = [];
    let result = "";
    


    

      //grabs topic from input and triggers search
    $(".topic-search").click(function() {
        console.log("topic", topic)
        let subject = $(".topic-form").val();
        console.log("topic", topic)
        $.ajax({
            url: `http://www.reddit.com/search.json?q=${subject}&sort=${sortBy}&limit=${limit}`,
        }).then(function(data) {
            let results = data.data.children;
            let submission = "";
            // console.log(data.data.children);
           for (var i = 0; i < results.length; i++) {
            //    console.log(results[i].data);
               console.log("thumbnail", results[i].data);
               
               if (results[i].data.thumbnail.slice(0, 4) === "http") {
                submission = `<div class="submission-con">
               <h3>${results[i].data.title}</h3>
               <img src="${results[i].data.thumbnail}" height="${results[i].data.thumbnail_height}" width="${results[i].data.thumnail_width}"/>
               </div>`;

               $("#feed").append(submission);
               } else {
                submission = `<div class="submission-con">
                <h3>${results[i].data.title}</h3>
                </div>`;
                $("#feed").append(submission);
               }
               
               
           }
        }).done(function(data) {
            console.log("finished");
        })
    })
});