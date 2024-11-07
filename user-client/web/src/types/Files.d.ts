declare type FileType = 'image' | 'video' | 'audio' | 'txt' | 'zip' | 'pdf' | 'excel' | 'word' | 'ppt' | 'unknown'

declare interface File {
  name: string,
  type: FileType,
  size: number,
  createdTime: Date,
  endTime: Date,
}

declare type FileList = File[]



export {
  FileType,
  File,
  FileList
}

