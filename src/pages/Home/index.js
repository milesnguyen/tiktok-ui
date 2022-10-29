import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Video from 'src/components/Video';
import { useEffect, useState } from 'react';
import * as videoServices from 'src/services/videoServices';

const cx = classNames.bind(styles);

function Home({ data }) {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);

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
