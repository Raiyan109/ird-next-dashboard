import mongoose, { Schema } from "mongoose";


mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const nestedCatSchema = new Schema(
    {
        cat_id: Number,
        cat_name_bn: String,
        cat_name_en: String,
        no_of_subcat: Number,
        no_of_dua: Number,
        cat_icon: String,
        subcats: Array
    },
    {
        timestamps: true,
    }
);

const NestedCat = mongoose.models.NestedCat || mongoose.model("NestedCat", nestedCatSchema);

export default NestedCat;