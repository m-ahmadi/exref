import gym # pip install -U gym pygame
# https://gym.openai.com/docs/

env = gym.make('CartPole-v1')

env.action_space  # Discrete(2)

obs = env.reset() # [-0.01258566, -0.00156614, 0.04207708, -0.00180545]

env.render()
img = env.render(mode='rgb_array')
img.shape         # (800, 1200, 3) - height, width, channels (3 = Red, Green, Blue)

action = 1        # accelerate right
obs, reward, done, info = env.step(action)

obs     # [-0.01261699, 0.19292789, 0.04204097, -0.28092127]
reward # 1.0
done   # False
info   #{}


# basic example
env = gym.make('CartPole-v1')
observation = env.reset()
for _ in range(1000):
	env.render()
	action = env.action_space.sample() # your agent here (this takes random actions)
	observation, reward, done, info = env.step(action)

	if done:
		observation = env.reset()
env.close()