@extends('master')

@section ('content')
	<h1>Justin Bieber Official Fan Club</h1>
	@foreach ($songs as $index => $song)
		<li><a href="/songs/{{ $song->id }}">{{ $song->title }}</a></li>
	@endforeach
@stop