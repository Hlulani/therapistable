import {ReadToken} from '../token/init'
import {findById} from '../init'


export default async (req, res) => {

    try {

        const {email} = req.query;
        const response = await findById(email,"Identity")


        let decodedResponse= ReadToken(response.data)

        decodedResponse.status = true

        res.json(decodedResponse)
    } catch {
        res.json({ message: "unable to login", status:false })
    }


}
