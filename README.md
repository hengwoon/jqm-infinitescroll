jqm-infinitescroll
==================

Basic infinite scroll plugin for jQuery Mobile. New 'pages' loaded via ajax are then appended to the current jQuery Mobile page instead of replacing the entire page.


Usage: 
------
create a div with data-role="infinitescroll" at the bottom of the page with the following data attributes:

- **data-url**: the url to fetch the next 'page'
- **data-response-role**: the data-role of the page that contains the new results
- **data-loading-text**: the loading text that displays when the ajax call is being made.
- **data-params**: params (http querystring, or json array) that gets passed to the ajax call
- **data-type**: 'get' or 'post' - method type for ajax call
- **data-threshold**: percent of page height the user must scroll to in order to perform ajax call. defaults to 0.99


The new response should contain another <div data-role="infinitescroll" .....></div> if there are to be more pages to be scrolled.

Example:
```
<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" >
		<title>Simple infinitescroll demo</title>
		<link rel="stylesheet" href="../../compiled/jquery.mobile.css" />
		<link rel="stylesheet"  href="jquery.mobile.infinitescroll.css" />
		<script src="../../js/jquery.js"></script>
		<script type="text/javascript" src="../../compiled/jquery.mobile.js"></script>
		<script src="jquery.mobile.infinitescroll.js"></script>
	</head>
	<body>
		<div data-role="page" id="home">
			<div data-role="header">
				<h1>Infinitescroll demo</h1>
			</div>
			<div data-role="content">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula consequat fringilla. Quisque eget justo nec diam molestie lacinia non id erat. Ut luctus eros eget purus congue suscipit. Aliquam vel ipsum nunc. In id fermentum risus. Pellentesque volutpat sem nec dui fringilla mattis. Phasellus tristique augue at est egestas non tristique dui convallis. Maecenas mattis felis in mauris scelerisque elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada commodo sapien nec molestie. Etiam bibendum, turpis nec volutpat aliquet, metus dui sagittis lectus, vel facilisis purus risus eget orci. Aliquam arcu neque, consectetur ut condimentum quis, placerat sollicitudin nunc. Aliquam non risus eros, sit amet porttitor justo. Donec ac arcu vitae arcu gravida semper sit amet a quam. Ut aliquam bibendum ultricies.

Fusce sit amet mauris odio, sed sodales mi. Nullam faucibus est non urna imperdiet eu rutrum neque facilisis. Sed sollicitudin imperdiet fringilla. Quisque vel molestie arcu. Pellentesque vel magna massa. Suspendisse pulvinar est ut erat porta sed faucibus ipsum egestas. Integer volutpat vulputate ipsum in dictum. Morbi eget turpis ac leo condimentum elementum vitae eget felis. Nam id sapien nisl. Nunc sapien quam, blandit sed malesuada vulputate, suscipit vulputate magna. Fusce eu tellus nibh. Quisque sit amet augue nec leo feugiat cursus. Vestibulum lectus mauris, luctus sit amet bibendum quis, posuere in orci. Donec accumsan mattis libero, sit amet egestas risus venenatis quis. Vivamus porttitor pretium neque ac vestibulum. Vivamus consequat egestas vehicula.

Suspendisse gravida rhoncus quam, vel pharetra leo laoreet id. Praesent a aliquet dui. Sed feugiat orci sit amet orci fringilla non adipiscing sem pulvinar. Vestibulum hendrerit congue urna, eu fringilla sapien malesuada at. Aenean vehicula consectetur urna, id varius nisi imperdiet vitae. Aliquam felis sapien, egestas sit amet mattis eget, mollis ac quam. Nam bibendum urna sit amet erat pellentesque facilisis vehicula nisi auctor. Aliquam erat volutpat. Phasellus eleifend venenatis turpis nec interdum. Donec pulvinar pellentesque ante, at placerat elit sollicitudin a. In at orci et justo tristique bibendum a congue lectus. Maecenas ac libero diam, vitae imperdiet felis. Nunc elit est, ornare id facilisis quis, porta eget nisi. Nam sapien elit, sodales placerat molestie et, tincidunt eget dolor. Donec quis justo sapien. Duis semper lacus fermentum massa pulvinar eget consectetur odio dictum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie turpis vitae orci convallis tristique. In hac habitasse platea dictumst. Pellentesque nisl risus, eleifend at volutpat vel, elementum ac tellus. Mauris ante diam, tempus convallis interdum sed, eleifend quis libero. Quisque sed tempor mi. Etiam rutrum metus suscipit lectus iaculis venenatis. Proin ac vehicula lectus. Pellentesque elit odio, porta ac posuere et, laoreet eget mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mi at sem euismod tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vel est bibendum orci eleifend dictum eu quis justo. Morbi sollicitudin ante at ligula dapibus suscipit. Aliquam eu metus sapien, vel tincidunt neque.

Phasellus pellentesque ante egestas leo vestibulum hendrerit. Nulla scelerisque vulputate iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur quis enim augue. Donec lacus odio, molestie quis hendrerit nec, suscipit non lacus. Curabitur sapien enim, vestibulum a ultrices id, fringilla ac nulla. Morbi mattis ipsum non turpis faucibus vitae dignissim nisl interdum.</p>
				
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula consequat fringilla. Quisque eget justo nec diam molestie lacinia non id erat. Ut luctus eros eget purus congue suscipit. Aliquam vel ipsum nunc. In id fermentum risus. Pellentesque volutpat sem nec dui fringilla mattis. Phasellus tristique augue at est egestas non tristique dui convallis. Maecenas mattis felis in mauris scelerisque elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada commodo sapien nec molestie. Etiam bibendum, turpis nec volutpat aliquet, metus dui sagittis lectus, vel facilisis purus risus eget orci. Aliquam arcu neque, consectetur ut condimentum quis, placerat sollicitudin nunc. Aliquam non risus eros, sit amet porttitor justo. Donec ac arcu vitae arcu gravida semper sit amet a quam. Ut aliquam bibendum ultricies.

Fusce sit amet mauris odio, sed sodales mi. Nullam faucibus est non urna imperdiet eu rutrum neque facilisis. Sed sollicitudin imperdiet fringilla. Quisque vel molestie arcu. Pellentesque vel magna massa. Suspendisse pulvinar est ut erat porta sed faucibus ipsum egestas. Integer volutpat vulputate ipsum in dictum. Morbi eget turpis ac leo condimentum elementum vitae eget felis. Nam id sapien nisl. Nunc sapien quam, blandit sed malesuada vulputate, suscipit vulputate magna. Fusce eu tellus nibh. Quisque sit amet augue nec leo feugiat cursus. Vestibulum lectus mauris, luctus sit amet bibendum quis, posuere in orci. Donec accumsan mattis libero, sit amet egestas risus venenatis quis. Vivamus porttitor pretium neque ac vestibulum. Vivamus consequat egestas vehicula.

Suspendisse gravida rhoncus quam, vel pharetra leo laoreet id. Praesent a aliquet dui. Sed feugiat orci sit amet orci fringilla non adipiscing sem pulvinar. Vestibulum hendrerit congue urna, eu fringilla sapien malesuada at. Aenean vehicula consectetur urna, id varius nisi imperdiet vitae. Aliquam felis sapien, egestas sit amet mattis eget, mollis ac quam. Nam bibendum urna sit amet erat pellentesque facilisis vehicula nisi auctor. Aliquam erat volutpat. Phasellus eleifend venenatis turpis nec interdum. Donec pulvinar pellentesque ante, at placerat elit sollicitudin a. In at orci et justo tristique bibendum a congue lectus. Maecenas ac libero diam, vitae imperdiet felis. Nunc elit est, ornare id facilisis quis, porta eget nisi. Nam sapien elit, sodales placerat molestie et, tincidunt eget dolor. Donec quis justo sapien. Duis semper lacus fermentum massa pulvinar eget consectetur odio dictum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie turpis vitae orci convallis tristique. In hac habitasse platea dictumst. Pellentesque nisl risus, eleifend at volutpat vel, elementum ac tellus. Mauris ante diam, tempus convallis interdum sed, eleifend quis libero. Quisque sed tempor mi. Etiam rutrum metus suscipit lectus iaculis venenatis. Proin ac vehicula lectus. Pellentesque elit odio, porta ac posuere et, laoreet eget mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mi at sem euismod tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vel est bibendum orci eleifend dictum eu quis justo. Morbi sollicitudin ante at ligula dapibus suscipit. Aliquam eu metus sapien, vel tincidunt neque.

Phasellus pellentesque ante egestas leo vestibulum hendrerit. Nulla scelerisque vulputate iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur quis enim augue. Donec lacus odio, molestie quis hendrerit nec, suscipit non lacus. Curabitur sapien enim, vestibulum a ultrices id, fringilla ac nulla. Morbi mattis ipsum non turpis faucibus vitae dignissim nisl interdum.</p>
				
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula consequat fringilla. Quisque eget justo nec diam molestie lacinia non id erat. Ut luctus eros eget purus congue suscipit. Aliquam vel ipsum nunc. In id fermentum risus. Pellentesque volutpat sem nec dui fringilla mattis. Phasellus tristique augue at est egestas non tristique dui convallis. Maecenas mattis felis in mauris scelerisque elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada commodo sapien nec molestie. Etiam bibendum, turpis nec volutpat aliquet, metus dui sagittis lectus, vel facilisis purus risus eget orci. Aliquam arcu neque, consectetur ut condimentum quis, placerat sollicitudin nunc. Aliquam non risus eros, sit amet porttitor justo. Donec ac arcu vitae arcu gravida semper sit amet a quam. Ut aliquam bibendum ultricies.

Fusce sit amet mauris odio, sed sodales mi. Nullam faucibus est non urna imperdiet eu rutrum neque facilisis. Sed sollicitudin imperdiet fringilla. Quisque vel molestie arcu. Pellentesque vel magna massa. Suspendisse pulvinar est ut erat porta sed faucibus ipsum egestas. Integer volutpat vulputate ipsum in dictum. Morbi eget turpis ac leo condimentum elementum vitae eget felis. Nam id sapien nisl. Nunc sapien quam, blandit sed malesuada vulputate, suscipit vulputate magna. Fusce eu tellus nibh. Quisque sit amet augue nec leo feugiat cursus. Vestibulum lectus mauris, luctus sit amet bibendum quis, posuere in orci. Donec accumsan mattis libero, sit amet egestas risus venenatis quis. Vivamus porttitor pretium neque ac vestibulum. Vivamus consequat egestas vehicula.

Suspendisse gravida rhoncus quam, vel pharetra leo laoreet id. Praesent a aliquet dui. Sed feugiat orci sit amet orci fringilla non adipiscing sem pulvinar. Vestibulum hendrerit congue urna, eu fringilla sapien malesuada at. Aenean vehicula consectetur urna, id varius nisi imperdiet vitae. Aliquam felis sapien, egestas sit amet mattis eget, mollis ac quam. Nam bibendum urna sit amet erat pellentesque facilisis vehicula nisi auctor. Aliquam erat volutpat. Phasellus eleifend venenatis turpis nec interdum. Donec pulvinar pellentesque ante, at placerat elit sollicitudin a. In at orci et justo tristique bibendum a congue lectus. Maecenas ac libero diam, vitae imperdiet felis. Nunc elit est, ornare id facilisis quis, porta eget nisi. Nam sapien elit, sodales placerat molestie et, tincidunt eget dolor. Donec quis justo sapien. Duis semper lacus fermentum massa pulvinar eget consectetur odio dictum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie turpis vitae orci convallis tristique. In hac habitasse platea dictumst. Pellentesque nisl risus, eleifend at volutpat vel, elementum ac tellus. Mauris ante diam, tempus convallis interdum sed, eleifend quis libero. Quisque sed tempor mi. Etiam rutrum metus suscipit lectus iaculis venenatis. Proin ac vehicula lectus. Pellentesque elit odio, porta ac posuere et, laoreet eget mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada mi at sem euismod tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam vel est bibendum orci eleifend dictum eu quis justo. Morbi sollicitudin ante at ligula dapibus suscipit. Aliquam eu metus sapien, vel tincidunt neque.

Phasellus pellentesque ante egestas leo vestibulum hendrerit. Nulla scelerisque vulputate iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur quis enim augue. Donec lacus odio, molestie quis hendrerit nec, suscipit non lacus. Curabitur sapien enim, vestibulum a ultrices id, fringilla ac nulla. Morbi mattis ipsum non turpis faucibus vitae dignissim nisl interdum.</p>
				
				<hr />
				<div data-role="infinitescroll" data-max-pages="50" data-url="?more" ddata-threshold="0.85"></div>
			</div>
		</div>
	</body>
</html>
````