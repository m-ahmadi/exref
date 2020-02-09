{
  user: "<name>",
  pwd: "<cleartext password>",
  customData: { <any information> },
  roles: [
    { role: "<role>", db: "<database>" } | "<role>",
    ...
  ]
}


db.createUser({
  user: "mohammad",
  pwd: "123456",
  rols: ["readWrite", "dbAdmin"]
});