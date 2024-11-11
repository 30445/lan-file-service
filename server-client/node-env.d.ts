import express from "express"

declare module "express-serve-static-core" {
  interface Request {
    __config: any
  }
}

