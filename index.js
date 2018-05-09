function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

function deepestChild(divs) {
  let divs = document.querySelectorAll('div#grand-node div')

  return divs[divs.length - 1]
}
