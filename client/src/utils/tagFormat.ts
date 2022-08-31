interface ServerTag {
  tagName: string;
}

type TagArr = string[] | ServerTag[];

function isArrayOfString(value: Array<unknown>): value is string[] {
  return value.every((item) => typeof item === 'string');
}

export default function tagFormat(tagArr: TagArr) {
  let formatted: typeof tagArr & TagArr = [];

  if (isArrayOfString(tagArr)) {
    formatted = tagArr.map((tag) => ({ tagName: tag }));
  } else {
    formatted = tagArr.map((tagO) => tagO.tagName);
  }

  return formatted;
}
