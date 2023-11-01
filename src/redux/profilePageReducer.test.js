import profilePageReduser, { addPostActionCreator, deletePost } from "./profilePageReducer";

let state = {
    posts: [
        {id:1, message: "Hi, how are you", likeCounts: 12},
        {id:2, message: "It is my first post", likeCounts: 11},
    ],
}

it('new post should be added', () => {
    let action = addPostActionCreator('it-camasutra.com')
    let newState = profilePageReduser(state, action);
    expect(newState.posts.length).toBe(3);
})

it('message of new post should be correct', () => {
    let action = addPostActionCreator('it-camasutra.com')
    let newState = profilePageReduser(state, action);
    expect(newState.posts[3].message).toBe('it-camasutra.com');
})

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profilePageReduser(state, action);
    expect(newState.posts.length).toBe(2);
})
