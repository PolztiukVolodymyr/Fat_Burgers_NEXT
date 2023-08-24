import Head from 'next/head';

export async function getServerSideProps() {
    const responce = await fetch(
        'https://jsonplaceholder.typicode.com/comments'
    );
    const data = await responce.json();
    return {
        props: {
            reviews: data.slice(0, 20)
        }
    };
}

const Review = ({ reviews }) => {
    return (
        <>
            <Head>
                <title>Жирні бургери | Головна</title>
                <meta name="title" content="Жирні бургери" />
            </Head>
            <div>
                <h1>Відгуки</h1>
                <div className="reviews">
                    {reviews?.length &&
                        reviews.slice(0, 20).map((item) => {
                            return (
                                <div className="review" key={item.id}>
                                    {item.id}
                                    {'. '} {item.body.slice(0, 100)}
                                    {'...'}
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default Review;
