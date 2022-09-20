const {
  reverseSentence,
  titleCase,
  oddishOrEvenish,
  at,
  anagrams,
  fizzBuzz, 
  multiplesOfN,
  addFirst,
  rootDigit,
} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
  it('should capitalize the first letter of each word in a string', () => {
    expect(titleCase('alchemy rocks gold')).toBe('Alchemy Rocks Gold');
  });
  it('should determine whether a number is Evenish or Oddish', () => {
    expect(oddishOrEvenish(121)).toBe('Evenish');
    expect(oddishOrEvenish(41)).toBe('Oddish');
    expect(oddishOrEvenish('lol lol')).toBe('Invalid Entry');
  });

  it('should return the corresponding item at the given index', () => {
    const array1 = at(['a', 'b', 'c', 'd', 'e'], 1);
    const array2 = at(['a', 'b', 'c', 'd', 'e'], -2);
    const array3 = at(['lala', 'lili', 'lolol'], 'lele');
    expect(array1).toBe('b');
    expect(array2).toBe('d');
    expect(array3).toBe('Invalid Entry');
  });
  it('should identify strings that are anagrams', () => {
    expect(anagrams('superintended', 'unpredestined')).toBe(true);
    expect(anagrams('pictorialness', 'documentarily')).toBe(false);
  });
  it('should return a list of numbers from 1-parameter, where divisible by 3 and 5, replace with FizzBuzz, where divisible by 3 replace with Fizz, where divisible by 5 replace with Buzz', () => {
    expect(fizzBuzz(16)).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
      16,
    ]);
  });
  it('should return an array with numbers 1-50 that are multiples of n', () => {
    expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    expect(multiplesOfN(25)).toEqual([25, 50]);
    expect(multiplesOfN(75)).toEqual([]);
  });

  //HIGHER ORDER FUNCTIONS 
  it('should return an array with parameter element first', ()  => {
    const addPink  = addFirst('pink');
    expect(addPink(['orange', 'blue', 'green'])).toStrictEqual(['pink', 'orange', 'blue', 'green']);
  });
});
