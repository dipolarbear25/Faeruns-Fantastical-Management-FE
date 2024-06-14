import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getCampaign } from '../api/CampaignAPI';
import CmapaignCard from '../components/campaignCard';

function Home() {
  const [campaign, setCampaign] = useState([]);

  const { user } = useAuth();
  console.warn(user);

  const getAllTheCampaigns = () => {
    getCampaign().then(setCampaign);
  };
  console.warn(campaign);

  useEffect(() => {
    getAllTheCampaigns();
  }, []);
  return (
    <div className="text-center my-4">
      <Link href="/myArt/new" passHref>
        <Button style={{ background: 'green' }}>Add Artwork</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {campaign.map((campaigns) => (
          <CmapaignCard key={campaign.id} campaignObj={campaigns} onUpdate={getAllTheCampaigns} />
        ))}
      </div>

    </div>
  );
}

export default Home;
