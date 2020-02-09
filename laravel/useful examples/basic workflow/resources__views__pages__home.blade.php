@extends('master')

@section('content')
	<h1>Home Page</h1>
	<h1>{{ $name }} (echoed and escaped)</h1>   <!-- echoed and escaped -->
	<h1>{!! $name !!} (echoed and not escaped)</h1> <!-- echoed and not escaped -->
	
	@foreach ($lessons_blade as $lesson)
		<h2>{{ $lesson }} (blade style)</h2>
	@endforeach
	
	<h1><?php echo $name; ?> (old php style)</h1>
	<?php foreach($lessons_oldphp as $lesson) : ?>
		<h2><?php echo $lesson; ?> (old php style)</h2>
	<?php endforeach; ?>
@stop