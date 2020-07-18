myarr(row,col)
a(3,:) % colon without range means all elements

% position indexing


% linear indexing
a = [1 2 3 4]
a(1)           % 1
a(4)           % 4
a(2) = 77      % [1 77 3 4]
a(3:4) = [6 7] % [1 77 6 7]
a(end)         % last     item
a(end-1)       % 2nd last item
a(3:end)       % from 3rd to last: [3 4]

% logical indexing (predicate)
a = 1:9
a(a > 6)         % [7 8 9]
a(a >= 6)        % [6 7 8 9]
a(a > 3 & a < 6) % [4 5]