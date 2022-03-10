document.getElementById("loan-form").addEventListener("submit",calculate);

function calculate(e) {
    const amount =document.getElementById("loan_amount");
    const interest =document.getElementById("interest");
    const years =document.getElementById("years");
    const monthlyPayment= document.getElementById("monthly_payment");
    const totalPayment =document.getElementById("total_amount");
    const totalInterest =document.getElementById("total_interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;
    const x = math.pow(1 + calculatedIntrest,calculatedPayements);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    
if(isFinite(monthly)) {
    monthlyPayment.value=monthly.toFixed(2);
    totalAmount.value=(monthly * calculatedPayements).toFixed(2);
    totalInterest.value=(monthly * calculatedPayments - principal).toFixed(2);
document.getElementById("results").style.display = "block";
}
    e.preventDefault();
}