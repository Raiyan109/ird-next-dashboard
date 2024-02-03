import mongoose, { Schema } from "mongoose";


mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const onlyCatSchema = new Schema(
    {
        cat_id: Number,
        subcat_id: Number,
        dua_id: Number,

    },
    {
        timestamps: true,
    }
);

const OnlyCat = mongoose.models.OnlyCat || mongoose.model("OnlyCat", onlyCatSchema);

export default OnlyCat;