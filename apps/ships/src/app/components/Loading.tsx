import React from 'react'
import { Spinner } from 'react-bootstrap';


//If loading shows the spinner component, if not shows the table itself that is passed as the children component
export default function Loading(props:any) {
  return props.loading ? (
    <Spinner animation="border" role="status"></Spinner>
  ):props.children
}
