<?php

// When you just reference a class like new DateTime() PHP searches for the class in your current namespace.
// However the DateTime class obviously doesn't exists in your controllers namespace but rather in root namespace.

//You can either reference it in the root namespace by prepending a backslash:

$now = new \DateTime();
// Or add an import statement at the top:

use DateTime;

$now = new DateTime();