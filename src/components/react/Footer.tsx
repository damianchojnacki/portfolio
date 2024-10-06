export default function Footer({ year }: FooterProps) {
    return (
        <footer className="text-center p-5 bg-gray-200 dark:bg-gray-800 dark:text-white">
            © {year} Damian Chojnacki. All Rights Reserved.
        </footer>
    );
}

export type FooterProps = {
    year: number;
};
