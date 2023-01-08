import users from "./users";

const notifications = [
    {
        id: "n1",
        user: users.user[0],
        createdAt: '2023:01:02 12:30:00',
        notificationIcon: require('../../assets/Share.png'),
        type: 'share',
    },
    {
        id: "n2",
        user: users.user[1],
        createdAt: '2023:01:01 15:28:00',
        notificationIcon: null,
        type: 'comment',
    },
    {
        id: "n3",
        user: users.user[2],
        createdAt: '2023:01:03 19:30:35',
        notificationIcon: require('../../assets/Like.png'),
        type: 'like',
    },
];

export default notifications;