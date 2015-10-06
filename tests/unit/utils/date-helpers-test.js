import dateHelpers from '../../../utils/date-helpers';
import { module, test } from 'qunit';

module('Utils: formatDate');

test('formats a date object', function(assert){
  var date = new Date('10-05-2015');
  var result = dateHelpers.formatDate(date, 'ddd MMM DD YYYY');
  assert.equal(result, 'Mon Oct 05 2015', 'returns a readable string');
});
