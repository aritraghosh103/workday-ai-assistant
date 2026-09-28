async function loadEmployees() {

    const response =
        await fetch('employees.json');

    const data =
        await response.json();

    let html = "";

    data.Report_Entry.forEach(emp => {

        html +=
            emp["Legal_Name_-_First_Name"] +
            " " +
            emp["Legal_Name_-_Last_Name"] +
            "<br>";

    });

    document.getElementById("result")
        .innerHTML = html;

}
