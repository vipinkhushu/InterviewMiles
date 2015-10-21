$(document).ready(function() {
		/*Hiding All Elements In Nav bar*/
		$('#navBarTop').hide();
		$('#0').hide();
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
		
		/*Waiting For User To Click A RAPL_DIV*/
    $('.rapl_box_new').click(function() {
		
		/*Replace HomePage Company Logo*/
		$('#header').replaceWith("<br><br><br><br>");
		
		/*Animating Navbar TO appear*/
		$('#navBarTop').show( "slow",function(){
			
			/*Animating OK Sign to slide up*/
			$('#okSign').animate({'marginTop' : "-=300px"}
			,{duration: 600,complete: function(){
				
				
				/*Animating Login/Register Sign to slide up*/
					$('#signinSignup').animate({'marginTop' : "-=300px"}
					,{duration: 400,complete: function(){
				
								/*Animating Send Me Alerts to slide up*/
								$('#sendMeAlerts').animate({'marginTop' : "-=600px"}
								,{duration: 500,complete: function(){
											
											
											/*Animating Send Me Alerts to slide up*/
											$('#aboutUs').animate({'marginTop' : "-=900px"}
											,{duration: 600,complete: function(){
				
														/*Show #0*/
														$('#0').delay(100).show(0);
														$('#0').queue(function(){$('#0').addClass('flash')});
														
														
														/*Animating Ask Us Anything to slide up*/
														$('#askUsAnything').animate({'marginTop' : "-=600px"}
														,{duration: 500,complete: function(){
																	/*Show #1*/
																			$('#1').delay(100).show(0);
																			$('#1').queue(function(){$('#1').addClass('flash')});
															/*Animating Resume  to slide up*/
															$('#resumeBuilder').animate({'marginTop' : "-=600px"}
															,{duration: 500,complete: function(){
																	/*Show #2*/
																			$('#2').delay(100).show(0);
																			$('#2').queue(function(){$('#2').addClass('flash')});
																	/*Animating Jobs  to slide up*/
																		$('#jobsForMe').animate({'marginTop' : "-=600px"}
																	,{duration: 500,complete: function(){
																				/*Show #3*/
																			$('#3').delay(100).show(0);
																			$('#3').queue(function(){$('#3').addClass('flash')});
																			/*Animating Jobs  to slide up*/
																			$('#crackTheInterview').animate({'marginTop' : "-=600px"}
																		,{duration: 500,complete: function(){
																				/*Show #4*/
																			$('#4').delay(100).show(0);
																			$('#4').queue(function(){$('#4').addClass('flash')});
																					
																				/*Animating Campus  to slide up*/
																			$('#campusConnect').animate({'marginTop' : "-=600px"}
																		,{duration: 500,complete: function(){
																				/*Show #5*/
																			$('#5').delay(100).show(0);
																			$('#5').queue(function(){$('#5').addClass('flash')});
														
													/*Animating Discussion  to slide up*/
														$('#discussionForum').animate({'marginTop' : "-=600px"}
														,{duration: 500,complete: function(){
															/*Show #6*/
														$('#6').delay(100).show(0);
														$('#6').queue(function(){$('#6').addClass('flash')});
														 
														 
														 /*Animating Tech Prep  to slide up*/
														$('#technicalPrepration').animate({'marginTop' : "-=600px"}
														,{duration: 500,complete: function(){
															/*Show #7*/
														$('#7').delay(100).show(0);
														$('#7').queue(function(){$('#7').addClass('flash')});
														
														 /*Animating HR Prep  to slide up*/
														$('#hrPrepration').animate({'marginTop' : "-=600px"}
														,{duration: 500,complete: function(){
															/*Show #7*/
														$('#8').delay(100).show(0);
														$('#8').queue(function(){$('#8').addClass('flash')});
														
														 /*Animating puzzle  to slide up*/
														$('#solveThePuzzle').animate({'marginTop' : "-=600px"}
														,{duration: 500,complete: function(){
															/*Show #7*/
														$('#9').delay(100).show(0);
														$('#9').queue(function(){$('#9').addClass('flash')});
														
														 /*Animating contact  to slide up*/
														$('#contactUs').animate({'marginTop' : "-=600px"}
														,{duration: 500,complete: function(){
															/*Show #10*/
														$('#10').delay(100).show(0);
														$('#10').queue(function(){$('#10').addClass('flash')});
														
														
														/*Animating contact to slide up Ends*/
														}});
														
														/*Animating puzzle to slide up Ends*/
														}});
														
														
														/*Animating HR prep to slide up Ends*/
														}});
														
														
														
														/*Animating tech prep to slide up Ends*/
														}});
														
														/*Animating Discussion to slide up Ends*/
														}});	
														
										            
														
														
														
														
																			/*Animating Jobs to slide up Ends*/
																		}});	
																					
														
																			/*Animating Jobs to slide up Ends*/
																		}});
														
																			/*Animating Jobs to slide up Ends*/
																	}});
														
														
															/*Animating Resume to slide up Ends*/
															}});
														
														/*Animating Ask Us Anything to slide up Ends*/
														}});
											/*Animating Send Me Alerts to slide up Ends*/
											}});
			
	
								/*Animating Send Me Alerts to slide up Ends*/
								}});
	
					/*Animating Login/Register  Sign to slide up Ends*/
				}});
				
			

			/*Animating OK Sign to slide up Ends*/
			}});
			
			
		/*Animating Nav Bar Ends*/
		});
		
		
		
		
	
		
		
		
		
		
		
		
});

});
