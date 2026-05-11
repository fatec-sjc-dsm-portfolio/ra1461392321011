import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-purple-600 text-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Kauê Francisco. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}