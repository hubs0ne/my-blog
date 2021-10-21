let postCommentForm = document.querySelector('.post-comment-form');
let postCommentInput = document.querySelector('.post-comment-input');
let postCommentList = document.querySelector('.post-comments-list');



postCommentInput.oninput = function() {
    console.log(postCommentInput.value)
}

//comments constructions
postCommentForm.onsubmit = function(e) {
    e.preventDefault();
    //create new div with class comment-text
    let divCommentText = document.createElement('div');
    divCommentText.classList.add('comment-text');
    //create new div with class comment-username
    let divCommentUsername = document.createElement('div');
    divCommentUsername.classList.add('comment-username');
    //append username in comment-list
    divCommentUsername.textContent = 'Guest';
    postCommentList.appendChild(divCommentUsername);
    //append comment-text in comment-text
    divCommentText.textContent = postCommentInput.value;
    postCommentList.appendChild(divCommentText);
    //clear input value after submit
    postCommentInput.value = '';
}