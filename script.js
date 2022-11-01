
let profile = document.getElementById('profile')
let guildsButton = document.getElementById('guildsButton')
let guilds = document.getElementById('guilds')

let back = document.getElementById('back')

guildsButton.onclick = function(){
    removeCards()
}

function removeCards(){
    profile.style.display = 'none'
    setTimeout(function(){
        profile.style.opacity = '0'
    }, 0)

    guilds.style.display = 'block'
    setTimeout(function(){
        guilds.style.opacity = '1'
    }, 0)
}

back.onclick = function(){
    moveCards()
}

function moveCards(){
    profile.style.display = 'block'
    setTimeout(function(){
        profile.style.opacity = '1'
    }, 0)

    guilds.style.display = 'none'
    setTimeout(function(){
        guilds.style.opacity = '0'
    }, 0)
}

