import users from "./users";

const chatRoomData =
    {
        id: 'r1',
        chatUsers: [users.user[4], users.user[1]],
        messages:
            [
                {
                    id: 'm10',
                    createdAt: '2023/01/10 22:08:00',
                    content: "Bye",
                    user: users.user[1],
                },
                {
                    id: 'm9',
                    createdAt: '2023/01/10 22:07:50',
                    content: "Good Bye then!",
                    user: users.user[4],
                },
                {
                    id: 'm8',
                    createdAt: '2023/01/10 22:08:00',
                    content: "12:30 PM works for me. See you then!",
                    user: users.user[1],
                },
                {
                    id: 'm7',
                    createdAt: '2023/01/10 22:07:50',
                    content: "?",
                    user: users.user[4],
                },
                {
                    id: 'm6',
                    createdAt: '2023/01/10 22:07:50',
                    content: "How about 12:30 PM?",
                    user: users.user[4],
                },
                {
                    id: 'm5',
                    createdAt: '2023/01/10 22:07:08',
                    content: "Sure, that sounds great. What time works for you?",
                    user: users.user[1],
                },
                {
                    id: 'm4',
                    createdAt: '2023/01/10 22:06:50',
                    content: "I'm doing well too. Do you want to grab lunch later?",
                    user: users.user[4],
                },
                {
                    id: 'm3',
                    createdAt: '2023/01/10 22:06:12',
                    content: "I'm good, thanks for asking. How about you?",
                    user: users.user[1],
                },
                {
                    id: 'm1',
                    createdAt: '2023/01/10 22:05:12',
                    content: "Hello, Bob! How are you today?",
                    user: users.user[4],
                },
            ]
    };

export default chatRoomData;