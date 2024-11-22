export const getAdmin = async (req, res) => {
    try {
        const admin = await admin.find();
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}