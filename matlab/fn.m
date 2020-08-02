% functions must be in .m files
function [outputArg1,outputArg2] = untitled3(inputArg1,inputArg2)
	outputArg1 = inputArg1;
	outputArg2 = inputArg2;
end


function avg = average(x)
	avg = sum(x(:)) / numel(x); 
end

function percDiff = percDiff(from,to)
	percDiff = ((to - from) / from) * 100;
end

average(1:5)     % 3
percDiff(100,20) % -80