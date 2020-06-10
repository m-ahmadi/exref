const options = {
	state:     {} | ()=>{},
	mutations: { '': (state, ?payload)=>, ... },
	actions:   { '': (state, ?payload)=>, ... },
	getters:   { '': (state, getters)=>, ...},
	modules:   { '': subStore, ...},
	plugins:   [fn, ...],
	strict:    false,
	devtools:  false,
};

const store = new Vuex.Store(options);

// instance props
store.state   {}
store.getters {}

// instance methods
store.commit(type='', ?payload, ?options={})
store.commit(mutation={}, ?options={})
store.dispatch()
store.replaceState()
store.watch()
store.subscribe()
store.subscribeAction()
store.registerModule()
store.unregisterModule()
store.hasModule()
store.hotUpdate()

// component binding helpers
Vuex.mapState()
Vuex.mapGetters()
Vuex.mapActions()
Vuex.mapMutations()
Vuex.createNamespacedHelpers()