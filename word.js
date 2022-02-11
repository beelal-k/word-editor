var text = '';
var font = '';

function fontSelect() {




   text = document.getElementById('Inptxt');
   font = document.getElementById('selectFont').value;

   if (font == 'ari') {
      text.classList.add('arial');

   }
   if (font == 'helv') {
      text.classList.add('helvetica');

   }
   if (font == 'imp') {
      text.classList.add('impact');

   }
   if (font == 'geo') {
      text.classList.add('georgia');

   }
   if (font == 'newRome') {
      text.classList.add('NewRoman');

   }


}

function fontStart() {
   text = document.getElementById('Inptxt');
   font = document.getElementById('selectFont').value;

   if (text.classList.contains('arial')) {
      text.classList.remove('arial');
      fontSelect();
   }
   if (text.classList.contains('helvetica')) {
      text.classList.remove('helvetica');
      fontSelect();
   }
   if (text.classList.contains('impact')) {
      text.classList.remove('impact');
      fontSelect();
   }
   if (text.classList.contains('georgia')) {
      text.classList.remove('georgia');
      fontSelect();
   }
   if (text.classList.contains('NewRoman')) {
      text.classList.remove('NewRoman');
      fontSelect();
   }
   else {
      fontSelect();
   }
}


function fontSize() {
   text = document.getElementById('Inptxt');
   size = document.getElementById('selectSize').value;



   if (size == '11') {
      text.classList.add('eleven');

   }
   if (size == '12') {
      text.classList.add('twelve');

   }
   if (size == '13') {
      text.classList.add('thirteen');

   }
   if (size == '14') {
      text.classList.add('fourteen');

   }
   if (size == '15') {
      text.classList.add('fifteen');

   }
   if (size == '16') {
      text.classList.add('sixteen');

   }
   if (size == '17') {
      text.classList.add('seventeen');

   }
   if (size == '18') {
      text.classList.add('eighteen');

   }
   if (size == '19') {
      text.classList.add('nineteen');

   }
   if (size == '20') {
      text.classList.add('twenty');

   } 
   if (size == '21') {
      text.classList.add('twentyone');

   }
}

function sizeStart() {

   text = document.getElementById('Inptxt');
   size = document.getElementById('selectSize').value;

   if (text.classList.contains('eleven')) {
      text.classList.remove('eleven');
      fontSize();
   }
   if (text.classList.contains('twelve')) {
      text.classList.remove('twelve');
      fontSize();
   }
   if (text.classList.contains('thirteen')) {
      text.classList.remove('thirteen');
      fontSize();
   }
   if (text.classList.contains('fourteen')) {
      text.classList.remove('fourteen');
      fontSize();
   }
   if (text.classList.contains('fifteen')) {
      text.classList.remove('fifteen');
      fontSize();
   }

   if (text.classList.contains('sixteen')) {
      text.classList.remove('sixteen');
      fontSize();
   }
   if (text.classList.contains('seventeen')) {
      text.classList.remove('seventeen');
      fontSize();
   }
   if (text.classList.contains('eighteen')) {
      text.classList.remove('eighteen');
      fontSize();
   }
   if (text.classList.contains('nineteen')) {
      text.classList.remove('nineteen');
      fontSize();
   }
   if (text.classList.contains('twenty')) {
      text.classList.remove('twenty');
      fontSize();
   }
   if (text.classList.contains('twentyone')){
      text.classList.remove('twentyone');
      fontSize();
   }
   
   else {
      fontSize();
   }
}


// function textSelect(){
//    var selected = window.getSelection();
//    alert(selected);
// }


function colorSelect(){

   // var selected = window.getSelection();
   var clr = document.getElementById('clr').value;
   text = document.getElementById('Inptxt');

   text.style.color = clr;
   


}

function alignSelect(){
   select = document.getElementById('selectAlign').value;
   text = document.getElementById('Inptxt');

   if ( select == 'left'){
      text.style.textAlign = 'left';
   }

   if ( select == 'right'){
      text.style.textAlign = 'right';
   }

   if ( select == 'center'){
      text.style.textAlign = 'center';
   }

   if ( select == 'just'){
      text.style.textAlign = 'justify';
   }
}

