let rerenderTree = (state) => {

}

const COUNT = 4
let usersDialogs = []
for (let i = 0; i < COUNT; i++) {
  usersDialogs[i] = {
        id: i + 1,
        firstName: "First ",
        lastName: "Last "
    };

}

let messages = []
for (let i = 0; i < 10; i++) {
  messages[i] = {
        id: i + 1,
        message: "Some message ",
        date: "date "
    };
}

let newsData = []
for (let i = 0; i < COUNT; i++) {
    newsData[i] = {
        id: i + 1,
        author: "Author ",
        text: "Some text ",
        date: "date "
    };

}
let state = {
    usersDialogs: usersDialogs,
    messages: messages,
    newsData: newsData,
    textarea: ''
}

export const addPost = () => {
    let today = '';
    today = new Date().toLocaleTimeString();
    today = today + '       ' + new Date().toLocaleDateString();
    let newPost = {
        id: newsData.length+1,
        author: "me",
        text: state.textarea,
        date: today
    };

    newsData.push(newPost);
    state.textarea = '';
    rerenderTree(state);
}

export const changeTextArea = (symbol) => {
    state.textarea = symbol;
    rerenderTree(state);
}

export const subscribe = (observer) => {
    rerenderTree = observer;
}

export default state