// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').hide();
//     });
// });

// $(document).ready(function() {
//     $('.tıkla').click(function() {
//         $('#sn').hide();
//     });
// });

// $(document).ready(function() {
//     $('button').click(function() {
//         $(this).hide();
//     });
// });

// $(document).ready(function() {
//     $('button').click(function() {
//        $('*').hide(); 
//     });
// });

// $(document).ready(function() {
//     $('button').dblclick(function() {
//         $('*').hide();
//     });
// });

// $(document).ready(function() {
//     $('h2').mouseenter(function() {
//         alert('Tebrikler doğru yere tıkladınız.');
//     });
// });

// $(document).ready(function() {
//     $('h2').mouseleave(function() {
//         alert('Tebrikler doğru yere tıkladın');
//     });
// });

// $(document).ready(function() {
//     $('h2').hover(function() {
//         alert('Şu an metin üstündesin.');
//     },
//     function() {
//         alert('Şu an çıktın.');
//     }
//     );
// });

// $(document).ready(function() {
//     $('input').focus(function() {
//         $(this).css('background-color', 'yellow');
//     }),
//     $('input').blur(function() {
//         $(this).css('background-color', 'white');
//     });
// });

// Aç ve Kapa Mantığı
// $(document).ready(function() {
//     $('.btn-danger').click(function() {
//         $('p').hide(1000);
//     });
//     $('btn-dark').click(function() {
//         $('p').show();
//     }); 
// });

// Toggle Mantığı
// $(document).ready(function() {
//     $('button').click(function() {
//         $('p').toggle(750);
//     });
// });

// Fade In
$(document).ready(function() {
    $('button').click(function() {
        $('.box1').fadeIn(500);
        $('.box2').fadeIn(1500);
        $('.box3').fadeIn(2000);
        $('.box4').fadeIn(2500);
    });
});