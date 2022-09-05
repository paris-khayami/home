document.querySelectorAll("#expand").forEach((e,index)=>{
    e.addEventListener('click',(el)=>{
        if(e.childNodes[0].className=='fa fa-angle-double-down')
            e.childNodes[0].className='fa fa-angle-double-up';
        else if(e.childNodes[0].className=='fa fa-angle-double-up')
            e.childNodes[0].className='fa fa-angle-double-down';

        e.parentElement.parentElement.childNodes[3].classList.toggle('show-answer');
    })
});