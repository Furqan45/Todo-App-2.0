  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC5e1PxaZZFsesU3R3bW7HEPYqR9UTGRIQ",
    authDomain: "loginform-7c55b.firebaseapp.com",
    databaseURL: "https://loginform-7c55b.firebaseio.com",
    projectId: "loginform-7c55b",
    storageBucket: "loginform-7c55b.appspot.com",
    messagingSenderId: "431312276920",
    appId: "1:431312276920:web:b44e3d06c06e996384d34d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();

var inp = document.getElementById("inp");
var list = document.getElementById("list");

window.add = function (){
    console.log(inp.value);
    var idRef = ref(database, "todos/");
    var id = push (idRef).key;
    console.log(id); 
    var obj ={
        todos: inp.value,
        id: id,
    }
    var reference = ref(database, `todos/${id}/`); 
    set (reference, obj);
};


function getTodos(){
    var reference = ref(database, "todos/");

    onValue(reference, function (dt) {
        var dataObj = dt.val();
        var dataList = Object.values(dataObj);
        renderList(dataList);

    });
}
getTodos();

// function renderList(dataArray){
//     list.innerHTML = "";
// for( var i = 0; i <  dataArray.length; i++){
//      list.innerHTML +=`<li>${dataArray[i].todos}</li>`;


//      var editButton = document.createElement('button');
//      editButton.innerText = 'Edit';
//      editButton.onclick = function() {
//          var newTodo = prompt("Enter the updated task:", todo.todos);
//          if (newTodo !== null) {
//              var reference = ref(database, `todos/${todo.id}/todos`);
//              set(reference, newTodo);
//          }
//      };
//      li.appendChild(editButton);

//      var deleteButton = document.createElement('button');
//      deleteButton.innerText = 'Delete';
//      deleteButton.onclick = function() {
//          var confirmDelete = confirm("Are you sure you want to delete this task?");
//          if (confirmDelete) {
//              var reference = ref(database, `todos/${todo.id}`);
//              set(reference, null);
//          }
//      };
//      li.appendChild(deleteButton);

//      list.appendChild(li);

//     }
// }


function renderList(dataArray) {
    list.innerHTML = "";

    for (var i = 0; i < dataArray.length; i++) {
        var todo = dataArray[i];
        var li = document.createElement('li');
        li.innerHTML = todo.todos;

        // Create edit button
        var editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = function() {
            var newTodo = prompt("Enter the updated task:", todo.todos);
            if (newTodo !== null) {
                var reference = ref(database, `todos/${todo.id}/todos`);
                set(reference, newTodo);
            }
        };
        li.appendChild(editButton);

        // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            var confirmDelete = confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
                var reference = ref(database, `todos/${todo.id}`);
                set(reference, null);
            }
        };
        li.appendChild(deleteButton);

        list.appendChild(li);
    }
}




// var obj = {
//     id: "ab1",
//     txt: "abc",
//     time: "134788546",
// };


// var keys = Object.keys(obj);
// console.log(keys);

// var val = Object.values(obj);
// console.log(val);



// var inputVal = document.getElementById('inp')
// var list = document.getElementById("liParent");

// function delRow(btn){
//     console.log(btn.parentNode);
//     btn.parentNode.remove();
// }

// function editRow(btn){
//     console.log(btn.parentNode);
//     btn.parentNode.firstChild.nodeValue = prompt("Enter your new Word");
// }

// function add(){
//     var li = document.createElement("li");
//     var lival = document.createTextNode(inputVal.value);
//     li.appendChild(lival);
//     list.appendChild(li);
//     inputVal.value = "";

//     var del = document.createElement("Button")
//     var deltext = document.createTextNode("Delete")
//     del.appendChild(deltext);
//     del.setAttribute("class", "btn")
//     del.setAttribute("onclick", "delRow(this)");
//     li.appendChild(del);



//     var editbtn = document.createElement('Button')
//     var edittext = document.createTextNode('EDIT')
//     editbtn.appendChild(edittext);
//     editbtn.setAttribute("class", "btn")
//     editbtn.setAttribute('onclick', 'editRow(this)')
//     li.appendChild(editbtn);
// }