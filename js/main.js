window.onload = function() {

    // input with id username on change event
    document.getElementById('username').addEventListener('input', function() {
        // get the value of the input
        let username = document.getElementById('username').value;
        // regex to check if the username is valid - 6 characters long and 1 number 1 letter 1 special character
        let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
        // check if the username is valid
        if (regex.test(username)) {
            // if valid set the border color to green
            document.getElementById('username').style.borderColor = 'green';
        } else {
            // if not valid set the border color to red
            document.getElementById('username').style.borderColor = 'red';
        }   
    });
        

    document.getElementById('download').addEventListener('click', function() {
    var canvas = document.getElementById('myChart');
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.

    var link = document.createElement('a');
    link.download = "my-image.png";
    link.href = image;
    link.click();
});
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Income',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Expenses',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
document.getElementById('chart-tab').addEventListener('click', function() {
    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    let data = {};
    let incomeData = [];
    let expensesData = [];
    
months.forEach(month => {
  let incomeId = `income-${month}`;
  let expensesId = `expenses-${month}`;
  data[month] = {
    income: document.getElementById(incomeId).value,
    expenses: document.getElementById(expensesId).value
  };
});
// Assuming data is an object where each key is a month and the value is another object with income and expenses properties

for (let month of months) {
  incomeData.push(data[month].income);
  expensesData.push(data[month].expenses);
}

myChart.data.datasets[0].data = incomeData;
myChart.data.datasets[1].data = expensesData;

myChart.update();
});

}
