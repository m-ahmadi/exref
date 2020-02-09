@extends('master')

@section ('content')
	
	<h2>{{ $song->title }}</h2>
	
	<!-- {!! Form::open() !!} -->



	
	{!! Form::model($song, ['url'=>'songs/'.$song->slug, 'method'=>'PATCH']) !!}
		
		<div class="form-group">
			{!! Form::text('title', null, ['class' => 'form-control']) !!}
		</div>

		<div class="form-group">
			{!! Form::textarea('lyrics', null, ['class' => 'form-control']) !!}
		</div>

		<div class="form-group">
			{!! Form::submit('Upload Song', ['class' => 'btn btn-primary']) !!}
		</div>

	{!! Form::close() !!}
	



	<!-- {!! Form::close() !!} -->

@stop