export const question = `

> **React Router v5.1.0 with hooks**

**There is a new \`useHistory\` hook in React Router >5.1.0 if you are using React >16.8.0 and functional components.**


\`\`\`javascript
import { useHistory } from "react-router-dom";

function HomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
\`\`\`


> **React Router v4**

**With v4 of React Router, there are three approaches that you can take to programmatic routing within components.**

- Use the withRouter higher-order \`component\`.
- Use composition and render a <Route>
- Use the context.

`;

export const answer1 = `
**Assume that you want to keep a subtotal of all consecutive rows that have the same res value,
you need to keep track of the current res value and change your code accordingly:**

\`\`\`javascript
summ = 0
fin = []

current_sm = df1['res'][0] # this is so the code work with first index
for index, sm in enumerate(df1['res']):
    if sm == current_sm: # same res value as previous, keep adding to the sum
        summ += df1['%'][index]
    else: # res change, save the subtotal, setup for the next
       fin.append(summ)
       current_sm = sm
       summ = df1['%'][index]
fin.append(summ) # Collect subtotal for the last batch
\`\`\`
`;

export const answer2 = `
\`\`\`javascript
Int64Index([0, 4, 9, 10, 11, 13, 14], dtype='int64')
\`\`\`

Initialize sum column:

\`\`\`javascript
l = df.index[df['res']!=df['res'].shift(-1)]
\`\`\`

Output:

\`\`\`javascript
%  res       sum
0  -1.594774   -1 -1.594774
1   1.847843    1       NaN
2   0.493660    1       NaN
3   1.372718    1       NaN
4   2.495056    1  6.209277
5  -0.104176   -1       NaN
6  -0.808668   -1       NaN
7  -0.468337   -1       NaN
8  -0.362510   -1       NaN
9  -1.678558   -1 -3.422249
10  0.326578    1  0.326578
11 -0.276889   -1 -0.276889
12  0.185289    1       NaN
13  0.366033    1  0.551322
14 -1.666879   -1 -1.666879
\`\`\`
`;

// #  헤딩

// **굵게**

// 일반 텍스트

// \`\`\`
//   const name = 'sangbin'
// \`\`\`

// *기울이기*

// > 인용문

// - 리스트1
// - 리스트2

export const questionList = [
  {
    id: 1,
    title: 'Stop an array while finding string',
    body: question,
    tags: ['javascript', 'arrays', 'string'],
    answerList: [
      {
        id: 2,
        body: answer1,
      },
      {
        id: 3,
        body: answer2,
      },
    ],
  },
];
