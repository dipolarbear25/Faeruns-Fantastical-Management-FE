import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCampaign } from '../api/CampaignAPI';
import CampaignCard from '../components/campaignCard';

function Home() {
  const [campaign, setCampaign] = useState([]);

  const getAllTheCampaigns = () => {
    getCampaign().then(setCampaign);
  };

  console.warn(campaign);

  useEffect(() => {
    getAllTheCampaigns();
  }, []);
  return (
    <div className="text-center my-4">
      <Link href="/myCampaign/new" passHref>
        <Button style={{ background: 'green' }}>Add Campaign</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {campaign.map((campaigns) => (
          <CampaignCard key={campaign.id} campObj={campaigns} onUpdate={getAllTheCampaigns} />
        ))}
      </div>

    </div>
  );
}

export default Home;
