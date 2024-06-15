/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCampaign } from '../../api/CampaignAPI';
// import TagCard from '../../components/TagCard';
export default function ViewCampaign() {
  const [campaignDetails, setCampaignDetails] = useState({});
  const router = useRouter();
  // TODO: grab firebaseKey from url
  const { id } = router.query;
  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleCampaign(id).then(setCampaignDetails);
    getSingleCampaign(id).then(setCampaignDetails);
  }, [id]);

  console.warn(campaignDetails);
  return (
    <div className="mt-5 d-flex flex-wrap">
      <div style={{ color: 'black' }}>
        <h5>
          {campaignDetails?.name}
          <p>DM:{campaignDetails?.dmName || 'No DM found'}</p>
        </h5>
        <div style={{ color: 'black', border: 'solid, 2px, black' }} className="d-flex flex-wrap">
          {campaignDetails?.playerCharacters.map((pc) => (
            <span key={pc.name} style={{ margin: '3px' }}>{pc.name} </span>
          ))}
        </div>
        <hr />
      </div>
    </div>
  );
}
