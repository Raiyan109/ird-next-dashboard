import mongoose, { Schema } from "mongoose";


mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const onlyCatSchema = new Schema(
    {
        cat_id: Number,
        cat_name_bn: String,
        cat_name_en: String,
        no_of_subcat: Number,
        no_of_dua: Number,
        cat_icon: String
    },
    {
        timestamps: true,
    }
);

const OnlyCat = mongoose.models.OnlyCat || mongoose.model("OnlyCat", onlyCatSchema);

export default OnlyCat;