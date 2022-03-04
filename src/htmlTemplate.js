// Template for Generated HTML

// Obtains unique data for each employee for template
const genUser = empData => {
    if (empData.entryMAoffice) {
        return `Office#: ${empData.entryMAoffice}`
    }
    if (empData.entryINschool) {
        return `University: ${empData.entryINschool}`
    }
    if (empData.entryENgithub) {
        return `Github Profile: <a href="https://github.com/${empData.entryENgithub}">Link</a>`
    }
};

// The template itself
module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <!-- Bootstrap -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <!-- Favicon -->
            <link rel="shortcut icon" type="image/jpg" href="./assets/images/favicon.ico">
            <!-- Font Awesome -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <!-- Google Font -->
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
            <!-- Custom CSS -->
            <link rel="stylesheet" href="style.css">
            <title>Team Profiles</title>
            </head>
            ${generateCards(templateData)}                   
        </html>`
};

// Cards generated for template
const generateCards = templateData => {
    return `
        <body>
            <header>
                <div class="container p-5 mb-5">
                    <h1 class="display-2 text-center">Your Team Roster</h1>
                </div>
            </header>
            <main>
                <div class="container d-flex justify-content-center flex-wrap">
                ${templateData.map((employeeData) => {
    return `
                    <div class="card m-3" style="width: 20rem;">
                        <div class="card-header text-start">
                            <h4 class="card-title">${employeeData.fetchName()}</h4>
                            <h5 class="card-subtitle mb-2 text-muted">${employeeData.fetchRole()}</h5>
                        </div>
                        <div class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employeeData.fetchID()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employeeData.fetchEmail()}">${employeeData.fetchEmail()}</a></li>
                            <li class="list-group-item">${genUser(employeeData)}</li>
                        </div>
                    </div>`
            }).join('')}
                </div>
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </body>`
}