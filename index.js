const chartValues = [
    {
      "day": "mon",
      "amount": 17.45,
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

let resultsHTML = "";
chartValues.forEach((result) => {
    
    resultsHTML += `

    <div class="day-container">
    <p class="${result.day}-amount-tooltip amount-tooltip">
        $${result.amount}
    </p>
    <p class="day ${result.day} ${result.day}-tooltip">${result.day}</p>
    </div>
`
})

document.querySelector('.charts-container').innerHTML = resultsHTML;


function showAmountTooltip() {
    chartValues.forEach((value) => {

        document.querySelector(`.${value.day}-tooltip`).addEventListener('mouseover', () => { 
            document.querySelector(`.${value.day}-amount-tooltip`).style.opacity = '1';
        })
    })
}
showAmountTooltip();


function hideAmountTooltip() {
    chartValues.forEach((value) => {

        document.querySelector(`.${value.day}-tooltip`).addEventListener('mouseout', () => { 
            document.querySelector(`.${value.day}-amount-tooltip`).style.opacity = '0';
        })
    })
}
hideAmountTooltip();
