export interface DetailInitialState {
  isLoading: boolean;
  editType: string;
  sortOption: string;
  clickedId: null | number;
  data: DetailData | null;
}

export interface DetailData {
  questionId: number;
  questionStatus: string;
  title: string;
  body: string;
  vote: number;
  view: number;
  user: User;
  answers: Answers;
  questionTags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Answers {
  data: AnswerInfo[];
  pageInfo: PageInfo;
}

export interface AnswerInfo {
  answerId: number;
  answerStatus: string;
  body: string;
  vote: number;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  userId: number;
  displayName: string;
  email: string;
  password: string;
  image: string;
  userStatus: string;
}

export interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
