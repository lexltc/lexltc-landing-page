import { CSSProperties } from "react"

const SectionTitle = ({ title, style }: { title: string, style?: CSSProperties }) => {
    return (
        <h2 className="text-2xl font-extrabold text-gray-700 text-center mb-16" style={style}>
            {title}
        </h2>
    )
}

export default SectionTitle
