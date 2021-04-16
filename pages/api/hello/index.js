

export default async (req, res) => {

    try {

        res.json({ message: "hello api" })
    } catch {
        res.json({ message: "hello api failed" })
    }


}
