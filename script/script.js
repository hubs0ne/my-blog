let h1 = document.querySelector('h1');
let themeBtn = document.querySelector('.theme-button');
let postLikeCount = document.querySelector('.post-like-count');
let postLikeBtn = document.querySelector('.post-like-button');
let postLikeImg = document.querySelector('.post-like-img');
let postLikes = document.querySelector('.post-likes');

//h1 change color onClick
h1.onclick = () => {
    h1.classList.toggle('gold');
};

//change theme button
themeBtn.onclick = () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('dark a');
};

//like construction
let likeCount = 0;
postLikeCount.textContent = likeCount;
postLikeBtn.onclick = () => {
    postLikes.classList.toggle('liked');
    if (postLikes.classList.contains('liked')) {
        postLikeImg.src = './img/like.png';
        postLikeImg.alt = 'liked';
        postLikeCount.textContent = ++likeCount;
    } else {
        postLikeImg.src = './img/dont-like.png';
        postLikeImg.alt = 'dont liked';
        postLikeCount.textContent = --likeCount;
    };
};