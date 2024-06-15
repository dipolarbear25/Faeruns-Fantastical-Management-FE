import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteCampaign } from '../api/CampaignAPI';

function CampaignCard({ campObj, onUpdate }) {
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
        <Card.Text>DM: {campObj.dmName}</Card.Text>
        <Link href={`/myCampaign/${campObj.id}`} passHref>
          <Button style={{ background: 'teal' }} variant="primary" className="m-2">VIEW</Button>
        </Link>
        <Link href={`/myCampaign/edit/${campObj.id}`} passHref>
          <Button style={{ background: 'goldenrod' }} variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisCampaign} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}
CampaignCard.propTypes = {
  campObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    dmName: PropTypes.string,
    dateCreated: PropTypes.instanceOf(Date),
    playerCharacters: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default CampaignCard;
