import { Injectable } from "@nestjs/common";


@Injectable()
export class TagService {
    getAll(){
        return ["AI", "TypeScript", "Backend", "NestJS"];
    }
}