const faker = require("faker");

module.exports = () => {
  return {
    users: Array.from({ length: 12 }, () => ({
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      jobTitle: faker.name.jobTitle(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      website: faker.internet.url(),
    })),
  };
};
