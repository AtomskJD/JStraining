function highlightCode(node, keywords) {
  var text = node.textContent;
  node.textContent = "";
  var match, pos = 0;
  while (match = keywords.exec(text)){
    
//     index специальный метод для массивов результатов регулярок
    var before = text.slice(pos, match.index);
    node.appendChild(document.createTextNode(before));
    
    var strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(match[0]));
    node.appendChild(strong);
    
//  применяется к использованным регуляркам
    pos = keywords.lastIndex;
  }
  
  var after = text.slice(pos);
  node.appendChild(document.createTextNode(after));
  
}


var languages = {javascript: /\b(function|return|var)\b/g};

function highlightAll(){
  var pres = document.body.getElementsByTagName("pre");
  for (var i = 0; i < pres.length; i++){
    var pre = pre[i];
    var lang = pre.getAttribute("data-language");
    
//     хороший способ избежать всяких ифоф
    if (languages.hasOwnProperty(lang)){
      highlightCode(pre, languages[lang]);
    }
  }
}