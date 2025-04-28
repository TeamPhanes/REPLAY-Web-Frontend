import fs from 'fs';
import path from 'path';

const envMode = process.env.ENV_MODE || 'replay';
const envFile = path.resolve(process.cwd(), `.env.${envMode}`);

if (fs.existsSync(envFile)) {
  const dotenv = await import('dotenv');
  const result = dotenv.config({ path: envFile });

  if (result.error) {
    console.error('❌ dotenv load error:', result.error);
  } else {
    console.log(`✅ Loaded ${envFile}`);
  }
} else {
  console.warn(`⚠️ ${envFile} 파일이 존재하지 않습니다.`);
}

// NEXT_PUBLIC_으로 시작하는 환경변수만 자동 수집
const publicEnv = {};
for (const key of Object.keys(process.env)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    publicEnv[key] = process.env[key];
  }
}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xdungeon.net',
      },
      {
        protocol: 'https',
        hostname: 'i.namu.wiki',
      },
    ],
  },
  env: publicEnv,
};

export default nextConfig;
