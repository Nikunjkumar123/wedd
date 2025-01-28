const ConnectionRequestModel = require('../Model/connectionModel.js');
const UserModel = require('../Model/UserModel');

const sendRqst = async(req,res)=>{
    try {
        const {recipientId} = req.body;
        const senderId = req.user.userId;
        if (senderId === recipientId) {
            return res.status(400).json({ msg: 'You cannot send a request to yourself' });
        }
        const existingRequest = await ConnectionRequestModel.findOne({ sender: senderId, recipient: recipientId });
        if (existingRequest) {
            return res.status(400).json({ msg: 'Request already sent' });
        }
        const newRequest = new ConnectionRequestModel({ sender: senderId, recipient: recipientId });
        await newRequest.save();

        res.status(200).json({ msg: 'Connection request sent',newRequest });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const AcceptRequest = async (req, res) => {
    try {
        const { id } = req.params.id;

        const request = await ConnectionRequestModel.findOne(id).populate('sender recipient');
        console.log(request.status);
        if (!request || request.status !== 'pending') {
            return res.status(400).json({ msg: 'Invalid or already processed request' });
        }

        // Update request status and save
        request.status = 'accepted';
        await request.save();

        // Update connections for both users
        const { sender, recipient } = request;
        await Promise.all([
            UserModel.findByIdAndUpdate(sender._id, { $push: { connections: recipient._id } }),
            UserModel.findByIdAndUpdate(recipient._id, { $push: { connections: sender._id } }),
        ]);

        res.status(200).json({ msg: 'Request accepted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const RejectRequest = async(req,res)=>{
    try {
        const { id } = req.params;

        const request = await ConnectionRequestModel.findOne(id);
        if (!request || request.status !== 'pending') {
            return res.status(400).json({ msg: 'Invalid or already processed request' });
        }

        // Update request status
        request.status = 'rejected';
        await request.save();

        res.status(200).json({ msg: 'Request rejected' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={sendRqst,AcceptRequest,RejectRequest}