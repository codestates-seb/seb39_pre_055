export interface User {
  userId: number;
  displayName: string;
  email: string;
  password: string;
  image: string;
  userStatus: string;
}

export interface Question {
  questionId: number;
  questionStatus: string;
  title: string;
  body: string;
  vote: number;
  view: number;
  user: User;
  questionTags: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionList {
  page: number;
  totalElements: number;
  totalPages: number;
  questionList: Array<Question>;
  sortOption: string;
  inName: string;
  isLoading: boolean;
  errorMsg: string;
}
