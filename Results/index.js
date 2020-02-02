let theCart = JSON.parse(localStorage.getItem("cartResults"));

console.log(theCart)
let sentenceDisplay= document.getElementById('the-results');

theCart.forEach(item => {
    let resultsSentence = `You picked ${item.id} ${item.quantity} times.`;
 
    let whereTheSentenceGoes = document.createElement('p');
    whereTheSentenceGoes.textContent = resultsSentence
    sentenceDisplay.appendChild(whereTheSentenceGoes);

    console.log(resultsSentence)
});



// for each loop item in theCart 
//get the item in the cart by [index #]

//once i hve index number
//t