select name, age, color, vision
from person join eyes
	using(eyes_id)