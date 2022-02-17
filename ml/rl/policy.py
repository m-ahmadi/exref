# hardcoded simple policy
# accelerate left  when the pole is leaning toward the left
# accelerate right ...                                 right


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