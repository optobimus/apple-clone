import "../../styles/IPhoneBanner.css"

import { useEffect, useState } from "react";

function IPhoneBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 1000);
    }, []);

  return (
    <div className={`iphone-banner${showBanner ? ' change' : ''}`}>
        <p>Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.¹</p>
        <a className={`shop-iphone-link${showBanner ? ' change' : ''}`}>Shop iPhone &gt;</a>
    </div>

  )
}

export default IPhoneBanner;
