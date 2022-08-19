//Make event for deposit submit button
document.getElementById('depositButton').addEventListener('click', function(){
    const depositInputField = document.getElementById('depositInput').value
    
    const depositAmount = parseFloat(depositInputField);

    const depositDisplayField = document.getElementById('depositDisplay').innerText;

    const existingDeposit = parseFloat(depositDisplayField);

    const balanceDisplayField = document.getElementById('balanceDisplay').innerText;

    const existingBalance = parseFloat(balanceDisplayField);

    document.getElementById('depositInput').value= '';
    
    
    if (isNaN(depositAmount)){
        alert('Please input a valid number.')
        return;
    }
    else if (depositAmount > 0){
        document.getElementById('depositDisplay').innerText = existingDeposit + depositAmount;

        document.getElementById('balanceDisplay').innerText = existingBalance + depositAmount;
    }
})

//Make event for deposit submit buttons
// console.log("test")
document.getElementById('withdrawButton').addEventListener('click', function(){
    const withdrawDisplayField = document.getElementById('withdrawDisplay').innerText;

    const existingWithdraw = parseFloat(withdrawDisplayField);

    const balanceDisplayField = document.getElementById('balanceDisplay').innerText;

    const existingBalance = parseFloat(balanceDisplayField);

    const withdrawInputField = document.getElementById('withdrawInput').value

    const withdrawAmount = parseFloat(withdrawInputField);

    document.getElementById('withdrawInput').value= '';

    if(isNaN(withdrawAmount)){
        alert("Please input a valid number.")
        return;
    }
    else if(withdrawAmount>existingBalance){
        alert("Insufficient balance.")
        return;
    }
    else if(withdrawAmount<=existingBalance){
        document.getElementById('withdrawDisplay').innerText = existingWithdraw + withdrawAmount;

        document.getElementById('balanceDisplay').innerText = existingBalance - withdrawAmount;
    }

})