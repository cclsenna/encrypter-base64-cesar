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






function criptoCesar(){
    let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

}

function decriptoCesar(){
    let alfabeto=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v',,'w','x','y','z'];


}

function cripto64(){
    

}

function decripto64(){

}