$(document).ready(function () {

    var follower = $("#slider").val()
    var minimumFollower = 200  , maximumFollower = 400
    var user = '' 

    $("#follower").html("No of Follower: " + follower)

    searchUserByFollower(follower)


    $("#slider").change(function () {
        var follower = $("#slider").val()
        $("#follower").html("No of Follower: " + follower)

        searchUserByFollower(follower)

    })

    $("#minimum").change(function () {
        minimumFollower = $("#minimum").val()
        $("#minimumFollowers").html("Minimum Follower: " + minimumFollower)

        searchFollowers(minimumFollower,maximumFollower)

    })

    $("#maximum").change(function () {
        maximumFollower = $("#maximum").val()
        $("#maximumFollowers").html("Maximum Follower: " + maximumFollower)

        searchFollowers(minimumFollower,maximumFollower)

    })

    function searchFollowers(minimumFollower, maximumFollower) {
        $("#results").empty()
        $.get("https://api.github.com/search/users?q=followers:" + minimumFollower + ".." + maximumFollower + "&per_page=100", function (data) {
            console.log(data)
            data.items.forEach(element => {
                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${element.avatar_url}"/></a>`

                $("#results").append(user)
            });
            
        })
    }


    function searchUserByFollower(follower) {
        $("#results").empty()
        $.get("https://api.github.com/search/users?q=followers:>=" + follower + "&per_page=100", function (data) {
            
            data.items.forEach(element => {
                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${element.avatar_url}"/></a>`

                $("#results").append(user)
            });
            
        })
    }

})