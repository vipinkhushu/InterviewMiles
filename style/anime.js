$(document).ready(function() {
		$('#navBarTop').hide();
		$('#1').hide();
		$('#2').hide();
		$('#3').hide();
		$('#4').hide();
		$('#5').hide();
		$('#6').hide();
		$('#7').hide();
		$('#8').hide();
		$('#9').hide();
		$('#10').hide();
		
		
		
    $('.rapl_box_new').click(function() {
		$('#header').delay(1000).hide(0);
		
		$('#okSign').animate({
        'marginTop' : "-=300px"//moves up		
        },{duration: 1000,});
		$('#navBarTop').show( "slow" );
		
		
		$('#signinSignup').animate({
        'marginTop' : "-=600px"//moves up		
        },{duration: 1500,});
		
		
		$('#sendMeAlerts').animate({
        'marginTop' : "-=900px"//moves up		
        },{duration: 2000,});
		
		
		$('#aboutUs').animate({
        'marginTop' : "-=1200px"//moves up		
        },{duration: 2500,});
		$('#0').delay(2500).show(0);
		$('#0').queue(function(){$('#0').addClass('flash')});
		
        $('#askUsAnything').animate({
        'marginTop' : "-=300px"//moves up		
        },{duration: 3000,});
		$('#1').delay(3000).show(0);
		$('#1').queue(function(){$('#1').addClass('flash')});		
		
		
		$('#resumeBuilder').animate({
        'marginTop' : "-=600px"}//moves up		
        ,{duration: 3500,});
		$('#2').delay(3500).show(0);
		$('#2').queue(function(){$('#2').addClass('flash')});
		
		$('#jobsForMe').animate({
        'marginTop' : "-=800px"}//moves up		
        ,{duration: 4000,});
		$('#3').delay(4000).show(0);
		$('#3').queue(function(){$('#3').addClass('flash')});
	
	
	   $('#crackTheInterview').animate({
        'marginTop' : "-=1000px"}//moves up		
        ,{duration: 4500,});
		$('#4').delay(4500).show(0);
		$('#4').queue(function(){$('#4').addClass('flash')});
		
		
		$('#campusConnect').animate({
        'marginTop' : "-=1300px"}//moves up		
        ,{duration: 5000,});
		$('#5').delay(5000).show(0);
		$('#5').queue(function(){$('#5').addClass('flash')});
		
		$('#discussionForum').animate({
        'marginTop' : "-=1300px"}//moves up		
        ,{duration: 5500,});
		$('#6').delay(5500).show(0);
		$('#6').queue(function(){$('#6').addClass('flash')});
		
		$('#technicalPrepration').animate({
        'marginTop' : "-=800px"}//moves up		
        ,{duration: 6000,});
		$('#7').delay(6000).show(0);
		$('#7').queue(function(){$('#7').addClass('flash')});
	
	
	   $('#hrPrepration').animate({
        'marginTop' : "-=1000px"}//moves up		
        ,{duration: 6500,});
		$('#8').delay(6500).show(0);
		$('#8').queue(function(){$('#8').addClass('flash')});
		
		
		$('#solveThePuzzle').animate({
        'marginTop' : "-=1300px"}//moves up		
        ,{duration: 7000,});
		$('#9').delay(7000).show(0);
		$('#9').queue(function(){$('#9').addClass('flash')});
		
		$('#contactUs').animate({
        'marginTop' : "-=1300px"}//moves up		
        ,{duration: 7500,});
		$('#10').delay(7500).show(0);
		$('#10').queue(function(){$('#10').addClass('flash')});
		
		
});
});

