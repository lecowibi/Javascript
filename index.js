let username;
document.getElementById('btn').onclick = function() {
    username = document.getElementById('input').value;
    document.getElementById ('head').textContent = `Hello ${username}`;
}