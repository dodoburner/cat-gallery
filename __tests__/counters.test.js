/**
 * @jest-environment jsdom
 */

import counters from '../src/modules/counters';

test('Expect counter to be 1', () => {
  document.body.innerHTML = `
    <div class="main"> 
    <p id="items-counter"></p>
    </div> `;
  counters();
  const items = document.querySelector('#items-counter');
  expect(items.textContent).toBe('(1)');
});