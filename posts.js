import { db } from "./db.js"

let paintings = document.getElementsByClassName('paintings')[0]
let posts = db.split('&&')

for (let i = 0; i < posts.length; i += 1) {

  let postItems = posts[i].split('--')
  let tags = `
    <a href="`+ postItems[0] +`" target="_blank" class="guilds">
    <img src="img/`+ postItems[1] + `" alt="" class="guild_avatar">
    <h3 class="guild_name">
    `+ postItems[2] + `
    </h3>
    </a>`

    paintings.innerHTML = paintings.innerHTML + tags
}