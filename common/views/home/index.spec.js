import {test} from 'tape';

test('sample test', (t) => {
  t.equal(true, true);
  // t.equal(true, false);
  // t.equal(true, false);
  // t.equal(true, false);

  t.test('subtest2', (t) => {
    t.true(true, 'oops');
  });

  t.test('subtest3', (t) => {
    t.true(false, 'oopsis');
  });
});
