
// ==UserScript==
// @name:ru         Показать комментарии на Ozon'e
// @name            Show comments on Ozon
// @version         1.1
// @description:ru  Автопоказ/разворот скрытых комментариев на Ozon'e.
// @description     Auto-show/expand hidden comments on Ozon.
// @author          XX-J...
// @homepage        https://github.com/XX-J/Show-comments-on-Ozon
// @updateURL       https://raw.githubusercontent.com/XX-J/Show-comments-on-Ozon/main/Show comments on Ozon.user.js
// @downloadURL     https://raw.githubusercontent.com/XX-J/Show-comments-on-Ozon/main/Show comments on Ozon.user.js
// @match           *://*.ozon.ru/*
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAB3RJTUUH5wkKFQMwsiEBewAAA1VJREFUeNqllAOU7kgUhHvtHWtt27at/GPPrG3btm3btm3bu89sJN/r10nmBOOpcypO1e2LFj1Yrn1FscdfD4pmRolGtCXD4FT7/49iy1dOFguuNKfowXanrCv24f9hiubZZHmoeiI0Wby+UngTPhy5cN7ErUS0TDjb3vT/cb2lF7HO3Tu660LE+vx/Ll1W/Jc+hWtDzr8/FC6Fsx6Fh9+Hl7+EN74Jry94Ena9CMr2igJoyNTEHoKccF3I9U6GO9+Ef8cxIH7+D466C2Zri/6PtXLiBajYB256BYzPkPHMp1C1T8IkK77acfD1n/SNSVMJRo0nGD0BlKY3PPERzNQcpSuZ75WOht9Hk0Pwy7+Ya55EN5yDWvcQ1HJ7oVbYG7XJUejDriP45Eey8C6Nih93yVwd8M73pDFuEubk25GLtSNn3xk5h+XcuyLn2S3kXPZ6tp2Q1Q34d79CEne+ETVJnJoj78pE/cNfLkInMO/uyBKvb865C2r1A2DiFGK89V2conqYvQ0++40YLr9qoyNs1Ds5gQFpV6LWOsjVJ8bzn0ezIQqw9OEwRdIDc979NvJBihd77ltz4YMkccajcQ08WPVYUtB7nOHyPaB40e5OXLdfmOooLX1WP8YPW9UWgkUOgrGTEiu49BHkrDuGhcwLu5q4olfWY068DaQmhUse4splLmemBmviCmH57KckHHzM+Q8gl+pyXWOL6FZkz6H40t3ovS8jeP87svBf+gQ1fxPMvSOXr3wtIp6BTU4HbUgh+GcM/lPvY654zBma657Cf/lT97w3+M99iFy0zQa1G8quVBfvkR609mtgomLosO1pzr4XWVGXTaszGJfcKgrHjIJXP2UwCP4di7nledQ6h4TpK8rNixainUcT+zcrb/0tutRDb3+iaz3/+Y8IPv/ZDV7wxS/4r3yKufYpdNfFqGW6nbCtU6/NoMsKo4TY+IYNrPj/scHqO3yPnh7JXLuEnVK8h+sWWdOIrKp3P7qCW/Y34abI49fynR8UDjs9caToTBhYURV+GBoUJWjvB5oPXezBwp3/t5Yss6KI4Uya+X/1HX5IGAyduqTA6KJdPjxp1W3WFTlsessGq+/666PWYNwwDAJT7P0yZon6s+vmXawylpwG1B0m5VO5SsEAAAAASUVORK5CYII
// ==/UserScript==

//   Свои отзывы в личном кабинете:
let IntID = setInterval( () => {
  let El = document.querySelector('[data-review-uuid] > div:nth-child(2) span + span');
  if (El) El.click(); else clearInterval(IntID);
}, 600);

new MutationObserver( Mutations => {
  for (let Mutation of Mutations) {
    for (let Node of Mutation.addedNodes) if (Node instanceof HTMLElement) {
      let El = Node.querySelector('[data-review-uuid] > div:nth-child(2) > div:nth-child(1) button, [data-review-uuid] > div:nth-child(2) span + span, [data-answer-id] + div > button');
      if (El) El.click();
      El = Node.querySelector('[data-review-uuid] + div div + span')?.closest('button');
      if (El) El.click();
    }
  }
}).observe( document, { childList: true, subtree: true });
