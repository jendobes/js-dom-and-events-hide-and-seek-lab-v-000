function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

const divs = document.querySelectorAll('div#grand-node div')
function deepestChild(divs) {
  return divs[divs.length - 1]
}
