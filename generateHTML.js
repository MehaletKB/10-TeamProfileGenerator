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

generateHTML = (data) => {
    htmlArr = [];

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
            const internCard = createEngineerCard(employee)
            htmlArr.push(internCard)
        };
    }
}

const teamCards = htmlArr.join("")