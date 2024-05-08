import React from 'react'
import { NavLink } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full flex justify-center mt-10 border-t-2'>
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className='mt-8 grid grid-cols-1 justify-between gap-4 md:grid-cols-2'>
                    <img className='h-4 w-auto' src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-cod-c21ca.appspot.com/o/Regahard.png?alt=media&token=733069e8-3744-4ae2-81f1-9f78b8b1d0ce" alt="logo" />
                </div>
                <div className="grid grid-cols-3 justify-between gap-4">

                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                <Typography
                    variant="small"
                    className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                >
                    &copy; {currentYear} Proyect Made By Gonzalo Billia.
                </Typography>
                <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                    <Typography as="a" href="https://www.linkedin.com/in/gonzalo-billia/" target='_blank' className="opacity-80 transition-opacity hover:opacity-100">
                    <span class="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512">
                            
                            <path
                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                    </span>
                    </Typography>
                    <Typography as="a" href="https://github.com/GonzaBillia"  target='_blank' className="opacity-80 transition-opacity hover:opacity-100">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fill-rule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </Typography>
                </div>
            </div>
            </div>
            
        </footer>
    )
}

export default Footer