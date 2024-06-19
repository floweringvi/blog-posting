const postURL = './post.html'
const postButton =$('.post-btn')
const userName = $('#username')
const Title = $('#title')
const blogContent = $('#blogCon')


function redirectionFunc(event) {
    event.preventDefault();
    $(location).attr('href', postURL)

}
postButton.on('submit', redirectionFunc) 