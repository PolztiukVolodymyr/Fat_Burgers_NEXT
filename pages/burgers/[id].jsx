import Image from 'next/image';
import styles from './burgers.module.css';

export const getStaticPaths = async () => {
    const response = await fetch(' http://localhost:5000/items');
    const data = await response.json();

    const paths = data.map((item) => {
        return {
            params: { id: item.id }
        };
    });

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch(`http://localhost:5000/items/${id}`);
    const data = await response.json();

    return {
        props: { burger: data }
    };
};

const Item = ({ burger }) => {
    // console.log('burger:', burger);
    return (
        <div className={styles.singleBurger}>
            <h1>{burger.name}</h1>
            <div className={styles.imageContainerItem}>
                <Image
                    src={`${burger.image}`}
                    alt={`${burger.name}`}
                    width="100"
                    height="100"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <div>
                <p>{burger.desc}</p>
                <p>Ціна цього шедевру всього лише: {burger.price} кредитів.</p>
            </div>
        </div>
    );
};

export default Item;
