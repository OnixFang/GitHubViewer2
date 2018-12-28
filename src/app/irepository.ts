import { IGitHubUser } from './igit-hub-user';

export interface IRepository {
    name: string;
    stargazers_count: number;
    language: string;
    openissues: number;
    contributors: IGitHubUser[];    
}
