import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const NotFoundPage = () => {

    const router = useRouter();

    useEffect(() => {

        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, [router]);

    return (
        <div className="not-found">
            <h1>Ой...</h1>
            <h2>Такої сторінки тут нема!</h2>
            <p>Переходжу на <Link href="/">головну сторінку </Link>через 5 секунд...</p>
        </div>
    );
}

export default NotFoundPage;