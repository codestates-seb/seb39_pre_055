export interface Tag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

export interface TagInitialState {
  page: number;
  tagList: Array<Tag>;
  isLoading: boolean;
  errorMsg: string;
}
