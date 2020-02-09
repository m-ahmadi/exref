class Person {
	public string Name { get; set; }
  public int Age { get; set; }
}

// without predicate
Person oscar = null;
foreach (Person person in people) {
	if (person.Name == "Oscar") {
		oscar = person;
		break;
	}
}
if (oscar != null) // oscar exists

// with predicate
Predicate<Person> oscarFinder = (Person p) => { return p.Name == "Oscar"; };
Predicate<Person> ruthFinder = (Person p) => { return p.Name == "Ruth"; };
Predicate<Person> seventeenYearOldFinder = (Person p) => { return p.Age == 17; };

Person oscar = people.Find(oscarFinder);
Person ruth = people.Find(ruthFinder);
Person seventeenYearOld = people.Find(seventeenYearOldFinder);