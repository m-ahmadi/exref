<?php?>            everything outside is ignored by php parser
<??>               short tags. need short_open_tag in php.ini or --enable-short-tags
<?= ?>             short echo tag. same as: <?php echo ?>
<?php echo 'hi' ?> semicolon is optional if closing tag is right after statement

it's recommended to omit closing tag if file contains only php code:
<?php