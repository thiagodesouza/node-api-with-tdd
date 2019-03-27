const bcrypt = require("bcryptjs");
const truncate = require("../utils/truncate");

const factory = require("../factories");

describe("User", () => {
  beforeEach(async () => {
    truncate();
  });

  it("should encrypt user password", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

    const compareHash = await bcrypt.compare("123123", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
