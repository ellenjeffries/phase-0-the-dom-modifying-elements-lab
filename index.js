const newHeader = document.createElement('h1');

//document.addEventListener("DOMContentLoaded", function() {
    const mainNode = document.querySelector("main#main");
    mainNode.remove("main");
  
    newHeader.id = 'victory';
    const yourName = "Ellen Jeffries";
    newHeader.textContent = "${yourName} is the champion";
  
    document.body.appendChild(newHeader);
//});