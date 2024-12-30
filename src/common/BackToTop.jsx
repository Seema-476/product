import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [scrollTopVisible, setScrollTopVisible] = useState(false);

    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollTopHandler = () => {
        setScrollTopVisible(window.scrollY >= 40);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollTopHandler);
    },);

    return (
        <div className='p-3 text-end'>
            {scrollTopVisible && (
                <img onClick={scrollHandler} src="/assets/images/svg/double-arrow.svg" alt="arrow" className='back-to-top p-2 position-fixed' />
            )}
        </div>
    );
};

export default BackToTop;
