
// ==UserScript==
// @name:ru         Показать комментарии на Ozon'e
// @name            Show comments on Ozon
// @version         1.1
// @description:ru  Автопоказ/разворот скрытых комментариев на Ozon'e.
// @description     Auto-show/expand hidden comments on Ozon.
// @author          XX-J...
// @homepageURL     https://github.com/XX-J
// @match           *://*.ozon.ru/*
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFmUlEQVR42uVbA5jkShicZ9u2bdv22Xzm2bZt27Zt21rbmw7qTZ19fyaDzGx9X92tknRVOv1jOh4R6uB8TzG86SmMFp4imO3lVu/XGV7CJczgmDg2jpFjPThmxyiBSz1FUcl74jheKKzIMXPs1OATiuAH74n2eYmwJjVQixjAed4DGvLgSCI1Udu5xRfGEB4QoRxydhPkdz68Z8JZnnnkCVLrKat9ZCx4Uu47ITowXPAXeYrUfCTJkcf5CCI1U/vhDA95ktTO1DHPGkDtzJ+DedGLigHPVgVKdgXaTQFmrAeW7QA27gf2JgCJ6UC2BsSlAit3AWNXAJ2mA9WGAp81BS4v6dfHYDYN2BpIwed5+XodoO2UQ4I0HY6Qq4Dp64EKA4EnKjk2YKsnUFUd73KTccCeBAQUnEHvNnBQRfpT9PlFgMIdwekcdCzYCnzSxP6Y/WbAt62A9fsQcvSYDVxaIogGvNcAXMRcBa419/0dYAMuLga0nAhYFlyJ5EyuDQEy4MF/gRW74HqkZwPPV/ezAQU7gCcOG0QlA9eX85MBv/RCWGLoYj8YULa7/553yzBhbtwLY9Bs6FV7Qy/TBurHhlAfVoV6uyLUV3WgijaH/ndXGD2nwly9E5bS4QRv1HFgANNWp+KtxDQYvaZBfVMX2u2FoV33kz3eUQT6Lx1gLtwI+2D26KMBnzcDTNM39ZZlwZy0HOq7+tBuzE8hfqH6qBrM9bttjgW46w+bBnDxiE72UfjYxVBvVrAvUEgaarQfBzv4p79NAwYthH3x26KgPq4uFOKcRqcJkGLYEhsG/NjWpnDT5B2BdmshuQA/zQRrTxwk2BYjNOCS4oyfNsTnKqjiLTmgkFCvLIvPKZlCA8r1sCE+NRPqi9ohE0+qHxpAAt0QGrBOWNUxNqvPa4VUPKk+qymsDwQGsMsihf5f95CLJ/VqfSDBliiBAZUGQQRzygpXiCfNaasgwXBJFBi5TLbiq9f+cYV4ps6WME2tMFBgwNZowd2fuMw9d3/WWkjxSAWBAQwV54JeoYc7nv3qfSHF6j3CWkA3cC4wFw+5eNYXrCqlKNVNaECyYAawogu5+IwcSJEWk4mLigkN2BLl7kdAL9vWdm9AFWiC5s/3lRnA7sm5YO2OhXaDv8pbeT/A6D4Zls3GBJsuR87R4rk+5zbgr36QgFVY0MQz1abpdmEdSIR2T/ETztXqud5nN+CO39kAEZrQYTyrscAJ/6AqEy6f227q23qnPW/rZ3udvRaYvAZisLenPvFj/X9zQaj8jWHOWO2o58g+49mu0+bZnmc24OWasA1zyRbof3SGdldR26J5jPqpIYwBs1hdwgmYperl24uu2+6ZHmduiPSf77v77NcZfaYzWkAv1Rrq+/qczqzauCKzuQm9Vn8Yw+fD2h4lWNjkrTj9t452zD+zAdeU4YYFhA2slAyoIs0pyj8GkE9VZmoM14OPn/bULxTkXwNI7u6IT0MIIOxDthjpICcRGEDe+QewaJvL7vqiTX7pPou3yDCXbj/VBcJX7WAP0D95xvU/pdveJKU+rw1z9trgC1+9U77ISXl9vq22t8lp1+U75N6HvmRp9j9kMZoMg/bSX4HJNK/7afYpGyWlBhzls78x3sOcvJwlKpyAx5uLN8NoPZqtLscCBTOg+albZeUGnMqbCkB9WZtdWtYJMEYupCBY++JhJWewOOFd5XTmp7ycQTDajIFeujXvMgcU3NL6up/elGyWlhsQPuQCGIc6dc4XbJePTAP06/JVErwwEZEG8FHbh3tLXCp4ZSYyDTCuz/eD4KWpSDUgX0PBa3MRaQAXviGgRsmLk5FnQL6GFG/71dlwN4ALHp95xy9Ph5sBjPMMdeBqL4bg9Xl1Xf7ZLCK8F8hwkdgMjom5vbo+XwtmeGCSI8D/D1DP4Cf3faoAAAAASUVORK5CYII
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
