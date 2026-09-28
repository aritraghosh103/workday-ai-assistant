async function loadEmployees() {

    const response = await fetch('employees.json');
    const data = await response.json();

    document.getElementById("result")
        .innerHTML =
        "Loaded " +
        data.Report_Entry.length +
        " employees.";
}


async function searchEmployee() {

    const response = await fetch('employees.json');
    const data = await response.json();

    const searchText =
        document
            .getElementById("employeeName")
            .value
            .trim()
            .toLowerCase();

    const employee =
        data.Report_Entry.find(emp =>
            emp["Legal_Name_-_First_Name"]
                .toLowerCase()
                .includes(searchText)
        );

    if (employee) {

        document.getElementById("result")
            .innerHTML =
            `
            <b>Name:</b>
            ${employee["Legal_Name_-_First_Name"]}
            ${employee["Legal_Name_-_Last_Name"]}

            <br><br>

            <b>Employee ID:</b>
            ${employee["Employee_ID"]}

            <br><br>

            <b>Studio:</b>
            ${employee["Studio"]}

            <br><br>

            <b>Cost Center:</b>
            ${employee["Cost_Center"]}

            <br><br>

            <b>Manager:</b>
            ${employee["Manager"]}

            <br><br>

            <b>Region:</b>
            ${employee["Region"]}
            `;

    } else {

        document.getElementById("result")
            .innerHTML =
            "Employee not found.";

    }

}
