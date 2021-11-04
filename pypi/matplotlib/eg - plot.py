import matplotlib.pyplot as plt
import numpy as np

# serie
plt.plot([1,2,3],[5,6,7])
plt.xlabel('x - axis') 
plt.ylabel('y - axis') 
plt.title('My first graph!')
plt.show()

# legend
plt.plot([1,2,3],[5,6,7], label='foo')
plt.plot([1,2,3],[6,7,8], label='bar')
plt.legend()
plt.show()

# multi series
_, (p1, p2, p3, p4) = plt.subplots(4, constrained_layout=True)

t = np.arange(25)
p1.plot(t,t,'r--', t,t**2,'bs', t,t**2.2,'g^')

a = np.round(np.random.uniform(1,10,20))
b = np.where(a%2==0, a, None)
c = np.where(a%2==0, None, a)
x = range(len(a))
p2.plot(x, a,'b', b,'go', c,'ro')

a = np.round(np.random.uniform(1,10,20))
b = np.where(a%2==0, a+.3, None)
c = np.where(a%2==0, None, a-.3)
x = range(len(a))
p3.plot(x, a,'b', b,'rv', c,'g^')

y1 = [1, 3, 3, None, None, 5, 8, 9]
y2 = [2, None, 5, None, 4, None, 3, 2]
x = range(len(y1))
p4.plot(x, y1, '-go')
p4.plot(x, y2, '-ro')

plt.show()

# scatter
plt.scatter(x=[1,2,3], y=[2,3,2], s=[7e4,3e4,1e4], c=['red','green','blue'], alpha=0.5)
plt.show()

# multiple figures
x1 = [1,2,3]
y1 = [4,5,6]
x2 = [1,3,5]
y2 = [6,5,4]
plot1 = plt.figure(1)
plt.plot(x1, y1)
plot2 = plt.figure(2)
plt.plot(x2, y2)
plt.show()

# multiple figures - interactive
from matplotlib import interactive
plt.figure(1)
x1 = [1,2,3]
y1 = [4,5,6]
plt.plot(x1, y1)
interactive(True)
plt.show()
plt.figure(2)
x2 = [1,3,5]
y2 = [6,5,4]
plt.plot(x2, y2)
plt.show()
interactive(False)
plt.show()

# figure size
plt.figure(figsize=(10,5), tight_layout=True)
plt.plot([1,2],[3,4])
plt.show()

fig = plt.figure()
fig.set_size_inches(10,5)
plt.plot([1,2],[3,4])
plt.show()

fig = plt.figure()
fig.set_figheight(10)
fig.set_figwidth(5)
plt.plot([1,2],[3,4])
plt.show()

plt.rcParams['figure.figsize'] = (5,8)
plt.rcParams['figure.autolayout'] = True
plt.plot([1,2],[3,4])
plt.show()

plt.plot([1,2],[3,4])
mng = plt.get_current_fig_manager()
mng.resize(*mng.window.maxsize())
plt.show()

# time series
plt.plot(['2021-10-01','2021-10-02','2021-10-03'], [1,2,3])
plt.show()

fig = plt.figure()
x = [date(2021,10,1) - timedelta(days=i) for i in range(1,3001)]
y = np.random.uniform(0,1,3000)
plt.plot(x, y)
fig.autofmt_xdate() # fig.xaxis.set_major_formatter(lambda x, pos=None: '')
plt.show()