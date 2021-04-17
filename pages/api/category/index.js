

export default async (req, res) => {

    try {

        const cat = ["Clinical Psychologist","Counselling Psychologist","Community Counselling ","Educational Psychologist"]

        res.json({ data: cat })
    } catch {
        res.json({ message: "hello api failed" })
    }


}
