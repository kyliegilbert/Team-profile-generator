
const managerCard = function (manager){
    return `
    <div class="card" style="width: 18rem;">
        <h3 class="card-header">${manager.name}</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
        
        <div class="card-body">
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
    
}

const engineerCard = function(engineer) {

    return `
    <div class="card" style="width: 18rem;">
        <h3 class="card-header">${engineer.name}</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
        
        <div class="card-body">
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="office">GitHubUsername: ${engineer.githubUsername}</p>
            </div>
        </div>
    </div>
    `;
}

const internCard = function(intern) {
    return `
    <div class="card" style="width: 18rem;">
        <h3 class="card-header">${intern.name}</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
        
        <div class="card-body">
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="office">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

function generateHTML(data) {

    const Card = []

    for (i=0;i<=data.length;i++) {
        let employee = data[i]
        console.log (employee)
        let role = employee.role

        if(role === 'Manager'){
            managercard = managerCard(employee)
            Card.push(managercard)
        }

        if(role === 'Engineer'){
            engineercard = engineerCard(employee)
            Card.push(engineercard)
        }

        if(role === 'Intern'){
            interncard = internCard(employee)
            Card.push(interncard)
        }
    }
}


const generateHTMLpage = function() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
    </head>
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <h1 class="display-4 center">My Team</h1>
            </div>
        </header>

        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
    
    
    </body>
    </html>
    `
}