clc         % clear command window

doc moveavg % open docs
help plot   % show help

x = 1:10;
y = 11:20;
y(7) % 7
y(7) = 77
y(7) % 77
y(1:4) = [11 12 13 14]
y(4) % 14

% create section in livescript
%% section_name enter

% plot multiple things
plot(1:10)
hold on
plot(11:20)
hold off

x = -3:0.1:3;
y1 = sin(x);
y2 = cos(x);
y3= tan(x);
y4=1./cos(x);
figure
subplot(2,2,1)
plot(x,y1)
title('Subplot 1')
subplot(2,2,2)
plot(x,y2)
title('Subplot 2')
subplot(2,2,3)
plot(x,y3)
title('Subplot 3')
subplot(2,2,4)
plot(x,y4)
title('Subplot 4')

x=rand(2,10);
scatter(x(1,:),x(2,:),'r');
hold on
x=rand(2,10);
scatter(x(1,:),x(2,:),'g');
hold on
x=rand(2,10);
scatter(x(1,:),x(2,:),'b');
hold on
x=rand(2,10);
scatter(x(1,:),x(2,:),'c');