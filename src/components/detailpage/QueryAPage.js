import { gql } from '@apollo/client'



export const findDaofindItem = gql`
query($id:ID){
    daofind(id:$id) {
        category
        name
        img
        description
        tvl
        website
        twitter
        discord
        foundDate
        blockChain
        tokenSymbol
        tokenName
        headQuarter
    }
  }
`