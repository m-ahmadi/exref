// string or template literal
Vue.component('my-checkbox', {
	template: `
		<div class="checkbox-wrapper" @click="check">
			<div :class="{ checkbox: true, checked: checked }"></div>
			<div class="title">{{ title }}</div>
		</div>`,
	data() {
		return {
			checked: false,
			title: 'Check me'
		}
	},
	methods: {
		check() {
			this.checked = !this.checked;
		}
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// templates in <script> tags
Vue.component('my-checkbox', {
	template: '#checkbox-template',
	data() {
		return {
			checked: false,
			title: 'Check me'
		}
	},
	methods: {
		check() {
			this.checked = !this.checked;
		}
	}
});
/*
<script type="text/x-template" id="checkbox-template">
	<div class="checkbox-wrapper" @click="check">
		<div :class="{ checkbox: true, checked: checked }"></div>
		<div class="title"></div>
	</div>
</script>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// inline template (didn't work, hmmmm don't know why.)
Vue.component('my-checkbox', {
	data() {
		return {
			checked: false,
			title: 'Check me'
		}
	},
	methods: {
		check() {
			this.checked = !this.checked;
		}
	}
});
/*
<my-checkbox inline-template>
	<div class="checkbox-wrapper" @click="check">
		<div :class="{ checkbox: true, checked: checked }"></div>
		<div class="title"></div>
	</div>
</my-checkbox>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// render function
Vue.component('my-checkbox', {
	data() {
		return {
			checked: false,
			title: 'Check me'
		}
	},
	methods: {
		check() {
			this.checked = !this.checked;
		}
	},
	render(createElement) {
		return createElement(
			'div', {
				attrs: {
					'class': 'checkbox-wrapper'
				},
				on: {
					click: this.check
				}
			}, [
				createElement(
					'div', {
						'class': {
							checkbox: true,
							checked: this.checked
						}
					}
				),
				createElement(
					'div', {
						attrs: {
							'class': 'title'
						}
					}, [this.title]
				)
			]
		);
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// jsx
Vue.component('my-checkbox', {
	data() {
		return {
			checked: false,
			title: 'Check me'
		}
	},
	methods: {
		check() {
			this.checked = !this.checked;
		}
	},
	render() {
		return (
			<div class="checkbox-wrapper" onClick={ this.check }>
				<div class={{ checkbox: true, checked: this.checked }}></div>
				<div class="title">{ this.title }</div>
			</div>
		);
	}
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@