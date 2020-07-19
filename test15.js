$(document).ready(function () {
  $("body").append(`<form action="/index.html" method="post">
    <label for="username">Username: </label>
    <input type="text" id="username" name="username"/>
    <br/>
    <label for="password">Password: </label>
    <input type="text" id="password" name="password" />
    <br/>
    <input type="submit" value="Login" />
</form>`);
});
