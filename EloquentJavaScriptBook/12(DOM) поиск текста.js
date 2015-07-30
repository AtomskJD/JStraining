function talksAbout(node, string){
  if( node.nodeType == document.ELEMENT_NODE){
    for (var i = 0; i < node.childNodes.length; i++){
      if (talksAbout(node.childNodes[i], string)){
        return true;
      }
    }
    return false;

  } else if (node.nodeType == document.TEXT_NODE){
    if (node.nodeValue.indexOf(string) > -1){
      console.log(node.nodeValue);
    }
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talksAbout(document.body, "элементов"));


function findComments(node, result){
  if ( node.nodeType == document.ELEMENT_NODE){
    for ( var i = 0; node.childNodes.length > i; i++){
      findComments(node.childNodes[i], result);
    }
  }

  if ( node.nodeType == document.COMMENT_NODE){
    result.push(node.nodeValue);
  }
  return result;
}

console.log(findComments(document.body, []));


function replaceImages() {
  var images = document.body.getElementsByTagName("img");
  for (var i = images.length; i > 0; i--){
    var image = images[i];
    if (image.alt){
      var text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}

replaceImages();