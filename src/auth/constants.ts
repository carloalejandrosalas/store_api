import { JwtModuleAsyncOptions } from "@nestjs/jwt";

export const jwtConstants: JwtModuleAsyncOptions = {
    useFactory: () => ({
        secret: process.env.AUTH_SECRET,
        signOptions: {
            expiresIn: process.env.AUTH_EXPIRATION
        }
    })
};