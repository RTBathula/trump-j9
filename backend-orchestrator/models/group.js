import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
  id: ObjectId,
  createdAt: Date,
  updatedAt: Date,
  groupName: String,
  userList: [],  
}, { collection: 'group', versionKey: false });

export default mongoose.model('Group', schema);
