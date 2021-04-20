import { Helmet } from 'react-helmet';
import BeAnAgent from '../../Components/BeAnAgent';

const BeAnAgentSection = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Be An Agent</title>
            </Helmet>
            <BeAnAgent />
        </div>
    );
};

export default BeAnAgentSection;
