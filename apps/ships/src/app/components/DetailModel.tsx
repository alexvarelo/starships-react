import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; // Permits showing the modal
import { Button, Modal } from 'react-bootstrap';
import { Starship } from '../api/entities/Starship';


//Shows the modal if showModal is true with the information of the requested ship
export default function DetailModel(props: { starship: any; showModal: boolean; closeModal: () => void; }) {

    return props.showModal ? (
        <Modal show={props.showModal} onHide={props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{props.starship.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Specifications</p>
                <table className='table'>
                    <thead>
                        <th>Propertie</th>
                        <th>Value</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MLGT</td>
                            <td>{props.starship.MGLT}</td>
                        </tr>
                        <tr>
                            <td>Cargo Capacity</td>
                            <td>{props.starship.cargo_capacity}</td>
                        </tr>
                        <tr>
                            <td>Consumables</td>
                            <td>{props.starship.consumables}</td>
                        </tr>
                        <tr>
                            <td>Hyperdrive rating</td>
                            <td>{props.starship.hyperdrive_rating}</td>
                        </tr>
                        <tr>
                            <td>Max atmosphering speed</td>
                            <td>{props.starship.max_atmosphering_speed}</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>{props.starship.model}</td>
                        </tr>
                        <tr>
                            <td>Starship class</td>
                            <td>{props.starship.starship_class}</td>
                        </tr>
                    </tbody>
                </table>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    ) : null;
}
