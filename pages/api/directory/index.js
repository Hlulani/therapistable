import {CreateToken} from '../token/init'
import {create} from '../init'


export default async (req, res) => {

    try {

        const body = req.body;
        let data = {}

        data.data = CreateToken(body)
        data.data.id = body.email || body.number;
        data.data.type ="Hluani"
        const response = await create(data,"Directory");

        response.status = true
        res.json(response.data)
    } catch {
        res.json({ message: "data exists already",status:false })
    }


}
