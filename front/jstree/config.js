$.jstree.defaults.core.themes.variant = 'large';

$('#jstree').jstree({
  core : {
		multiple: false,
    animation: 0,
		check_callback: false,
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