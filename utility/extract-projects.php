#!/usr/bin/php
<?php

# This file is a script for extracting data from html for migration to AJAX-based data service
# It is not for live deployment.

$fout = fopen('projects.data', "w");
$fin = fopen('index.html', "r");

$project = array();

function	out_project($project)
{
	global $fout;
	print_r($project);
	fprintf($fout, "%-20s%s\n", "[TITLE]", $project['title']);
	fprintf($fout, "%-20s%s\n", "[SHORT DESC]", $project['short-desc']);
	fprintf($fout, "%-20s%s\n", "[DESCRIPTION]", $project['description']);
	if (isset($project['gallery']))
	{
		foreach ($project['gallery'] as $k => $url)
		{
			fprintf($fout, "%-20s%s\n", "[GALLERY]", $project['gallery'][$k]);
		}
	}
	fprintf($fout, "%-20s%s\n", "[TAGS]", $project['tags']);
	if (isset($project['link']))
		fprintf($fout, "%-20s%s\n", "[LINK]", $project['link']);
	fprintf($fout, "%-20s%s\n", "[DATE]", $project['date']);
	fprintf($fout, "\n");
}

while (1)
{
	$line = fgets($fin);
	if ($line === false)
		break ;
	else if (($ret = preg_match("/<div class=\"project-title\">(.*)<\/div>/", $line, $matches)))
	{
		if (count($project) > 0)
		{
			out_project($project);
			$project = array();
		}
		$project['short-desc'] = $matches[1];
	}
	else if (($ret = preg_match("/<div.*?class=\"project-name\".*?>(.*)<\/div>/", $line, $matches)))
		$project['title'] = $matches[1];
	else if (($ret = preg_match("/<div.*?class=\"project-description.*?>(.*)/", $line, $matches)))
	{
		$matches[1] = preg_replace('/<\/div>/', '', $matches[1]);
		$project['description'] = $matches[1];
	}
	else if (($ret = preg_match("/<div.*?id=\"project-tags\".*?>(.*)<\/div>/", $line, $matches)))
	{
		$matches[1] = preg_replace('/<span class=\"proj-tagsel\">(.*?)<\/span>/', '${1}', $matches[1]);
		$project['tags'] = $matches[1];
	}
	else if (($ret = preg_match("/<div .*?class=\"project-url\".*?>(.*)<\/div>/", $line, $matches)))
	{
		//TODO: get link only if available
		$project['link'] = $matches[1];
	}
	else if (($ret = preg_match("/<div .*?class=\"project-date\".*?>(.*)<\/div>/", $line, $matches)))
		$project['date'] = $matches[1];
	else if (($ret = preg_match("/<img.*?class=\"gallery\".*?src=\"(.*?)\">/", $line, $matches)))
	{
		$project['gallery'][] = $matches[1];
	}

}

fclose($fin);
fclose($fout);

?>
