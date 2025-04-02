export const config = {
    PORT : process.env.PORT || 3030,
    MONGO_PASSWORD : process.env.MONGO_PASSWORD,
    MONGO_DB : process.env.MONGO_DB,
    JWT_SECRET: process.env.JWT_SECRET || "secreto_brr"

}