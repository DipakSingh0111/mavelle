export interface GlobalBrand {
  name: string;
  subtitle: string;
  tagline: string;
}

export interface GlobalLogo {
  src: string;
  fallback?: string;
}

export interface GlobalContact {
  address: string;
  phone: string;
  email: string;
  hoursDays: string;
  hoursTime: string;
}

export interface GlobalSocial {
  name: string;
  url: string;
  icon: string;
}

export interface GlobalData {
  companyName: string;
  brand: GlobalBrand;
  logo: GlobalLogo;
  whiteLogo: { src: string };
  contact: GlobalContact;
  socials: GlobalSocial[];
}

export interface HeaderMenuItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderData {
  logo: GlobalLogo;
  menu: HeaderMenuItem[];
  cta: {
    label: string;
    href: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SinglePageBannerData {
  title: string;
  breadcrumb: BreadcrumbItem[];
  backgroundImage: string;
}

export interface PageBannersData {
  pages: {
    menu: SinglePageBannerData;
    about: SinglePageBannerData;
    chefs: SinglePageBannerData;
    gallery: SinglePageBannerData;
    testimonials: SinglePageBannerData;
    contact: SinglePageBannerData;
    reservation: SinglePageBannerData;
    blog: SinglePageBannerData;
    blogDetail: SinglePageBannerData;
  };
}

export interface HeroBannerData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  backgroundImage: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface FeaturesData {
  list: FeatureItem[];
}

export interface MenuCategoryCard {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface MenuSectionCategory {
  id: string;
  heading: {
    main: string;
    highlight?: string;
  };
  subtitle: string;
  list: MenuItem[];
}

export interface MenuData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  cta: {
    label: string;
  };
  list: MenuCategoryCard[];
  page: {
    intro: {
      badge: string;
      heading: {
        main: string;
        highlight: string;
      };
      description: string;
      highlights: string[];
    };
    sections: MenuSectionCategory[];
  };
}

export interface AboutFeatureItem {
  id: number;
  title: string;
  icon: string;
}

export interface AboutUsData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  list: AboutFeatureItem[];
  cta: {
    label: string;
    href?: string;
  };
  images: {
    main: string;
    secondary: string;
  };
  page: {
    paragraphs: string[];
  };
}

export interface ReservationPlanVisit {
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  image: string;
  location: {
    title: string;
    line1: string;
    line2: string;
  };
  hours: {
    title: string;
    line1: string;
    line2: string;
    line3: string;
  };
  help: {
    title: string;
    phone1: string;
    phone2: string;
  };
}

export interface ReservationBannerData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  cta: {
    label: string;
    href?: string;
  };
  backgroundImage: string;
  page: {
    booking: {
      heading: {
        main: string;
        highlight: string;
      };
      description: string;
      image: string;
      cardTitle: string;
      cardDescription: string;
      buttonText: string;
    };
    list: FeatureItem[];
    planVisit: ReservationPlanVisit;
  };
}

export interface ChefItem {
  id: number;
  name: string;
  role: string;
  signature?: string;
  bio: string;
  image: string;
  alt: string;
}

export interface ChefsData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  list: ChefItem[];
  page: {
    list: ChefItem[];
  };
}

export interface GalleryImageItem {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface GalleryData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  featured: GalleryImageItem;
  topRow: GalleryImageItem[];
  bottomRow: GalleryImageItem[];
  page: {
    list: GalleryImageItem[];
  };
}

export interface TestimonialItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  avatar: string;
  review: string;
}

export interface TestimonialsData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  list: TestimonialItem[];
  page: {
    list: TestimonialItem[];
  };
}

export interface BlogItem {
  id: number;
  date: {
    day: string;
    monthYear: string;
  };
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  link: string;
}

export interface BlogDetailSection {
  heading: string;
  content: string;
}

export interface BlogDetailData {
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  meta: {
    date: string;
    author: string;
    readTime: string;
  };
  mainImage: {
    src: string;
    alt: string;
  };
  leadParagraph: string;
  sections: BlogDetailSection[];
  quote: {
    text: string;
    author: string;
  };
}

export interface BlogNewsData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  list: BlogItem[];
  page: {
    list: BlogItem[];
  };
  details: BlogDetailData;
}

export interface ContactInfoItem {
  id: string;
  title: string;
  lines: string[];
}

export interface ContactPageData {
  info: {
    heading: {
      main: string;
      highlight: string;
    };
    description: string;
    list: ContactInfoItem[];
  };
  form: {
    heading: {
      main: string;
      highlight: string;
    };
    description: string;
    subjects: string[];
    buttonText: string;
  };
  map: {
    title: string;
    description: string;
    buttonText: string;
    directionsUrl: string;
  };
}

