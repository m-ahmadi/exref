@extends('layouts.master')

@section('sidebar')
@stop

@yield('sidebar')
<!--
	grab what's inside
	@section('sidebar')
	@stop
	then place it right next
-->



{{{ $name }}}
{{{ time() }}}
{{{ isset($name) ? $name : 'Default' }}}
{{{ $name or 'Default' }}}
@{{ This will not be processed by Blade }}
Hello, {{{ $name }}} <!-- escaped -->
Hello, {{ $name }} <!-- not escaped -->



<!-- If Statements -->
@if (count($records) === 1)
    I have one record!
@elseif (count($records) > 1)
    I have multiple records!
@else
    I dont have any records!
@endif

@unless (Auth::check())
    You are not signed in.
@endunless




<!-- Loops -->
@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor

@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach

@forelse($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse

@while (true)
    <p>I'm looping forever.</p>
@endwhile



