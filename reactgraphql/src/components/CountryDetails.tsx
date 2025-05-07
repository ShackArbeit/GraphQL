import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_COUNTRY_DETAILS } from '../graphql/queries'


interface CountryDetailsProps{
      code:string
}

const CountryDetails:React.FC<CountryDetailsProps> = ({code}) => {
      const {loading,error,data}=useQuery(GET_COUNTRY_DETAILS,{
            variables:{code},
            skip:!code
      })
      if(!code) return null;
      if(loading) return <h1>Loading Country Information...</h1>
      if(error) return <h1>Error fetching country information...</h1>
      const {name,native,capital,emoji,currency,languages}=data.country
  return (
    <div style={{ marginTop: '2rem' }}>
           <h2>
               {emoji} {name} ({native})
           </h2>
           <h2><strong>Capital</strong> :{capital}</h2>
           <h2>
              <strong>Currency</strong>:{currency}
           </h2>
           <h2>
               <strong>Languages</strong>:{
                  languages.map((lang:{name:string})=>lang.name).join(',')
               }
           </h2>
    </div>
  )
}

export default CountryDetails