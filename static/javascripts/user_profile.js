$(function() {
                     
	        /*
	         * User Form edit begins
	         */
	        
	          function saveUser()
	          {
	          	var userName = $('span#userName a').text();
	          	var userFirstName=$('span#userFirstName').text();
	          	var userLastName=$('span#userLastName').text();	          	
	          	var userExist=1;
	          	var country=$('span#placeData').text();
	          	var birthday=$('span#birthdayData').text();
	          	var birthdayVisibility;
	          	if($('button#visibility').text()=='PRIVATE')
	          	{
	          		birthdayVisibility=1;
	          	}
	          	else
	          	{
	          		birthdayVisibility=2;
	          	}
	          	
	          	var gameBio=$('span#userGameBio').text();
	          	
	          	var userJson={}
	          	userJson['userName']=userName;
	          	userJson['userFirstName']=userFirstName;
	          	userJson['userLastName']=userLastName;
	          	userJson['userExist']=userExist;
	          	userJson['country']=country;
	          	userJson['birthday']=birthday;
	          	userJson['birthdayVisibility']=birthdayVisibility;
	          	userJson['gameBio']=gameBio;
	          	
	          	$.post("/user/save", userJson, function(data){
	          		console.log(data);
	          	},'json');
	          }
	        
	          //First Name
	          $('#userNameDetails').on('click','#userFirstName', function() {	          	  
	          	  var firstName = $('#userFirstName').text();
	          	  var firstNameElement = "<input type ='text' name='firstName' id='firstName' value='"+firstName+"' maxlength='8' placeholder='FirstName(Max 8 chars)'/>";
	          	  console.log(firstNameElement);	          	  	          	 
	          	  $('#userFirstName').replaceWith(firstNameElement);
	          	  $('#firstName').focus();
				});
							 
			  $('#userNameDetails').on('blur','#firstName', function(e) {
			  	    e.preventDefault();			  	    			  		
					var firstName =$('#firstName').val();
					$('#firstName').keyup(function() {
						firstName=$('#firstName').val();
						});
					console.log("firstName length: "+firstName.length);	
					if(firstName.length!=0)
					{
						var spanElement = "<span id='userFirstName' class='userNameFont userProfileNameFont cursorPointer'>"+firstName+"</span>";
						$('#firstName').replaceWith(spanElement);
						saveUser();
					}
					
					  
				  });
			
			//Last Name	  	
			 $('#userNameDetails').on('click','#userLastName', function() {	          	  
	          	  var lastName = $('#userLastName').text();
	          	  var lastNameElement = "<input type ='text' name='lastName' id='lastName' value='"+lastName+"' maxlength='8' placeholder='LastName(Max 8 chars)'/>";
	          	  console.log(lastNameElement);	          	  	          	 
	          	  $('#userLastName').replaceWith(lastNameElement);
	          	  $('#lastName').focus();
				});
				
			  $('#userNameDetails').on('blur','#lastName', function(e) {
			  	    e.preventDefault();			  	    			  		
					var lastName =$('#lastName').val();
					$('#lastName').keyup(function() {
						lastName=$('#lastName').val();
						});
					if(lastName.length!=0)
					{
						var spanElement = "<span id='userLastName' class='userNameFont userProfileNameFont cursorPointer'>"+lastName+"</span>";
						$('#lastName').replaceWith(spanElement);
						saveUser();
					}					  
				  });
	        
	        //BirthDate	        
	        $('#birthday').on('click','#birthdayData', function() {	          	  
	          	  var birthDate = $('#birthdayData').text();
	          	  var birthDateTime = new Date(birthDate);
	          	  var birthDateElement = "<input type ='text' name='birthDate' id='birthDate' value='"+birthDate+"'/>";
	          	  console.log(birthDateElement);	          	  	          	 
	          	  $('#birthdayData').replaceWith(birthDateElement);	  
	          	  $('#birthDate').datepicker({
	          	  	 setDate:birthDateTime,
	          	  	 inline: true,  
            		 showOtherMonths: true,  
            		 dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],  
	          	  	 onClose:function()
	          	  	 {	          	  	 					  	    			  	
							var birthDate =$('#birthDate').val();
							$('#birthDate').keyup(function() {
								birthDate=$('#birthDate').val();
								});
							if(birthDate.length!=0)
							{
								var spanElement = "<span id='birthdayData' class='userContactsFont'>"+birthDate+"</span>";
								$('#birthDate').replaceWith(spanElement);
								saveUser();
							}	
							
	          	  	 }
	          	  });      	          	  
				});							  			  
			  
			//Country
			$('#place').on('click','#placeData', function() {	          	  
	          	  var country = $('#placeData').text();
	          	  console.log(country);
	          	  var countriesElement = "<select id='country' name='country'>"+ 											
											"<option value='United States'>United States</option>"+ 
											"<option value='United Kingdom'>United Kingdom</option>"+ 
											"<option value='Afghanistan'>Afghanistan</option>"+ 
											"<option value='Albania'>Albania</option>"+ 
											"<option value='Algeria'>Algeria</option>"+ 
											"<option value='American Samoa'>American Samoa</option>"+ 
											"<option value='Andorra'>Andorra</option>"+ 
											"<option value='Angola'>Angola</option>"+ 
											"<option value='Anguilla'>Anguilla</option>"+ 
											"<option value='Antarctica'>Antarctica</option>"+ 
											"<option value='Antigua and Barbuda'>Antigua and Barbuda</option>"+ 
											"<option value='Argentina'>Argentina</option>"+ 
											"<option value='Armenia'>Armenia</option>"+ 
											"<option value='Aruba'>Aruba</option>"+ 
											"<option value='Australia'>Australia</option>"+ 
											"<option value='Austria'>Austria</option>"+ 
											"<option value='Azerbaijan'>Azerbaijan</option>"+ 
											"<option value='Bahamas'>Bahamas</option>"+ 
											"<option value='Bahrain'>Bahrain</option>"+ 
											"<option value='Bangladesh'>Bangladesh</option>"+ 
											"<option value='Barbados'>Barbados</option>"+ 
											"<option value='Belarus'>Belarus</option>"+ 
											"<option value='Belgium'>Belgium</option>"+ 
											"<option value='Belize'>Belize</option>"+ 
											"<option value='Benin'>Benin</option>"+ 
											"<option value='Bermuda'>Bermuda</option>"+ 
											"<option value='Bhutan'>Bhutan</option>"+ 
											"<option value='Bolivia'>Bolivia</option>"+ 
											"<option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>"+ 
											"<option value='Botswana'>Botswana</option>"+ 
											"<option value='Bouvet Island'>Bouvet Island</option>"+ 
											"<option value='Brazil'>Brazil</option>"+ 
											"<option value='British Indian Ocean Territory'>British Indian Ocean Territory</option>"+ 
											"<option value='Brunei Darussalam'>Brunei Darussalam</option>"+ 
											"<option value='Bulgaria'>Bulgaria</option>"+ 
											"<option value='Burkina Faso'>Burkina Faso</option>"+ 
											"<option value='Burundi'>Burundi</option>"+ 
											"<option value='Cambodia'>Cambodia</option>"+ 
											"<option value='Cameroon'>Cameroon</option>"+ 
											"<option value='Canada'>Canada</option>"+ 
											"<option value='Cape Verde'>Cape Verde</option>"+ 
											"<option value='Cayman Islands'>Cayman Islands</option>"+ 
											"<option value='Central African Republic'>Central African Republic</option>"+ 
											"<option value='Chad'>Chad</option>"+ 
											"<option value='Chile'>Chile</option>"+ 
											"<option value='China'>China</option>"+ 
											"<option value='Christmas Island'>Christmas Island</option>"+ 
											"<option value='Cocos (Keeling) Islands'>Cocos (Keeling) Islands</option>"+ 
											"<option value='Colombia'>Colombia</option>"+ 
											"<option value='Comoros'>Comoros</option>"+ 
											"<option value='Congo'>Congo</option>"+ 
											"<option value='Congo, The Democratic Republic of The'>Congo, The Democratic Republic of The</option>"+ 
											"<option value='Cook Islands'>Cook Islands</option>"+ 
											"<option value='Costa Rica'>Costa Rica</option>"+ 
											"<option value='Cote D'ivoire'>Cote D'ivoire</option>"+
											"<option value='Croatia'>Croatia</option>"+ 
											"<option value='Cuba'>Cuba</option>"+ 
											"<option value='Cyprus'>Cyprus</option>"+ 
											"<option value='Czech Republic'>Czech Republic</option>"+ 
											"<option value='Denmark'>Denmark</option>"+ 
											"<option value='Djibouti'>Djibouti</option>"+ 
											"<option value='Dominica'>Dominica</option>"+ 
											"<option value='Dominican Republic'>Dominican Republic</option>"+ 
											"<option value='Ecuador'>Ecuador</option>"+ 
											"<option value='Egypt'>Egypt</option>"+ 
											"<option value='El Salvador'>El Salvador</option>"+ 
											"<option value='Equatorial Guinea'>Equatorial Guinea</option>"+ 
											"<option value='Eritrea'>Eritrea</option>"+ 
											"<option value='Estonia'>Estonia</option>"+ 
											"<option value='Ethiopia'>Ethiopia</option>"+ 
											"<option value='Falkland Islands (Malvinas)'>Falkland Islands (Malvinas)</option>"+
											"<option value='Faroe Islands'>Faroe Islands</option>"+ 
											"<option value='Fiji'>Fiji</option>"+ 
											"<option value='Finland'>Finland</option>"+ 
											"<option value='France'>France</option>"+ 
											"<option value='French Guiana'>French Guiana</option>"+ 
											"<option value='French Polynesia'>French Polynesia</option>"+ 
											"<option value='French Southern Territories'>French Southern Territories</option>"+ 
											"<option value='Gabon'>Gabon</option>"+ 
											"<option value='Gambia'>Gambia</option>"+ 
											"<option value='Georgia'>Georgia</option>"+ 
											"<option value='Germany'>Germany</option>"+ 
											"<option value='Ghana'>Ghana</option>"+ 
											"<option value='Gibraltar'>Gibraltar</option>"+ 
											"<option value='Greece'>Greece</option>"+ 
											"<option value='Greenland'>Greenland</option>"+ 
											"<option value='Grenada'>Grenada</option>"+ 
											"<option value='Guadeloupe'>Guadeloupe</option>"+ 
											"<option value='Guam'>Guam</option>"+ 
											"<option value='Guatemala'>Guatemala</option>"+ 
											"<option value='Guinea'>Guinea</option>"+ 
											"<option value='Guinea-bissau'>Guinea-bissau</option>"+ 
											"<option value='Guyana'>Guyana</option>"+ 
											"<option value='Haiti'>Haiti</option>"+ 
											"<option value='Heard Island and Mcdonald Islands'>Heard Island and Mcdonald Islands</option>"+ 
											"<option value='Holy See (Vatican City State)'>Holy See (Vatican City State)</option>"+ 
											"<option value='Honduras'>Honduras</option>"+ 
											"<option value='Hong Kong'>Hong Kong</option>"+ 
											"<option value='Hungary'>Hungary</option>"+ 
											"<option value='Iceland'>Iceland</option>"+ 
											"<option value='India'>India</option>"+ 
											"<option value='Indonesia'>Indonesia</option>"+ 
											"<option value='Iran, Islamic Republic of'>Iran, Islamic Republic of</option>"+ 
											"<option value='Iraq'>Iraq</option>"+ 
											"<option value='Ireland'>Ireland</option>"+ 
											"<option value='Israel'>Israel</option>"+ 
											"<option value='Italy'>Italy</option>"+ 
											"<option value='Jamaica'>Jamaica</option>"+ 
											"<option value='Japan'>Japan</option>"+ 
											"<option value='Jordan'>Jordan</option>"+ 
											"<option value='Kazakhstan'>Kazakhstan</option>"+ 
											"<option value='Kenya'>Kenya</option>"+ 
											"<option value='Kiribati'>Kiribati</option>"+ 
											"<option value='Korea, Democratic People's Republic of'>Korea, Democratic People's Republic of</option>"+ 
											"<option value='Korea, Republic of'>Korea, Republic of</option>"+ 
											"<option value='Kuwait'>Kuwait</option>"+ 
											"<option value='Kyrgyzstan'>Kyrgyzstan</option>"+ 
											"<option value='Lao People's Democratic Republic'>Lao People's Democratic Republic</option>"+ 
											"<option value='Latvia'>Latvia</option>"+ 
											"<option value='Lebanon'>Lebanon</option>"+ 
											"<option value='Lesotho'>Lesotho</option>"+ 
											"<option value='Liberia'>Liberia</option>"+ 
											"<option value='Libyan Arab Jamahiriya'>Libyan Arab Jamahiriya</option>"+ 
											"<option value='Liechtenstein'>Liechtenstein</option>"+ 
											"<option value='Lithuania'>Lithuania</option>"+ 
											"<option value='Luxembourg'>Luxembourg</option>"+ 
											"<option value='Macao'>Macao</option>"+ 
											"<option value='Macedonia, The Former Yugoslav Republic of'>Macedonia, The Former Yugoslav Republic of</option>"+ 
											"<option value='Madagascar'>Madagascar</option>"+ 
											"<option value='Malawi'>Malawi</option>"+ 
											"<option value='Malaysia'>Malaysia</option>"+ 
											"<option value='Maldives'>Maldives</option>"+ 
											"<option value='Mali'>Mali</option>"+ 
											"<option value='Malta'>Malta</option>"+ 
											"<option value='Marshall Islands'>Marshall Islands</option>"+ 
											"<option value='Martinique'>Martinique</option>"+ 
											"<option value='Mauritania'>Mauritania</option>"+ 
											"<option value='Mauritius'>Mauritius</option>"+ 
											"<option value='Mayotte'>Mayotte</option>"+ 
											"<option value='Mexico'>Mexico</option>"+ 
											"<option value='Micronesia, Federated States of'>Micronesia, Federated States of</option>"+ 
											"<option value='Moldova, Republic of'>Moldova, Republic of</option>"+ 
											"<option value='Monaco'>Monaco</option>"+ 
											"<option value='Mongolia'>Mongolia</option>"+ 
											"<option value='Montserrat'>Montserrat</option>"+ 
											"<option value='Morocco'>Morocco</option>"+ 
											"<option value='Mozambique'>Mozambique</option>"+ 
											"<option value='Myanmar'>Myanmar</option>"+ 
											"<option value='Namibia'>Namibia</option>"+ 
											"<option value='Nauru'>Nauru</option>"+ 
											"<option value='Nepal'>Nepal</option>"+ 
											"<option value='Netherlands'>Netherlands</option>"+ 
											"<option value='Netherlands Antilles'>Netherlands Antilles</option>"+ 
											"<option value='New Caledonia'>New Caledonia</option>"+ 
											"<option value='New Zealand'>New Zealand</option>"+ 
											"<option value='Nicaragua'>Nicaragua</option>"+ 
											"<option value='Niger'>Niger</option>"+ 
											"<option value='Nigeria'>Nigeria</option>"+ 
											"<option value='Niue'>Niue</option>"+ 
											"<option value='Norfolk Island'>Norfolk Island</option>"+ 
											"<option value='Northern Mariana Islands'>Northern Mariana Islands</option>"+ 
											"<option value='Norway'>Norway</option>"+ 
											"<option value='Oman'>Oman</option>"+ 
											"<option value='Pakistan'>Pakistan</option>"+ 
											"<option value='Palau'>Palau</option>"+ 
											"<option value='Palestinian Territory, Occupied'>Palestinian Territory, Occupied</option>"+ 
											"<option value='Panama'>Panama</option>"+ 
											"<option value='Papua New Guinea'>Papua New Guinea</option>"+ 
											"<option value='Paraguay'>Paraguay</option>"+ 
											"<option value='Peru'>Peru</option>"+ 
											"<option value='Philippines'>Philippines</option>"+ 
											"<option value='Pitcairn'>Pitcairn</option>"+ 
											"<option value='Poland'>Poland</option>"+ 
											"<option value='Portugal'>Portugal</option>"+ 
											"<option value='Puerto Rico'>Puerto Rico</option>"+ 
											"<option value='Qatar'>Qatar</option>"+ 
											"<option value='Reunion'>Reunion</option>"+ 
											"<option value='Romania'>Romania</option>"+ 
											"<option value='Russian Federation'>Russian Federation</option>"+ 
											"<option value='Rwanda'>Rwanda</option>"+ 
											"<option value='Saint Helena'>Saint Helena</option>"+ 
											"<option value='Saint Kitts and Nevis'>Saint Kitts and Nevis</option>"+ 
											"<option value='Saint Lucia'>Saint Lucia</option>"+ 
											"<option value='Saint Pierre and Miquelon'>Saint Pierre and Miquelon</option>"+ 
											"<option value='Saint Vincent and The Grenadines'>Saint Vincent and The Grenadines</option>"+ 
											"<option value='Samoa'>Samoa</option>"+ 
											"<option value='San Marino'>San Marino</option>"+ 
											"<option value='Sao Tome and Principe'>Sao Tome and Principe</option>"+ 
											"<option value='Saudi Arabia'>Saudi Arabia</option>"+ 
											"<option value='Senegal'>Senegal</option>"+ 
											"<option value='Serbia and Montenegro'>Serbia and Montenegro</option>"+ 
											"<option value='Seychelles'>Seychelles</option>"+ 
											"<option value='Sierra Leone'>Sierra Leone</option>"+ 
											"<option value='Singapore'>Singapore</option>"+ 
											"<option value='Slovakia'>Slovakia</option>"+ 
											"<option value='Slovenia'>Slovenia</option>"+ 
											"<option value='Solomon Islands'>Solomon Islands</option>"+ 
											"<option value='Somalia'>Somalia</option>"+ 
											"<option value='South Africa'>South Africa</option>"+ 
											"<option value='South Georgia and The South Sandwich Islands'>South Georgia and The South Sandwich Islands</option>"+ 
											"<option value='Spain'>Spain</option>"+ 
											"<option value='Sri Lanka'>Sri Lanka</option>"+ 
											"<option value='Sudan'>Sudan</option>"+ 
											"<option value='Suriname'>Suriname</option>"+ 
											"<option value='Svalbard and Jan Mayen'>Svalbard and Jan Mayen</option>"+ 
											"<option value='Swaziland'>Swaziland</option>"+ 
											"<option value='Sweden'>Sweden</option>"+ 
											"<option value='Switzerland'>Switzerland</option>"+ 
											"<option value='Syrian Arab Republic'>Syrian Arab Republic</option>"+ 
											"<option value='Taiwan, Province of China'>Taiwan, Province of China</option>"+ 
											"<option value='Tajikistan'>Tajikistan</option>"+ 
											"<option value='Tanzania, United Republic of'>Tanzania, United Republic of</option>"+ 
											"<option value='Thailand'>Thailand</option>"+ 
											"<option value='Timor-leste'>Timor-leste</option>"+ 
											"<option value='Togo'>Togo</option>"+ 
											"<option value='Tokelau'>Tokelau</option>"+ 
											"<option value='Tonga'>Tonga</option>"+ 
											"<option value='Trinidad and Tobago'>Trinidad and Tobago</option>"+ 
											"<option value='Tunisia'>Tunisia</option>"+ 
											"<option value='Turkey'>Turkey</option>"+ 
											"<option value='Turkmenistan'>Turkmenistan</option>"+ 
											"<option value='Turks and Caicos Islands'>Turks and Caicos Islands</option>"+ 
											"<option value='Tuvalu'>Tuvalu</option>"+ 
											"<option value='Uganda'>Uganda</option>"+ 
											"<option value='Ukraine'>Ukraine</option>"+ 
											"<option value='United Arab Emirates'>United Arab Emirates</option>"+ 
											"<option value='United Kingdom'>United Kingdom</option>"+ 
											"<option value='United States'>United States</option>"+ 
											"<option value='United States Minor Outlying Islands'>United States Minor Outlying Islands</option>"+ 
											"<option value='Uruguay'>Uruguay</option>"+ 
											"<option value='Uzbekistan'>Uzbekistan</option>"+
											"<option value='Vanuatu'>Vanuatu</option>"+ 
											"<option value='Venezuela'>Venezuela</option>"+ 
											"<option value='Viet Nam'>Viet Nam</option>"+ 
											"<option value='Virgin Islands, British'>Virgin Islands, British</option>"+ 
											"<option value='Virgin Islands, U.S.'>Virgin Islands, U.S.</option>"+ 
											"<option value='Wallis and Futuna'>Wallis and Futuna</option>"+ 
											"<option value='Western Sahara'>Western Sahara</option>"+ 
											"<option value='Yemen'>Yemen</option>"+ 
											"<option value='Zambia'>Zambia</option>"+ 
											"<option value='Zimbabwe'>Zimbabwe</option>"+
									"</select>";	          	   	          	
	          	  $('#placeData').replaceWith(countriesElement);
	          	  $('#country').val(country);	          	
	          	  
	          	  
				});
				
			  $('#place').on('blur','#country', function(e) {
			  	    e.preventDefault();			  	    			  		
					var country =$('#country').val();
					var spanElement = "<span id='placeData' class='userContactsFont'>"+country+"</span>";
					$('#country').replaceWith(spanElement);		
					saveUser();  			
				  });
				  
			  //Game Bio	  	
			 $('#gameBioContent').on('click','#userGameBio', function() {	          	  
	          	  var gameBio = $('#userGameBio').text();
	          	  var gameBioElement = "<input type ='text' name='gameBioText' id='gameBioText' value='"+gameBio+"' style='width:400px;' maxlength='90' placeholder='Game Bio(Max 90 chars)'/>";
	          	  console.log(gameBioElement);	          	  	          	 
	          	  $('#userGameBio').replaceWith(gameBioElement);
	          	  $('#userGameBio').focus();
				});						  
				
			  $('#gameBioContent').on('blur','#gameBioText', function(e) {
			  	    e.preventDefault();			  	    			  		
					var gameBio =$('#gameBioText').val();
					$('#gameBioText').keyup(function() {
						gameBio=$('#gameBioText').val();
						});
					if(gameBio.length!= 0)
					{
						var spanElement = "<span id='userGameBio'>"+gameBio+"</span>";
						$('#gameBioText').replaceWith(spanElement);
						saveUser();
					}
					
					  
				  });	  
			
			//Birthday visibility
			 $('#visibility').click(function() {
			 	   if($(this).hasClass('private'))
			 	   {
			 	   	  $(this).removeClass('private');
			 	   	  $(this).addClass('public');   
			 	   	  $(this).text('PUBLIC');
			 	   	  
			 	   }
			 	   else
			 	   {
			 	   	  $(this).removeClass('public');
			 	   	  $(this).addClass('private');
			 	   	  $(this).text('PRIVATE');   	
			 	   }
			 	   saveUser();
				 });	  
				  	  	
			
				  	  	           
	        /*
	         * User Form edit ends
	         */
	         
	         
	         /*
	          * For all followers and Followings begin
	          */	          
	         
			$('.hoverMe').hover(function() {
				$(this).children('div').show();				
			}, function() {
				$(this).children('div').hide();
			});	
			
			/*
	          * For all followers and Followings end
	          */ 						
			 
			 //Platforms and Genres Begins
			 
			 $('#platformsButton').click(function() {
			 	$("#allPlatformSet a").each(function() {
				  	var platformId = $(this).attr('id');
				  	console.log('Platform id'+platformId);
				  	$('#'+platformId).attr('checked',true);				  	
				});
				platformCheckedCount()
				$(this).attr('disabled','disabled');				
				$('#genresButton').attr('disabled','disabled');
				$('#platformList').show();
				$('#platformList').animate({
					width:"400", height:"300"}, 500);
				});						
				
			$('#genresButton').click(function() {
				$("#allGenreSet span").each(function() {
				  	var genreId = $(this).attr('id');
				  	console.log('Genre id'+genreId);
				  	$('#'+genreId).attr('checked',true);				  	
				});
				genreCheckedCount()
				$(this).attr('disabled','disabled');
				$('#platformsButton').attr('disabled','disabled');
				$('#genreList').show();
				$('#genreList').animate({
					width:"400", height:"300"}, 500);
				});	
							
			 
			 function saveInterest(type, interestArray)
			 {
			 	var interestJson={};			 				 	
			 	interestJson['type']=type;
			 	var interestContentText=interestArray+"";
			 	interestJson['content']=interestContentText;
			 	console.log("INTEREST JSON------>",interestJson);
			 	$.post("/user/interest",interestJson,function(data){
			 		console.log(data);
			 		if(data.status != "success")
			 		{
			 			alert("Something went wrong. Please try again!");
			 		}
			 		
			 	},'json');
			 	
			 }
			 
			 function platformCheckedCount()
			 {
			 	var count =$('input.platform:checked').length;
				   console.log('COunt: '+count);
				   if(count>=5)
				   {
				   	$('input.platform').not(':checked').attr('disabled',true);				   	
				   }
				   else
				   {
				   	$('input.platform').not(':checked').attr('disabled',false);
				   }
			 }
			$('input.platform').click(function(event) {
				   platformCheckedCount();
				});
				
			$('#platformSet').click(function() {							
				var platformSet = new Array();	
				var platformsHtml ="";					
				$('input.platform').each(function() {
					 if($(this).is(':checked'))
					 {
					 	platformSet.push($(this).val());
					 	var platformText=$(this)[0].nextSibling.nodeValue;					 						 	
					 	platformsHtml+="<a id='"+$(this).val()+"' href='/platform/"+$(this).val()+"/all' title='"+platformText+"'target='_blank'><span class='"+$(this).val()+" marginLeft10 blackBoxShadow interestUserProfileFontSize'>"+platformText+"</span></a>";					 	
					 }					 				     				     
					});
				console.log("Platform Set: "+platformSet);	
				console.log(platformsHtml);
				$('#platformList').animate({
					width:"0", height:"0"}, 500);				
				$('#platformList').hide();
				$("#platformsButton").removeAttr('disabled');
				$("#genresButton").removeAttr('disabled');			
				$('#allPlatformSet').empty();	
				console.log(platformSet.length);				
				if(platformSet.length!=0)
				{
					$('#noPlatforms').hide();
					$('#allPlatformSet').append(platformsHtml);
					
				}
				else
				{					
					$('#noPlatforms').show();
				}
				saveInterest(1, platformSet);
				return false;
				});
				
			
			function genreCheckedCount()
			{
					var count =$('input.genre:checked').length;
				   console.log('COunt: '+count);
				   if(count>=5)
				   {
				   	$('input.genre').not(':checked').attr('disabled',true);				   	
				   }
				   else
				   {
				   	$('input.genre').not(':checked').attr('disabled',false);
				   }
			}	
			
			$('input.genre').click(function(event) {
				   genreCheckedCount()
				});	
				
			$('#genreSet').click(function() {
				
				var genreSet = new Array();
				var genresHtml ="";		
				$('input.genre').each(function() {
					 if($(this).is(':checked'))
					 {
					 	genreSet.push($(this).val());	
					 	var genreText=$(this)[0].nextSibling.nodeValue;					 						 	
					 	genresHtml+="<span id='"+$(this).val()+"' class='genreStyle marginLeft10 blackBoxShadow interestUserProfileFontSize'>"+genreText+"</span>";				 					 
					 }					 				     				     
					});
				console.log("Genre Set: "+genreSet);	
				$('#genreList').animate({
					width:"0", height:"0"}, 500);				
				$('#genreList').hide();				
				$("#genresButton").removeAttr('disabled');
				$("#platformsButton").removeAttr('disabled');			
				$('#allGenreSet').empty();		
				if(genreSet.length!=0)
				{
					$('#noGenres').hide();
					$('#allGenreSet').append(genresHtml);					
				}
				else
				{
					$('#noGenres').show();
				}				
				
				saveInterest(2, genreSet);
				return false;
				});	
	
	        //Platforms and Genres End
	        
			$('#commentButton').click(function() {
				$('#comments').css("display","block");				
				$('#talks').css("display","none");
			});			
			$('#chatButton').click(function() {
				$('#comments').css("display","none");				
				$('#talks').css("display","block");
			});
		
			$("#tabs-min").tabs();
			
	$('input#updatePass').click(function() {
		 $.post('/user/password/reset',$('#resetPassword').serialize(),function(data){
		 	data =jQuery.parseJSON(data);
		 	console.log(data);
		 	if(data.type == '1')
		 	{
		 		alert('New Password and confirm didnt match');
		 		return false;
		 	}
		 	else
		 	{
		 		console.log(data.type);
		 		if(data.status =='fail')
		 		{
		 			alert("Something went wrong!!!");
		 			return false;
		 		}
		 		else
		 		{
		 			$.modal.close();
		 		}
		 			
		 	}
		 });
		 return false;
		});		
	
	$('#passwordButton').click(function() {		   
		   $("#changePasswordModal").modal({
		   	   onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},
				containerCss:{
					width:400,		
					height:200			
				}
		   });						  
		});
		
	/*User Article creation begins
	 * 
	 */
	
	$('#moreButton span button').click(function() {
		
		});		
		
	$("#createPost").click(function(e) {
		$(".userPost").modal({
	
				onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},						
				containerCss:{				
					width:1024,	
					height:768
				},	
				onShow: function(dlg)
				{					
					iFrameOn();								  
					$('#simplemodal-container a.modalCloseImg').hide();					
						$('#gameSearchBox', dlg.data[0]).autocomplete({
							source:"/game/games",
							minLength:2,
							select:function(event, ui)
							{
								 $('#selectedGame').hide();
								 $('#gameBoxShot img').attr('src',ui.item.gameBoxShot);
								 $('#gameTitle').html(ui.item.gameTitle);
								 $('#gameGenre').html(ui.item.gameGenre);
								 $('#gameId').val(ui.item.gameId);
								 var platformHtml = "";			
								 $.each(ui.item.gamePlatforms, function(index, platform) 
								 {
								   platformHtml+= '<span class="'+platform.platformShortTitle+' marginLeft5">'+platform.platformTitle+'</span>';
								 });												 
								 platformEl=$(platformHtml);
								 $('#gamePlatforms').html(platformEl);
								 $('#selectedGame').fadeIn('slow');
							}
						}).data("ui-autocomplete")._renderItem=function(ul,item){
							if(item.status==undefined)
							{
								var inner_html = '<div style="background-color:#fff;overflow:hidden;height:90px;padding:5px"><a><div class="floatLeft"><img height="80" src="' + 
								item.gameBoxShot + '"></div><div font15">' + 
								item.gameTitle + '</div><div class="font12 colorGray">' + 
								item.gameGenre + '</div><div class="font10 colorWhite fontWeightBold marginTop5">';
								$.each(item.gamePlatforms, function(index, platform) 
								 {
								   inner_html+= '<span class="'+platform.platformShortTitle+' marginLeft5">'+platform.platformTitle+'</span>';
								 });									
								inner_html+='</div></a></div>';
							}
							 
				        return $( "<li></li>" )
				            .data( "item.autocomplete", item )
				            .append(inner_html)
				            .appendTo( ul );
						}
				},		
									
			});
	
			return false;
		});
		
		
	$(".editPost").click(function(e){
		var articleId = $(this).attr('id');
		var userName = $('span#userName a').text();		
		$.get('/article/'+userName+'/'+articleId, function(data){						
						$('#articleId').val(data.articleId);
						$('#articleState').val(data.articleState);
						$('#title').val(data.articleTitle);
						
						$('#subTitle').val(data.articleSubTitle);
												 $('#ariticleFeaturedImageSelector img').attr('src',data.articleFeaturedImage);						
												window.frames['richEditor'].document.body.innerHTML=data.articleBody;
												if(data.articleState === 2)
												{
													$('#publishpost').addClass('disableOpacity');
													$('#publishpost').attr('disabled','disabled');
												}		
												console.log('Category '+data.articleCategory);
												$("input[name=category][value="+data.articleCategory+"]").prop('checked',true);																													
												$.each(data.articlePlatforms, function(index, platform) {
												  console.log(platform.platformShortTitle);	
												   $("input.eplatform[value="+platform.platformShortTitle+"]").prop('checked',true);												  												  					 
												});																								
												if(data.articleGame!="")
												{
													$('#isGame').prop('checked',true);
													$('#gameSearchBox').prop('disabled',false);
													$('#gameSearchBox').val(data.articleGame.title);
													$('#gameBoxShot img').attr('src',data.articleGame.boxshotPath);
													$('#gameId').val(data.articleGame.gameId);
													$('#gameTitle').html(data.articleGame.title);							
													$('#gameGenre').html(data.articleGame.genre);
													var platformHtml = "";			
														 $.each(data.articleGame.gamePlatforms, function(index, platform) 
														 {
														   platformHtml+= '<span class="'+platform.shortTitle+' marginLeft5">'+platform.title+'</span>';
														 });												 
														 platformEl=$(platformHtml);
													 $('#gamePlatforms').html(platformEl);	
													 $('#selectedGame').show();			
													 if(data.articleCategory.toLowerCase() == "review")
													 {
														 $('.knob').trigger('configure',{
															"readOnly":false,										
														});
														
														
														var userScore = parseFloat(data.articleGameUserScore);
														$('.knob').val(userScore*10).trigger('change');
													 }			
												}
												else
												{
													$('#isGame').prop('checked',false);
													$('#gameSearchBox').prop('disabled',true);
													$('#selectedGame').hide();
												}
						
					},'json');	
					
						$(".userPost").modal({
	
				onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
				},						
				containerCss:{				
					width:1024,	
					height:768
				},	
				onShow: function(dlg)
				{					
					iFrameOn();								  
					$('#simplemodal-container a.modalCloseImg').hide();					
						$('#gameSearchBox', dlg.data[0]).autocomplete({
							source:"/game/games",
							minLength:2,
							select:function(event, ui)
							{
								 $('#selectedGame').hide();
								 $('#gameBoxShot img').attr('src',ui.item.gameBoxShot);
								 $('#gameTitle').html(ui.item.gameTitle);
								 $('#gameGenre').html(ui.item.gameGenre);
								 $('#gameId').val(ui.item.gameId);
								 var platformHtml = "";			
								 $.each(ui.item.gamePlatforms, function(index, platform) 
								 {
								   platformHtml+= '<span class="'+platform.platformShortTitle+' marginLeft5">'+platform.platformTitle+'</span>';
								 });												 
								 platformEl=$(platformHtml);
								 $('#gamePlatforms').html(platformEl);
								 $('#selectedGame').fadeIn('slow');
							}
						}).data("ui-autocomplete")._renderItem=function(ul,item){
							if(item.status==undefined)
							{
								var inner_html = '<div style="background-color:#fff;overflow:hidden;height:90px;padding:5px"><a><div class="floatLeft"><img height="80" src="' + 
								item.gameBoxShot + '"></div><div font15">' + 
								item.gameTitle + '</div><div class="font12 colorGray">' + 
								item.gameGenre + '</div><div class="font10 colorWhite fontWeightBold marginTop5">';
								$.each(item.gamePlatforms, function(index, platform) 
								 {
								   inner_html+= '<span class="'+platform.platformShortTitle+' marginLeft5">'+platform.platformTitle+'</span>';
								 });									
								inner_html+='</div></a></div>';
							}
							 
				        return $( "<li></li>" )
				            .data( "item.autocomplete", item )
				            .append(inner_html)
				            .appendTo( ul );
						}
				},		
									
			});

			return false;
	});
	/*User Article creation ends
	 * 
	 */
	
	/**
	 *User Avatar upload Begins
	 *  
	 */
	$('#userAvatarImageUpload').click(function() {
		$('#userAvatarUploadBox').modal({
			onOpen : function(dialog) {
					dialog.overlay.fadeIn('slow', function() {
						dialog.container.slideDown('slow', function() {
							dialog.data.fadeIn('slow');
						});
					});
			},
			containerCss:{
					width:800,
					height:600,
				}
			});
		});
	
	$('#upload').click(function() {		
		var avatarImage = $('#userAvatarFile').get(0).files[0];				
		var userName=$('span#userName a').text(); 		
		if(avatarImage.type.indexOf("image") == 0 && avatarImage.size < 102400)
		{
			 var formdata = new FormData();
			 formdata.append('userAvatarFile',avatarImage);			
		     $.ajax({          
		     	url: "http://localhost:9000/user/saveOrUpdateUserAvatar/"+userName, 		
        		type: "POST",        
        		dataType:'json',  		
        		data: formdata,         		
        		processData: false,  
        		contentType: false,        			
        		success: function (data) {  
            		if(data.status == "success")
            		{
            			$('#userAvatarPic').attr("src",data.avatarPath);
            			$.modal.close();
            		}
            		else
            		{
            			$('#userAvatarErrorMessage').hide();
						$('#userAvatarErrorMessage').text('Something Wrong happened. Please try again!');
						$('#userAvatarErrorMessage').fadeIn("Slow");
            		}
        		}  
    		}); 
    		$('#userAvatarErrorMessage').hide();
    	}	
    	else
			{
				$('#userAvatarErrorMessage').hide();
				$('#userAvatarErrorMessage').text('Please Select Image of size upto 100kb');
				$('#userAvatarErrorMessage').fadeIn("Slow");
			}		
			return false;		
		});		
	
	/**
	 *User Avatar upload Ends
	 *  
	 */
	
	$('#userAvatarFile').change(function() {
	    	showImage();
			});
				
	function showImage()
		{
			var file=$('#userAvatarFile').get(0).files[0];
			if(file.type.indexOf("image") == 0 && file.size < 102400)
			{
				var reader = new FileReader();
				reader.onload= function(event) {
	    			var img = event.target.result;
	    			$('img#selectedUserAvatar').show();    			
	    			$('img#selectedUserAvatar').attr('src', img);
	    			$('img#selectedUserAvatar').attr('width', "200");
	    			$('img#selectedUserAvatar').attr('height', "200");
				};		
				reader.readAsDataURL(file);				
				$('#userAvatarErrorMessage').hide();
			}	
			else
			{
				$('#userAvatarErrorMessage').hide();
				$('#userAvatarErrorMessage').text('Please Select Image of size upto 100kb');
				$('#userAvatarErrorMessage').fadeIn("Slow");
			}		
			
		}	
	/*User stats begin
	 */					
			var userFollowers =parseFloat($('#userFollowers').val());
			var userFollowing =parseFloat($('#userFollowing').val());			
			var userAwards =parseFloat($('#userAwards').val());			
			var userPublishedPosts =parseFloat($('#userPublishedPosts').val());
			var userTotalCoolScore = parseFloat($('#userTotalCoolScore').val());
			
			var totalPublishedPosts =parseFloat($('#totalPublishedPosts').val());
			if(totalPublishedPosts == 0)
			{
				totalPublishedPosts=1;
			}			
			var totalAwards =parseFloat($('#totalAwards').val());
			if(totalAwards == 0)
			{
				totalAwards=1;
			}	
			var totalUsers=parseFloat($('#totalUsers').val());
			if(totalUsers == 0)
			{
				totalUsers=1;
			}	
			var networkTotalCoolScore = parseFloat($('#userNetworkTotalCoolScore').val());
			if(networkTotalCoolScore == 0)
			{
				networkTotalCoolScore=1;
			}	
			
		 	var followersInfo=[{label:"Followers", data:userFollowers, color:"#FF4500"},
							{label:"Total", data:totalUsers, color:"#EAEAEA"}];
	
				$.plot($("#followerdonut"), followersInfo,
			    {
			        series: {
			            pie: {
			                innerRadius: 0.7,
			                show: true,
			                label: { show: false }
			            }
			        },
			        legend: { show: false }
			    });
    
    
    			$("#followerdonutData").text((followersInfo[0].data/followersInfo[1].data*100).toFixed(1)+"%");
    
    
    
		    var followingInfo=[{label:"Following", data:userFollowing, color:"#FF4500"},
		        {label:"Total", data:totalUsers, color:"#EAEAEA"}];
		                        
		        $.plot($("#followingdonut"), followingInfo,
		        {
		            series: {
		                pie: {
		                    innerRadius: 0.7,
		                    show: true,
		                    label: { show: false }
		                }
		            },
		            legend: { show: false }
		        });
		        
		        $("#followingdonutData").text((followingInfo[0].data/followingInfo[1].data*100).toFixed(1)+"%");
    
    
			var publishedInfo=[{label:"Published", data:userPublishedPosts, color:"#FF4500"},
			{label:"Total", data:totalPublishedPosts, color:"#EAEAEA"}];
				
				$.plot($("#publisherdonut"), publishedInfo,
			    {
			        series: {
			            pie: {
			                innerRadius: 0.7,
			                show: true,
			                label: { show: false }
			            }
			        },
			        legend: { show: false }
			    });
			    
			    $("#publishdonutData").text((publishedInfo[0].data/publishedInfo[1].data*100).toFixed(1)+"%");
			    
			 var awardsInfo=[{label:"Awards", data:userAwards, color:"#FF4500"},
				{label:"Total", data:totalAwards, color:"#EAEAEA"}];
				
				$.plot($("#awardsdonut"), awardsInfo,
			    {
			        series: {
			            pie: {
			                innerRadius: 0.7,
			                show: true,
			                label: { show: false }
			            }
			        },
			        legend: { show: false }
			    });
			    
			    $("#awardsdonutData").text((awardsInfo[0].data/awardsInfo[1].data*100).toFixed(1)+"%");
			    
			    var coolInfo=[{label:"Cool", data:userTotalCoolScore, color:"#FF4500"},
				{label:"Total", data:networkTotalCoolScore, color:"#EAEAEA"}];
				
				$.plot($("#cooldonut"), coolInfo,
			    {
			        series: {
			            pie: {
			                innerRadius: 0.7,
			                show: true,
			                label: { show: false }
			            }
			        },
			        legend: { show: false }
			    });
			    
			    $("#cooldonutData").text((coolInfo[0].data/coolInfo[1].data*100).toFixed(1)+"%");
			    
			    
		 /*User stats end
	 		*/
		 

	
	
    
    
});
