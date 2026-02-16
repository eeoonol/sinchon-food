// Mock dataset: 16 restaurants (4 per category)
// Placeholder images via picsum.photos

const PLACEHOLDER = (seed) => `https://picsum.photos/seed/${seed}/400/300`;

export const RESTAURANTS = [
  // 한식 (korean)
  {
    id: 'k1',
    type: 'korean',
    name: '신촌 한정식',
    shortDesc: '정갈한 한정식과 반찬이 맛있는 한식당',
    naverMapUrl: 'https://map.naver.com/v5/search/신촌한정식',
    photos: {
      menu: PLACEHOLDER('k1menu'),
      atmosphere: PLACEHOLDER('k1atmo'),
      menuboard: PLACEHOLDER('k1board'),
    },
    detail: {
      sinchonStationWalkMin: 5,
      yonseiGateWalkMin: 3,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '중',
      menuItems: [
        { name: '한정식 A코스', price: 15000 },
        { name: '한정식 B코스', price: 20000 },
        { name: '비빔밥', price: 9000 },
        { name: '불고기정식', price: 12000 },
      ],
      notes: '점심 특선 메뉴 11:00~14:00. 예약 가능.',
    },
  },
  {
    id: 'k2',
    type: 'korean',
    name: '청년다방',
    shortDesc: '밥약하기 좋은 분위기의 한식 카페',
    naverMapUrl: 'https://map.naver.com/v5/search/청년다방신촌',
    photos: {
      menu: PLACEHOLDER('k2menu'),
      atmosphere: PLACEHOLDER('k2atmo'),
      menuboard: PLACEHOLDER('k2board'),
    },
    detail: {
      sinchonStationWalkMin: 7,
      yonseiGateWalkMin: 4,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '하',
      menuItems: [
        { name: '제육덮밥', price: 8000 },
        { name: '김치찌개', price: 7500 },
        { name: '된장찌개', price: 7500 },
        { name: '불고기덮밥', price: 8500 },
      ],
      notes: '와이파이 빠름. 조용한 대화하기 좋음.',
    },
  },
  {
    id: 'k3',
    type: 'korean',
    name: '할매국밥',
    shortDesc: '진한 국물이 일품인 국밥 전문',
    naverMapUrl: 'https://map.naver.com/v5/search/할매국밥신촌',
    photos: {
      menu: PLACEHOLDER('k3menu'),
      atmosphere: PLACEHOLDER('k3atmo'),
      menuboard: PLACEHOLDER('k3board'),
    },
    detail: {
      sinchonStationWalkMin: 4,
      yonseiGateWalkMin: 6,
      seatingLayout: ['마주보고'],
      sizeLevel: '중',
      menuItems: [
        { name: '돼지국밥', price: 9000 },
        { name: '순대국밥', price: 9000 },
        { name: '뼈해장국', price: 10000 },
        { name: '수육 (소)', price: 35000 },
      ],
      notes: '24시간 영업. 밥 리필 무료.',
    },
  },
  {
    id: 'k4',
    type: 'korean',
    name: '신촌옥',
    shortDesc: '육회와 비빔냉면이 유명한 한식',
    naverMapUrl: 'https://map.naver.com/v5/search/신촌옥',
    photos: {
      menu: PLACEHOLDER('k4menu'),
      atmosphere: PLACEHOLDER('k4atmo'),
      menuboard: PLACEHOLDER('k4board'),
    },
    detail: {
      sinchonStationWalkMin: 6,
      yonseiGateWalkMin: 5,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '상',
      menuItems: [
        { name: '비빔냉면', price: 11000 },
        { name: '물냉면', price: 11000 },
        { name: '육회', price: 25000 },
        { name: '육회비빔밥', price: 14000 },
      ],
      notes: '점심 시간대 웨이팅 있음. 단체석 가능.',
    },
  },
  // 양식 (western)
  {
    id: 'w1',
    type: 'western',
    name: '파스타하우스',
    shortDesc: '정성스러운 파스타와 리조또',
    naverMapUrl: 'https://map.naver.com/v5/search/파스타하우스신촌',
    photos: {
      menu: PLACEHOLDER('w1menu'),
      atmosphere: PLACEHOLDER('w1atmo'),
      menuboard: PLACEHOLDER('w1board'),
    },
    detail: {
      sinchonStationWalkMin: 8,
      yonseiGateWalkMin: 2,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '중',
      menuItems: [
        { name: '크림파스타', price: 13000 },
        { name: '토마토파스타', price: 12000 },
        { name: '리조또', price: 14000 },
        { name: '스테이크', price: 22000 },
      ],
      notes: '데이트 코스 추천. 캔들 디너 가능.',
    },
  },
  {
    id: 'w2',
    type: 'western',
    name: '버거앤프라이',
    shortDesc: '수제 버거와 감자튀김',
    naverMapUrl: 'https://map.naver.com/v5/search/버거앤프라이신촌',
    photos: {
      menu: PLACEHOLDER('w2menu'),
      atmosphere: PLACEHOLDER('w2atmo'),
      menuboard: PLACEHOLDER('w2board'),
    },
    detail: {
      sinchonStationWalkMin: 3,
      yonseiGateWalkMin: 7,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '하',
      menuItems: [
        { name: '클래식 버거', price: 9000 },
        { name: '치즈 버거', price: 10000 },
        { name: '더블 버거', price: 12000 },
        { name: '감자튀김 (L)', price: 4000 },
      ],
      notes: '단품 가능. 테이크아웃 10% 할인.',
    },
  },
  {
    id: 'w3',
    type: 'western',
    name: '피자플레이스',
    shortDesc: '얇은 도우와 다양한 토핑',
    naverMapUrl: 'https://map.naver.com/v5/search/피자플레이스신촌',
    photos: {
      menu: PLACEHOLDER('w3menu'),
      atmosphere: PLACEHOLDER('w3atmo'),
      menuboard: PLACEHOLDER('w3board'),
    },
    detail: {
      sinchonStationWalkMin: 5,
      yonseiGateWalkMin: 4,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '상',
      menuItems: [
        { name: '마르게리타 (M)', price: 18000 },
        { name: '페퍼로니 (M)', price: 20000 },
        { name: '고르곤졸라 (M)', price: 22000 },
        { name: '콤보 (L)', price: 28000 },
      ],
      notes: '2인 세트 인기. 배달 가능.',
    },
  },
  {
    id: 'w4',
    type: 'western',
    name: '브런치카페',
    shortDesc: '에그베네딕트와 브런치 메뉴',
    naverMapUrl: 'https://map.naver.com/v5/search/브런치카페신촌',
    photos: {
      menu: PLACEHOLDER('w4menu'),
      atmosphere: PLACEHOLDER('w4atmo'),
      menuboard: PLACEHOLDER('w4board'),
    },
    detail: {
      sinchonStationWalkMin: 6,
      yonseiGateWalkMin: 3,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '중',
      menuItems: [
        { name: '에그베네딕트', price: 15000 },
        { name: '아보카도토스트', price: 12000 },
        { name: '팬케이크 세트', price: 14000 },
        { name: '오믈렛', price: 13000 },
      ],
      notes: '주말 브런치 10:00~15:00. 커피 맛있음.',
    },
  },
  // 중식 (chinese)
  {
    id: 'c1',
    type: 'chinese',
    name: '신촌짜장',
    shortDesc: '전통 짜장면과 짬뽕',
    naverMapUrl: 'https://map.naver.com/v5/search/신촌짜장',
    photos: {
      menu: PLACEHOLDER('c1menu'),
      atmosphere: PLACEHOLDER('c1atmo'),
      menuboard: PLACEHOLDER('c1board'),
    },
    detail: {
      sinchonStationWalkMin: 4,
      yonseiGateWalkMin: 5,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '중',
      menuItems: [
        { name: '짜장면', price: 6000 },
        { name: '짬뽕', price: 7000 },
        { name: '탕수육 (소)', price: 18000 },
        { name: '간짜장', price: 7000 },
      ],
      notes: '밥약 가성비 최고. 단체 주문 환영.',
    },
  },
  {
    id: 'c2',
    type: 'chinese',
    name: '마라탕천국',
    shortDesc: '마라탕과 꿔바로우',
    naverMapUrl: 'https://map.naver.com/v5/search/마라탕천국신촌',
    photos: {
      menu: PLACEHOLDER('c2menu'),
      atmosphere: PLACEHOLDER('c2atmo'),
      menuboard: PLACEHOLDER('c2board'),
    },
    detail: {
      sinchonStationWalkMin: 7,
      yonseiGateWalkMin: 4,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '상',
      menuItems: [
        { name: '마라탕 (100g)', price: 1200 },
        { name: '꿔바로우', price: 22000 },
        { name: '마라샹궈', price: 25000 },
        { name: '볶음밥', price: 8000 },
      ],
      notes: '맵기 단계 선택 가능. 2인 이상 추천.',
    },
  },
  {
    id: 'c3',
    type: 'chinese',
    name: '딤섬하우스',
    shortDesc: '딤섬과 중식 요리',
    naverMapUrl: 'https://map.naver.com/v5/search/딤섬하우스신촌',
    photos: {
      menu: PLACEHOLDER('c3menu'),
      atmosphere: PLACEHOLDER('c3atmo'),
      menuboard: PLACEHOLDER('c3board'),
    },
    detail: {
      sinchonStationWalkMin: 5,
      yonseiGateWalkMin: 6,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '중',
      menuItems: [
        { name: '찐만두 (8개)', price: 9000 },
        { name: '군만두 (8개)', price: 9000 },
        { name: '샤오롱바오 (6개)', price: 11000 },
        { name: '짬뽕', price: 8000 },
      ],
      notes: '딤섬 단품 주문 가능. 차 마시기 좋음.',
    },
  },
  {
    id: 'c4',
    type: 'chinese',
    name: '홍콩반점',
    shortDesc: '볶음밥과 유니짜장',
    naverMapUrl: 'https://map.naver.com/v5/search/홍콩반점신촌',
    photos: {
      menu: PLACEHOLDER('c4menu'),
      atmosphere: PLACEHOLDER('c4atmo'),
      menuboard: PLACEHOLDER('c4board'),
    },
    detail: {
      sinchonStationWalkMin: 6,
      yonseiGateWalkMin: 4,
      seatingLayout: ['마주보고'],
      sizeLevel: '하',
      menuItems: [
        { name: '유니짜장', price: 7000 },
        { name: '해물짬뽕', price: 8000 },
        { name: '삼선볶음밥', price: 7500 },
        { name: '탕수육 (중)', price: 22000 },
      ],
      notes: '점심 특선 11:00~14:00. 빠른 서비스.',
    },
  },
  // 일식 (japanese)
  {
    id: 'j1',
    type: 'japanese',
    name: '신촌스시',
    shortDesc: '초밥과 회 전문',
    naverMapUrl: 'https://map.naver.com/v5/search/신촌스시',
    photos: {
      menu: PLACEHOLDER('j1menu'),
      atmosphere: PLACEHOLDER('j1atmo'),
      menuboard: PLACEHOLDER('j1board'),
    },
    detail: {
      sinchonStationWalkMin: 5,
      yonseiGateWalkMin: 3,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '중',
      menuItems: [
        { name: '모듬초밥 (12p)', price: 18000 },
        { name: '연어초밥 (10p)', price: 15000 },
        { name: '회덮밥', price: 14000 },
        { name: '우동', price: 7000 },
      ],
      notes: '점심 특가 있음. 예약 추천.',
    },
  },
  {
    id: 'j2',
    type: 'japanese',
    name: '라멘스쿨',
    shortDesc: '진한 육수 라멘',
    naverMapUrl: 'https://map.naver.com/v5/search/라멘스쿨신촌',
    photos: {
      menu: PLACEHOLDER('j2menu'),
      atmosphere: PLACEHOLDER('j2atmo'),
      menuboard: PLACEHOLDER('j2board'),
    },
    detail: {
      sinchonStationWalkMin: 4,
      yonseiGateWalkMin: 5,
      seatingLayout: ['양옆으로'],
      sizeLevel: '하',
      menuItems: [
        { name: '돈코츠라멘', price: 9000 },
        { name: '미소라멘', price: 9000 },
        { name: '차슈라멘', price: 10000 },
        { name: '교자', price: 5000 },
      ],
      notes: '밥 리필 무료. 웨이팅 있을 수 있음.',
    },
  },
  {
    id: 'j3',
    type: 'japanese',
    name: '돈카츠킹',
    shortDesc: '바삭한 돈카츠',
    naverMapUrl: 'https://map.naver.com/v5/search/돈카츠킹신촌',
    photos: {
      menu: PLACEHOLDER('j3menu'),
      atmosphere: PLACEHOLDER('j3atmo'),
      menuboard: PLACEHOLDER('j3board'),
    },
    detail: {
      sinchonStationWalkMin: 6,
      yonseiGateWalkMin: 4,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '중',
      menuItems: [
        { name: '등심돈카츠', price: 11000 },
        { name: '안심돈카츠', price: 13000 },
        { name: '치즈돈카츠', price: 12000 },
        { name: '돈카츠정식', price: 14000 },
      ],
      notes: '양배추 무한 리필. 소스 인기.',
    },
  },
  {
    id: 'j4',
    type: 'japanese',
    name: '우동이야기',
    shortDesc: '정갈한 우동과 덮밥',
    naverMapUrl: 'https://map.naver.com/v5/search/우동이야기신촌',
    photos: {
      menu: PLACEHOLDER('j4menu'),
      atmosphere: PLACEHOLDER('j4atmo'),
      menuboard: PLACEHOLDER('j4board'),
    },
    detail: {
      sinchonStationWalkMin: 5,
      yonseiGateWalkMin: 6,
      seatingLayout: ['마주보고', '양옆으로'],
      sizeLevel: '중',
      menuItems: [
        { name: '키츠네우동', price: 8000 },
        { name: '덴뿌라우동', price: 9000 },
        { name: '냉모밀', price: 8000 },
        { name: '덮밥', price: 9000 },
      ],
      notes: '가벼운 밥약에 좋음. 단체석 있음.',
    },
  },
];

export const CATEGORY_LABELS = {
  korean: '한식',
  western: '양식',
  chinese: '중식',
  japanese: '일식',
};

export const CATEGORY_CHIP_LABELS = {
  korean: '한',
  western: '양',
  chinese: '중',
  japanese: '일',
};

export function getRestaurantsByType(type) {
  return RESTAURANTS.filter((r) => r.type === type);
}

export function getRestaurantById(id) {
  return RESTAURANTS.find((r) => r.id === id);
}
