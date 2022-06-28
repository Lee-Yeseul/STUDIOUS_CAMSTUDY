import 'dotenv/config';
import { httpsServer } from './src/app';

const PORT = process.env.SERVER_PORT || 5000;

httpsServer.listen(PORT, () => {
    console.log(`정상적으로 서버를 시작하였습니다.  https://localhost:${PORT}`);
});
