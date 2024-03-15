import { Helmet } from 'react-helmet-async';
import { HomeContent } from '../../components/HomeContent/HomeContent';

export default function Home() {
  return (
    <div>
      <HomeContent />
      <Helmet>
        <title>Home</title>
      </Helmet>
    </div>
  );
}
