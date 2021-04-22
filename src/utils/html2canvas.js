function PrintDiv(div) {
  html2canvas((div), {
    onrendered: function (canvas) {
      var myImage = canvas.toDataURL();
      downloadURI(myImage, "MaSimulation.png");
    }
  });
}

function downloadURI(uri, name) {
  var link = document.createElement("a");

  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  //after creating link you should delete dynamic link
  //clearDynamicLink(link)
}