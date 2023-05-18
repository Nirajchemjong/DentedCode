const paiUrl = "https://randomuser.me/api/?";

// Global Variables

let userList = [];

/////Promise method

// const fethUser = () => {
//   fetch(paiUrl) //fetching data from api
//     .then((response) => {    //this is called Promise
//       return response.json();
//     })
//     .then((data) => {    //returning promise data and getting or returning data from json file
//       console.log(data);
// //     });
// .catch((error)=>{
//     //handle the error;
// })
// };
// fethUser();

// ======================asnyc/await ============

// const fetchUser = async () => {
//   try {
//     const response = await fetch(paiUrl);
//     //   console.log(response);
//     const data = await response.json();
//     //   console.log(data);
//     userList = data.results;
//     displayUser(data.results);
//     // userCount(data.results);
//   } catch (error) {
//     console.log(error);
//   }
// };

// ============making dynamics url ============

const fetchUser = async (params = "results=10") => {
  try {
    const response = await fetch(paiUrl + params);
    //   console.log(response);
    const data = await response.json();
    //   console.log(data);
    userList = data.results;
    displayUser(data.results);
    // userCount(data.results);
  } catch (error) {
    console.log(error);
  }
};

fetchUser();

const displayElm = document.getElementById("list");
const countElm = document.getElementById("count");
const displayUser = (user) => {
  console.log(user);
  let str = ``;
  user.map((item, i) => {
    str += `<div class="card" style="width: 18rem;">
    <img src="${item?.picture?.medium}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item?.name.title} ${item?.name.first} ${item?.name.last}</h5>
      <p class="card-text">
      <table>
      <tr>
      <td ><i class="px-2 fa-solid fa-person-half-dress"></i>${item?.gender}</td>
      </tr>
      <tr><td ><i class="px-2 fa-solid fa-phone"></i>${item?.cell}</td>
      <tr>
      <td ><i class="px-2 fa-soid fa-calendar"></i> ${item?.dob.date}</td></tr>
      <td ><i class="px-2 fa-sharp fa-solid fa-envelope"></i>${item?.email}</td></tr>
      <tr>
      </tr></p>
      </table>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  });
  displayElm.innerHTML = str;
  countElm.innerHTML = user.length;
};

// const userCount = (user) => {
//   countElm.innerText = user.length;
// };

///change gender dynamically

// const changeGender = (e) => {
//   //   console.log(e);
//   console.log(e?.target.value);
//   //   alert("you clicked onChanged Event");
// };

// document.getElementById("select").addEventListener("change", changeGender);

document.getElementById("select").addEventListener("change", (e) => {
  //deStructing this
  const { value } = e.target;
  const path = "results=10&gender=" + value;
  fetchUser(path);
});

//searching users according to name

//capture data from search input
document.getElementById("search-input").addEventListener("keyup", (e) => {
  const { value } = e.target;

  const filterUser = userList.filter((item) => {
    const fullName = (
      item.name.title +
      " " +
      item.name.first +
      " " +
      item.name.last
    ).toLowerCase();

    return fullName.includes(value.toLowerCase());
  });

  displayUser(filterUser);
});
