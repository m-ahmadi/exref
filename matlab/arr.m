%{
	all variables are multidimensional arrays (matrices) by default
	matlab operates on whole matrices and arrays (while other langs mostly work with numbers one at a time)
	matlab stands for "matrix laboratory"
%}
a = 7
a = 'hello'
a = string('hello')

% array creation
a = [1 2 3 4]
a = [1,2,3,4]
a = [1 2 3; 4 5 6; 7 8 9] % row vectors
zeros(2,3)                % array of all zeros
ones(2,3)                 % array of all ones

% num sequence (default increment is 1)
1:5       %                          [1 2 3 4]
-1.5:1.5  %                          [-1.5 -0.5 0.5 1.5]
0:2:8     % increment by 2:          [0 2 4 6 8]
4:-1:0    % decrement:               [4 3 2 1]
1:0.3:2.1 % increment by noninteger: [1 1.3 1.6 1.9] (sequence ends at last value that's <= max)

% process all values in matrix using single operator/function
a = [1 2 3 4]
a = a + 10 % [11 12 13 14]

a = [1 2 3; 4 5 6]
a = a * 2
%{
	2  4  6
	8 10 12
%}

% concat
a = [1 2]
b = [3 4]
c = [a b]    % [1 2 3 4]
c = [a;b]    % [1 2; 3 4]
horzcat(a,b) % [1 2 3 4]

% expand matrix
a = [1 2 3; 4 5 6]
a(3,4) = 1              % insert el outside current row/col index: [1 2 3 0; 4 5 6 0; 0 0 0 1]
a(3:4,4:5) = [2 3; 4 5] % insert matrix outside current range:     [ 1,2,3,0,0; 4,5,6,0,0; 0,0,0,2,3; 0,0,0,4,5 ]

% transpose matrix
a'
