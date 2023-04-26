import { gradientText } from '../../styles'
import SectionTitle from '../SectionTitle'

const skillsList = {
    tier1: {
        skills: [
            'React',
            'Typescript',
            'Tailwind CSS',
            'Next',
            'GraphQL',
            'Android',
        ],
    },
    tier2: {
        skills: [
            'Rust',
            'C#.NET',
            'Node.js',
            'Vue',
            'Nuxt',
            'Angular',
            'Wordpress',
            'Java',
        ],
    },
    tier3: {
        skills: ['PHP', 'Python'],
    },
}

const Skills = () => {
    return (
        <div className="w-full bg-zinc-900">
            <div className="container mx-auto p-8">
                <SectionTitle title="Areas of focus" style={gradientText()} />
                <div className="w-full text-center mb-8">
                    <div className="text-white text-[36px] font-bold">
                        {skillsList.tier1.skills.join(' • ')}
                    </div>
                    <div className="text-white text-2xl font-bold">
                        {skillsList.tier2.skills.join(' • ')}
                    </div>
                    <div className="text-white text-xl font-bold">
                        {skillsList.tier3.skills.join(' • ')}
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-white">
                        See more of my real-world work experience in my{' '}
                        <a
                            className="text-blue-500"
                            href="https://www.linkedin.com/in/xavierlexusconcepcion/"
                        >
                            LinkedIn profile
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skills
