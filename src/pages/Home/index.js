import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import Video from 'src/components/Video';
import * as videoServices from 'src/services/videoServices';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home({ data }) {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);

    function handleScroll() {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            setPage((page) => page + 1);
        }
    }

    useEffect(() => {
        const fetchApi = async () => {
            const data = await videoServices.loadVideo('for-you', page);
            setVideos((prev) => [...prev, ...data]);
        };
        fetchApi();
    }, [page]);

    return (
        <div className={cx('apps')}>
            {videos.map((video, index) => (
                <Video key={index} data={video} />
            ))}
        </div>
    );
}

export default Home;
