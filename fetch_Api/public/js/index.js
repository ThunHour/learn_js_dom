function addRecord() {
  var memberDetain = {
    id: "006",
    name: "Vong Seiha",
    position: "Member",
    Location: "SieReap",
  };
  fetch("http://localhost:3000/MemberDetain", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memberDetain),
  }).then((res) => {
    console.log(res);
  });
  // .catch((err) => {
  //   console.log(err.message);
  // });
}

function updateRecord() {
  var MemberDetain = {
    id: "001",
    name: "Seak Kimhour",
    position: "Co-leader",
    Location: "PhnomPenh",
  };
  fetch("http://localhost:3000/MemberDetain/001", {
    method:"PUT",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(MemberDetain)
  })
  .than((data) => {
      console.log(data);
    })
}
function editRecord(){

  var dept = {

    id: "001",
    name: "Seak Kimhour",
    position: "Member",
    Location: "PhnomPenh",
  }
  fetch("http://localhost:3000/MemberDetain/001", {
      method:"PUT",
      headers:{
          "Content-Type": "application/json",
      },
      body:JSON.stringify(dept)
  })
  .then((data)=>{
      console.log(data)
  })
}

function deleteRecord() {
  fetch("http://localhost:3000/memberDetain/006", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
function viewRecord() {
  fetch("http://localhost:3000/memberDetain").then((data) => {
    data.json().then((jsonData) => {
      console.log(jsonData);
    });
  });
}

// we can read all the record with using  fetch(URL,{}) without method and headers as well.
