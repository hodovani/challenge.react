import { Selector } from 'testcafe';

const fixtureName = 'Check name';

const name = 'Michael';
const nameDescription = 'Description: Michael is a male name from the US';
const name2 = 'Jane';
const nameDescription2 = 'Description: Jane is a female name from the LR';

fixture(fixtureName).page('http://localhost:8080/predict');

/**
AC - user can enter a name
 */
test('AC - user can enter a name AND see result AND see history', async t => {
  const navToPredict = Selector('a').withText('Predict');
  const navToHistory = Selector('a').withText('History');
  const input = Selector('#name-input');
  const submit = Selector('#name-submit');
  const rows = Selector('tbody tr');
  const result = Selector('#result-description').withText(nameDescription);
  const result2 = Selector('#result-description').withText(nameDescription2);
  await t
    .expect(input.exists)
    .ok()
    .typeText(input, name, { paste: false })
    .click(submit)
    .expect(result.exists)
    .ok()
    .click(navToHistory)
    .expect(rows.count)
    .eql(1)
    .click(navToPredict)
    .typeText(input, name2, { paste: false })
    .click(submit)
    .expect(result2.exists)
    .ok()
    .click(navToHistory)
    .expect(rows.count)
    .eql(2);
});
