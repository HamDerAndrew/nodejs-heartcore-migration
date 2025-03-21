export interface TVShow {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    premiered: string;
    officialSite: string | null;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number | null;
    };
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      } | null;
      officialSite: string | null;
    } | null;
    webChannel: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      } | null;
      officialSite: string | null;
    } | null;
    externals: {
      tvrage: number | null;
      thetvdb: number | null;
      imdb: string | null;
    };
    image: {
      medium: string;
      original: string;
    } | null;
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode?: {
        href: string;
      };
      [key: string]: any;
    };
  }
  
  export type TVShowsResponse = TVShow[];
  