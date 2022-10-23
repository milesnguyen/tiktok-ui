import images from 'src/assets/images';

const { forwardRef, useState } = require('react');

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImg);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
