postContainer = $('#postplace')
let Blogposts=[]
if(JSON.parse(localStorage.getItem(Blogposts) != [])) {
   for( let i = 0; i < Blogposts.length; i++) {
   Blogposts[i].userCreator = userName
   Blogposts[i].blogTitle = postTitle
   Blogposts[i].postContent =BlogPostText
   postCard1 =$('<div>');
   username2 =$('<h1>');
   username2.text(userName);
   postTitle2 =$('<h2>');
   postTitle2.text(postTitle);
   blogPostContent = $('<p>');
   blogPostContent.text(BlogPostText);
   postCard1.append(username2);
   postCard1.append(postTitle2);
   postCard1.append(blogPostContent);
   postContainer.append(postCard1);
  

   }
 } else {blogPostbuild()}
function blogPostbuild () { 
    // if(localStorage.getItem('blogpost') != []) {
    //    postContainer.append
    // }

      Username = localStorage.getItem('username')
     postTitle = localStorage.getItem('title')
     blogPost = localStorage.getItem('blogpost') 
    
    postCard = $('<div>')
    postCard.attr('style', 'border: 4px solid white;')
    userCreator=$('<h1>');
    userCreator.text(Username);
    // userCreator.attr('style', 'text-decoration:underline;')
    blogTitle = $('<h2>');
    blogTitle.text(postTitle);
    // blogTitle.attr('style', 'font-weight:bolder;')
    postContent =$('<p>');
    postContent.text(blogPost);

    postCard.append(userCreator);
    postCard.append(blogTitle);
    postCard.append(postContent);
    // userCreator.append(blogTitle);
    // blogTitle.append(postContent);
    postContainer.append(postCard);
    let BlogpostContent = {
        userCreator: Username,
        blogTitle: postTitle,
        postContent: blogPost
    }
  
    Blogposts.push(BlogpostContent)
    console.log(Blogposts)

    localStorage.setItem('Blogposts', JSON.stringify(Blogposts));

}
blogPostbuild()
const homepage = './index.html'
homeButton = $('#homeplanet')
function returnHome() {
$(location). attr('href',homepage)
}
homeButton.on('click', returnHome)