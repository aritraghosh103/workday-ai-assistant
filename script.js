async function loadEmployees() {

    const response =
        await fetch('employees.json');

    const data =
        await response.json();

    document.getElementById("result")
        .innerHTML =
        "Loaded " +
        data.Report_Entry.length +
        " employees.";

}
