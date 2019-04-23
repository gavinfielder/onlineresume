// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   resume.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gfielder <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/04/14 14:56:01 by gfielder          #+#    #+#             //
//   Updated: 2019/04/22 20:20:11 by gfielder         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

//Requires jquery

var		company_name;
var		job_title;

$(document).ready(function()
{
	$("#coverletter-date").html( moment().format('MMMM D, YYYY') );

	$("#coverletter-company-input").change(function() {
		company_name = $(this).val();
		$("span.companyname").html(company_name);
	});

	$("#coverletter-jobtitle-input").change(function() {
		job_title = $(this).val();
		$("span.jobtitle").html(job_title);
	});

});

function OnParagraphHideClick(eventObject)
{
	pgf  = $(eventObject.target.parentElement.parentElement);
	pgf.css('display', 'none');
}
