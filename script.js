const mdiv = document.querySelector('.container');
const button = document.querySelector('button');

for (let i=1; i < 257; i++ ){
    const div = document.createElement('div');
    mdiv.appendChild(div);
}


$('.container').children().on('mouseover', function(){
    $(this).addClass('active');
});

button.addEventListener('click', () => {
    

})



