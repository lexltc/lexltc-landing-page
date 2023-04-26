import profilePic from './profilepic.jpg'
import Skills from './components/sections/Skills'
import { gradientText } from './styles'
import ConnectWithMe from './components/sections/ConnectWithMe'
import AboutWebsite from './components/sections/AboutWebsite'
import Highlights from './components/sections/Highlights'

type AreaOfFocus = {
    iconLink: string
    label: string
}

type Socials = {
    title: string
    iconLink: string
    username: string
    link: string
}

const frontendFocus: AreaOfFocus[] = [
    {
        iconLink:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
        label: 'React',
    },
]

const socials: Socials[] = [
    {
        title: 'LinkedIn',
        iconLink:
            'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg',
        username: 'xavierlexusconcepcion',
        link: 'https://www.linkedin.com/in/xavierlexusconcepcion/',
    },
    {
        title: 'Instagram',
        iconLink:
            'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg',
        username: 'lexltc',
        link: 'https://www.instagram.com/lexltc/',
    },
    {
        title: 'Github',
        iconLink:
            'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        username: 'lextlc',
        link: 'https://github.com/lexltc',
    },
]

const App = () => {
    return (
        <div className="bg-color-white">
            <header className="bg-black/70 backdrop-blur text-white p-8 fixed w-full right-0 left-0 top-0 text-lg font-bold z-10">
                LEXLTC
            </header>
            <div className="relative drop-shadow-2xl w-full bg-[url('./cover.jpg')] min-h-[600px] bg-cover bg-center"></div>
            <div className="relative flex justify-center w-full mt-[-150px] mb-4">
                <img
                    className="border-8 border-white drop-shadow-2xl rounded-full object-none h-[300px] w-[300px]"
                    src={profilePic}
                    alt="lextlc profile"
                    height="300"
                    width="300"
                />
            </div>
            <div className="text-center mb-32">
                <h2 className="text-[24px] font-extrabold text-gray-700">
                    Xavier Lexus Concepcion
                </h2>
                <div className="font-extrabold text-gray-700">Lex</div>
            </div>

            <div className="flex flex-col gap-32 pb-16">
                <div>
                    <h2
                        className="text-[48px] font-extrabold text-gray-700 text-center mb-16"
                        style={gradientText()}
                    >
                        Software Engineer • Web • Full-Stack
                    </h2>
                    <div className="relative flex justify-center text-center text-2xl text-gray-700">
                        <div className="w-8/12">
                            Creative and innovative developer with background in
                            Agile development and leading initiatives. Skilled
                            in variety of full-stack web development
                            technologies including React, TypeScript, Node, and
                            Rust, Android application development and experience
                            in designing and implementing software
                            architectures.
                        </div>
                    </div>
                </div>
                <Skills />
                <Highlights />
                <ConnectWithMe />
                <AboutWebsite />
            </div>
        </div>
    )
}

export default App
