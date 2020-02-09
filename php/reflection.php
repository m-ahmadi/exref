<?php

class Apple {
	public function firstMethod() { }
	final protected function secondMethod() { }
	private static function thirdMethod() { }
}


$ref = new ReflectionClass('Apple');

$ref->getMethods()
$ref->getProperties()

$ref->getMethod()
$ref->getProperty ()
$ref->getParentClass()

$ref->hasMethod()
$ref->hasConstant()
$ref->hasMethod()
$ref->hasProperty()
