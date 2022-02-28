import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Starship } from '../api/entities/Starship';
import StarwarsApi from '../api/StarwarsApi';
import DetailModel from '../components/DetailModel';
import Loading from '../components/Loading';
import StarshipTable from '../components/StarshipTable';
import { TableHead } from '../components/table/TableHead';

export default function StarShips() {

  const [isLoading, setisLoading] = useState(false);
  const [StarShips, setStarShips] = useState<Starship[]>([]);
  const [CurrentStarShip, setCurrentStarShip] = useState<Starship>();
  const [ShowModal, setShowModal] = useState(false);
  const [Page, setPage] = useState(1);

  // Retreives information from the given Api, and assigns it to the CurrentStarship state
  const loadingStarShips = () => {
    StarwarsApi(Page).then((ships) => {
      setStarShips(ships);
    });
  }

  // Executes each time the page loads. If loading, shows an spinner thanks to the state isLoading
  useEffect(() => {
    setisLoading(true);
    setTimeout(() => { // Timeour just for showing that the spinner works
      loadingStarShips();
      setisLoading(false);
    }, 300)
  }, [Page]) //updates each time that the page changes


  // Called when a detail button is pressed, and passes the starship selected to show the details with the modal
  const openModal = (starship: Starship) => {
    setCurrentStarShip(starship);
    setShowModal(true);
  }

  //Called to close the modal declaring the ShowModal variable to false. Thus, being false the variable the component does not shows.
  const closeModal = () => {
    setShowModal(false);
  }


  return (
    <div style={{ margin: "40px" }}>
      
      <Loading loading={isLoading}>
        <StarshipTable
          data={StarShips}
          openModal={openModal}
        />
      </Loading>

      <DetailModel
        starship={CurrentStarShip}
        showModal={ShowModal}
        closeModal={closeModal}
      />
      <div style={{ fontFamily: "Arial" }}>
        <h5>Page {Page}</h5>
        {Page !== 1 ? <Button style={{ marginRight: "8px" }} onClick={() => { setPage(Page - 1); }}>Prev</Button> : null}
        {Page < 4 ? <Button onClick={() => { setPage(Page + 1); }}>Next</Button> : null}
      </div>
    </div>
  )
}
