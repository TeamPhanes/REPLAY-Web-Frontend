import { ReviewDTO } from '@/types/review/review.type';

export const mockReviews: ReviewDTO['get'][] = [
  {
    themeId: 1,
    user: {
      nickname: '종화',
      image:
        'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
    },
    content:
      '상상의문에서 해본 테마 : 직박구리 / 혼숨 / 컴퍼니 / 퍼펫쇼 인데, 공테나 스릴러 좋아하신다면 혼숨 추천하고, 커플끼리 하기 좋은건 직박구리와 추천이에요. 장치도 다양하고, 스토리도 탄탄하고 재밌어요 👍👍  제일 재미있던건 혼숨인데 처음이라면 직박구리 추천하구요. 조금 특이한거 하고 싶다 하시면 퍼펫쇼도 좋을 것 같아요 직원분들도 친절하고 좋았습니다 다음에 또 방문 할려구요. 조금 특이한거 있다면 방탈출에서 이런 경험하기 쉽지 않았을거 같아여',
    image: [
      'https://i.namu.wiki/i/z7daGwnyG4XZTW0ZtbTHwQUwR8vmFwqh3CEfk8lg32xdlwjJ37daboKgEdorUiKndajVRqLfTFFsEQC5qfyiOA.webp',
      'https://i.namu.wiki/i/U1qmv3XECFOncsb0JFpMQbPn72UJ3VxNuZWrlBry5h36wdWM1CMmk2wt7QWpTSKcTVjPAnPwTFjxkzWS_phXfg.webp',
    ],
    rating: 3,
    success: '성공',
    hint: 0,
    createdAt: '2025-03-26T15:00:00',
    playUser: 4,
    totalLikes: 0,
  },
  {
    themeId: 1,
    user: {
      nickname: '쫑아',
      image:
        'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
    },
    content:
      '상상의문에서 해본 테마 : 직박구리 / 혼숨 / dkdk 컴퍼니 / 퍼펫쇼 인데, 공테나 스릴러 좋아하신다면 혼숨 추천하고, 커플끼리 하기 좋은건 직박구리와 dkdk 추천이에요. 장치도 다양하고, 스토리도 탄탄하고 재밌어요 👍👍  제일 재미있던건 혼숨인데 처음이라면 직박구리 추천하구요. 조금 특이한거 하고 싶다 하시면 퍼펫쇼도 좋을 것 같아요 직원분들도 친절하고 좋았습니다 다음에 또 방문 할려구요. 조금 특이한거 하고 싶다 하시면 퍼펫쇼도 좋을 것 같아요 직원분들도 친절하고 좋았습니다 다음에 또 방문 할려구요. ',
    image: [],
    rating: 5,
    success: '실패',
    hint: 3,
    createdAt: '2025-04-01T15:00:00',
    playUser: 6,
    totalLikes: 100,
  },
];
