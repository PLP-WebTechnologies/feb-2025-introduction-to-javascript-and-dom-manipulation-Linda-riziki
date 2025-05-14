function changeText() {
    document.getElementById("title").textContent = "Text Changed!";
    document.getElementById("info").style.color = "green";
  }
  
  function addBox() {
    const box = document.createElement("div");
    box.id = "myBox";
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = " #4CAF50";
    box.style.margin = "10px";
    document.getElementById("box-area").appendChild(box);
  }
  
  function removeBox() {
    const box = document.getElementById("myBox");
    if (box) {
      box.remove();
    }
  }
  