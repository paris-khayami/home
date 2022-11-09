var state = false//false->hide
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}
function my_scroll_to(id){
    //if(!window.location.href.slice(window.location.href.length-'index/'.length,window.location.href.length).includes('index.html')){
    if(window.location.href.includes('.html')){
        window.location.href='/home';
    }
    $('html, body').animate({
        scrollTop: $(id).offset().top - vh(9)
      }, 20); 
}
$('#navbar').click((e)=>{
    console.log(e.target.classList.contains('tab'),e.target.id,e.target.classList);
    if($(window). width() > 1070) return;
    if(e.target.classList.contains('tab')==true || (e.target.classList.contains('my-logo')==true && state==true)){
        console.log('in');
        $('.navbar-content .links').toggleClass('show-links');
        $('#bars i').toggleClass('fa-bars').toggleClass('fa-times');
        state=false;
    }
});
$('#bars').click(()=>{
    if($(window). width() > 1070) return;
    $('.navbar-content .links').toggleClass('show-links');
    $('#bars i').toggleClass('fa-bars').toggleClass('fa-times');
    state=!state;
});
$('.tab').click((e)=>{
    $('.tab.active').toggleClass('active');
    // console.log(e.target);
    e.target.classList.add('active');
});
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 150) {
        $('#goToTop').attr('style','visibility:visible;opacity:1;')
    } else {
        $('#goToTop').attr('style','visibility:hidden;opacity:0;')
    }
});
$('#goToTop').click(()=>{
    $(window).scrollTop(0);
});


/***************************** Youtube JS **********************************/
  // create youtube player
  var player1, player2;
  function onYouTubePlayerAPIReady() {
      player1 = new YT.Player('player1', {
        width: '100%',
        height: 'auto',
        videoId: 'aNSpJ1l3SNQ?controls=1&loop=1',
        playerVars: {
            'loop': 1,
            'mute': 0,
            'controls': 1,
            'color': 'white', 
            'theme': 'light', 
            'rel': 0,
            'autoplay': 0,
            'iv_load_policy': '3',
            'color': 'white', 
            'theme': 'light'
        },
        events: {
          onReady: onPlayer1Ready,
          onStateChange: onPlayer1StateChange
        }
      });

      player2 = new YT.Player('player2', {
        width: '100%',
        height: 'auto',
        videoId: '7mOfq-EafGE',
        playerVars: {
            'autoplay': 0,
            'loop': 1,
            'mute': 0,
            'controls': 1,
            'color': 'white', 
            'theme': 'light', 
            'rel': 0,
            'iv_load_policy': '3',
            'color': 'white', 
            'theme': 'light'
          },
        events: {
          onReady: onPlayer1Ready,
          onStateChange: onPlayer1StateChange
        }
      });
  }

//   autoplay video
  function onPlayer1Ready(event) {
      event.target.playVideo();
  }

  // when video ends
  function onPlayer1StateChange(event) {        
      if(event.data === 0) {   
        event.target.mute();
        event.target.playVideo();
               
        console.log('video is muted from now on');
       
        //   console.log(event.target.f.replaceWith(event.target.l);
        // var done = false;
        // function onPlayer1StateChange(event) {
        //   if (event.data == YT.PlayerState.PLAYING && !done) {
        //     setTimeout(stopVideo, 1000);
        //     done = true;
        //   }
        // }
        
        // function stopVideo() {
        //   player.stopVideo();
        // }


      }
  }

// autoplay video
function onPlayer2Ready(event) {
    event.target.playVideo();
}

// when video ends
function onPlayer2StateChange(event) {        
    if(event.data === 0) {          
        // alert('done');
        //apparently copies the otheer video js functions
    }
}


