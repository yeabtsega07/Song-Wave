/* eslint-disable prettier/prettier */
import React from 'react';
import { css } from '@emotion/react';
import { FaHome, FaInfoCircle, FaEnvelope, FaMusic, FaUserPlus, FaHeart } from 'react-icons/fa';

const SideNav = () => {
    return (
        <nav css={styles.nav}>
            <ul css={styles.list}>
                <li css={styles.item}>
                    <div css={styles.link}>
                        <FaHome css={styles.icon} />
                        <span css={styles.span}>Profile</span>
                    </div>
                </li>
                <li css={styles.item}>
                    <div  css={styles.link}>
                        <FaInfoCircle css={styles.icon} />
                        <span css={styles.span}>Info</span>
                    </div>
                </li>
                <li css={styles.item}>
                    <div css={styles.link}>
                        <FaEnvelope css={styles.icon} />
                        <span css={styles.span}>Envelope</span>
                    </div>
                </li>
                <li css={styles.item}>
                    <div  css={styles.link}>
                        <FaMusic css={styles.icon} />
                        <span css={styles.span}>My Playlist</span>
                    </div>
                </li>
                <li css={styles.item}>
                    <div  css={styles.link}>
                        <FaUserPlus css={styles.icon} />
                        <span css={styles.span}>Subscribe</span>
                    </div>
                </li>
                <li css={styles.item}>
                    <div  css={styles.link}>
                        <FaHeart css={styles.icon} />
                        <span css={styles.span}>Favorites</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: css`
        width: 200px;
        height: 100%;
        color: #fff;
        padding: 1rem;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 200px;
        background-color: #2b727ebc;
        color: #fff;
        padding: 1rem;
        padding-top: 6rem;
        margin-top: 5rem;
        @media (max-width: 500px) {
        width: 50px;
    }
    `,
    list: css`
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 1.2rem; /* Increase font size */
    `,
    item: css`
        margin-bottom: 1rem;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 1rem; /* Increase font size */

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 100%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 6px solid #555;
            opacity: 0;
            transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
        }

        &:hover::before {
            opacity: 1;
            transform: translate(0, -50%);
        }

        & > span {
            margin-left: 0.5rem;
            font-size: 0.8rem;
            white-space: nowrap;
            opacity: 0; /* Initially hidden */
            transform: translateX(10px);
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }

        &:hover > span {
            opacity: 1; /* Make it visible on hover */
            transform: translateX(0);
            transition-delay: 0.2s; /* Delay the appearance */
        }
    `,
    link: css`
        display: flex;
        align-items: center;
        padding: 0.5rem;
        color: #fff;
        text-decoration: none;

        &:hover {
            background-color: #555;
        }
    `,
    icon: css`
        margin-right: 0.5rem;
    `,
    span: css`
        margin-left: 0.5rem;
        @media (max-width: 500px) {
      display: none;
    }
    `,
};

export default SideNav;
