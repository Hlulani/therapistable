import {ReadToken} from '../token/init'
import {getAll} from '../init'


export default async (req, res) => {

    try {

        const {id} = req.query;
        const response = await getAll(id)


        // let decodedResponse= ReadToken(response.data)

        // decodedResponse.status = true

        res.json(response)
    } catch {
        res.json({ message: "unable to login", status:false })
    }


}
