    // Function to open tabs
    function openTab(evt, tabName) {
        // Declare variables
        var i, tabcontent, tablinks;
    
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    
        // Check if the tabName is "Сотрудники" and hide the "Задачи" tabcontent if it is
        if (tabName === "Сотрудники") {
            var tasksTab = document.getElementById("Задачи");
            tasksTab.style.display = "none";
        }
    
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }