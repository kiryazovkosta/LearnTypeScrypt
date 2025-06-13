import './style.css'
import { postsTemplate } from './views/postView'
import { usersTemplate } from './views/usersView'
import { Router } from './utils/router'

const router = new Router({
    '/posts': postsTemplate,
    '/users': usersTemplate
});

function setupLinks() {
    const postsLinkElement = document.getElementById("posts-link");
    const usersLinkElement = document.getElementById("users-link");

    if (postsLinkElement) {
        postsLinkElement.addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/posts');
        })
    }

        if (usersLinkElement) {
        usersLinkElement.addEventListener('click', e => {
            e.preventDefault();
            router.navigate('/users');
        })
    }
}

setupLinks();
