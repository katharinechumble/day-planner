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
var saveTasks = $("saveBtn").click(function() {
    localStorage.setItem(".new-task", taskP);
    renderLastRegistered();
});

// use moment.js to define the time
var now = moment();
moment();
console.log(now);
