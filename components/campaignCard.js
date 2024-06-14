import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteCampaign } from '../api/CampaignAPI';

function CmapaignCard({ campObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE ART AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE ART
  const deleteThisCampaign = () => {
    if (window.confirm(`Delete ${campObj.name}?`)) {
      deleteCampaign(campObj.id).then(() => onUpdate());
    }
  };
  console.warn(campObj);
  return (
    <Card style={{
      width: '18rem', margin: '10px', border: 'solid 5px black', background: 'grey',
    }}
    >
      <Card.Body>
        <Card.Title>{campObj.name}</Card.Title>
        <Card.Text>{campObj.playerCharacters?.map((tag) => (
          <span key={tag.tag.id}>{tag.tag.name} </span>
        ))}
        </Card.Text>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/myArt/${campObj.id}`} passHref>
          <Button style={{ background: 'teal' }} variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/myArt/edit/${campObj.id}`} passHref>
          <Button style={{ background: 'goldenrod' }} variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisCampaign} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}
CmapaignCard.propTypes = {
  campObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    dMName: PropTypes.string,
    dateCreated: PropTypes.instanceOf(Date),
    playerCharacters: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default CmapaignCard;
