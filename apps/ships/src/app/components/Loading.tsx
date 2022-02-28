import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading(props: {loading:boolean}) {
  return props.loading ? (
    <Spinner animation="border" role="status"></Spinner>
  ):null
}
