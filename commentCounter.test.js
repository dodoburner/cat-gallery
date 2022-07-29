/**
 * @jest-environment jsdom
 */

import counter from './src/commentsModules/commentCounter';

describe('Counting the number of comments', () => {
  test('0 comments', () => {
    document.body.innerHTML = `
    <div class="popup-comments">
      <p class="comments-counter"></p>
      <ul>
      </ul>
    <div/>
    `;
    counter();
    const commentsCounter = document.querySelector('.comments-counter');
    expect(commentsCounter.textContent).toBe('(0)');
  });

  test('1 comment', () => {
    document.body.innerHTML = `
    <div class="popup-comments">
      <p class="comments-counter"></p>
      <ul>
       <li></li>
      </ul>
    <div/>
    `;
    counter();
    const commentsCounter = document.querySelector('.comments-counter');
    expect(commentsCounter.textContent).toBe('(1)');
  });

  test('multiple comments', () => {
    document.body.innerHTML = `
    <div class="popup-comments">
      <p class="comments-counter"></p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    <div/>
    `;
    counter();
    const commentsCounter = document.querySelector('.comments-counter');
    expect(commentsCounter.textContent).toBe('(5)');
  });
});