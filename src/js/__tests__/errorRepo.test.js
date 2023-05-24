import ErrorRepository from '../errorRepo';

const someError = new ErrorRepository();
someError.error.set(400, 'Bad Request!');
someError.error.set(403, 'Forbidden!');
someError.error.set(404, 'Not Found!');
someError.error.set(500, 'Internal Server Error!');
someError.error.set(502, 'Bad Gateway!');
someError.error.set(503, 'Service Unavailable!');

test('check ErrorRepository class for code translation', () => {
  expect([
    someError.translate(400),
    someError.translate(403),
    someError.translate(404),
    someError.translate(500),
    someError.translate(502),
    someError.translate(503),
  ]).toEqual([
    'Bad Request!',
    'Forbidden!',
    'Not Found!',
    'Internal Server Error!',
    'Bad Gateway!',
    'Service Unavailable!',
  ]);
});

test('check ErrorRepository class for throw error', () => {
  expect(() => { someError.translate(200); }).toThrow();
});

test('check ErrorRepository class for throw error', () => {
  expect(() => { someError.translate(300); }).toThrow();
});

test('check ErrorRepository class for throw error', () => {
  expect(() => { someError.translate('code'); }).toThrow();
});
