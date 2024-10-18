const postURL = './post.html'
const postButton =$('#postBtn')
const userName = $('#username')
const Title = $('#title')
const blogContent = $('#blogCon')


function redirectionFunc(event) {
    event.preventDefault();
    if(!Title.val()|| !userName.val() || !blogContent.val()) {
        alert("Must input all fields!")
       $(location).attr('href','./index.html');
       return;
    }
    console.log("Hi how are you?")
    localStorage.setItem('title', Title.val())
    localStorage.setItem('username', userName.val())
    localStorage.setItem('blogpost', blogContent.val())

    $(location).attr('href', postURL)
}
postButton.on('click', redirectionFunc) 


document.getElementById('lightordark').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})

Togglebtn.on('click', lightorDark())