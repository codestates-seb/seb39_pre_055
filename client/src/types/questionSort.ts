export interface QuestionSortList {
  count: number;
  name: string;
}

export interface QuestionSortInitialState {
  page: number;
  questionList: Array<QuestionSortList>;
  sortOption: string;
  inName: string;
  isLoading: boolean;
  errorMsg: string;
}
