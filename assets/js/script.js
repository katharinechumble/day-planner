console.log("GUTEN MORGEN HERR PTERODACTYL");

var tasks = [];

function userInput(taskInput, taskText) {
    // get html content corresponding to user's click
    $(".new-task").on("click", "p", function() {
        var task = $(this)
        .html()
        .trim();
    console.log(this);
    // make editable middle segment
        var taskInput = $("<textarea>")
            .addClass("new-task")
            .val(task);
        var taskP = $("<p>")
            .addClass("m-1")
            .text(taskText);
        $(this).replaceWith(taskInput);
        taskInput.trigger("focus");
    }); 

}
userInput();

// save tasks to local storage
var saveTasks = JSON.parse(localStorage.getItem('new-task'));
var newTask = [""];

function renderTask(saveTasks) {
    for (var i = 0; i < saveTasks.length; i++) {
        var updateTask = $('<p>');
        updateTask.text(saveTasks[i]);
        $('#new-task').append(updateTask);
    }
}

$('#saveBtn').on('click', function(event) {
    event.preventDefault();
    var newTaskList = $("#newTask")
    .val()
    .trim();

    newTask.push(newTaskList);

    renderNewTask(saveTasks);

    saveTasks.JSON.stringify(localStorage.setItem("newTask"));
});

// use moment.js to define the time
var now = moment();
console.log(now);

function updateColor(taskInput) {
    var tasks = document.getElementById("#description");

if(now) {
    document.getElementByIds("#description").setAttribute("style", '.present');
} else {
    $(now++).tasks.setAttribute("style", '.future');
    $(now--).tasks.setAttribute("style", '.past');
    
};
}
