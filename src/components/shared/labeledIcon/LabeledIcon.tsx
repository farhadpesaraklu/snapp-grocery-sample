import { FC } from "react"
import "./LabeledIcon.css"
interface LabeledIconProps {
    title?: string;
    icon: string;
    width?: number;
    height?: number;
}

const LabeledIcon: FC<LabeledIconProps> = ({ title, icon, width = 14, height = 14 }) => {
    return (
        <div className="container">
            <img src={icon} alt="" width={width} height={height} />
            {title ?? <span>{title}</span>}
        </div>
    )
}

export default LabeledIcon