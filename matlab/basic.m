clc          % clear command window
cla          % clear plot axes
clf          % clear current figure window
doc moveavg  % open docs
f1           % popup function help
shift + f1   % function browser
disp(i)      % console.log()
help plot    % show inline help

ctrl + enter % execute section
f9           % execute selected text

clear a     % clear variable
clear all   % clear all variables
close all   % close all windows?
whos        % show info about variables


% with or without semicolon
a = 1  % run & display
b = 2; % run
c = a + b

% unassigned cmd result goes into `ans` variable
12 + 4
sin(36)

% show windows
filebrowser
workspace
commandwindow

% save/load variables
save('myvars.mat')
load('myvars.mat')

% disable commandhistory popup: Home -> Layout -> Command History -> Closed

%{
	multiline comment
%}

class(x) % type of variable