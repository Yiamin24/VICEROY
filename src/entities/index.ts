/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: amenities
 * Interface for Amenities
 */
export interface Amenities {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  amenityName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  amenityImage?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  location?: string;
  /** @wixFieldType boolean */
  bookingRequired?: boolean;
}


/**
 * Collection ID: inquiries
 * Interface for Inquiries
 */
export interface Inquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  fullName?: string;
  /** @wixFieldType text */
  emailAddress?: string;
  /** @wixFieldType text */
  phoneNumber?: string;
  /** @wixFieldType text */
  message?: string;
  /** @wixFieldType text */
  villaOfInterest?: string;
  /** @wixFieldType datetime */
  submissionDate?: Date | string;
}


/**
 * Collection ID: villas
 * Interface for Villas
 */
export interface Villas {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  villaName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  mainImage?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  galleryImages?: string;
  /** @wixFieldType text */
  architectureDetails?: string;
  /** @wixFieldType text */
  specifications?: string;
  /** @wixFieldType text */
  description?: string;
}
