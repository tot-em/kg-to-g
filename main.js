let kiloInput = document.querySelector('.kg')
let Submit = document.querySelector('#calc-submit')

Submit.addEventListener('click', (e)=> {
   e.preventDefault(); //Prevents the page from refreshing
   console.log('in grams it is ')
   console.log( kiloInput.value * 1000 );
})

