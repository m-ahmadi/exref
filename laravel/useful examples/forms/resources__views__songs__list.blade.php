@extends('master')

@section ('content')
	@foreach ($songs as $song)
		<li><a href="/songs/{{ $song->slug }}">{{ $song->title }}</a></li>
	@endforeach
@stop