const newsActionTypes = {
}

let initialState = {
    newsData: [
        {
            id: 1,
            author: "Author 1",
            text: "Some text 1",
            date: "date 1"
        }, {
            id: 2,
            author: "Author 2",
            text: "Some text 2",
            date: "date 2"
        }, {
            id: 3,
            author: "Author 3",
            text: "Some text 3",
            date: "date 3"
        }, {
            id: 4,
            author: "Author 4",
            text: "Some text 4",
            date: "date 4"
        }
    ]
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default newsReducer;