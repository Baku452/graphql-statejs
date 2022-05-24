import React from 'react';
import { gql, useQuery } from '@apollo/client';
import {CartesianGrid, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import { useEffect } from 'react';

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
  const data2 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const StateJS = () => {
    const { loading, error, data} = useQuery(QUERY_APP);
    const {all_years } = data.survey.tool.experience;
    let dataIterate;

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error</p>;

    // all_years.map(
    //   item => {
    //     dataIterate.year = item.year;
    //     dataIterate.total = item.completion.total;
    //     return 1;
    //   }
    // )
    // console.log(data);

    
    // useEffect(() => {
    // }, []);
    return (   
      <LineChart width={400} height={400} data={all_years}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis dataKey="completion.total" />
          <Legend />
        <Line type="monotone" dataKey="completion.total" stroke="#8884d8" />
      </LineChart>
    );
}
 
export default StateJS;