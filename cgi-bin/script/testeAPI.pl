#!/usr/bin/perl
#
use strict;
#
use CGI;
#
my $cgi = CGI->new;
#
my $first = $cgi->param("first");
#
my $last = $cgi->param("last");
#
print $cgi->header(-type => "text/html", -charset => "utf-8");
#
print '<html>';
#
print '<head>';
#
print '<title>Welcome</title>';
#
print '</head>';
#
print '<body>';
#
print '<h2>Welcome '.$first.' '.$last.'!</h2>';
#
print '</body>';
#
print '</html>';
#
#


