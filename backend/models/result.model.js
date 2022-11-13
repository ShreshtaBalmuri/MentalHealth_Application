const mongoose = require("mongoose");

const resultSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

resultSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "userId", "score"];
    fields.forEach((field) => {
      transformed[field] = this[field];
    });
    return transformed;
  },
});

module.exports = mongoose.model("Result", resultSchema);
