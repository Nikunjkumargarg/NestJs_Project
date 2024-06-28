import { Controller, Module, Get } from "@nestjs/common";
@Controller("/app")
export class AppController {
  @Get("/dfsgsdfh")
  getRootRoute() {
    return "Hi there!";
  }
  @Get("/nikunj")
  getByeThere() {
    return "By there!";
  }
}
