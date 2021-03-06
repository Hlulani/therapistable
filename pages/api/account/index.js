import {CreateToken} from '../token/init'
import {create} from '../init'


export default async (req, res) => {

    try {

        const body = req.body;
        let data = {}

        data.data = CreateToken(body)
        data.data.email = body.email;
        const response = await create(data,"Account");

        response.status = true
        res.json(response.data)
    } catch {
        res.json({ message: "user exists already",status:false })
    }


}
