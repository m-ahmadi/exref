line(1:10,1:2:20)

x = 0:4;
y = x.*2;
plot(x,y);
line([3;3],[0;6],'linestyle','--');
line([0;3],[6;6],'linestyle','--');

line([2;2],[0;6],'linestyle','--','Color','red')

% colors
'red|green|blue|cyan|magenta|yellow|black|white'