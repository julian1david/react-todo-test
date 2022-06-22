const getPosts = async (userId) => {
    try{
        const url = 'https://jsonplaceholder.typicode.com/posts?userId=' + userId;
        const results = await fetch(url);
        const posts = results.json();

        return posts;
    }catch (e) {
        console.log(e);
    }
}

export { getPosts };