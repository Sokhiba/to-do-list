var todoList = [];
var doneList = [];
var selectedIndex = -1;

function addList() {
  var exercise = document.getElementById('type-here').value;
  if (exercise.trim().length>0){
      todoList.push(exercise);

  }
  drawTodoList();
document.getElementById('type-here').value="";
}

function drawTodoList() {
    var content="";
    for (var i=0; i<todoList.length; i++){
        content +=
            "<div class='input-group w-100 mb-3'>" +
            "<div class='w-75 pl-2 pt-1 border'>" + todoList[i]+
            "</div>" +
            "<div class='input-group-append'>" +
            "<button type='submit' class='btn btn-success shadow-none'onclick='done("+i+")' >Done</button>" +
            "</div>" +
            "</div>"
    }
    document.getElementById('todo-list').innerHTML=content;
}

function done(index) {
   var done = todoList[index];
   doneList.push(done);
    if (selectedIndex<0){
        todoList.splice(index,1);
    }
   drawdoneList();
    drawTodoList();
calc();


}

function drawdoneList() {
    var content = "";
    for ( var i=0; i<doneList.length; i++){
        content +=
            "<div class='input-group ml-auto mb-3'>" +
            "<div class='w-75 pl-2 pt-1 ml-auto border'>" +doneList[i]+
            "</div>" +
            "<div class='input-group-append'>" +
            "<button type='submit' class='btn btn-danger shadow-none' onclick='cleare("+i+")' >x</button>"+
            "</div>"+
            "</div>"
    }
    document.getElementById('done-list').innerHTML=content;
}

function cleare(index) {
    if (selectedIndex<0){
        doneList.splice(index,1);
    }
    drawdoneList();
    calc();
}

function calc() {
  var percent = doneList.length / (doneList.length + todoList.length)*100;
  document.getElementById('progress-bar').style.width= percent+"%";
 document.getElementById('prog').innerHTML=parseInt(percent)+"%";
}