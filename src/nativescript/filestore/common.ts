import { File } from 'tns-core-modules/file-system';
import { KinveyError } from '../../core/errors';
import { FileStore as CoreFileStore } from '../../core/files';

export interface FileMetadata {
  _id?: string;
  _filename?: string;
  _public?: boolean;
  mimeType?: string;
  size?: number;
}

export interface FileUploadRequestOptions {
  count: number;
  start: number;
  timeout: number;
  maxBackoff: number;
  headers: { [key: string]: string };
}

export class CommonFileStore extends CoreFileStore {
  upload(file: File, metadata: any, options: any);
  upload(filePath: string, metadata: any, options: any);
  upload(filePath: string | File, metadata = <any>{}, options: any) {
    if (!this.doesFileExist(filePath)) {
      return Promise.reject(new KinveyError('File does not exist'));
    }

    metadata = Object.assign({ size: this.getFileSize(filePath) }, metadata);
    return super.upload(filePath, metadata, options);
  }

  protected doesFileExist(file: string | File): boolean {
    const filePath = file instanceof File ? file.path : file;
    return File.exists(filePath);
  }

  protected getFileSize(file: string | File): number {
    if (!(file instanceof File)) {
      file = File.fromPath(file);
    }
    const content = file.readSync();
    return content.length;
  }
}
