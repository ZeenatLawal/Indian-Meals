import countComments from '../commentCount.js';

const comments = [
  {
    comment: 'Great meal',
    creation_date: '2021-09-08',
    username: 'Elyor',
  },
  {
    username: 'Zeenat',
    comment: 'Great meal',
    creation_date: '2021-09-08',
  },
];

describe('Test comments counter method', () => {
  test('it returns the correct number of comments', () => {
    expect(countComments(comments)).toBe(2);
  });
});
