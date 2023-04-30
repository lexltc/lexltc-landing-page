import profilePic from './profilepic.jpg'
import Skills from './components/sections/Skills'
import { gradientText } from './styles'
import ConnectWithMe from './components/sections/ConnectWithMe'
import AboutWebsite from './components/sections/AboutWebsite'
import Highlights from './components/sections/Highlights'

const App = () => {
    return (
        <div className="bg-color-white">
            <header className="bg-black/70 backdrop-blur text-white p-4 md:p-8 fixed w-full right-0 left-0 top-0 text-lg font-bold z-10">
                LEXLTC
            </header>
            <div className="relative drop-shadow-2xl w-full bg-[url('./cover.jpg')] h-[300px] md:min-h-[600px] bg-cover bg-center"></div>
            <div className="relative flex justify-center w-full mt-[-75px] md:mt-[-150px] mb-4">
                <img
                    className="border-8 border-white drop-shadow-2xl rounded-full object-none h-[150px] w-[150px] md:h-[300px] md:w-[300px]"
                    src={profilePic}
                    alt="lextlc profile"
                    height="300"
                    width="300"
                />
            </div>
            <div className="text-center mb-16 md:mb-32">
                <h2 className="text-[24px] font-extrabold text-gray-700">
                    Xavier Lexus Concepcion
                </h2>
                <div className="font-extrabold text-gray-700">Lex</div>
            </div>

            <div className="flex flex-col gap-16 md:gap-32 pb-16">
                <div>
                    <h2
                        className="text-[36px] md:text-[48px] font-extrabold text-gray-700 text-center mb-16"
                        style={gradientText()}
                    >
                        Software Engineer • Web • Full-Stack
                    </h2>
                    <div className="relative flex justify-center text-center text-xl md:text-2xl text-gray-700">
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
            <div className="bg-zinc-900 w-100 h-32" />
        </div>
    )
}

export default App
