<?php if: ?>
<?php endif;
	
<?php while: ?>
<?php endwhile; ?>
	
<?php for: ?>
<?php endfor; ?>
	
<?php foreach($plural as $single): ?>
	<?= $single; ?>			// only if "short_open_tag = On" in "php.ini" (don't use them)
	<?php echo $single; ?>	// use this instead
<?php endforeach; ?>
	
<?php switch: ?>
<?php endswitch; ?>

// Any output (including whitespace) between a switch statement and the first case will result in a syntax error
// invalid:
<?php switch ($foo): ?>
    <?php case 1: ?>
    ...
<?php endswitch ?>

// valid:
<?php switch ($foo): ?>
<?php case 1: ?>
<?php endswitch ?>

<?php switch ($foo):
	case 1: ?>
<?php endswitch ?>