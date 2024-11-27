// $(document).ready(function(){ alert(jQuery.fn.jquery); });
 
const makefon = document.getElementById("makefon");
const containerop = document.getElementById("containerop");
makefon.addEventListener('click', function() {
    if (containerop.style.backgroundColor == 'green') {
        containerop.style.backgroundColor = null;
    } else {
        containerop.style.backgroundColor = 'green';
    }
});

// const makefon = document.getElementById("makefon");
// const containerop = document.getElementById("containerop");
// makefon.addEventListener("click", () => {
//     containerop.style.backgroundColor = 'green';
// });

// makefon.addEventListener('click', function() {
//     if (this.style.backgroundColor == 'blue') {
//         this.style.backgroundColor = null;
//     } else {
//         this.style.backgroundColor = 'blue';
//     }
// });

// var f;
// function show_hide4()
// {    
//   if(f==1) {      
//         $("#containerop").css("background", "green"); 
//     return f=0;
//     }
//     else {
//         $("#containerop").css("background", "none"); 
//     return f=1;
//     }
// }

// var f;    
// function show_hide4()
// {    
//   if(f==1) {      
//     $(document).ready(function () { 
//         $("#dobfon").click(function () { 
//             $("#containerop").css("background", "green"); 
//         }); 
//     }); 
//     return f=0;
//     }
//     else{
//     $(document).ready(function () { 
//         $("#dobfon").click(function () { 
//             $("#containerop").css("background", "none"); 
//             }); 
//     }); 
//     return f=1;
//     }
// }

