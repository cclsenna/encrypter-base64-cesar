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
    document.getElementById('botao').innerText='Codificar!'
});


document.getElementById('radio2').addEventListener('click',()=>{
    document.getElementById('botao').innerText='Decodificar a mensagem!'
});


function controller(){
    let selection=document.getElementById('crypto-type').value;
    let inc=parseInt(document.querySelector('#inc').value);
    let retRadio=verificaRadio();

    if(validaCampo()){
        if(selection=='base64'&&retRadio=='radio1'){
            cripto64();
        }
        
        else if(selection=='base64'&&retRadio=='radio2'){
            decripto64();
    
        }
    
        if(selection=='cesar'&&retRadio=='radio1'){
            criptoCesar();
        }
        
        else if(selection=='cesar'&&retRadio=='radio2'){
            decriptoCesar();
    
        }
    


    }
    else{
        alert('Parametro inserido de forma incorreta.Repita novamente a operação.');
    }

    
    




};

function verificaRadio(){
    let botoes=document.getElementsByName('radio');
    for (y of botoes){
        if(y.checked==true){
            return y.id;
        }
    }

    

}



//finalizado,revisar
function criptoCesar(){
    let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let texto=document.getElementById('campo-input').value;
    let inc=parseInt(document.querySelector('#inc').value);
    let resultado='';

    for(x of texto ){
        if(x===' '){
            resultado+=' ';
        }
        else{
            resultado+=alfabeto[(alfabeto.indexOf(x)+inc)%26];

        }   
        
    }
    document.getElementById('campo-output').value=resultado;

};

function decriptoCesar(){

 let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let texto=document.getElementById('campo-input').value;
    let inc=parseInt(document.querySelector('#inc').value);
    let resultado='';

    for(x of texto ){
        if(x===' '){
            resultado+=' ';
        }
        else{
            if(alfabeto.indexOf(x)-inc>=0){
                resultado+=alfabeto[(alfabeto.indexOf(x)-inc)%26];


            }
            else{
                resultado+=alfabeto[alfabeto.length+ (alfabeto.indexOf(x)-inc)%26];

            }
          
        }   
        
    }
    document.getElementById('campo-output').value=resultado;

};




//finalizado
function cripto64(){
    let input=document.getElementById('campo-input').value;
    let novo=btoa(input);
    document.getElementById('campo-output').value=novo;
    

};

//finalizado
function decripto64(){
    let input=document.getElementById('campo-input').value;
    let novo=atob(input);
    document.getElementById('campo-output').value=novo;

};










function validaCampo(){

    let inc=document.querySelector('#inc').value;

    if(parseInt(inc)>25||parseInt(inc)<0){
        alert('O valor do incremento deve ser de 0 a 25!')
        return false;
    }
    else if(inc==''){
        alert('Preencha o valor do incremento.');
        return false;

    }


    else{
        return true;
    }




 


};


