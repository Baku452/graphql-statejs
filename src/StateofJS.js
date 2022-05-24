import React from 'react';
import { gql, useQuery } from '@apollo/client';

const QUERY_APP = gql `query react_experienceQuery { 
    survey(survey: state_of_js) { 
      tool(id: react) { 
        id 
        entity { 
          homepage { 
            name 
            url 
          } 
          name 
          github { 
            name 
            description 
            url 
            homepage 
          } 
        } 
        experience(filters: {country: {in: [PER, COL]}}) { 
          all_years { 
            year 
            completion { 
              count 
            } 
            facets { 
              buckets { 
                id 
                count 
              } 
              completion { 
                total 
                count 
                percentage_question 
              } 
            } 
          } 
        } 
      } 
    } 
  } `

const StateJS = () => {
    const { loading, error, data} = useQuery(QUERY_APP);
    if (loading) return <p>loading...</p>
    return ( <div>

    </div> );
}
 
export default StateJS;