const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    connections: [{
        type: Number
    }]
});

exports.UserModel = mongoose.model('UserInfo', userSchema, 'UserInfo')

const UserFileSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    uploaderName: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    extension: {
        type: String,
        required: true
    },
    fileData: {
        type: String,
        required: true
    },
    receiverID: {
        type: Number,
        required: true
    }
});

exports.UserFileModel = mongoose.model('UserFiles', UserFileSchema, 'UserFiles')

const connectionSchema = new mongoose.Schema({
    senderID: {
        type: Number,
        required: true
    },
    receiverID: {
        type: Number,
        required: true
    },
    requestSenderName: {
        type: String
    },
    connectionStatus: {
        type: String,
        required: true
    }
});

exports.connectionModel = mongoose.model('ConnectionInfo', connectionSchema, 'ConnectionInfo')