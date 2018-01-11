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
  var grandDiv = document.querySelectorAll("#grand-node div");
  var iterator = [ ];
  
  for (let i = 0; i < grandDiv.length; i++) {
    
  }
  
  return grandDiv.innerHTML;
}