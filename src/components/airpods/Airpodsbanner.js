import "../../styles/Airpodsbanner.css"

import { useEffect, useState } from "react";

function Airpodsbanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 1000);
    }, []);

  return (
    <div className={`airpods-banner${showBanner ? ' change' : ''}`}>
        <p>Get 6 months of Apple Music free with your AirPods.* </p>
        <a className={`learn-more-link${showBanner ? ' change' : ''}`}>Learn more &gt;</a>
    </div>

  )
}

export default Airpodsbanner;
