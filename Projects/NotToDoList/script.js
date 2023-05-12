// importing entry values i mean form body
const entryElm = document.querySelector("#entry");
const badElm = document.querySelector("#bad");
const totalHrWeek = 24 * 7;
let taskList = [];

const handleOnSubmit = (event) => {
  //   console.log("form is submitted", event);
  const newTask = new FormData(event);
  const task = newTask.get("task");
  const hr = newTask.get("hr");

  const obj = {
    id: randomStr(),
    task,
    hr,
    type: "entry",
  };

  const ttl = total();
  if (ttl + +hr >= totalHrWeek) {
    return alert(
      " you have exceed your weekly hours! please check once thank you!"
    );
  }

  taskList.push(obj);
  console.log(taskList);
  displayTask();
  total();

  //   for (const pair of newTask.entries()) {
  //     console.log(pair);
  //   }
};

const displayTask = () => {
  let str = " ";
  const entryArg = taskList.filter((item) => item.type === "entry");

  entryArg.map((item, i) => {
    // console.log(i, item);

    str += ` <tr>
    <td scope="row">${i + 1}</td>
    <td>${item.task} </td>
    <td>${item.hr}</td>
    <td><button class="btn btn-sm btn-danger" onclick="onHandleDelete('${
      item.id
    }')">
            <i class="fa-solid
        fa-trash-can"></i>
            Delete</button>
        <button class="btn btn-sm btn-success" onclick="switchTask('${
          item.id
        }', 'bad')">Move To Important

            <i class="fa-solid
             fa-arrow-right"></i>
        </button>
    </td>
</tr>`;
  });

  //   injecting in html

  entryElm.innerHTML = str;
  //   console.log(str);
};

const onHandleDelete = (id) => {
  if (window.confirm(`Are you sure you want to delete`)) {
    taskList = taskList.filter((item) => item.id !== id);
    displayTask();
    displayBadTask();
  }
  //   console.log(taskList);
};

//creating random alphabetic for unique id
const randomStr = () => {
  const charLength = 6;
  const str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  let id = "";
  for (let i = 0; i < charLength; i++) {
    const ranNUm = Math.round(Math.random() * (str.length - 1));
    // console.log(ranNUm);
    id += str[ranNUm];
  }
  return id;
};

const displayBadTask = () => {
  let str = " ";
  const entryArg = taskList.filter((item) => item.type === "bad");

  entryArg.map((item, i) => {
    // console.log(i, item);

    str += ` <tr>
      <td scope="row">${i + 1}</td>
      <td>${item.task} </td>
      <td>${item.hr}</td>
      <td>
      <button class="btn btn-sm btn-warning" onclick="switchTask('${
        item.id
      }', 'entry')">Move To Entry

          <i class="fa-solid
           fa-arrow-left"></i>
      </button>
      <button class="btn btn-sm btn-danger" onclick="onHandleDelete('${
        item.id
      }')">
              <i class="fa-solid
          fa-trash-can"></i>
              Delete</button>
          
      </td>
  </tr>`;
  });

  //   injecting in html

  badElm.innerHTML = str;
  //   console.log(str);
};

const switchTask = (id, type) => {
  //   console.log(id, type);

  taskList = taskList.map((item) => {
    if (item.id == id) {
      item.type = type;
    }
    return item;
  });
  displayBadTask();
  displayTask();
  total();
};

const total = () => {
  const ttl = taskList.reduce((acc, item) => acc + +item.hr, 0);
  document.getElementById("total").innerText = ttl;

  const ttlbad = taskList.reduce(
    (acc, item) => (item.type == "bad" ? acc + +item.hr : acc),
    0
  );
  //   {
  //     // if (item.type == "bad") {
  //     //   return acc + +item.hr;
  //     // }
  //     // return acc;
  //   }, 0);

  document.getElementById("badtotal").innerText = ttlbad;
  return ttl;
};
