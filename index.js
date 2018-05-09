function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}

function deepestChild() {
  return document.querySelector('div#grand-node')
}
