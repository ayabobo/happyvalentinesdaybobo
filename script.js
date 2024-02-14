function showMessage() {
    document.getElementById('card').style.display = 'none';
    document.getElementById('message').style.display = 'block';
}

function response(answer) {
    alert(answer ? "Yay! 💖" : "Oh no! 💔");
    // Here, you can add any additional actions based on the response.
}
