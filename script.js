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

async function searchEmployee() {

    const response =
        await fetch('employees.json');

    const data =
        await response.json();

    const searchName =
        document
            .getElementById("employeeName")
            .value
            .trim()
            .toLowerCase();

    const employee =
        data.Report_Entry.find(emp =>
            emp["Legal_Name_-_First_Name"]
            .toLowerCase()
            .includes(searchName)
        );

    if (employee) {

        document.getElementById("result")
            .innerHTML =
            employee["Legal_Name_-_First_Name"] +
            " " +
            employee["Legal_Name_-_Last_Name"];

    } else {

        document.getElementById("result")
            .innerHTML =
            "Employee not found.";

    }

}
`
