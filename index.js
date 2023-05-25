$(document).ready(function () {
    const user = 'MateusSanchesRodriguez'
    const endpoint = `https://api.github.com/users/${user}`

    $.ajax(endpoint).done(function (response) {
        console.log(response)
        $('.profile-avatar').attr('src',response.avatar_url)
        $('.profile-name').text(response.name)
        $('.profile-username').text(response.login)
        $('#repositorio').text(response.public_repos)
        $('#seguidores').text(response.followers)
        $('#seguindo').text(response.following)
        $('#seguindo').text(response.following)
        $('.profile-link').attr('href',response.html_url)
    });
})