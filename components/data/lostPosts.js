const lostPosts = [
    {
        id: 't1',
        user: {
            id: 'u1',
            username: 'John',
            name: 'John .M',
            profileImage: require('../../assets/profile_1.png'),
        },
        createdAt: '2022:12:04 12:00:00',
        content: 'Lorem Ipsum is simply dummy text of the printing and ' +
            'typesetting industry. Lorem Ipsum has been the ' +
            'industry\'s standard dummy text ever ' +
            'since the 1500s, when an unknown printer ' +
            'took a galley of type and scrambled it to ' +
            'make a type specimen book.',
        numberOfComments: 126,
        numberOfShares: 506,
        numberOfLikes: 53,
    },
    {
        id: 't2',
        user: {
            id: 'u2',
            username: 'Salah',
            name: 'Salah .D',
            profileImage: require('../../assets/profile_3.png'),
        },
        createdAt: '2022:12:04 2:03:14',
        content: 'Lorem Ipsum is simply dummy text of the printing and ' +
            'typesetting industry. ',
        numberOfComments: 260,
        numberOfShares: 623,
        numberOfLikes: 1025,
    },
    {
        id: 't3',
        user: {
            id: 'u3',
            username: 'Mohamed',
            name: 'Mohamed .A',
            profileImage: require('../../assets/profile_4.png'),
        },
        createdAt: '2022:07:04 14:02:00',
        content: 'Lorem Ipsum is simply dummy text of the printing and ' +
            'typesetting industry. ',
        numberOfComments: 126,
        numberOfShares: 506,
        numberOfLikes: 53,
    }
];

export default lostPosts;

