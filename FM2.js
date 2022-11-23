
var nameValid=false;
var prenomValid=false;
var emailValid=false;
var telephonValid=false;
var genreValid=false;
var groupeValide=false;
var clubValide = false;

document.forms[0].onkeyup=function(e){
    //nom prenom
let nom = document.getElementById('nom');
let nomRe =  /^[a-z]{1,30}$/i ;
let prenom = document.getElementById('prenom');
let prenomRe =  /^[a-z]{1,30}$/i ;
  //email
let email = document.getElementById('email');
let emailRe = /^[a-zA-Z0-9]+(.)+[a-zA-Z0-9]+@(ofppt)(.(ma))$/;  
   //telephone
let telephone = document.getElementById('telephone')
let telephoneRe=/^(0)[5-7]\d{8}$/;

let genre1=document.getElementById('feminin').value;
let genre2=document.getElementById('masculin');

let message=document.getElementById('msg').value;

let clubs=document.getElementById('clubes');

let error=document.getElementById('error').value;

if(nomRe.test(nom.value)){
document.getElementById("nom").style.borderColor = "green"
nameValid=true;
}
else{
document.getElementById("nom").style.borderColor = "red"
nameValid=false;
}
if(prenomRe.test(prenom.value)){
document.getElementById("prenom").style.borderColor = "green"
prenomValid=true;
}
else{
document.getElementById("prenom").style.borderColor = "red"
prenomValid=false;
}
if(emailRe.test(email.value)){
document.getElementById("email").style.borderColor = "green"
emailValid=true;
}
else{
document.getElementById("email").style.borderColor = "red"
emailValid = false;
}
if(telephoneRe.test(telephone.value)){
document.getElementById("telephone").style.borderColor = "green"
telephonValid = true;
}
else{
document.getElementById("telephone").style.borderColor = "red"
telephonValid = false;
}






document.getElementById('gender').addEventListener('change', function(){
  if(document.querySelector('[name=genre]:checked')==null){
    document.getElementById("msg").innerHTML= "ce champ est obligatoire";
    genreValid=false;
    }
    else{
    document.getElementById("gender").style.borderColor="green";
    genreValid=true;
    }

})
document.getElementById('grp').addEventListener('change' , function(){
  if(document.querySelector('[name=groupe]:checked')==null){
    document.getElementById("message").innerHTML= "ce champ est obligatoire";
    groupeValide = false;
    }
    else{
    document.getElementById("grp").style.borderColor="green";
    groupeValide = true;
    }
})
document.getElementById('clb').addEventListener('change',function(){
  var selected=0;
  for(let i = 0;i< clubs.length;i++){
  if(clubs[i].selected){
  selected++;
  }
  }
  
  if( selected < 1 || selected > 3 ){
  clubValide = false;
  document.getElementById('error').innerHTML="choissisez de moin un club svp";
  }
  else{
  document.getElementById('clb').style.borderColor = 'green';
  clubValide=true;
  }
})
  }

  document.getElementById("button").addEventListener('click',function(e){
    if( nameValid === false || prenomValid === false || emailValid === false || telephonValid === false || genreValid === false || groupeValide === false || clubValide === false){
      e.preventDefault();
      
      
      
      }
  })
  