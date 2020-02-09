$.jstree.defaults.core.themes.variant = 'large';

$('#el').jstree({
  core : {
		multiple: false,
    animation: 0,
		check_callback: false, // if false then can't rename_node()
    themes: {
      variant: 'large',
			icons: false,
			stripes: true,
			...
    }
  },
  checkbox : {
    'keep_selected_style': false
  },
  plugins: ['wholerow', 'checkbox'],
	types: {}
});