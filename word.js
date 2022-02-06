var text = '';
var font = '';


function fontSelect(){

    text = document.getElementById('Inptxt');
    font = document.getElementById('selectFont').value;
    if (text.classList.contains('arial','helvetica','impact','georgia','NewRoman')){
        alert('works')
    }
    if (font == 'ari'){
       text.classList.add('arial');
       
    }
    if (font == 'helv'){
        text.classList.add('helvetica');
        
     }
     if (font == 'imp'){
        text.classList.add('impact');
        
     }
     if (font == 'geo'){
        text.classList.add('georgia');
        
     }
     if (font == 'newRome'){
        text.classList.add('NewRoman');
        
     }
    
    
}