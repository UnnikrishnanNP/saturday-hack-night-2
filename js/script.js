// when document is ready
$(document).ready(function () {

    var minimumFollower = 0  , maximumFollower = 10000
    var user = '' 


    searchUserByFollower()
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
        $("#text-change").html("Followers between " + minimumFollower + " and " + maximumFollower);
        $.get("https://api.github.com/search/users?q=followers:" + minimumFollower + ".." + maximumFollower + "&per_page=100", function (data) {
            console.log(data)
            data.items.forEach(element => {
                user = `<a target="_blank" href="${element.html_url}">
                            <img class="img-thumbnail ml-5" width="150" height="100" src="${element.avatar_url}"/>
                            </a>
                            `
                
                $("#results").append(user)
            });
            
        })
    }
    
    
    // this function helps us to get the most followed in github
    function searchUserByFollower() {
        $("#results").empty()
        $.get("https://api.github.com/search/users?q=followers:>=10000&per_page=100", function (data) {
            
            data.items.forEach(element => {
                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-5" width="150" height="100" src="${element.avatar_url}"/></a>`

                $("#results").append(user)
            });
            
        })
    }

})