let theCart = JSON.parse(localStorage.getItem("cartResults"));

console.log(theCart)
let sentenceDisplay= document.getElementById('the-results');

theCart.forEach(item => {
    let resultsSentence = `You picked ${item.name} ${item.quantity} times.`;
 
    let whereTheSentenceGoes = document.createElement('p');
    whereTheSentenceGoes.textContent = resultsSentence
    sentenceDisplay.appendChild(whereTheSentenceGoes);

    console.log(resultsSentence)
});
console.log(theCart.map(product => product.id));
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: theCart.map(product => product.name),
        datasets: [{
            label: 'Results',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: theCart.map(product => product.quantity)
        }]
    },

    // Configuration options go here
    options: {ticks: {precision: 0}}
});


// for each loop item in theCart 
//get the item in the cart by [index #]

//once i hve index number
//t