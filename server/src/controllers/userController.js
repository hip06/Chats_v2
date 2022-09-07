import * as services from '../services'

export const getUsers = async (req, res) => {
    try {
        const { ids } = req.query
        if (!ids) return res.status(400).json({ err: 1, mes: 'Missing inputs' })
        const response = await services.getUsers(ids)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: 'Failed at auth-controller: ' + error
        })
    }
}
export const getUsersLimit = async (req, res) => {
    const { page, ...query } = req.query
    try {
        const response = await services.getUsersLimit(page, query)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: 'Failed at auth-controller: ' + error
        })
    }
}