$('#el').jstree({
  json_data: { data },
  themes: {
    theme: 'apple',
  },
	/* types: {
		default: {
			icon: {
				image:"http://static.jstree.com/v.1.0rc/_docs/_drive.png"
			}
		}
	}, */
  types: {
    valid_children: ['folder'],
    types: {
      folder: {
        valid_children: ['file'],
        icon: { 'image': '/home/akshar/rajesh1.jpg' },
        max_depth: 1
      },

      file: {
        valid_children: ['none'],
        icon: { 'image': '/path/to/images/file.png' }
      }
    }
  },
  plugins: ['themes', 'json_data', 'ui', 'types']
})

var data = [ // (place 1st when testing)
  {
    "data": "Search engines",
    "children": [
      {
        "data": "Yahoo",
        "metadata": { "href": "http://www.yahoo.com" }
      },
      {
        "data": "Bing",
        "metadata": { "href": "http://www.bing.com" }
      },
      {
        "data": "Google",
        "children": [
          {
            "data": "Youtube",
            "metadata": { "href": "http://youtube.com" }
          },
          {
            "data": "Gmail",
            "metadata": { "href": "http://www.gmail.com" }
          },
          {
            "data": "Orkut",
            "metadata": { "href": "http://www.orkut.com" }
          }
        ],
        "metadata": {
          "href": "http://youtube.com"
        }
      }
    ],
    "state": "open"
  },
  {
    "data": "Networking sites",
    "children": [
      {
        "data": "Facebook",
        "metadata": {
          "href": "http://www.fb.com"
        }
      },
      {
        "data": "Twitter",
        "metadata": {
          "href": "http://twitter.com"
        }
      }
    ]
  }
];
// ?
.bind('select_node.jstree', function (e, data) {
	if (jQuery.data(data.rslt.obj[0], 'href')) {
		window.location = jQuery.data(data.rslt.obj[0], 'href');
	} else {
		alert('No href defined for this element');
	}
});