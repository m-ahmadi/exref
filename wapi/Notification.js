// only available in https
var notification = new Notification(title='', options={
	dir:                'auto|ltr|rt',
	lang:               '',
	badge:              '', // image url
	body:               '',
	tag:                '',
	icon:               '', // icon url
	image:              '', // image url
	data:               undefined,
	vibrate:            [0,...],
	renotify:           false,
	requireInteraction: false,
	actions:            [NotificationAction, ...],
	silent:             false,
});
// read only
notification.actions
notification.badge
notification.body
notification.data
notification.dir
notification.lang
notification.tag
notification.icon
notification.image
notification.renotify
notification.requireInteraction
notification.silent
notification.timestamp
notification.title
notification.vibrate
// event handler
'click|close|error|show'
notification.onclick
notification.onclose
notification.onerror
notification.onshow
// method
notification.close()

// static
Notification.permission 'default|granted|denied'
Notification.maxActions
Notification.requestPermission()


NotificationAction
NotificationAction.action
NotificationAction.title
NotificationAction.icon 
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example

var perm;
if (Notification.permission !== 'granted') perm = await Notification.requestPermission();

if (perm === 'granted') {
	var notification = new Notification('hi');
	var notification = new Notification('hi', {body:'hello', icon:'icon-128.png'});
}