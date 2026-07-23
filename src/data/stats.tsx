import { BsFillStarFill, BsCalendarCheckFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "500+",
        icon: <FiUsers size={34} className="text-blue-500" />,
        description: "Appointments booked online by clients, without a single phone call."
    },
    {
        title: "4.9",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Average Google rating, built automatically after every visit."
    },
    {
        title: "24/7",
        icon: <BsCalendarCheckFill size={34} className="text-green-600" />,
        description: "Online booking availability — book any time, day or night."
    }
];
