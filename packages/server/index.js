const faker = require("faker");

module.exports = () => {
  return {
    users: Array.from({ length: 12 }, (_, index) => ({
      id: index,
      name: faker.name.findName(),
      jobTitle: faker.name.jobTitle(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      website: faker.internet.url(),
    })),
  };
};
