import { Helmet } from 'react-helmet';
import BeAnAgent from '../../Components/BeAnAgent';

const BeAnAgentSection = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Be An Agent</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <BeAnAgent />
        </div>
    );
};

export default BeAnAgentSection;
