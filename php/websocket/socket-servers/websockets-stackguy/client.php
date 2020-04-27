<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript">
$(document).ready(function() 
{
	$('#chatLog, input, button, #examples').hide();
	if(!("WebSocket" in window)){	
		$('<p>Oh no, you need a browser that supports WebSockets. How about <a href="http://www.google.com/chrome">Google Chrome</a>?</p>').appendTo('#container');		
	}
	else
	{
		//The user has WebSockets
		
	
		var socket;
		var host = "ws://109.255.177.28:8080";
		var reconnect=true;
		var ping;
		var pingInt;
	
		function wsconnect()
		{
			try{
				socket = new WebSocket(host);
				socket.onopen = function(){
					status('<p class="event">Socket Status: '+socket.readyState+' (open)');
					socket.send('login: '+name);
					pingInt = setInterval(ping, 1000);
				}
				
				socket.onerror = function(error){
					status('<p class="event">Socket Status: '+socket.readyState+' ('+error+')');	
				}
				
				//receive message
				socket.onmessage = function(msg){
					var data = JSON.parse(msg.data);
					if(data.message!=undefined)
					{
						message('<p class="message">'+data.message+'</p>');
					}
					if(data.ping!=undefined)
					{
						var time = new Date().getTime();
						time = time - ping;
						$('#ping').html('Ping: '+time+'ms');
					}
					if(data.users!=undefined)
					{
						var str = "";
						var i;
						for(i in data.users)
						{
							str += data.users[i]+'<br />';
						}
						$('#users').html('<h2>Users loged in:</h2>'+str);
					}
				}
				
				socket.onclose = function(e){
					clearInterval(pingInt);
					if(reconnect){
						wsconnect();
					}
					status('<p class="event">Socket Status: '+socket.readyState+' (Closed)');
				}			
					
			} catch(exception){
				message('<p>Error'+exception);
			}
		}
				
			function ping()
			{
				if(reconnect)
				{
					ping = new Date().getTime();
					socket.send('ping');
				}
			}
				
			function send()
			{
				var text = $('#text').val();
				if(text==""){
					alert('Please enter a message');
					return ;	
				}
				try{
					socket.send(text);
					message('<p class="event">'+name+': '+text)
				} catch(exception){
					message('<p class="warning">');
				}
				$('#text').val("");
			}
			
			function message(msg)
			{
				$('#chatLog').append(msg);
				$('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
			}
			
			function status(msg)
			{
				$('#status').html(msg+'</p>');
			}
			
			$('#text').keypress(function(event) 
			{
				if (event.keyCode == '13') {
					send();
				}
			});	
			
			$('#disconnect').click(function()
			{
				reconnect=false;
				socket.close();
			});

		var name='';
		while(name=='')
			name = prompt("Your name:");
		if(name!=null)
		{
			$('#chatLog, input, button, #examples').fadeIn("fast");
		
			wsconnect();
		}
	}
	//End connect()
	
});
</script>
<meta charset=utf-8 />
<style type="text/css">
body{font-family:Arial, Helvetica, sans-serif;}
#container{
	border:5px solid grey;
	width:670px;
	margin:0 auto;
	padding:10px;
	float:left;
}
#users {
	float:right;
	width:220px;
	border: 2px solid grey;
	padding: 2px 0 2px 4px;
}
#chatLog{
	padding:5px;
	border:1px solid black;	
	height: 400px;
	overflow: auto;
}
#chatLog p{margin:0;}
.event{color:#999;}
.warning{
	font-weight:bold;
	color:#CCC;
}
</style>
<title>WebSockets Client</title>

</head>
<body>
  <div id="wrapper">
  
	  <div id="container">
	
		<h1>WebSockets Client</h1>
		<button id="disconnect">Disconnect</button>
		<span id="status"></span>
		<span id="ping"></span>
		<div id="chatLog">
		
		</div>
		<br />
		<input id="text" type="text" placeholder="type in message"/>

	</div>
	<div id="users">
	
	</div>
  
  </div>
</body>
</html>​