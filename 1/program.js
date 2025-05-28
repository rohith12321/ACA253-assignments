let editing = false;
let active = false;

function readmore() {
  const hidden = document.querySelectorAll("#skills-list .hidden");
  const btn = document.getElementById("button1");

  if (!active) {
    hidden.forEach(item => {
      item.style.display = "list-item";
    });
    btn.textContent = "Read Less";
    active = true;
  } else {
    hidden.forEach(item => {
      item.style.display = "none";
    });
    btn.textContent = "Read More";
    active = false;
  }
}

function edit() {
  const skillsList = document.querySelector("#skills-list ul");
  const btn = document.getElementById("button2");

  if (!editing) {
    const a = [...skillsList.children];
    a.forEach(li => {
      if (li.style.display !== "none") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = li.textContent;
        input.style.display = "block";
        input.style.marginBottom = "5px";
        if (li.classList.contains("hidden")) {
          input.classList.add("hidden");
        }
        skillsList.replaceChild(input, li);
      }
    });
    btn.textContent = "Save";
    editing = true;
  } else {
    const children = [...skillsList.children];
    children.forEach(child => {
      if (child.tagName.toLowerCase() === "input") {
        const li = document.createElement("li");
        li.textContent = child.value.trim();
        if (child.classList.contains("hidden")) {
          li.classList.add("hidden");
          if (active) {
            li.style.display = "list-item";
          } else {
            li.style.display = "none";
          }
        } else {
          li.style.display = "list-item";
        }
        skillsList.replaceChild(li, child);
      }
    });
    btn.textContent = "Edit";
    editing = false;
  }
}
