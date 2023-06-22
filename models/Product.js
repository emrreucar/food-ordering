// import mongoose from "mongoose";

// const CategorySchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       maxlength: 60,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Category ||
//   mongoose.model("Category", CategorySchema);

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },

    desc: {
      type: String,
      required: true,
      maxlength: 300,
    },

    prices: {
      type: [Number],
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    img: {
      type: String,
      required: true,
    },

    extraOptions: {
      type: [
        {
          text: { type: String },
          price: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
