import mongoose from 'mongoose';

export default async () => {
	await mongoose.connect(
		process.env.MONGO_DB_URL, 
		{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
	)
};
