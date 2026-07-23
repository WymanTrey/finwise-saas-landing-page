import { FiCalendar, FiClock, FiSmartphone, FiStar, FiThumbsUp, FiMessageCircle, FiUsers, FiTrendingUp, FiCheckCircle } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Book Online, Any Time",
        description: "Clients grab an open slot in seconds — no more phone tag or waiting for a call back during business hours.",
        bullets: [
            {
                title: "Real-Time Availability",
                description: "Clients see exactly what's open and book it instantly.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Book After Hours",
                description: "No missed bookings just because the front desk isn't open.",
                icon: <FiClock size={26} />
            },
            {
                title: "Works From Any Phone",
                description: "No app to download — book from a text, an ad, or your website.",
                icon: <FiSmartphone size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Reviews That Build Themselves",
        description: "Every appointment automatically triggers a review request — so your Google rating grows without you lifting a finger.",
        bullets: [
            {
                title: "Automatic Requests",
                description: "Sent right after each appointment, while the experience is fresh.",
                icon: <FiStar size={26} />
            },
            {
                title: "More 5-Star Reviews",
                description: "The easier you make it to leave a review, the more clients actually will.",
                icon: <FiThumbsUp size={26} />
            },
            {
                title: "Stronger Local Search",
                description: "More reviews means showing up higher when people search near you.",
                icon: <FiMessageCircle size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "A Site Built to Fill Your Calendar",
        description: "Not just a pretty page — every part of the site is built to turn a visitor into a booked appointment.",
        bullets: [
            {
                title: "Designed to Convert",
                description: "Clear calls to book on every page, not buried in a menu.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Mobile-First",
                description: "Most clients find you on their phone — the site is built for that first.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Grows With You",
                description: "Add services, staff, and promotions any time without starting over.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
