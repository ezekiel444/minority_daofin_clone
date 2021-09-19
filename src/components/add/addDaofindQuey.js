import { gql } from '@apollo/client'


export const addDaofindItem = gql`
mutation(
    $img:String,
     $foundDate:String,
     $twl:String,
     $aum:String,
     $name:String,
     $category:String,
     $tokenSymbol:String,
     $tokenName:String,
     $twitter:String,
     $discord:String,
     $website:String,
     $tvl:String,
     $blockChain:String,
     $headQuarter:String,
     $description:String)
     {
        addDaofind( post:{
     img: $img,
    foundDate: $foundDate,
    twl: $twl,
    aum: $aum,
    name: $name,
    category: $category,
    tokenSymbol: $tokenSymbol,
     tokenName:$tokenName,
    twitter: $twitter,
    discord: $discord,
     website:$website,
    tvl: $tvl,
    blockChain: $blockChain,
     headQuarter:$headQuarter,
   description:  $description
     }) {
       name
         aum
         blockChain
         category
        description
        discord
        foundDate
        headQuarter
        img
        tokenName
        tokenSymbol
        tvl
        twitter
        twl
        website 
       
     }
 }
`