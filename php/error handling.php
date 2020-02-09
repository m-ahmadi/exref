<?php
error_reporting(E_ALL);

die("Something was not correct.");
throw new Exception("Something was not correct.");
trigger_error("Something was not correct.", E_USER_ERROR);
trigger_error("Something was not correct.", E_USER_NOTICE);