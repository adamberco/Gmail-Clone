import { StarIcon } from "./StarIcon"

export function Icon({iconName}) {
    const iconMap = {
        star: <StarIcon />,
      }

    return (
           <span>{iconMap[iconName]}</span>
    )
}

