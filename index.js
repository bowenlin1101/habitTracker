document.addEventListener('click',(e) => {
    if (e.target.id == "addTask"){
        var table = document.querySelector("#task-table");

        var tablerow = document.createElement("tr");
        var tableheader = document.createElement("th");
        var tasktext = document.createTextNode(document.getElementById("taskTitle").value)
        tableheader.append(tasktext);
        tablerow.append(tableheader)
        for (var i = 0; i < 31; i++){
            var checkboxContainer = document.createElement("td");
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type","checkbox");
            checkboxContainer.append(checkbox)
            tablerow.append(checkboxContainer)
        }
        table.append(tablerow);
        document.getElementById("taskTitle").value = "";
    }
})