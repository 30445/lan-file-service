import express from "express"
import {StaticDirectory} from "@/types/EnumConfig.ts";

declare module "express-serve-static-core" {
  interface Request {
    __config: Config
  }
}

export interface Config extends CustomObject {
  port: number,
  db: CustomObject,
  directory: ConfigDirectory,
}

export type CustomObject = {
  [key: string]: any
}

export interface ConfigDirectory extends CustomObject {
  root: string,
  dirEnum: StaticDirectory
}
