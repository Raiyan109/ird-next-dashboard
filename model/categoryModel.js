import mongoose, { Schema } from "mongoose";


mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const categorySchema = new Schema(
    {
        cat_id: Number,
        subcat_id: Number,
        dua_id: Number,
        dua_name_bn: String,
        dua_name_en: String,
        top_bn: String,
        top_en: String,
        dua_arabic: String,
        refference_bn: String,
        refference_en: String,
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;