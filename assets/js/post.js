postContainer = $('#postplace')

function blogPostbuild () { 
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


}
blogPostbuild();