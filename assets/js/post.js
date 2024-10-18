postContainer = $("#postplace");
let storedBlogposts = JSON.parse(localStorage.getItem("Blogposts")) || [];
let userName = localStorage.getItem("username") || "Default Username";
let postTitle = localStorage.getItem("title") || "Default Title";
let BlogPostText = localStorage.getItem("blogpost") || "Default Content";
if (storedBlogposts.length > 0) {
  Blogposts = storedBlogposts;
  for (let i = 0; i < Blogposts.length; i++) {
 
    postCard1 = $("<div>");
    username2 = $("<h1>").text(Blogposts[i].userCreator);

    postTitle2 = $("<h2>").text(Blogposts[i].blogTitle);
    
    blogPostContent = $("<p>").text(Blogposts[i].postContent);
   
    postCard1.append(username2);
    postCard1.append(postTitle2);
    postCard1.append(blogPostContent);
    postContainer.append(postCard1);
  }
} else {
  blogPostbuild();
}
function blogPostbuild() {
  let Username = localStorage.getItem("username");
  let postTitle = localStorage.getItem("title");
  let blogPost = localStorage.getItem("blogpost");

  postCard = $("<div>").attr("style", "border: 4px solid violet;");

  userCreator = $("<h1>").text(Username);

  blogTitle = $("<h2>").text(postTitle);

  postContent = $("<p>").text(blogPost);
  

  postCard.append(userCreator);
  postCard.append(blogTitle);
  postCard.append(postContent);

  postContainer.append(postCard);
  let BlogpostContent = {
    userCreator: Username,
    blogTitle: postTitle,
    postContent: blogPost,
  };

  const previousBlogs = JSON.parse(localStorage.getItem("Blogposts")) || [];
  previousBlogs.push(BlogpostContent);
  localStorage.setItem("Blogposts", JSON.stringify(previousBlogs));
}
blogPostbuild();
const homepage = "./index.html";
homeButton = $("#homeplanet");
function returnHome() {
  $(location).attr("href", homepage);
}
homeButton.on("click", returnHome);

document.getElementById("darkside").addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
});
//This section of code was adapted from stackoverflow and bootstrap documentation, as listed in the README.md.
