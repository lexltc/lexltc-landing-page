import profilePic from './profilepic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

type AreaOfFocus = {
  iconLink: string,
  label: string
}

type Socials = {
  title: string,
  iconLink: string,
  username: string,
  link: string
}

const frontendFocus: AreaOfFocus[] = [
  {
    iconLink: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    label: 'React'
  }
]

const socials: Socials[] = [
  {
    title: 'LinkedIn',
    iconLink: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg',
    username: 'xavierlexusconcepcion',
    link: 'https://www.linkedin.com/in/xavierlexusconcepcion/'
  },
  {
    title: 'Instagram',
    iconLink: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg',
    username: 'lexltc',
    link: 'https://www.instagram.com/lexltc/'
  },
  {
    title: 'Github',
    iconLink: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    username: 'lextlc',
    link: 'https://github.com/lexltc'
  }
]

const Panel = ({ areasList, title, children, className }: {areasList: AreaOfFocus[], title?: string, children?: React.ReactNode, className?: string}) => {
  return(
    <div className={`bg-white drop-shadow-lg p-8 rounded ${className}`}>
      <div className="text-center text-lg font-extrabold mb-8">{title}</div>
      {title && <hr className="my-8"/>}
      {areasList.map((area) => {
        return <div key={area.label}>{area.iconLink && <img className="inline mr-4" src={area.iconLink} alt={area.label} height="50" width="50"/>}{area.label}</div>
      })}
      {children}
    </div>
  )
}

const gradientText = (reverse?: boolean) => {
  return {
    background: `-webkit-linear-gradient(${reverse ? '180deg' : '360deg'}, red, yellow)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
}

const SectionTitle = ({title}: {title: string}) => {
  return (
    <h2 className="text-2xl font-extrabold text-gray-700 text-center mb-16">{title}</h2>
  )
}

const SocialBlock = ({ title, iconLink, username, link }: Socials) => {
  return (
    <a href={link} target="_blank" rel="noreferrer"><img className="inline" src={iconLink} alt={title} title={title} height="50" width="50"/></a>
  )
}

const App = () => {
  return (
    <div className="bg-color-white">
      <header className="bg-black/70 backdrop-blur text-white p-8 fixed w-full right-0 left-0 top-0 text-lg font-bold z-10">
        LEXLTC
      </header>
      <div className="relative drop-shadow-2xl w-full bg-[url('./cover.jpg')] min-h-[600px] bg-cover bg-center"></div>
      <div className="relative flex justify-center w-full mt-[-150px]">
        <img className="border-8 border-white drop-shadow-2xl rounded-full object-none h-[300px] w-[300px]" src={profilePic} alt="lextlc profile" height="300" width="300"/>
      </div>
      <div className="container mx-auto px-8 py-32 flex flex-col gap-32">
        <div>
          <h2 className="text-[48px] font-extrabold text-gray-700 text-center mb-16" style={gradientText()}>Software Engineer • Web • Full-Stack</h2>
          <div className="relative flex justify-center text-center text-2xl text-gray-700">
            <div className="w-8/12">
              Creative and innovative developer with background in Agile development and leading initiatives. Skilled in variety of full-stack web development technologies including React, TypeScript, Node, and Rust, Android application development and experience in designing and implementing software architectures.
            </div>
          </div>
        </div>
        <div>
          <SectionTitle title="Areas of focus" />
          <div className="flex gap-8">
            <Panel className="flex-1" title="Frontend" areasList={frontendFocus} />
            <Panel className="flex-1" title="API" areasList={frontendFocus} />
            <Panel className="flex-1" title="Backend" areasList={frontendFocus} />
          </div>
          <div className="text-center py-16">
            <p>See more of my real-world work experience in my <a className="text-blue-900" href="https://www.linkedin.com/in/xavierlexusconcepcion/">LinkedIn profile</a></p>
          </div>
        </div>
        <div>
          <div className="flex w-full justify-center">
            <div className="rounded-xl drop-shadow-lg flex h-[319px] w-[506px] bg-zinc-900">
              <div className="rounded-l-xl bg-gradient-to-r from-red-500 to-yellow-500 text-white font-extrabold px-4 py-8 text-[36px]">
                <div>CONNECT</div>
                <div>WITH</div>
                <div>ME.</div>
              </div>
              <div className="bg-zinc-900 px-4 py-8 rounded-r">
                <div className="font-extrabold text-[36px]" style={gradientText(true)}>LEXLTC</div>
                <a className="text-white" href="mailto:xlexus.concepcion@gmail.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="w-[16px]" icon={faEnvelope} />
                  <span className="ml-4">xlexus.concepcion@gmail.com</span>
                </a>
                <div className="flex flex-col gap-2 py-4">
                  <a className="text-white" href="https://www.linkedin.com/in/xavierlexusconcepcion/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="w-[16px]" icon={faLinkedin} />
                    <span className="ml-4">xavierlexusconcepcion</span>
                  </a>
                  <a className="text-white" href="https://github.com/lexltc" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="w-[16px]" icon={faGithub} />
                    <span className="ml-4">lexltc</span>
                  </a>
                  <a className="text-white" href="https://www.instagram.com/lexltc/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="w-[16px]" icon={faInstagram} />
                    <span className="ml-4">lexltc</span>
                  </a>
                </div>
                
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;