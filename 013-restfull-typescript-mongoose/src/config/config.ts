import dotenv from 'dotenv';
dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME;
const PORT = process.env.PORT;

const SERVER ={
    hostname: SERVER_HOSTNAME,
    port: PORT
}

const config ={
    server: SERVER
}

export default config