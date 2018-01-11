function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankedLis = document.querySelectorAll("ul.ranked-list li");
  
  for (let i = 0; i < rankedLis.length; i++) {
    rankedLis[i].innerHTML = parseInt(rankedLis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var grandDiv = document.querySelector("#grand-node");
  var iterator = ["#grand-node"];
  
  while(grandDiv.hasChildNodes()) {
    if ()
    iterator.push("div");
    var iteratorString = iterator.join(' ')
    grandDiv = document.querySelector(iteratorString);
  }
  return grandDiv.innerHTML;
}