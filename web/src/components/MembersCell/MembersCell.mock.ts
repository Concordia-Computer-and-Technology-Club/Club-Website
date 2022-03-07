// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  members: [
    {
      id: 1,
      fName: 'Ian',
      mInit: 'A',
      lName: 'Kollipara',
      year: 3,
      profilePictureLink:
        'https://avatars.githubusercontent.com/u/36077619?v=4',
      roles: [
        {
          type: 'MEMBER',
          startDate: '2022-03-07T21:53:04.463Z',
          endDate: null,
        },
      ],
    },
    {
      id: 2,
      fName: 'Faith',
      mInit: 'A',
      lName: 'Brown',
      year: 3,
      profilePictureLink:
        'https://avatars.githubusercontent.com/u/95879824?v=4',
      roles: [
        {
          type: 'MEMBER',
          startDate: '2022-03-07T21:55:03.361Z',
          endDate: null,
        },
        {
          type: 'PRESIDENT',
          startDate: '2022-03-07T22:29:22.463Z',
          endDate: null,
        },
      ],
    },
    {
      id: 3,
      fName: 'Anna',
      mInit: '',
      lName: 'Royuk',
      year: 2,
      profilePictureLink:
        'https://avatars.githubusercontent.com/u/99372308?v=4',
      roles: [
        {
          type: 'MEMBER',
          startDate: '2022-03-07T21:56:40.459Z',
          endDate: null,
        },
      ],
    },
  ],
})
