import path from "./path"
import { BiMessageSquareDots } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
const menu = [
    {
        id: 1,
        path: path.PROFILE,
        content: <CgProfile size={24} />
    },
    {
        id: 2,
        path: path.HOME,
        content: <BiMessageSquareDots size={24} />
    },
]

export default menu