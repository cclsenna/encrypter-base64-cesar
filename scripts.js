document.getElementById('crypto-type').addEventListener('change',()=>{
    let selection=document.getElementById('crypto-type');
    let arr =document.querySelectorAll('.incremento');


    if(selection.value=='cesar'){
            for(let i of arr){
            i.style.display='block';
    }

    }
    else{
        for(let i of arr){
            i.style.display='none';
    }


    }
});


document.getElementById('radio1').addEventListener('click',()=>{
    document.getElementById('botao').innerText='Criptografar!'
});


document.getElementById('radio2').addEventListener('click',()=>{
    document.getElementById('botao').innerText='Descriptografar!'
});








function criptoCesar(){
    let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let texto=document.getElementById('campo-input').value;
    let inc=parseInt(document.querySelector('#inc').value);

    for(x of texto ){
        
    }


}













function decriptoCesar(){
    let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


}




//finalizado
function cripto64(){
    let input=document.getElementById('campo-input').value;
    let novo=btoa(input);
    document.getElementById('campo-output').value=novo;

    

}

//finalizado
function decripto64(){
    let input=document.getElementById('campo-input').value;
    let novo=atob(input);
    document.getElementById('campo-output').value=novo;

}








/*
Y2Fpbw==

function validaCampo(){
    if(parseInt(document.querySelector('#inc').value)
    
    
    )



};
*/