import SectionTitle from '../SectionTitle'
import reactLogo from '../../react-logo.png'
import tailwindCssLogo from '../../tailwindcss-logo.png'
import typeScriptLogo from '../../typescript-logo.svg'

const AboutWebsite = () => {
    return (
        <div>
            <SectionTitle title="About this web page" />
            <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-0">
                <div className="md:w-1/2 flex flex-wrap justify-center gap-10">
                    <img
                        src={reactLogo}
                        alt="React logo"
                        height="100"
                        width="100"
                    />
                    <img
                        src={tailwindCssLogo}
                        alt="Tailwind CSS logo"
                        height="100"
                        width="100"
                    />
                    <img
                        src={typeScriptLogo}
                        alt="TypeScript logo"
                        height="100"
                        width="100"
                    />
                </div>
                <div className="md:w-1/2">
                    <p className="text-lg text-gray-700 px-4">
                        I have created this web page as a profile and to
                        showcase my skills. I designed and developed this whole
                        page mainly using React, TypeScript, and Tailwind CSS.
                        The cover image and logo are my creations as well.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutWebsite
