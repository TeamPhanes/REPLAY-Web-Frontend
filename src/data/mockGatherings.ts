import {
  GatheringDTO,
  GatheringLikedDTO,
} from '@/types/gathering/gathering.type';

export const mockGatherings: GatheringDTO['get'][] = [
  {
    gatheringId: 1,
    listImage: 'https://xdungeon.net/file/theme/11/11_6145641280.jpg',
    genres: ['판타지', '드라마'],
    playtime: 70,
    themeId: 1,
    themeName: '마음을 그려드립니다.',
    name: '같이 방탈출 하실 분 구합니다.',
    cafe: '비트포비아',
    spot: '강남던전',
    dateTime: '2025-03-26T15:00:00',
    registrationEnd: '2025-04-01T13:00:00',
    capacity: 6,
    participantCount: 3,
    participants: [
      {
        name: '종화',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
      },
      {
        name: '종화2',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
      },
      {
        name: '종화3',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
      },
    ],
    address: '서울 강남구 강남대로 84길 33, 대우디오빌플러스 B1',
    level: '쉬움',
  },
  {
    gatheringId: 2,
    listImage: 'https://xdungeon.net/file/theme/18/18_5563125084.png',
    genres: ['판타지'],
    playtime: 60,
    themeId: 2,
    themeName: 'And I Met E',
    name: '홍대 근처에서 같이 노실 분?',
    cafe: '비트포비아',
    spot: '홍대던전3',
    dateTime: '2025-03-26T11:00:00',
    registrationEnd: '2025-03-31T16:30:00',
    capacity: 4,
    participantCount: 2,
    participants: [
      {
        name: '종화',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
      },
      {
        name: '종화2',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
      },
    ],
    address: '서울 마포구 와우산로29길 21, 3층',
    level: '보통',
  },
  {
    gatheringId: 3,
    listImage: 'https://xdungeon.net/file/theme/11/11_6145641280.jpg',
    genres: ['판타지', '드라마'],
    playtime: 70,
    themeId: 1,
    themeName: '마음을 그려드립니다.',
    name: '마음을 같이 그리실분??',
    cafe: '비트포비아',
    spot: '강남던전',
    dateTime: '2025-03-27T15:00:00',
    registrationEnd: '2025-04-03T13:00:00',
    capacity: 6,
    participantCount: 3,
    participants: [
      {
        name: '종화',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
      },
      {
        name: '종화2',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
      },
      {
        name: '종화3',
        image:
          'https://i.namu.wiki/i/7gFiOE8l8aznKc3dDwpS1kF1FCBp_eAfGt8xc_CCkRiod_SpDvUdDHXZKltESAjPvLQkSKA-ECTn3zqCSGIZ5g.webp',
      },
    ],
    address: '서울 강남구 강남대로 84길 33, 대우디오빌플러스 B1',
    level: '쉬움',
  },
];

export const mockLikedGatherings: GatheringLikedDTO['get'][] = [
  {
    gatheringId: 1,
    listImage: 'https://xdungeon.net/file/theme/11/11_6145641280.jpg',
    genres: ['판타지', '드라마'],
    playtime: 70,
    themeId: 1,
    themeName: '마음을 그려드립니다.',
    name: '같이 방탈출 하실 분 구합니다.',
    cafe: '비트포비아',
    spot: '강남던전',
    dateTime: '2025-03-26T15:00:00',
    registrationEnd: '2025-04-01T13:00:00',
    capacity: 6,
    participantCount: 3,
    address: '서울 강남구 강남대로 84길 33, 대우디오빌플러스 B1',
    level: '쉬움',
  },
  {
    gatheringId: 2,
    listImage: 'https://xdungeon.net/file/theme/18/18_5563125084.png',
    genres: ['판타지'],
    playtime: 60,
    themeId: 2,
    themeName: 'And I Met E',
    name: '홍대 근처에서 같이 노실 분?',
    cafe: '비트포비아',
    spot: '홍대던전3',
    dateTime: '2025-03-26T11:00:00',
    registrationEnd: '2025-03-31T16:30:00',
    capacity: 4,
    participantCount: 2,
    address: '서울 마포구 와우산로29길 21, 3층',
    level: '보통',
  },
  {
    gatheringId: 3,
    listImage: 'https://xdungeon.net/file/theme/11/11_6145641280.jpg',
    genres: ['판타지', '드라마'],
    playtime: 70,
    themeId: 1,
    themeName: '마음을 그려드립니다.',
    name: '마음을 같이 그리실분??',
    cafe: '비트포비아',
    spot: '강남던전',
    dateTime: '2025-03-27T15:00:00',
    registrationEnd: '2025-04-03T13:00:00',
    capacity: 6,
    participantCount: 3,
    address: '서울 강남구 강남대로 84길 33, 대우디오빌플러스 B1',
    level: '쉬움',
  },
];
