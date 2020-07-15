$('.title1').hover(function(){
	$('.current').toggle()
})

$('.title1 .current').hover(function(){
	$('.title .current ol').toggle()
})


$('.header-right').click(function(){
	$('.header-ul').toggle()
})
// $('.header-ul .title,.header-ul .title1').mouseenter(function(){
// 	$(this).css({'background':'#3bf1f5'})
// })
// $('.header-ul .title,.header-ul .title1').mouseleave(function(){
// 	$(this).css({'background':'rgba(43,54,67,0.9)'})
// })