let state = {
    profile_page: {
        posts: [ {text: 'Some post'}, {text: 'Some post'},{text: '1 post'} ]

    },
    dialogs_page: {
        dialogs_arr: [ {id: 1, name: 'Dima'},{id: 2, name: 'Vanya'}, {id: 3, name: 'Andrey'}  ],
        messages: [ {message: '2'}, {message: 'Hi'},{message: 'Hi'} ]
    },

}


export let add_post = () => {
    let new_post = {
        text: 'New post'
    }

    state.profile_page.posts = [...state.profile_page.posts, new_post]
    console.log(state.profile_page)
};

export default state;