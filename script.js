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

    const searchText =
        document
            .getElementById("employeeName")
            .value
            .trim()
            .toLowerCase();

    const employee =
        data.Report_Entry.find(emp =>
            (
                emp["Legal_Name_-_First_Name"] +
                " " +
                emp["Legal_Name_-_Last_Name"]
            )
            .toLowerCase()
            .includes(searchText)
        );

    if (employee) {

        document.getElementById("result")
            .innerHTML =
            `
            <h3>Employee Found</h3>

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


async function showTeam() {

    const response =
        await fetch('employees.json');

    const data =
        await response.json();

    const managerName =
        document
            .getElementById("managerName")
            .value
            .trim()
            .toLowerCase();

    const team =
        data.Report_Entry.filter(emp =>
            emp["Manager"]
                .toLowerCase()
                .includes(managerName)
        );

    if (team.length === 0) {

        document.getElementById("result")
            .innerHTML =
            "No team members found.";

        return;
    }

    let html =
        `<h3>Team Size: ${team.length}</h3>`;

    team.forEach(emp => {

        html +=
            `
            ${emp["Legal_Name_-_First_Name"]}
            ${emp["Legal_Name_-_Last_Name"]}
            <br>
            `;

    });

    document.getElementById("result")
        .innerHTML =
        html;

}
