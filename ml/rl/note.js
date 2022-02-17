agent = new Agent()
env = new Environment()

for t of time
	actions = agent.determine_actions(t)
	{new_reward, new_env_state} = env.perform(actions)
	agent.set_new(t, new_reward, new_env_state)


class Agent {
	possible_actions = []
	states           = []
	rewards          = []
	
	set_new(t, reward, state) {
		rewards[t].push(reward)
		states[t].push(state)
	}

	state(t) {
		return states[t]
	}
	action(t) {
		return reward(t)
	}
	reward(t) {
		return rewards[t]
	}
	
	
	q(t) {
		expected_total_future_reward = total_reward()
		which_action_to_perform = policy( state(t) )
		return which_action_to_perform
	}
	
	policy(state) {
		possible_rewards = for t in range(t, t+future) return action(state.t)
		action_with_max_reward = max(possible_rewards)
		return possible_actions[action_with_max_reward]
	}
	
	total_reward(t) {
		rewards = for t in range(t, t+future) return action(t)
		discounted = discount(rewards, factor=0 to 1)
		return sum(discounted)
	}
	
	
	
}