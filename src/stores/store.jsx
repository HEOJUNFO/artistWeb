import { create} from 'zustand';

const dummyAuditions = [
    { id: 1, title: '대형 기획사 공개오디션', date: '2023-12-01', location: '서울 예술의전당', description: '뮤지컬 극장 퍼포머들에게 자신의 재능을 보여줄 수 있는 좋은 기회입니다.' },
    { id: 2, title: '김광석 다시부르기 대회', date: '2023-12-05', location: '부산 영화 마을', description: '새로운 독립 영화 프로젝트를 위한 배우를 찾습니다.' },
    { id: 3, title: '밴드 음악 오디션', date: '2023-12-10', location: '국립무용극장', description: '다가오는 시즌을 위해 우리 회사에 합류할 경험 많은 댄서를 찾고 있습니다.' },
  ];

const dummyMentoringServices = [
    { id: 1, title: '보컬 발성 멘토링', date: '2023-12-01', location: '서울 예술의전당', description: '뮤지컬 배우들을 위한 멘토링 서비스입니다.' },
    { id: 2, title: '오디션 꿀팁 멘토링', date: '2023-12-05', location: '부산 영화 마을', description: '영화 배우들을 위한 멘토링 서비스입니다.' },
    { id: 3, title: '무대 매너의 기본 멘토링', date: '2023-12-10', location: '국립무용극장', description: '댄서들을 위한 멘토링 서비스입니다.' },
  ];

  const dummyAnnouncements = [
    { id: 1, title: '사이트 이용사항', date: '2023-12-15', location: '대전 시립극장', description: '이번 연극제에 참가할 창의적인 작품들을 모집합니다.' },
    { id: 2, title: '오디션 지원법', date: '2023-12-20', location: '경주 문화회관', description: '전통 음악을 사랑하는 관객들을 위한 콘서트 시리즈입니다.' },
    { id: 3, title: '인디 음악 제작 워크샵', date: '2023-12-25', location: '인천 청소년 문화센터', description: '영화 제작에 관심 있는 청소년들을 위한 실용적인 워크샵을 제공합니다.' }
  ];

  const dummyPromotions = [
    { id: 1, title: '신규 앨법 발매 프로모션', date: '2023-12-01', location: '서울 중앙도서관', description: '최신 베스트셀러 출시를 기념하여 특별 할인 이벤트를 진행합니다.' },
    { id: 2, title: '음악 감상회 개막 기념', date: '2023-12-05', location: '대구 아트센터', description: '현대 미술의 새로운 전시회 개막을 기념하여 초대권을 배포합니다.' },
    { id: 3, title: '뮤직 아카데미 개강', date: '2023-12-10', location: '부산 음악학원', description: '새 학기 개강을 맞이하여 첫 달 수강료 할인 이벤트를 제공합니다.' }
  ];

  const dummyCooperations = [
    { id: 1, title: '앨범 제작 협업', date: '2023-12-01', location: '서울 예술의전당', description: '영화 제작을 위한 협업 파트너를 찾습니다.' },
    { id: 2, title: '뮤직 비디오 제작 협업', date: '2023-12-05', location: '부산 영화 마을', description: '뮤지컬 제작을 위한 협업 파트너를 찾습니다.' },
    { id: 3, title: '연주자 협업', date: '2023-12-10', location: '국립무용극장', description: '댄스 컴퍼니를 위한 협업 파트너를 찾습니다.' },
  ];

  const dummyBuySell = [
    { id: 1, title: '중고 마이크 판매', date: '2023-11-25', location: '서울 중고 마켓', description: '거의 새것 같은 상태의 로드 바이크를 판매합니다. 관심 있으신 분은 연락 주세요.' },
    { id: 2, title: '인터페이스 구매 희망', date: '2023-11-30', location: '인천 카페거리', description: '상태 좋은 중고 커피 머신을 찾고 있습니다. 판매하실 분은 연락 바랍니다.' },
    { id: 3, title: '녹음 세트 급처분', date: '2023-12-05', location: '대전 가구단지', description: '이사로 인해 소파와 식탁 세트를 저렴한 가격에 판매합니다. 필요하신 분 연락주세요.' }
  ];

  const dummyFree = [
    { id: 1, title: '오디션 궁금증', date: '2023-11-20', location: '서울 언어 교환 클럽', description: '한국어와 영어를 서로 교환할 파트너를 찾습니다. 서로의 언어 능력을 향상시킬 수 있는 좋은 기회입니다.' },
    { id: 2, title: '앨범 관련 질문', date: '2023-11-25', location: '광주 지역 농장', description: '수확이 풍부한 계절을 맞아 유기농 채소를 무료로 나눠드립니다. 건강한 식생활에 관심 있으신 분들은 연락주세요.' },
    { id: 3, title: '무료 음악 강의', date: '2023-12-01', location: '대구 전자도서관', description: '코딩 기초부터 고급 프로그래밍까지, IT에 관심 있는 분들을 위한 무료 강의를 개설합니다. 선착순으로 등록받습니다.' }
  ];

  export const useAuditionsStore = create((set, get) => ({ 
    auditions: dummyAuditions,
    setAuditions: (auditions) => set(() => ({ auditions })),
    getAuditionById: (id) => get().auditions.find(audition => audition.id.toString() === id),
    addAudition: (newAudition) => set(state => ({ auditions: [...state.auditions, newAudition] })),
  }));

  export const useMentoringServicesStore = create((set, get) => ({
    mentoringServices: dummyMentoringServices,
    setMentoringServices: (mentoringServices) => set(() => ({ mentoringServices })),
    getMentoringServiceById: (id) => get().mentoringServices.find(mentoringService => mentoringService.id.toString() === id),
    addMentoringService: (newMentoringService) => set(state => ({ mentoringServices: [...state.mentoringServices, newMentoringService] })),
  }));

  export const useAnnouncementsStore = create((set, get) => ({
    announcements: dummyAnnouncements,
    setAnnouncements: (announcements) => set(() => ({ announcements })),
    getAnnouncementById: (id) => get().announcements.find(announcement => announcement.id.toString() === id),
    addAnnouncement: (newAnnouncement) => set(state => ({ announcements: [...state.announcements, newAnnouncement] })),
  }));

  export const usePromotionsStore = create((set, get) => ({
    promotions: dummyPromotions,
    setPromotions: (promotions) => set(() => ({ promotions })),
    getPromotionById: (id) => get().promotions.find(promotion => promotion.id.toString() === id),
    addPromotion: (newPromotion) => set(state => ({ promotions: [...state.promotions, newPromotion] })),
  }));

  export const useCooperationsStore = create((set, get) => ({
    cooperations: dummyCooperations,
    setCooperations: (cooperations) => set(() => ({ cooperations })),
    getCooperationById: (id) => get().cooperations.find(cooperation => cooperation.id.toString() === id),
    addCooperation: (newCooperation) => set(state => ({ cooperations: [...state.cooperations, newCooperation] })),
  }));

  export const useBuySellStore = create((set, get) => ({
    buySell: dummyBuySell,
    setBuySell: (buySell) => set(() => ({ buySell })),
    getBuySellById: (id) => get().buySell.find(buySell => buySell.id.toString() === id),
    addBuySell: (newBuySell) => set(state => ({ buySell: [...state.buySell, newBuySell] })),
  }));

  export const useFreeStore = create((set, get) => ({
    free: dummyFree,
    setFree: (free) => set(() => ({ free })),
    getFreeById: (id) => get().free.find(free => free.id.toString() === id),
    addFree: (newFree) => set(state => ({ free: [...state.free, newFree] })),
  }));
  
