import SectionTitle from '../SectionTitle'
import exceedThumbnail from '../../exceed-thumb.png'
import lfcThumbnail from '../../lfc-thumb.jpg'

const highlightsList = [
    {
        imageSrc: exceedThumbnail,
        title: 'Agile delivery lead at Exceed Philippines',
        description:
            "With 5+ years of commercial experience with Agile, I'm hosting talks and webinars regarding Agile for Exceed events.",
        ctaLabel: 'Visit Exceed Philippines',
        externalLink: 'https://www.facebook.com/eXceedPhil',
    },
    {
        imageSrc: lfcThumbnail,
        title: 'Developer of Little Farmers Coffee landing page',
        description:
            "Designed and developed Little Farmers Coffee's marketing landing page using Angular.",
        ctaLabel: 'View website',
        externalLink: 'https://www.littlefarmerscoffee.com/',
    },
]

const HighlightItem = ({
    imageSrc,
    title,
    description,
    ctaLabel,
    externalLink,
}: {
    imageSrc: string
    title: string
    description: string
    ctaLabel?: string
    externalLink?: string
}) => {
    return (
        <div className="w-[300px] bg-white drop-shadow-lg rounded">
            <img
                src={imageSrc}
                alt={title}
                className="rounded-t w-[300px] h-[200px] object-contain"
                width="300"
                height="200"
            />
            <div className="p-8 text-center">
                <div className="text-gray-700 text-lg font-extrabold mb-8">
                    {title}
                </div>
                <p className="text-gray-700 mb-8">{description}</p>
                <a
                    className="text-blue-500"
                    href={externalLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    {ctaLabel}
                </a>
            </div>
        </div>
    )
}

const Highlights = () => {
    return (
        <div>
            <SectionTitle title="Other highlights" />
            <div className="container mx-auto flex gap-8 justify-center">
                {highlightsList.map((highlight) => (
                    <HighlightItem {...highlight} />
                ))}
            </div>
        </div>
    )
}

export default Highlights
