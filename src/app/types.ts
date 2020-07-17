//Courtesy: http://www.jsontots.com/ --> convert JSON to ts format
export interface Activity { //export type is used because we can use interface "Activity" in any our module of our application
    id: string;
    video_url: string;
    name: string;
    description: string;
    duration: string;
    created_by: string;
    image: string;
    thumbnail: string;
    cropped: string;
    file_name_original: string;
    popularity: string;
    category_id: string;
    category: string;
    keywords: string;
  }