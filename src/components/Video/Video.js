import PropTypes from 'prop-types';
import styles from './Video.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);

function Video() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/537df60a66c02171a1592e45527c10ff~c5_100x100.jpeg?x-expires=1667116800&x-signature=qiyUKIJIYqv4g6q2JEbh43g%2Frus%3D"
                alt="avt"
            />
            <div className={cx('container')}>
                <header className={cx('head')}>
                    <div className={cx('info')}>
                        <div className={cx('user')}>
                            <p className={cx('nickname')}>perutsayabuncit321</p>
                            <p className={cx('name')}>perut saya buncit</p>
                        </div>
                        <div className={cx('description')}>
                            <p className={cx('text')}>I think Moto Moto likes you </p>
                            <div className={cx('hastag')}>
                                <strong>#fyp</strong>
                                <strong>#ChangMie</strong>
                                <strong>#mackedoi</strong>
                                <strong>#suthatla</strong>
                            </div>

                            <div className={cx('audio')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                                <span>original sound - CeliRosa ☆</span>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={cx('body')}>
                    <div className={cx('item')}>
                        <video
                            className={cx('play-video')}
                            type="video/mp4"
                            src="https://v16-webapp.tiktok.com/8d5ea301c0fe6eb263e2beb3d9fe708b/635be90e/video/tos/maliva/tos-maliva-ve-0068c799-us/091520502a224c1a9e1e948b3dbb3949/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3332&bt=1666&cs=0&ds=3&ft=kLO5qy-gZmo0PF8vEBkVQCNBDiHKJdmC0&mime_type=video_mp4&qs=0&rc=OWQ6NjRlMzk3Z2U7NDk8OUBpMzY6a2Q6ZjRkZzMzZzczNEA1LzNeYS82X2IxY2EwYGIyYSNnNG1ucjRnaV9gLS1kMS9zcw%3D%3D&l=202210280836000102451571061607015D&btag=80000"
                        />
                        <div className={cx('item-react')}>
                            <Button circle>
                                <FontAwesomeIcon className={cx('react-icon')} icon={faHeart} />
                            </Button>
                            <span className={cx('count')}>24.1k</span>
                            <Button circle>
                                <FontAwesomeIcon className={cx('react-icon')} icon={faCommentDots} />
                            </Button>
                            <span className={cx('count')}>24.1k</span>
                            <Button circle>
                                <FontAwesomeIcon className={cx('react-icon')} icon={faShare} />
                            </Button>
                            <span className={cx('count')}>24.1k</span>
                        </div>
                    </div>
                </div>
            </div>
            <Button outline className={cx('btn')}>
                Follow
            </Button>
        </div>
    );
}

export default Video;
