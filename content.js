function addButtonToTextBoxes() {
    let textBoxes = document.querySelectorAll("input[type='text'], textarea");
    textBoxes.forEach((textBox) => {
      let container = document.createElement("div");
      container.style.position = "relative";
      container.style.display = "inline-block";
      textBox.before(container);
  
      container.appendChild(textBox);
  
      let button = document.createElement("button");
      button.innerText = "RI";
      button.style.backgroundColor = "teal";
      button.style.position = "absolute";
      button.style.top = "50%";
      button.style.borderRadius = "100%";
      button.style.transform = "translateY(-50%)";
      button.style.right =0;
      button.style.padding = "0.5em";
      button.style.border = "none";
      button.style.color = "#fff";
    
      button.style.display = "none"; 
      button.addEventListener("click", () => {
        //code here
      });
      container.appendChild(button);
  
      textBox.addEventListener("input", () => {
        button.style.right = `calc(${100 - (textBox.scrollWidth / textBox.offsetWidth) * 100}% + 40px)`; // adjust for the width of the button
      });
  
      textBox.addEventListener("focus", () => {
        button.style.display = "inline-block";
      });
  
      textBox.addEventListener("blur", () => {
        button.style.display = "none";
      });
    });
  
    let iframes = document.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      try {
        let iframeDocument = iframe.contentDocument;
        let iframeTextBoxes = iframeDocument.querySelectorAll("input[type='text'], textarea");
        iframeTextBoxes.forEach((textBox) => {
          let container = document.createElement("div");
      container.style.position = "relative";
      container.style.display = "inline-block";
      textBox.before(container);
  
      container.appendChild(textBox);
  
      let button = document.createElement("button");
      button.innerText = "RI";
      button.style.backgroundColor = "teal";
      button.style.position = "absolute";
      button.style.top = "50%";
      button.style.borderRadius = "100%";
      button.style.transform = "translateY(-50%)";
      button.style.right = "calc(5% + 40px)";
      button.style.padding = "0.5em";
      button.style.border = "none";
      button.style.color = "#fff";
    
      button.style.display = "none"; 
      button.addEventListener("click", () => {
        //code here
      });
      container.appendChild(button);
  
      textBox.addEventListener("input", () => {
        button.style.right = `calc(${100 - (textBox.scrollWidth / textBox.offsetWidth) * 100}% + 40px)`; // adjust for the width of the button
      });
  
      textBox.addEventListener("focus", () => {
        button.style.display = "inline-block";
      });
  
      textBox.addEventListener("blur", () => {
        button.style.display = "none";
      });
        });
      } catch (e) {
        console.error(e);
      }
    });
  }
  
  addButtonToTextBoxes();
  