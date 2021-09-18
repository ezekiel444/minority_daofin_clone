import {gql} from "@apollo/client";



const getDaofindData = gql`
query{
    daofinds {
        name
        category
        aum
        foundDate
        twl
        id
        img
    }
}
`

export default getDaofindData