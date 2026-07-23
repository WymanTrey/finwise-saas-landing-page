import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Facials, massage, and aesthetic treatments in a calm, welcoming space.",
    quickLinks: [
        {
            text: "Why Book Online",
            url: "#features"
        },
        {
            text: "Services",
            url: "#pricing"
        },
        {
            text: "Reviews",
            url: "#testimonials"
        }
    ],
    email: 'hello@bloomaestheticsspa.com',
    telephone: '+1 (701) 555-0147',
    socials: {
        facebook: 'https://facebook.com',
        instagram: 'https://www.instagram.com',
    }
}
