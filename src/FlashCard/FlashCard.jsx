import "./layout.css"
import { AnimatePresence, motion } from "framer-motion"


export default function FlashCard(props) {
    const { AName, ADesc } = props

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="ticker border my-2 max-w-md"
            >
                <h2 id="agencyName" className="">{props.AName}</h2>
                <hr className="my-2"></hr>
                <p id="agencyDescription">{props.ADesc}</p>
            </motion.div>
        </AnimatePresence>
    )

}