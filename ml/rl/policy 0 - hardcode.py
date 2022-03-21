# hardcoded simple policy
# accelerate left  when pole is leaning left
# accelerate right ...                  right

import numpy as np
import gym

env = gym.make('CartPole-v1')
env.reset()

def basic_policy(obs):
	angle = obs[2]
	return 0 if angle < 0 else 1

totals = []
for episode in range(500):
	episode_rewards = 0
	obs = env.reset()
	
	for step in range(200):
		action = basic_policy(obs)
		obs, reward, done, info = env.step(action)
		episode_rewards += reward
		if done:
			break
	
	totals.append(episode_rewards)


print(
	np.mean(totals), np.std(totals), np.min(totals), np.max(totals) # (41.718, 8.858356280936096, 24.0, 68.0)
)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# visualize using `pygame`
import gym
import numpy as np


np.random.seed(42)

env = gym.make('CartPole-v1')
env.reset(seed=42)

def basic_policy(obs):
	angle = obs[2]
	return 0 if angle < 0 else 1

for step in range(200):
	obs = env.reset()
	env.render()
	action = basic_policy(obs)
	
	obs, reward, done, info = env.step(action)
	if done:
		break

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# visualize using `matplotlib`
import gym
import numpy as np

import matplotlib as mpl
import matplotlib.pyplot as plt
import matplotlib.animation as animation

np.random.seed(42)

env = gym.make('CartPole-v1')
env.reset(seed=42)

frames = []

def basic_policy(obs):
	angle = obs[2]
	return 0 if angle < 0 else 1

for step in range(200):
	obs = env.reset()
	img = env.render(mode='rgb_array')
	frames.append(img)
	action = basic_policy(obs)
	
	obs, reward, done, info = env.step(action)
	if done:
		break

def animate(num, frames, patch):
	patch.set_data(frames[num])
	return patch,


fig = plt.figure()
patch = plt.imshow(frames[0])
plt.axis('off')
anim = animation.FuncAnimation(fig, animate, fargs=(frames, patch), frames=len(frames), repeat=False, interval=40)
plt.show()
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@