var sliderCont = $('.slider-container')

$(window).on('resize',()=>{
    var activeElm = $('.active')
    var sliderWidth = $('.section-5 .slider-container div').width()
    sliderCont.css('left',(activeElm.index())*-sliderWidth)
})
$('#left-btn').on('click',()=>{
    var activeElm = $('.active')
    if (activeElm.prev().length == 0){
        $('.slider-container div').last().addClass('active')
    }
    else{
        activeElm.prev().addClass('active')
    }
    activeElm.removeClass('active')
    var sliderWidth = $('.section-5 .slider-container div').width()
    // sliderCont.animate({'left':(activeElm.index()-1)*-sliderWidth},'slow')
    sliderCont.animate({'left':($('.active').index())*-sliderWidth},{
        duration:800,
        queue:false
    })
    
})
$('#right-btn').on('click',()=>{
    var activeElm = $('.active')
    if (activeElm.next().length == 0){
        $('.slider-container div').first().addClass('active')
    }
    else{
        activeElm.next().addClass('active')
    }
    activeElm.removeClass('active')
    var sliderWidth = $('.section-5 .slider-container div').width()
    // sliderCont.animate({'left':(activeElm.index()+1)*-sliderWidth},'slow')
    sliderCont.animate({'left':($('.active').index())*-sliderWidth},{
        duration:800,
        queue:false
    })


})