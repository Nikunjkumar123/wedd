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
        const id  = req.params.id;
        // console.log(id)
        const request = await ConnectionRequestModel.findById(id)//.populate('sender recipient');
        // console.log(request);
        if (!request || request.status !== 'pending') {
            return res.status(400).json({ msg: 'Invalid or already processed request' });
        }

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
        const id  = req.params.id;
        // console.log(id)
        const request = await ConnectionRequestModel.findById(id);
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

const getAllRequest = async (req, res) => {
    try {
        const all = await ConnectionRequestModel.find()
            .populate("sender", "fullName gender maritalstatus email age city working image phone")
            .populate("recipient", "fullName gender maritalstatus email age city working image phone"); // Fixed

        if (!all || all.length === 0) {
            return res.status(404).json({ msg: "No request found" });
        }

        return res.status(200).json({ all });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const RequestForMe = async (req, res) => {
    try {
        const requests = await ConnectionRequestModel.find({ recipient: req.user.userId })
            .populate("sender", "fullName gender maritalstatus email age city working image phone "); // Populate sender details if needed

        if (!requests || requests.length === 0) {
            return res.status(400).json({ msg: "No requests found" });
        }

        return res.status(200).json({ requests });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletedRequest = async(req,res)=>{
    try {
        const id = req.params.id;
        const del = await ConnectionRequestModel.findByIdAndDelete(id);
        if(!del) return res.status(400).json({msg:"data no deleted"});
        return res.status(200).json({msg:"data Deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const allConections = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Ensure `connections` is an array
        if (!Array.isArray(user.connections)) {
            return res.status(400).json({ error: "Invalid connections data" });
        }

        // Remove duplicates based on `_id`
        const uniqueConnections = user.connections.filter(
            (conn, index, self) => 
                index === self.findIndex((c) => c._id.toString() === conn._id.toString())
        );

        res.status(200).json(uniqueConnections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};





module.exports={sendRqst,AcceptRequest,RejectRequest,getAllRequest,RequestForMe,deletedRequest,allConections}