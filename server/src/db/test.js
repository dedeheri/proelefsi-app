const mongoose = require('mongoose');
const assert = require('assert');

describe('coonection', () => {
it('should connect to the database', async () => {
const config = {
useNewUrlParser: true,
useUnifiedTopology: true,
};

    await mongoose.connect(process.env.DATABASE_URL, config);

    assert.strictEqual(mongoose.connection.readyState, 1); // 1 means connected

});

it('should throw an error if connection fails', async () => {
const config = {};

    try {
      await mongoose.connect(process.env.DATABASE_URL, config);
    } catch (err) {
      assert(err instanceof Error); // should be an Error object
    }

});  
});
