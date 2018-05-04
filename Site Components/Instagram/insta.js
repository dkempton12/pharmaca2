requirejs(['jquery'], function( $ ) {
    $(document).ready(function() {
        var token = '378764291.1677ed0.a426708c330f4f3e84c16792a360f22c',
        userid = 378764291,
        num_photos = 10;
        
        
        $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, count: num_photos},
        success: function(data){
        for( x in data.data ){
            if (x < num_photos) {
                //Loop through data  for first 5 images
                    //we will be building a list that has a linked image and overlay
                $('#insta-feed').append(
                        '<li class="feed-box-' + x + '">' +
                                '<a href="' + data.data[x].link +'" target="_blank">' +
                                '<img alt="' + data.data[x].caption.text + '" src="' + data.data[x].images.low_resolution.url + '">' +
                                '<div class="view-overlay"><p class="mid-content">' +
                                '<span class="likes">&hearts; ' + data.data[x].likes.count + '</span>' +
                                '<span class="comments"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 24 24"><path d="M24 1h-24v16.981h4v5.019l7-5.019h13z"/></svg>' + data.data[x].comments.count + '</span></p></div>' +
                            '</a>' +
                        '</li>'
                    );
                }
            }
            $('#insta-feed').owlCarousel({
                loop:true,
                margin:10,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            })
            }
        })
    })
});