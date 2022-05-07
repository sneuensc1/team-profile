//create the html structure
const generateHTML = function(teamString) {
    return `
    <!DOCTYPE html>
<html lang= 'en'>
<head>
<meta charset='UTF-8'>
<meta name= 'viewport' content= 'width=device-width, initial-scale=1.0'>
<meta http-equiv= 'X-UA-Compatible' content= 'ie= edge'>
<title>My Team</title>
<link href= 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' rel= 'stylesheet'>
<link href= 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
<style>
</style>
</head>
<body>
<div class = 'header'>
<div class = 'jumbotron bg-warning'>
    <h1 class = 'display-4 text-white center'>My Amazing Team</h1>
</div>
</div>
<div class= 'container-body container-fluid'>
   <div class= 'row'>
        ${teamString} 
    </div>
</div>
<script src= 'https://kit.fontawesome.com/257de25400.js' crossorigin= 'anonymous'></script>  
</body>
</html>
`
}

//generate card for each employee by class
const generateCard = function (arr) {
    let positionIcon;
    let roleInfo;

    if(arr.title === 'Manager') {
        positionIcon = `<i class = 'fas fa-mug-hot></i>`
        roleInfo = `Office number: ${arr.office}`
    } else if(arr.title === 'Engineer') {
        positionIcon = `<i class = 'fas fa-glasses></i>`
        roleInfo = ``
    }
}