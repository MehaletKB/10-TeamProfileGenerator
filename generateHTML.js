function createManagerCard(manager) {
    return `
    <div class="w-25 ml-3 mr-3 border shadow" style="max-width: 18rem;">
        <div class="card text-white bg-info card-header">
            <p>${manager.name}</p>
            <p>Manager</p>
        </div>
        <div class="card-body">
            <p class="card-text">${manager.id}</p>
            <p class="card-text">${manager.email}</p>
            <p class="card-text">${manager.officeNum}</p>
        </div>
    </div>
    `;
}

function createEngineerCard(engineer) {
    return `
    <div class="w-25 ml-3 mr-3 border shadow" style="max-width: 18rem;">
        <div class="card text-white bg-info card-header">
            <p>${engineer.name}</p>
            <p>Engineer</p>
        </div>
        <div class="card-body">
            <p class="card-text">${engineer.id}</p>
            <p class="card-text">${engineer.email}</p>
            <p class="card-text">${engineer.github}</p>
        </div>
    </div>
    `;
}

function createInternCard(intern) {
    return `
    <div class="w-25 ml-3 mr-3 border shadow" style="max-width: 18rem;">
        <div class="card text-white bg-info card-header">
            <p>${intern.name}</p>
            <p>Intern</p>
        </div>
        <div class="card-body">
            <p class="card-text">${intern.id}</p>
            <p class="card-text">${intern.email}</p>
            <p class="card-text">${intern.school}</p>
        </div>
    </div>
    `;
}

htmlArr = [];

function generateHTML(data) {
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = createManagerCard(employee)
            htmlArr.push(managerCard)
        };

        if (role === "Engineer") {
            const engineerCard = createEngineerCard(employee)
            htmlArr.push(engineerCard)
        };
        
        if (role === "Intern") {
            const internCard = createInternCard(employee)
            htmlArr.push(internCard)
        };
    }
    
    const teamCards = htmlArr.join("")
    console.log (teamCards)

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <title>Team Profiles</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid text-white bg-primary">
        <div class="container">
            <h1 class="display-4 text-center">My Team</h1>
        </div>
    </div>

    <div class="d-flex p-2 m-3 justify-content-center">
        ${teamCards}
    </div>


</body>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
</html>
    
    `
}


module.exports = generateHTML;