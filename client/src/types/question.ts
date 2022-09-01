export interface User {
  userId: number;
  displayName: string;
  email: string;
  password: string;
  image: string;
  userStatus: string;
}

export interface QuestionSortList {
  questionId: number;
  questionStatus: string;
  title: string;
  body: string;
  vote: number;
  view: number;
  user: User;
  questionTags: Array<{ tagName: string }>;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionSortInitialState {
  page: number;
  questionList: Array<QuestionSortList>;
  sortOption: string;
  inName: string;
  isLoading: boolean;
  errorMsg: string;
}
