// when document is ready
$(document).ready(function () {

    var follower = $("#slider").val()
    var minimumFollower = 0  , maximumFollower = 10000
    var user = '' 

    $("#follower").html("No of Follower: " + follower)

    searchUserByFollower(follower)


    // getting slider value
    $("#slider").change(function () {
        var follower = $("#slider").val()
        $("#follower").html("No of Follower: " + follower)
        
        searchUserByFollower(follower)
        
    })
    
    // showing minimum value enterd in slider
    $("#minimum").change(function () {
        minimumFollower = $("#minimum").val()
        $("#minimumFollowers").html("Minimum Follower: " + minimumFollower)
        
        searchFollowers(minimumFollower,maximumFollower)
        
    })
    
    // showing maximum value enterd in slider
    $("#maximum").change(function () {
        maximumFollower = $("#maximum").val()
        $("#maximumFollowers").html("Maximum Follower: " + maximumFollower)

        searchFollowers(minimumFollower,maximumFollower)

    })


    // this function helps us to get users between a certain range
    function searchFollowers(minimumFollower, maximumFollower) {
        $("#results").empty()
        $.get("https://api.github.com/search/users?q=followers:" + minimumFollower + ".." + maximumFollower + "&per_page=100", function (data) {
            console.log(data)
            data.items.forEach(element => {
                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-5" width="150" height="100" src="${element.avatar_url}"/></a>`
                
                $("#results").append(user)
            });
            
        })
    }
    
    
    // this function helps us to get the most followed in github
    function searchUserByFollower(follower) {
        $("#results").empty()
        $.get("https://api.github.com/search/users?q=followers:>=" + follower + "&per_page=100", function (data) {
            
            data.items.forEach(element => {
                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-5" width="150" height="100" src="${element.avatar_url}"/></a>`

                $("#results").append(user)
            });
            
        })
    }

})