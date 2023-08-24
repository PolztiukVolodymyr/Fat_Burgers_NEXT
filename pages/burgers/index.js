import Link from 'next/link';
import Image from 'next/image';
import styles from "./burgers.module.css";

export const getStaticProps = async () => {
    const response = await fetch(" http://localhost:5000/items");
    const data = await response.json();

    return {
        props: {
            burgers: data
        }
    }

};

const Burgers = ({ burgers }) => {
    // console.log('burgers:', burgers)
    return (
        <div>
            <h1 className={`${styles.title} font-effect-emboss`}>Наші бургери</h1>
            {burgers.map(item => {
                return (
                    <Link href={`/burgers/${item.id}`} key={item.id} className={styles.burgerCard}>
                        <div>
                            <Image
                                src={`${item.image}`}
                                alt={`${item.name}`}
                                width="100"
                                height="100"
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <h3 className={styles.imageContainer}>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default Burgers;