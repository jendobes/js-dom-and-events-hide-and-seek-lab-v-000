function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

function deepestChild() {
  let divs = document.querySelectorAll('div#grand-node div')

  return divs[divs.length - 1]
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('div.ranked-list li')
}
