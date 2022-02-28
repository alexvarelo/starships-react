import React from 'react'
import { Spinner } from 'react-bootstrap';



export default function Loading(props:any) {
  return props.loading ? (
    <Spinner animation="border" role="status"></Spinner>
  ):props.children
}
