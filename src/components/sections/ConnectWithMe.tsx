import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faInstagram,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { gradientText } from '../../styles'
import SectionTitle from '../SectionTitle'

const ConnectWithMe = () => {
    return (
        <div className="px-2">
            <SectionTitle title="Connect with me" />
            <div className="flex w-full justify-center">
                <div className="rounded-xl drop-shadow-lg flex w-full aspect-[1.59] max-w-[506px] bg-zinc-900">
                    <div className="rounded-l-xl bg-gradient-to-r from-red-500 to-yellow-500 text-white font-extrabold px-4 py-8 text-[18px] sm:text-[36px]">
                        <div>CONNECT</div>
                        <div>WITH</div>
                        <div>ME</div>
                    </div>
                    <div className="px-4 py-8 rounded-r">
                        <div
                            className="font-extrabold text-[18px] sm:text-[36px]"
                            style={gradientText(true)}
                        >
                            LEXLTC
                        </div>
                        <div className="text-white font-extrabold mb-4 text-xs sm:text-md">
                            XAVIER LEXUS CONCEPCION
                        </div>
                        <a
                            className="text-white"
                            href="mailto:xlexus.concepcion@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                className="w-[16px] hidden sm:inline-block mr-4"
                                icon={faEnvelope}
                            />
                            <span className="text-xs sm:text-md">
                                xlexus.concepcion@gmail.com
                            </span>
                        </a>
                        <div className="flex flex-col gap-1 sm:gap-2 py-4">
                            <a
                                className="text-white"
                                href="https://www.linkedin.com/in/xavierlexusconcepcion/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="w-[16px] mr-4"
                                    icon={faLinkedin}
                                />
                                <span className="text-xs sm:text-md">
                                    xavierlexusconcepcion
                                </span>
                            </a>
                            <a
                                className="text-white"
                                href="https://github.com/lexltc"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="w-[16px] mr-4"
                                    icon={faGithub}
                                />
                                <span className="text-xs sm:text-md">
                                    lexltc
                                </span>
                            </a>
                            <a
                                className="text-white"
                                href="https://www.instagram.com/lexltc/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="w-[16px] mr-4"
                                    icon={faInstagram}
                                />
                                <span className="text-xs sm:text-md">
                                    lexltc
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectWithMe
