// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   resume.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gfielder <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/04/14 14:56:01 by gfielder          #+#    #+#             //
//   Updated: 2019/04/14 21:57:32 by gfielder         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

//Requires jquery


$(document).ready(function()
{
	//Set up event listeners
	$('.project').click(ExpandableClick);
	$('.expandable-section-header').click(ExpandableClick);
	$('.expandable-section-clicktoexpand').click(ExpandableClick);
	$('.tagsel').not('#tagsel-all').click(OnTagSelect);
	$('#tagsel-all').click(ShowAllProjects);
	//Open the Projects Section by default.
	var proj = $('#projects-section');
	proj.children("#hidden-inline").html("Click to collapse...");
	proj.children("#expanded").css('display', 'block');
});

function ExpandableClick(eventObject)
{
	var expanded = $(eventObject.target).children("#expanded");
	var hidden = $(eventObject.target).children("#hidden");
	var hiddeninline = $(eventObject.target).children("#hidden-inline");
	var tags = $(eventObject.target).children("#project-tags");

	if (expanded.length == 0)
	{
		//Clicked an inner element
		expanded = $(eventObject.target.parentElement).children("#expanded");
		hidden = $(eventObject.target.parentElement).children("#hidden");
		hiddeninline = $(eventObject.target.parentElement).children("#hidden-inline");
		tags = $(eventObject.target.parentElement).children("#project-tags");
	}
	if (expanded.css('display') == "none")
	{
		/*Is hidden, expand*/
		expanded.css('display', 'block');
		hidden.css('display', 'none');
		hiddeninline.html("Click to collapse...");
		tags.css('display', 'block');
	}
	else
	{
		/*Is expanded, hide*/
		expanded.css('display', 'none');
		hidden.css('display', 'block');
		hiddeninline.html("Click to expand...");
		tags.css('display', 'none');
	}
}	

function ShowAllProjects()
{
	var projs = $(".project");
	projs.each(function(index, element) {
		$(element).css('display', 'block');
	});
}

function OnTagSelect(eventObject)
{
	ShowProjectsWithTag($(eventObject.target).html());
}

function ShowProjectsWithTag(tag)
{
	var projs = $(".project");
	var tags;
	projs.each(function(index, element) {
		tags=$(element).children("#project-tags").html();
		if (tags.includes(tag))
			$(element).css('display', 'block');
		else
			$(element).css('display', 'none');
	});
}
