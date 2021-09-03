import {ReadToken} from '../token/init'
import {getAll} from '../init'


export default async (req, res) => {

    try {

        const {id} = req.query;
        console.log(id)
        const response = await getAll(id)

        let result = [];

        response.map((i) => {
            try{
                result.push(ReadToken(i.data))
            }catch{
                console.log("malformed data")
            }

        })

        // let decodedResponse= ReadToken(response.data)

        // decodedResponse.status = true

        res.json(result)
    } catch(ex) {
        res.json({ message: ex.message, status:false })
    }


}
