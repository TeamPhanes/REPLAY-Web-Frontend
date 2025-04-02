import { CommentDTO } from '../types/comment/comment.type';

export const mockComments: CommentDTO['get'][] = [
  {
    commentId: 1,
    nickname: '종화',
    image:
      'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
    content: '아무나 와주세요 !! 저 혼자 쓸쓸해요 ㅠ',
    createdAt: '2025-03-26T15:00:00',
    reComments: [
      {
        reCommentsId: 1,
        nickname: '모르는 사람',
        image: '',
        content: '마그다 너무 많은 사람들이 해서 없을듯요??',
        createdAt: '2025-03-27T12:00:00',
      },
      {
        reCommentsId: 2,
        nickname: '종화',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
        content: '그럴까요?? 저만 못했나보네요..',
        createdAt: '2025-03-28T12:00:00',
      },
    ],
  },
  {
    commentId: 2,
    nickname: '종화',
    image:
      'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
    content: '종화2님 환영합니다 !! 저랑 이미지도 같으시네여 ㅋㅋㅋ',
    createdAt: '2025-03-29T15:00:00',
    reComments: [],
  },
];