export interface FooterSocialItem {
  id: string;
  name: string;
  icon: string;
  href: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterData {
  logo: {
    src: string;
  };
  description: string;
  socials: FooterSocialItem[];
  quickLinks: FooterLinkItem[];
  menuLinks: FooterLinkItem[];
  visit: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
    cta: {
      label: string;
      href: string;
    };
  };
  copyright: string;
}

export interface MavelleSections {
  Global?: { variants: { MavelleGlobal1: GlobalData } };
  Header?: { variants: { MavelleHeader1: HeaderData } };
  PageBanners?: { variants: { MavellePageBanners1: PageBannersData } };
  HeroBanner?: { variants: { MavelleHeroBanner1: HeroBannerData } };
  Features?: { variants: { MavelleFeatures1: FeaturesData } };
  Menu?: { variants: { MavelleMenu1: MenuData } };
  AboutUs?: { variants: { MavelleAboutUs1: AboutUsData } };
  ReservationBanner?: { variants: { MavelleReservationBanner1: ReservationBannerData } };
  Chefs?: { variants: { MavelleChefs1: ChefsData } };
  Gallery?: { variants: { MavelleGallery1: GalleryData } };
  Testimonials?: { variants: { MavelleTestimonials1: TestimonialsData } };
  BlogNews?: { variants: { MavelleBlogNews1: BlogNewsData } };
  ContactPage?: { variants: { MavelleContactPage1: ContactPageData } };
  Footer?: { variants: { MavelleFooter1: FooterData } };
}

import rawJsonData from "@/data/mavelle.json";

export interface MavelleTemplateData {
  categories: {
    Mavelle: {
      templateComponents: any;
      sections: MavelleSections;
    };
  };
}

// Single centralized data source exported from types
export const mavelleData = rawJsonData as unknown as MavelleTemplateData;
export const sectionsData = mavelleData.categories.Mavelle.sections;


// ==========================================
// Component Section Props
// ==========================================

export interface HeroSectionProps {
  data?: HeroBannerData;
}

export interface FeaturesSectionProps {
  data?: FeaturesData;
}

export interface MenuSectionProps {
  data?: MenuData;
}

export interface MenuIntroSectionProps {
  data?: MenuData["page"]["intro"];
}

export interface MenuCategoriesSectionProps {
  data?: MenuSectionCategory[];
}

export interface AboutSectionProps {
  data?: AboutUsData;
}

export interface ReservationBannerSectionProps {
  data?: ReservationBannerData;
}

export interface ReservationFormSectionProps {
  data?: ReservationBannerData["page"]["booking"];
}

export interface ReservationFeaturesSectionProps {
  data?: FeatureItem[];
}

export interface PlanVisitSectionProps {
  data?: ReservationPlanVisit;
}

export interface ChefsSectionProps {
  data?: ChefsData;
}

export interface GallerySectionProps {
  data?: GalleryData;
}

export interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export interface BlogNewsSectionProps {
  data?: BlogNewsData;
}

export interface BlogDetailSectionProps {
  data?: BlogDetailData;
}

export interface ContactSectionProps {
  data?: ContactPageData;
}

export interface ContactMapSectionProps {
  data?: ContactPageData["map"];
}

export interface NavbarSectionProps {
  data?: HeaderData;
}

export interface FooterSectionProps {
  data?: FooterData;
  globalData?: GlobalData;
}

export interface PageBannerSectionProps {
  title: string;
  breadcrumb?: BreadcrumbItem[];
  breadcrumbText?: string;
  backgroundImage?: string;
}

export interface SectionProps {
  Hero: HeroSectionProps;
  Features: FeaturesSectionProps;
  Menu: MenuSectionProps;
  MenuIntro: MenuIntroSectionProps;
  MenuCategories: MenuCategoriesSectionProps;
  About: AboutSectionProps;
  ReservationBanner: ReservationBannerSectionProps;
  ReservationForm: ReservationFormSectionProps;
  ReservationFeatures: ReservationFeaturesSectionProps;
  PlanVisit: PlanVisitSectionProps;
  Chefs: ChefsSectionProps;
  Gallery: GallerySectionProps;
  Testimonials: TestimonialsSectionProps;
  BlogNews: BlogNewsSectionProps;
  BlogDetail: BlogDetailSectionProps;
  Contact: ContactSectionProps;
  ContactMap: ContactMapSectionProps;
  Navbar: NavbarSectionProps;
  Footer: FooterSectionProps;
  PageBanner: PageBannerSectionProps;
}
