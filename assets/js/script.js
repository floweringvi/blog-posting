const postURL = './post.html'
const postButton =$('')


function redirectionFunc(event) {
    event.preventDefault();
    $(location).attr('href', postURL)

}
postButton.on('click', redirectionFunc) 