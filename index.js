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
  let lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML + n)
  }
}
