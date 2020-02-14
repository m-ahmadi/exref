var str = 'data-123-data-456';

// remove:
str.replace('data-', '')        // removes only the first occurrence of the matching text
'123-data-456'

str.replace(/olagh/ig, '')      // removes all occurrences of the matching text
'123-456'

// replace:
str.replace('data-', 'info-')   // replaces first occurrence
'info-123-data-456'

str.replace(/data-/ig, 'info-') // replaces all occurrences
'info-123-info-456'