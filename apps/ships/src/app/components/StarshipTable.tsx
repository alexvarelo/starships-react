import React from 'react'
import { Button } from 'react-bootstrap';
import { Starship } from '../api/entities/Starship';
import { TableHead } from '../components/table/TableHead';

interface ListProps {
    data: Starship[];
    openModal: (starship:Starship) => void;
}

export default function StarshipTable(props:ListProps) {
  return (
    <table className="table table-sm">
        <TableHead />
        <tbody>
          {
            props.data.map((starship: Starship) => {
              return (
                <><tr key={starship.id}>
                  <td>{starship.name}</td>
                  <td>{starship.passengers}</td>
                  <td>{starship.crew}</td>
                  <td><Button onClick={() => props.openModal(starship)}>Show</Button></td>
                </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
  )
}
