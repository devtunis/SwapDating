import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";
 
const connection = mongoose.connection;
const AutoIncrement = AutoIncrementFactory(connection);

const userSchema = new mongoose.Schema({
  refrence: { type:String },
  id: { type: Number },
  username :{type:String},
  name: { type: String },
  email: { type: String },
  password:{type:String},
  img : {type : String}
 
}, { timestamps: true });

userSchema.plugin(AutoIncrement, { inc_field: 'id', start_seq: 0 });


export default mongoose.model("User", userSchema);
