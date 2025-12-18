import axios from "axios";

const handleFetchIfsc=async (req,res)=>{
    try {
        const ifscCode=req.params.ifscCode;
        const response=await axios.get(`https://ifsc.razorpay.com/${ifscCode}`)
        const details=response.data;

        res.status(200).json(details)
        
    } catch (error) {
        res.status(500).json({error:`Internal Server error ${error.message}`})
        
    }

}

export{handleFetchIfsc}