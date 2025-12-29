let btn = document.querySelector(".taskBtn");
let text = document.querySelector(".taskInput");
let list = document.querySelector(".taskList");

let arr = [];
let idCounter = 0;

btn.addEventListener("click", () => {
  if (text.value) {
    arr.push({ id: idCounter++, val: text.value.trim(), completed: false });
    text.value = "";
    render();
  } else {
    alert("Then input is empty, please write a task !");
  }
  console.log(arr);
});

function render() {
  list.innerHTML = "";

  const sortedArr = [
    ...arr.filter((t) => !t.completed),
    ...arr.filter((t) => t.completed),
  ];

  sortedArr.forEach((task) => {
    // Add
    const li = document.createElement("li");

    li.textContent = task.val;

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", () => {
      task.completed = !task.completed;
      render();
    });

    // Delete

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";

    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      arr = arr.filter((t) => t.id !== task.id);
      render();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
