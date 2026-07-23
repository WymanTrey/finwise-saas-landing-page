import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Signature Facial',
        price: '$120',
        features: [
            '60-minute custom facial',
            'Skin analysis included',
            'Take-home care guide',
        ],
    },
    {
        name: 'Glow & Renew Package',
        price: '$249',
        features: [
            'Facial + microdermabrasion',
            'Includes LED light therapy',
            'Complimentary follow-up consult',
            'Most booked package',
        ],
    },
    {
        name: 'VIP Membership',
        price: '$89',
        features: [
            'One treatment per month',
            '15% off all add-ons',
            'Priority booking access',
            'Member-only promotions',
        ],
    },
]
