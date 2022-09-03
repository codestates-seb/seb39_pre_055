import {
  changeTagInName,
  changeTagPage,
  changeTagSortOption,
  getTags,
  tagReducer,
} from '../../redux';

const initialState = {
  page: 1,
  tagList: [],
  isLoading: false,
  sortOption: 'popular',
  inName: '',
  errorMsg: '',
};

const prevState = {
  page: 3,
  tagList: [],
  isLoading: false,
  sortOption: 'name',
  inName: '',
  errorMsg: '',
};

describe('tagReducer', () => {
  it('initial state', () => {
    expect(tagReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('changeTagPage action은 page를 변경한다.', () => {
    expect(tagReducer(initialState, changeTagPage(100))).toEqual({
      page: 100,
      tagList: [],
      isLoading: false,
      sortOption: 'popular',
      inName: '',
      errorMsg: '',
    });
  });

  it('changeTagSortOption action은 page, sortOption을 변경한다.', () => {
    expect(tagReducer(prevState, changeTagSortOption('name'))).toEqual({
      page: 1,
      tagList: [],
      isLoading: false,
      sortOption: 'name',
      inName: '',
      errorMsg: '',
    });
  });

  it('changeTagInName action은 page, sortOption, inName을 변경한다.', () => {
    expect(tagReducer(prevState, changeTagInName('sangbin'))).toEqual({
      page: 1,
      tagList: [],
      isLoading: false,
      sortOption: 'popular',
      inName: 'sangbin',
      errorMsg: '',
    });
  });

  it('getTags.pending action은 isLoading을 true로 변경한다.', () => {
    const action = getTags.pending;
    const state = tagReducer(initialState, action);
    expect(state).toEqual({
      page: 1,
      tagList: [],
      isLoading: true,
      sortOption: 'popular',
      inName: '',
      errorMsg: '',
    });
  });

  it('getTags.fulfilled action은 isLoading, tagList를 변경한다.', () => {
    const payload = [
      {
        has_synonyms: true,
        is_moderator_only: true,
        is_required: true,
        count: 999,
        name: 'javascript',
      },
    ];
    const action = getTags.fulfilled(payload, '', undefined);
    const state = tagReducer(initialState, action);
    expect(state).toEqual({
      page: 1,
      tagList: [
        {
          has_synonyms: true,
          is_moderator_only: true,
          is_required: true,
          count: 999,
          name: 'javascript',
        },
      ],
      isLoading: false,
      sortOption: 'popular',
      inName: '',
      errorMsg: '',
    });
  });
});
