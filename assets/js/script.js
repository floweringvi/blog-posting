const postURL = './post.html'
const postButton =$('#postBtn')
const userName = $('#username')
const Title = $('#title')
const blogContent = $('#blogCon')


function redirectionFunc(event) {
    event.preventDefault();
    console.log("Hi how are you?")
    localStorage.setItem('title', Title.val())
    localStorage.setItem('username', userName.val())
    localStorage.setItem('blogpost', blogContent)

    $(location).attr('href', postURL)
}
postButton.on('submit', redirectionFunc) 