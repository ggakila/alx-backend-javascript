const posts =[
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post Two"},
    {title: "Post Three", body: "This is post Three"},
];

function getPosts() {
    setTimeout( () => { //callback function taken by set timeout method
        let output = '';
        posts.forEach( (post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post four', body: "This is post 4"}, getPosts);