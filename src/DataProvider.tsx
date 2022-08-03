import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { useQuery } from 'graphql-hooks';
import { query } from './containers/api/query';
import { reduceHyphenses } from './components/helpers';
import { labelsENG } from './assets/labelsENG';
import { labelsPL } from './assets/labelsPL';
import { languageLabel } from './assets/language';
import RouteProvider from './RouteProvider';

type Language = {
  lang: string;
  setLang: Dispatch<SetStateAction<Language>>;
};

export interface ApiInterface {
  commingSoon: string;
  cover: { url: string };
  dateNext: boolean | number;
  id: string;
  name: string;
  part: boolean | number;
  platform: string;
  progress: string;
  releaseYear: number;
  videoType?: string;
  when: string;
  wiki: string;
}

export interface LabelsInterface {
  navSeries: string;
  navHome: string;
  navVideo: string;
  navGames: string;
  navCurrent: string;
  navCatchUp: string;
  navCommingSoon: string;
  navFinished: string;
  modalNoWiki: string;
  modalCloseButton: string;
  modalReleased: string;
  modalSeenAt: string;
  itemPart: string;
  itemSeason: string;
  footerCopyRights: string;
  footerHere: string;
  error404: string;
  errorDescribtion: string;
  posterText: string;
  shelfSeen: string;
}

const initialState: Language = {
  lang: languageLabel.eng,
  setLang: (): void => {}
};

const labelInitialState: {} = {
  labels: {},
  setLang: (): void => {}
};

export const ApiContext: any = createContext('');
export const LanguageContext = createContext(labelInitialState);

const DataProvider = () => {
  const [lang, setLang] = useState<Language>(initialState);
  const isLanguageEng: boolean = (lang as any) === 'ENG';
  const labels = isLanguageEng ? labelsENG : labelsPL;

  const { loading, error, data } = useQuery(query, {
    variables: {
      limit: 10
    }
  });

  if (loading) return 'Loading, please wait...';
  if (error) return 'Something Bad Happened';

  const initialGamesApi = data.allGames;
  const initinalVideoApi = data.allVideos;
  const gamesApi: ApiInterface[] = reduceHyphenses(initialGamesApi);
  const videoApi: ApiInterface[] = reduceHyphenses(initinalVideoApi);

  return (
    <ApiContext.Provider value={{ gamesApi, videoApi }}>
      <LanguageContext.Provider value={{ labels, setLang }}>
        <RouteProvider />
      </LanguageContext.Provider>
    </ApiContext.Provider>
  );
};

export default DataProvider;
