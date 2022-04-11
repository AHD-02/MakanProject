import data from './makanData'
import React from 'react'
const MyDiv = (props) =>
{
  const [myData, setMyData] = React.useState(data)
  console.log(myData)
}