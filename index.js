$(document).ready(function () {
    let topic = '';
    let limit = 25;
    let sortBy = "relevance"
    let storage = [];
    let result = "";
    let thread = null;
    
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
                thread = results[i].data;
                console.log("text", results[i].data.selftext);
                if (thread.thumbnail.slice(0, 4) === "http") {
                    submission = 
                `<div class="submission-con">
                  <a class="thread-title" href="${thread.url}">${thread.title}</a>
                  <a class-"thread-author">by ${thread.author}</a>
                  <img class="thread-image" src="${thread.thumbnail}" height="${thread.thumbnail_height}" width="${thread.thumnail_width}"/>
                  <p class="thread-selftext">${thread.selftext}<p/>
                  <a class="thread-subreddit">${thread.subreddit_name_prefixed}</a>
                  <a class="thread-posted">${thread.created_utc}</a>
                  <a class="thread-comments">${thread.num_comments}</a>
                  <button class="save-btn">Save Thread</button>
                </div>`;
                    $("#feed").append(submission);
                } else {
                    submission = 
                `<div class="submission-con">
                  <a class="thread-title" href="${thread.url}">${thread.title}</a>
                  <a class="thread-author">by ${thread.author}</a>
                  <p class="thread-selftext">${thread.selftext}</p>
                  <a class="thread-subreddit">${thread.subreddit_name_prefixed}</a>
                  <a class="thread-posted">${thread.created_utc}</a>
                  <button class="save-btn">Save Thread</button>
                </div>`;
                    $("#feed").append(submission);
                }
            }     
        }).done(function (data) {
            console.log("ajax done", data);
        }); 
    });

    $("body").on("click", "button.save-btn", function() {
        console.log("tiheight:");
        $.ajax({
            type: "POST",
            url: "api/redditThread",
            data: {
                threadName: $(".thread-title").html(),
                threadImage: $(".thread-image").attr("src"),
                threadUrl: $(".thread-title").attr("href"),
                selftext: $(".thread-selftext").html(),
                subreddit: $(".thread-subreddit").html(),
                author: $(".thread-author").html(),
                datePosted: $(".thread-posted").html(),
                comments: $(".thread-comments").html(),
                threadImageHeight: $(".thread-image").height(),
                threadImageWidth: $(".thread-image").width()
              }
        }).done( (data) => {
          console.log("post finished", data);
        });
       });
    
});