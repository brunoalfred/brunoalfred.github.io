import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
    return (

        <nav className={styles.global}>
            <div>
                <ul>
                    <li>
                        <Link href="#">
                            <a >Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a >Contact</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/code">
                            <a>Code</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tryme">
                            <a>Try me</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export { Header }