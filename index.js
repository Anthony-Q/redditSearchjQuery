
$(document).ready(function () {
    let topic = '';
    let limit = 25;
    let sortBy = "relevance"
    let storage = [];
    let result = "";
    //grabs topic from input and triggers search
    $(".topic-search").click(function () {
        console.log("topic", topic)
        $(".submission-con").remove();
        let subject = $(".topic-form").val();
        let sortBy = $(".sortby-dropdown").val();
        let limit = $(".limit-dropdown").val();
        console.log("sortBy", sortBy);
        console.log("topic", topic);
        $.ajax({
            url: `http://www.reddit.com/search.json?q=${subject}&sort=${sortBy}&limit=${limit}`,
        }).then(function (data) {
            let results = data.data.children;
            let submission = "";
            // console.log(data.data.children);
            for (var i = 0; i < results.length; i++) {
                console.log("thumbnail", results[i].data);
                let thread = results[i].data;
                console.log("text", results[i].data.selftext);
                if (thread.thumbnail.slice(0, 4) === "http") {
                    submission = `<div class="submission-con">
               <a href="${thread.url}">${thread.title}</a>
               <img src="${thread.thumbnail}" height="${thread.thumbnail_height}" width="${thread.thumnail_width}"/>
               <p>${thread.selftext}<p/>
               <button class="save-btn">Save Thread</button>
               </div>`;
                    $("#feed").append(submission);
                } else {
                    submission = `<div class="submission-con">
                <a href="${thread.url}">${thread.title}</a>
                <p>${thread.selftext}</p>
                <button class="save-btn">Save Thread</button>

                </div>`;
                    $("#feed").append(submission);
                }
                $.ajax({
                    type: "POST",
                    url: "api/redditThread",
                    data: {
                        threadName: thread.title,
                        threadImage: thread.url,
                        selftext: thread.selftext,
                        subreddit: thread.subreddit_name_prefixed,
                        author: thread.author,
                        datePosted: thread.created,
                        comments: thread.num_comments,
                        upvotes: thread.ups
                      }
                })
            }
            
        }).done(function (data) {
            console.log("ajax done");
        });
    });
    
});