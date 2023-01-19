import Announcement from "./Announcement"

export enum ResultType{
    NEGATIVE = -1,
    POSITIVE = 1,
    NORMAL = 0,
}

export default interface UserResult{
    id: number
    announcement: Partial<Announcement>
    result: string
    resultType: ResultType
    remark: string
    isPinned: boolean
    viewDateTime: Date | Date
    ackDateTime: Date | Date
    updateDateTime: Date | Date
    expireDateTime: Date | Date
    userCode: string
    _updated?: boolean
    _deleted?: boolean
  }
  