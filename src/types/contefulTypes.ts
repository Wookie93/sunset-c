
export type ContentfulButton = {
  textOnButton: string;
  linkTo: {
    slug: string;
  };
  isSecondary: boolean;
  isPrimaryBlack: boolean;
};

export type ContentfulImage = {
  url: string;
  width?: number;
  height?: number;
  title: string;
};

export type ContentfulParagraph = {
  sys:{
    id:string
  }
  title: string;
  description: string;
  image: {
    url: string;
    title: string
  };
};
export type ContentfulLongText = {
  sys:{
    id:string
  }
  title: string;
  description: string;
};

export type ContentfulContactSection = {
  title: string;
  subtitle: string;
  contactDataCollection: {
    items:{
      title: string;
      subtitle: string;
      linkText: string;
    }[]
  };
  image: ContentfulImage;
  contactButton: ContentfulButton;
};

export type ContenfulNavigationLink = {
  sys:{
    id:string;
  }
  name:string;
  linkTo:{
    __typename: string; 
    slug: string;
    pageName: string
  }
}

export type ContenfulNavigationLinks = {
  navigationLinks: ContenfulNavigationLink[]
}

export type ContentfulFooter = {
  footerData:{
    privacePolicy: string | null;
    copywright: string;
    socials: {
      facebook: string;
      instagram: string;
    }
  }
}

export type ContenfulHeaderModuleItem = {
  textOnButton: string;
  isSecondary: boolean;
  isPrimaryBlack: boolean;
  linkTo: {
    slug: string;
  }
}


export interface GlobalInterface {
  header:{
    logo:{
      url: string;
    }
    logoDark:{
      url: string;
    }
    modulesCollection:{
      items: ContenfulHeaderModuleItem[];
    }
  }
  navigation: {
    menuItemCollection:{
      items:ContenfulNavigationLink[]
    }
  }
  footer:{
    privacePolicy: string | null;
    copywright: string;
    socials: {
      facebook: string;
      instagram: string;
    }
  }
}

export interface HomepageResponse {
  homepage: any
}
export interface AboutResponse{
  page: any
}
export interface PricingPageResponse{
  page: any
}
export interface NeighborhoodResponse{
  page: any
}
export interface ContactPageResponse{
  page: any
}
export interface GalleryResponse{
  galleryCollection: any
}
export interface AllGalleryResponse{
  galleryCollection: any
}