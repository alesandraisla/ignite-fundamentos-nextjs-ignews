import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return(
        <>
            <Head>
                <title>Posts | Ignews </title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href='#'>
                        <time>12 de março de 2022</time>
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. </strong>
                        <p>Porro necessitatibus labore accusamus ab possimus esse enim tenetur! Quas quasi harum, soluta, accusantium aliquid ipsam aperiam perferendis commodi ut dolore nihil.</p>
                    </a>
                    <a href='#'>
                        <time>12 de março de 2022</time>
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. </strong>
                        <p>Porro necessitatibus labore accusamus ab possimus esse enim tenetur! Quas quasi harum, soluta, accusantium aliquid ipsam aperiam perferendis commodi ut dolore nihil.</p>
                    </a>
                    <a href='#'>
                        <time>12 de março de 2022</time>
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. </strong>
                        <p>Porro necessitatibus labore accusamus ab possimus esse enim tenetur! Quas quasi harum, soluta, accusantium aliquid ipsam aperiam perferendis commodi ut dolore nihil.</p>
                    </a>
                </div>
            </main>
        </>
    )
}