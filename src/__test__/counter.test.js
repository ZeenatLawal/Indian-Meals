import mealsCounter from '../meals_counter.js';

const meals = [{
  strMeal: 'Lamb Biryani',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg',
  idMeal: '52805',
},
{
  strMeal: 'Lamb Rogan josh',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg',
  idMeal: '52808',
},
{
  strMeal: 'Matar Paneer',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg',
  idMeal: '52865',
},
{
  strMeal: 'Nutty Chicken Curry',
  strMealThumb: 'https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg',
  idMeal: '52851',
},
];

describe('Test dish counter method', () => {
  test('it returns the correct number of dishes', () => {
    expect(mealsCounter(meals)).toBe(4);
  });
});