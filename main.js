// mortgage for
function calculateLoan() {
    // var monthlyPayment = null
    // Get values from form inputs using ids and set variables
    let loanAmount = document.getElementById('loanAmount').value;
    // Change percentage amount into a decimal number by dividing by 100 and 12(months in a year)
    let apr = (document.getElementById('apr').value) / 1200
    let months = document.getElementById('months').value;



    // Calculate interest owed:
    let interest = (loanAmount * apr) / months
    // Add amount of interest to total of loan amount
    
    // Divide total amount owed by the number of months of the mortgage term
        // in order to calculate how much is due each month and round to 
        // the nearest penny (2 decimal places)
    let monthlyPayment =((loanAmount / months) + interest).toFixed(2);
    
    

    // Convert to String
    // Send/set monthlyPayment calculated to render onto screen:
    document.getElementById('monthlyPayment').innerHTML = "Monthly Mortgage Payment = $ " + monthlyPayment;
    console.log(monthlyPayment)
}

