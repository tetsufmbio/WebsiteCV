#!/usr/bin/perl

use strict;

use CGI;

use JSON;

my $cgi = CGI->new;

my $first = $cgi->param("first");

my $last = $cgi->param("last");

my %hash = ("first" => $first, "last"=>$last);

print $cgi->header(-type => "application/json", -charset => "utf-8", -access_control_allow_origin => '*');

print to_json \%hash;



