import { RoomDTO } from '@/types/room/room.types';

export const mockRooms: RoomDTO['get'][] = [
  {
    themeId: 1,
    listImage: 'https://xdungeon.net/file/theme/11/11_6145641280.jpg',
    genres: ['판타지', '드라마'],
    playtime: 70,
    themeName: '마음을 그려드립니다.',
    spot: '비트포비아 강남던전',
    reviewCount: 1024,
    rating: 3.5,
    address: '서울 강남구 강남대로 84길 33, 대우디오빌플러스 B1',
    level: '쉬움',
  },
  {
    themeId: 2,
    listImage: 'https://xdungeon.net/file/theme/18/18_5563125084.png',
    genres: ['판타지'],
    playtime: 60,
    themeName: 'And I Met E',
    spot: '비트포비아 홍대던전3',
    reviewCount: 483,
    rating: 4,
    address: '서울 마포구 와우산로29길 21, 3층',
    level: '보통',
  },
];
