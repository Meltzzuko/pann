import { ax } from '../config'
import { IRepository } from "./IRepository";
import Announcement from '../models/Announcement';
import config from '../config';

export interface AnnouncementFilter {
    keyword?: string
}

export class AnnouncementRepository implements IRepository<Announcement> {
    urlPrefix = config.remoteRepositoryUrlPrefix

    async getAll(filter: AnnouncementFilter): Promise<Announcement[] | null> {
        const params = {...filter}
        const resq = await ax.get<Announcement[]>(`${this.urlPrefix}/announcement`, { params })

        return resq.data
    }    
}
